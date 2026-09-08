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
  DEFAULT_SCRIPT_URL: "https://script.google.com/macros/s/AKfycbzQEYmmHsDzmtHE2eGQ97L2s2qymV2puhtGVAULVwFDlwzwX1wJmmFjuApgXmxEhqM/exec",

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
   * Envía los datos del participante a Google Sheets de manera asíncrona y resiliente para móviles.
   */
  syncParticipant: async function(participantData, useBeacon = false) {
    const url = this.getUrl();
    if (!url) {
      return { success: false, reason: "not_configured" };
    }

    const payloadStr = JSON.stringify(participantData);

    // En móviles, al salir o cambiar de app, sendBeacon garantiza la transmisión
    if (useBeacon && navigator.sendBeacon) {
      try {
        const blob = new Blob([payloadStr], { type: "text/plain;charset=utf-8" });
        const queued = navigator.sendBeacon(url, blob);
        if (queued) return { success: true, method: "beacon" };
      } catch (e) {}
    }

    try {
      // Usar mode: "no-cors" para evitar que navegadores móviles (iOS Safari, Android Chrome)
      // bloqueen o aborten la petición por la redirección 302 hacia googleusercontent.com
      await fetch(url, {
        method: "POST",
        mode: "no-cors",
        headers: {
          "Content-Type": "text/plain;charset=utf-8"
        },
        body: payloadStr
      });

      return { success: true, method: "fetch" };
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
