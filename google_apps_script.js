/**
 * =========================================================================
 * MEDIPIEL - DESAFÍO DE LIDERAZGO
 * BACKEND EN GOOGLE APPS SCRIPT (Google Sheets)
 * =========================================================================
 * 
 * Este script actúa como API Web (Web App) para recibir en tiempo real
 * las respuestas y reflexiones de los líderes de Medipiel y almacenarlas
 * en una hoja de cálculo en Google Drive.
 * 
 * INSTRUCCIONES RÁPIDAS DE INSTALACIÓN:
 * 1. Crea una Hoja de Cálculo en Google Drive: "Desafío de Liderazgo - Medipiel"
 * 2. En el menú superior, ve a: Extensiones -> Apps Script
 * 3. Borra todo el código que aparezca y pega este archivo completo.
 * 4. Guarda con Ctrl + S (o el ícono del disquete).
 * 5. Clic en el botón azul "Implementar" (Deploy) -> "Nueva implementación".
 * 6. En el engranaje "Seleccionar tipo", elige "Aplicación web" (Web app).
 * 7. Configuración de la implementación:
 *    - Descripción: "API Desafío Medipiel v1"
 *    - Ejecutar como: "Yo" (tu cuenta de Google)
 *    - Quién tiene acceso: "Cualquier usuario" (Anyone) -> ¡IMPORTANTE!
 * 8. Clic en "Implementar", autoriza los permisos requeridos.
 * 9. Copia la "URL de la aplicación web" generada (termina en /exec)
 *    y pégala en el Portal Admin o en google_sheets_config.js.
 * =========================================================================
 */

const SHEET_NAME = "Respuestas Participantes";

/**
 * Encabezados de la Hoja de Cálculo
 */
const HEADERS = [
  "ID Participante",
  "Nombre Completo",
  "Fecha Inicio",
  "Última Actividad",
  "Días Completados",
  "Progreso (%)",
  "Estado",
  // Día 1
  "D1_C1", "D1_C2", "D1_C3", "Reflexión Día 1",
  // Día 2
  "D2_C1", "D2_C2", "D2_C3", "Reflexión Día 2",
  // Día 3
  "D3_C1", "D3_C2", "D3_C3", "Reflexión Día 3",
  // Día 4
  "D4_C1", "D4_C2", "D4_C3", "Reflexión Día 4",
  // Día 5
  "D5_C1", "D5_C2", "D5_C3", "Reflexión Día 5"
];

/**
 * Obtiene o crea la hoja de cálculo con los encabezados correspondientes.
 */
function getOrCreateSheet() {
  const ss = SpreadsheetApp.getActiveSpreadsheet();
  let sheet = ss.getSheetByName(SHEET_NAME);
  
  if (!sheet) {
    sheet = ss.insertSheet(SHEET_NAME);
    sheet.appendRow(HEADERS);
    formatHeaders(sheet);
  } else if (sheet.getLastRow() === 0) {
    sheet.appendRow(HEADERS);
    formatHeaders(sheet);
  }
  
  return sheet;
}

/**
 * Aplica diseño corporativo de Medipiel a la fila de encabezados.
 */
function formatHeaders(sheet) {
  const headerRange = sheet.getRange(1, 1, 1, HEADERS.length);
  headerRange.setBackground("#0e314c");
  headerRange.setFontColor("#ffffff");
  headerRange.setFontWeight("bold");
  headerRange.setFontSize(10);
  headerRange.setHorizontalAlignment("center");
  headerRange.setVerticalAlignment("middle");
  
  sheet.setFrozenRows(1);
  sheet.setRowHeight(1, 38);
  
  for (let i = 1; i <= HEADERS.length; i++) {
    sheet.setColumnWidth(i, i === 2 ? 220 : (i >= 8 && i % 4 === 3 ? 320 : 120));
  }
}

/**
 * Función manual para inicializar la hoja desde el editor de Apps Script.
 */
function setupSheet() {
  const sheet = getOrCreateSheet();
  formatHeaders(sheet);
  SpreadsheetApp.getUi().alert("Hoja inicializada con formato Medipiel exitosamente.");
}

/**
 * Maneja peticiones HTTP POST (Guardar/Sincronizar participante o Eliminar)
 */
function doPost(e) {
  try {
    let payload;
    if (e && e.postData && e.postData.contents) {
      payload = JSON.parse(e.postData.contents);
    } else if (e && e.parameter && e.parameter.data) {
      payload = JSON.parse(e.parameter.data);
    } else {
      payload = e.parameter || {};
    }

    // Acción para eliminar participante desde el portal administrador
    if (payload.action === "delete_participant") {
      const result = deleteParticipantRecord(payload);
      return createJsonResponse({
        status: "success",
        message: "Participante eliminado correctamente de Google Sheets",
        data: result
      });
    }

    const result = saveParticipantRecord(payload);
    return createJsonResponse({
      status: "success",
      message: "Registro guardado correctamente en Google Sheets",
      data: result
    });
  } catch (err) {
    return createJsonResponse({
      status: "error",
      message: err.toString()
    });
  }
}

/**
 * Maneja peticiones HTTP GET (Consulta desde el Portal Admin, Ping de prueba o Eliminar)
 */
function doGet(e) {
  try {
    const action = e && e.parameter ? e.parameter.action : null;
    
    // Ping de prueba de conexión
    if (action === "ping") {
      return createJsonResponse({
        status: "success",
        message: "Conexión exitosa con Google Sheets de Medipiel",
        timestamp: new Date().toISOString()
      });
    }

    // Eliminar participante vía GET (soporte directo sin bloqueos CORS)
    if (action === "delete_participant") {
      const result = deleteParticipantRecord({
        id: e.parameter.id,
        fullName: e.parameter.fullName || e.parameter.name
      });
      return createJsonResponse({
        status: "success",
        message: "Participante eliminado correctamente de Google Sheets",
        data: result
      });
    }

    // Retorna todos los participantes para el Portal Admin
    const participants = getAllParticipants();
    return createJsonResponse({
      status: "success",
      count: participants.length,
      participants: participants
    });
  } catch (err) {
    return createJsonResponse({
      status: "error",
      message: err.toString()
    });
  }
}

/**
 * Elimina las filas asociadas a un participante en la hoja de cálculo.
 */
function deleteParticipantRecord(data) {
  const sheet = getOrCreateSheet();
  const lastRow = sheet.getLastRow();
  if (lastRow <= 1) return { deleted: false, count: 0 };

  let targetId = "";
  let targetName = "";
  if (typeof data === "object" && data !== null) {
    targetId = String(data.id || "").trim();
    targetName = String(data.fullName || data.name || "").trim().toLowerCase();
  } else if (typeof data === "string") {
    targetId = data.trim();
  }

  const existingData = sheet.getRange(2, 1, lastRow - 1, 2).getValues();
  let deletedCount = 0;

  // Recorrer de abajo hacia arriba para mantener los números de fila estables
  for (let r = existingData.length - 1; r >= 0; r--) {
    const rowId = String(existingData[r][0]).trim();
    const rowName = String(existingData[r][1]).trim().toLowerCase();

    const matchesId = targetId && (rowId === targetId || rowId.includes(targetId) || targetId.includes(rowId));
    const matchesName = targetName && (rowName === targetName);

    if (matchesId || matchesName) {
      sheet.deleteRow(r + 2);
      deletedCount++;
    }
  }

  return {
    deleted: deletedCount > 0,
    count: deletedCount,
    id: targetId,
    name: targetName
  };
}

/**
 * Inserta o actualiza un registro de participante en la hoja de cálculo.
 */
function saveParticipantRecord(data) {
  if (!data || !data.fullName) {
    throw new Error("El nombre completo del participante es requerido");
  }

  const sheet = getOrCreateSheet();
  const lastRow = sheet.getLastRow();
  
  const participantId = data.id || `part_${Date.now()}`;
  const fullName = String(data.fullName).trim();
  const startedAt = data.startedAt || new Date().toISOString();
  const updatedAt = new Date().toISOString();
  
  const completedDays = Array.isArray(data.completedDays) ? data.completedDays : [];
  const completedCount = completedDays.length;
  const progressPercent = Math.min(100, Math.round((completedCount / 5) * 100));
  const status = completedCount >= 5 ? "Completado" : "En Progreso";
  const completedDaysLabel = completedDays.length > 0 ? `Días ${completedDays.join(", ")} (${completedCount}/5)` : "0/5";
  
  const answers = data.answers || {};
  const reflections = data.reflections || {};

  const rowValues = [
    participantId,
    fullName,
    startedAt,
    updatedAt,
    completedDaysLabel,
    `${progressPercent}%`,
    status,
    // Día 1
    answers["d1_c1"] || "",
    answers["d1_c2"] || "",
    answers["d1_c3"] || "",
    reflections["1"] || reflections[1] || "",
    // Día 2
    answers["d2_c1"] || "",
    answers["d2_c2"] || "",
    answers["d2_c3"] || "",
    reflections["2"] || reflections[2] || "",
    // Día 3
    answers["d3_c1"] || "",
    answers["d3_c2"] || "",
    answers["d3_c3"] || "",
    reflections["3"] || reflections[3] || "",
    // Día 4
    answers["d4_c1"] || "",
    answers["d4_c2"] || "",
    answers["d4_c3"] || "",
    reflections["4"] || reflections[4] || "",
    // Día 5
    answers["d5_c1"] || "",
    answers["d5_c2"] || "",
    answers["d5_c3"] || "",
    reflections["5"] || reflections[5] || ""
  ];

  let targetRow = -1;

  if (lastRow > 1) {
    const existingIds = sheet.getRange(2, 1, lastRow - 1, 2).getValues();
    for (let r = 0; r < existingIds.length; r++) {
      const rowId = String(existingIds[r][0]).trim();
      const rowName = String(existingIds[r][1]).trim().toLowerCase();
      
      if (rowId === participantId || rowName === fullName.toLowerCase()) {
        targetRow = r + 2;
        break;
      }
    }
  }

  if (targetRow > 0) {
    const currentStartedAt = sheet.getRange(targetRow, 3).getValue();
    if (currentStartedAt) {
      rowValues[2] = currentStartedAt;
    }
    sheet.getRange(targetRow, 1, 1, rowValues.length).setValues([rowValues]);
  } else {
    sheet.appendRow(rowValues);
    targetRow = sheet.getLastRow();
  }

  if (status === "Completado") {
    sheet.getRange(targetRow, 7).setBackground("#e6f9ed").setFontColor("#0e7039").setFontWeight("bold");
  } else {
    sheet.getRange(targetRow, 7).setBackground("#fff9db").setFontColor("#9c6500").setFontWeight("normal");
  }

  return {
    row: targetRow,
    id: participantId,
    fullName: fullName,
    status: status,
    progressPercent: progressPercent
  };
}

/**
 * Lee todos los participantes de la hoja y los estructura en formato JSON.
 */
function getAllParticipants() {
  const sheet = getOrCreateSheet();
  const lastRow = sheet.getLastRow();
  
  if (lastRow <= 1) {
    return [];
  }

  const range = sheet.getRange(2, 1, lastRow - 1, HEADERS.length);
  const values = range.getValues();
  const participants = [];

  for (let i = 0; i < values.length; i++) {
    const row = values[i];
    const fullName = String(row[1] || "").trim();
    if (!fullName) continue;

    const id = String(row[0] || `part_row_${i + 2}`);
    const startedAt = row[2] ? new Date(row[2]).toISOString() : new Date().toISOString();
    const updatedAt = row[3] ? new Date(row[3]).toISOString() : startedAt;
    
    const completedDaysStr = String(row[4] || "");
    const completedDays = [];
    for (let d = 1; d <= 5; d++) {
      if (completedDaysStr.includes(String(d))) {
        completedDays.push(d);
      }
    }

    const answers = {
      d1_c1: String(row[7] || ""),
      d1_c2: String(row[8] || ""),
      d1_c3: String(row[9] || ""),
      d2_c1: String(row[11] || ""),
      d2_c2: String(row[12] || ""),
      d2_c3: String(row[13] || ""),
      d3_c1: String(row[15] || ""),
      d3_c2: String(row[16] || ""),
      d3_c3: String(row[17] || ""),
      d4_c1: String(row[19] || ""),
      d4_c2: String(row[20] || ""),
      d4_c3: String(row[21] || ""),
      d5_c1: String(row[23] || ""),
      d5_c2: String(row[24] || ""),
      d5_c3: String(row[25] || "")
    };

    const reflections = {
      1: String(row[10] || ""),
      2: String(row[14] || ""),
      3: String(row[18] || ""),
      4: String(row[22] || ""),
      5: String(row[26] || "")
    };

    let unlockedDay = 1;
    if (completedDays.length > 0) {
      unlockedDay = Math.min(5, Math.max(...completedDays) + 1);
    }

    participants.push({
      id: id,
      fullName: fullName,
      startedAt: startedAt,
      updatedAt: updatedAt,
      completedDays: completedDays,
      unlockedDay: unlockedDay,
      answers: answers,
      reflections: reflections,
      source: "google_sheets"
    });
  }

  return participants;
}

/**
 * Genera una respuesta JSON con cabeceras para consumo web.
 */
function createJsonResponse(obj) {
  return ContentService.createTextOutput(JSON.stringify(obj))
    .setMimeType(ContentService.MimeType.JSON);
}
