/**
 * =========================================================================
 * MEDIPIEL - CONFIGURACIÓN DE CONEXIÓN CON GOOGLE SHEETS
 * =========================================================================
 * 
 * Permite conectar el Desafío de Liderazgo con una hoja de cálculo
 * de Google Sheets mediante Google Apps Script.
 */

window.GOOGLE_SHEETS_CONFIG = {
  // Puedes pegar aquí la URL de tu Web App de Google Apps Script (termina en /exec)
  // O bien configurarla directamente desde el Portal Administrador sin tocar código.
  DEFAULT_SCRIPT_URL: "",

  STORAGE_KEY: "medipiel_google_sheets_script_url",

  /**
   * Obtiene la URL activa (prioriza la configurada en el navegador del Admin, o la predeterminada).
   */
  getUrl: function() {
    try {
      const stored = localStorage.getItem(this.STORAGE_KEY);
      if (stored && stored.trim().startsWith("http")) {
        return stored.trim();
      }
    } catch (e) {}
    return this.DEFAULT_SCRIPT_URL ? this.DEFAULT_SCRIPT_URL.trim() : "";
  },

  /**
   * Guarda o actualiza la URL en el almacenamiento local.
   */
  setUrl: function(url) {
    try {
      if (url && typeof url === "string" && url.trim().startsWith("http")) {
        localStorage.setItem(this.STORAGE_KEY, url.trim());
        return true;
      } else {
        localStorage.removeItem(this.STORAGE_KEY);
        return false;
      }
    } catch (e) {
      console.error("Error guardando URL de Google Sheets:", e);
      return false;
    }
  },

  /**
   * Indica si hay una URL configurada.
   */
  isConfigured: function() {
    return !!this.getUrl();
  },

  /**
   * Envía los datos del participante a Google Sheets de manera asíncrona.
   */
  syncParticipant: async function(participantData) {
    const url = this.getUrl();
    if (!url) {
      return { success: false, reason: "not_configured" };
    }

    try {
      // Usar text/plain para evitar bloqueos por preflight CORS (OPTIONS)
      const response = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "text/plain;charset=utf-8"
        },
        body: JSON.stringify(participantData)
      });

      if (response.ok) {
        try {
          const json = await response.json();
          return { success: true, data: json };
        } catch (e) {
          return { success: true, note: "non_json_response" };
        }
      } else {
        return { success: false, status: response.status };
      }
    } catch (error) {
      console.warn("Aviso de sincronización en segundo plano con Google Sheets:", error);
      return { success: false, error: error.message };
    }
  },

  /**
   * Consulta todos los participantes guardados en Google Sheets.
   */
  fetchParticipants: async function() {
    const url = this.getUrl();
    if (!url) {
      throw new Error("No hay una URL de Google Sheets configurada.");
    }

    const fetchUrl = url + (url.includes("?") ? "&" : "?") + "_t=" + Date.now();
    const response = await fetch(fetchUrl);
    
    if (!response.ok) {
      throw new Error(`Error en el servidor de Google Sheets: HTTP ${response.status}`);
    }

    const data = await response.json();
    if (data && data.status === "success" && Array.isArray(data.participants)) {
      return data.participants;
    } else {
      throw new Error(data.message || "Respuesta inválida de Google Sheets");
    }
  },

  /**
   * Prueba la conexión con la Web App de Google Apps Script.
   */
  testConnection: async function(candidateUrl) {
    const targetUrl = candidateUrl || this.getUrl();
    if (!targetUrl) {
      throw new Error("Ingresa la URL de la Web App generada en Google Apps Script.");
    }

    const pingUrl = targetUrl + (targetUrl.includes("?") ? "&" : "?") + "action=ping&_t=" + Date.now();
    const response = await fetch(pingUrl);
    
    if (!response.ok) {
      throw new Error(`HTTP ${response.status}: El script no respondió.`);
    }

    const data = await response.json();
    if (data && data.status === "success") {
      return data;
    } else {
      throw new Error(data.message || "El script respondió con un estado no exitoso.");
    }
  }
};
