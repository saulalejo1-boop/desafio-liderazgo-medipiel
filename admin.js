/**
 * PORTAL ADMINISTRADOR - DESAFÍO DE LIDERAZGO MEDIPIEL
 * Script de Administración, Métricas y Exportación de Datos
 */

// Key Constants
const PARTICIPANTS_STORAGE_KEY = "medipiel_participants_registry";
const ADMIN_AUTH_KEY = "medipiel_admin_session_auth";

// Allowed admin credentials
const ADMIN_CREDENTIALS = [
  { user: "saul.munera", pass: "Medipiel2026*" },
  { user: "saul", pass: "Medipiel2026*" },
  { user: "admin", pass: "Medipiel2026*" },
  { user: "saul.munera", pass: "medipiel2026" },
  { user: "admin", pass: "medipiel2026" }
];

let allParticipants = [];
let currentFilter = "all"; // all | completed | progress
let searchQuery = "";
let participantToDeleteId = null;

// DOM Elements for Admin
const adminDom = {
  authGate: document.getElementById("admin-auth-gate"),
  dashboard: document.getElementById("admin-dashboard"),
  loginForm: document.getElementById("standalone-login-form"),
  usernameInput: document.getElementById("gate-username"),
  passwordInput: document.getElementById("gate-password"),
  errorMsg: document.getElementById("gate-error-msg"),
  btnLogout: document.getElementById("btn-admin-logout"),

  // Metrics
  metricTotal: document.getElementById("metric-total-users"),
  metricCompleted: document.getElementById("metric-completed-users"),
  metricInProgress: document.getElementById("metric-in-progress-users"),
  metricRate: document.getElementById("metric-completion-rate"),

  // Toolbar
  searchInput: document.getElementById("admin-search-input"),
  filterBtns: document.querySelectorAll(".filter-btn"),
  countFilterAll: document.getElementById("count-filter-all"),
  countFilterCompleted: document.getElementById("count-filter-completed"),
  countFilterProgress: document.getElementById("count-filter-progress"),
  btnExportExcel: document.getElementById("btn-export-excel-csv"),
  btnExportJson: document.getElementById("btn-export-json"),

  // Table
  tableBody: document.getElementById("participants-table-body"),
  emptyState: document.getElementById("table-empty-state"),

  // Detail Modal
  detailModal: document.getElementById("participant-detail-modal"),
  detailName: document.getElementById("detail-participant-name"),
  detailMeta: document.getElementById("detail-participant-meta"),
  detailBody: document.getElementById("detail-modal-body"),
  btnCloseDetail: document.getElementById("btn-close-detail"),
  btnCloseDetailFooter: document.getElementById("btn-close-detail-footer"),
  btnPrintDetail: document.getElementById("btn-print-participant-detail"),

  // Delete Modal
  deleteModal: document.getElementById("delete-confirm-modal"),
  deleteMsg: document.getElementById("delete-participant-msg"),
  btnConfirmDelete: document.getElementById("btn-confirm-delete"),
  btnCancelDelete: document.getElementById("btn-cancel-delete")
};

// =========================================================================
// 1. AUTHENTICATION
// =========================================================================
function checkAdminAuth() {
  const isAuth = sessionStorage.getItem(ADMIN_AUTH_KEY) === "true";
  if (isAuth) {
    adminDom.authGate.classList.add("hidden");
    adminDom.dashboard.classList.remove("hidden");
    loadAndRenderDashboard();
  } else {
    adminDom.authGate.classList.remove("hidden");
    adminDom.dashboard.classList.add("hidden");
  }
}

function handleAdminLogin(e) {
  e.preventDefault();
  const username = adminDom.usernameInput.value.trim().toLowerCase();
  const password = adminDom.passwordInput.value.trim();

  const match = ADMIN_CREDENTIALS.some(
    c => c.user.toLowerCase() === username && c.pass === password
  );

  if (match) {
    sessionStorage.setItem(ADMIN_AUTH_KEY, "true");
    adminDom.errorMsg.classList.add("hidden");
    checkAdminAuth();
  } else {
    adminDom.errorMsg.classList.remove("hidden");
  }
}

function handleAdminLogout() {
  sessionStorage.removeItem(ADMIN_AUTH_KEY);
  if (adminDom.usernameInput) adminDom.usernameInput.value = "";
  if (adminDom.passwordInput) adminDom.passwordInput.value = "";
  if (adminDom.errorMsg) adminDom.errorMsg.classList.add("hidden");
  checkAdminAuth();
  if (adminDom.usernameInput) {
    setTimeout(() => adminDom.usernameInput.focus(), 50);
  }
}

// =========================================================================
// 2. DATA LOADING & METRICS
// =========================================================================
function loadParticipantsData() {
  try {
    const raw = localStorage.getItem(PARTICIPANTS_STORAGE_KEY);
    if (raw) {
      allParticipants = JSON.parse(raw);
    } else {
      allParticipants = [];
    }

    // Also check if there's a standalone session from script.js to sync
    const activeRaw = localStorage.getItem("medipiel_desafio_liderazgo_v1");
    if (activeRaw) {
      const activeData = JSON.parse(activeRaw);
      if (activeData.fullName) {
        const existingIdx = allParticipants.findIndex(p => p.id === activeData.id || p.fullName.toLowerCase() === activeData.fullName.toLowerCase());
        if (existingIdx >= 0) {
          allParticipants[existingIdx] = { ...allParticipants[existingIdx], ...activeData };
        } else {
          allParticipants.push({
            id: activeData.id || `part_${Date.now()}`,
            fullName: activeData.fullName,
            startedAt: activeData.startedAt || new Date().toISOString(),
            updatedAt: new Date().toISOString(),
            completedDays: activeData.completedDays || [],
            unlockedDay: activeData.unlockedDay || 1,
            answers: activeData.answers || {},
            reflections: activeData.reflections || {}
          });
        }
        localStorage.setItem(PARTICIPANTS_STORAGE_KEY, JSON.stringify(allParticipants));
      }
    }
  } catch (e) {
    console.error("Error cargando participantes:", e);
    allParticipants = [];
  }
}

function loadAndRenderDashboard() {
  loadParticipantsData();
  renderMetrics();
  renderTable();
}

function renderMetrics() {
  const total = allParticipants.length;
  const completed = allParticipants.filter(p => (p.completedDays || []).length === 5).length;
  const inProgress = total - completed;
  const rate = total > 0 ? Math.round((completed / total) * 100) : 0;

  adminDom.metricTotal.textContent = total;
  adminDom.metricCompleted.textContent = completed;
  adminDom.metricInProgress.textContent = inProgress;
  adminDom.metricRate.textContent = `${rate}%`;

  adminDom.countFilterAll.textContent = total;
  adminDom.countFilterCompleted.textContent = completed;
  adminDom.countFilterProgress.textContent = inProgress;
}

// =========================================================================
// 3. TABLE RENDERING & FILTERING
// =========================================================================
function renderTable() {
  const filtered = allParticipants.filter(p => {
    // Search query filter
    const matchesSearch = !searchQuery || p.fullName.toLowerCase().includes(searchQuery.toLowerCase());
    
    // Status filter
    const isCompleted = (p.completedDays || []).length === 5;
    if (currentFilter === "completed") return matchesSearch && isCompleted;
    if (currentFilter === "progress") return matchesSearch && !isCompleted;
    return matchesSearch;
  });

  adminDom.tableBody.innerHTML = "";

  if (filtered.length === 0) {
    adminDom.emptyState.classList.remove("hidden");
    return;
  }

  adminDom.emptyState.classList.add("hidden");

  // Sort by updatedAt descending
  filtered.sort((a, b) => new Date(b.updatedAt || b.startedAt || 0) - new Date(a.updatedAt || a.startedAt || 0));

  filtered.forEach(p => {
    const completedCount = (p.completedDays || []).length;
    const percent = Math.round((completedCount / 5) * 100);
    const isCompleted = completedCount === 5;

    const startDateStr = formatDate(p.startedAt);
    const updateDateStr = formatDate(p.updatedAt || p.startedAt);

    const tr = document.createElement("tr");

    tr.innerHTML = `
      <td>
        <div class="participant-table-name">
          <div class="user-avatar-circle">${getInitials(p.fullName)}</div>
          <div>
            <strong>${escapeHtml(p.fullName)}</strong>
            <span class="table-id-sub">ID: ${p.id ? p.id.slice(-8) : 'N/A'}</span>
          </div>
        </div>
      </td>
      <td><span class="table-date">${startDateStr}</span></td>
      <td><span class="table-date">${updateDateStr}</span></td>
      <td>
        <div class="table-progress-wrap">
          <div class="table-progress-bar">
            <div class="table-progress-fill" style="width: ${percent}%;"></div>
          </div>
          <span class="table-progress-text">${completedCount} de 5 días (${percent}%)</span>
        </div>
      </td>
      <td>
        <span class="status-pill ${isCompleted ? 'status-finished' : 'status-in-progress'}">
          ${isCompleted ? 'Completado ✓' : 'En Progreso'}
        </span>
      </td>
      <td style="text-align: right;">
        <div class="table-actions">
          <button class="btn btn-secondary btn-icon btn-sm btn-view-user" data-id="${p.id}" title="Ver respuestas y reflexiones">
            <svg viewBox="0 0 24 24" width="16" height="16" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round">
              <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
              <circle cx="12" cy="12" r="3"></circle>
            </svg>
            <span>Ver Detalle</span>
          </button>
          <button class="btn-icon-danger btn-delete-user" data-id="${p.id}" data-name="${escapeHtml(p.fullName)}" title="Eliminar registro">
            <svg viewBox="0 0 24 24" width="16" height="16" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round">
              <polyline points="3 6 5 6 21 6"></polyline>
              <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path>
            </svg>
          </button>
        </div>
      </td>
    `;

    adminDom.tableBody.appendChild(tr);
  });

  // Attach row event listeners
  document.querySelectorAll(".btn-view-user").forEach(btn => {
    btn.addEventListener("click", () => {
      const id = btn.getAttribute("data-id");
      openParticipantDetail(id);
    });
  });

  document.querySelectorAll(".btn-delete-user").forEach(btn => {
    btn.addEventListener("click", () => {
      const id = btn.getAttribute("data-id");
      const name = btn.getAttribute("data-name");
      openDeleteModal(id, name);
    });
  });
}

function getInitials(name) {
  if (!name) return "L";
  const parts = name.trim().split(" ");
  if (parts.length >= 2) {
    return (parts[0][0] + parts[1][0]).toUpperCase();
  }
  return name.slice(0, 2).toUpperCase();
}

function formatDate(isoStr) {
  if (!isoStr) return "—";
  try {
    const d = new Date(isoStr);
    return d.toLocaleDateString("es-CO", {
      day: "2-digit",
      month: "short",
      year: "numeric",
      hour: "2-digit",
      minute: "2-digit"
    });
  } catch {
    return isoStr;
  }
}

// =========================================================================
// 4. PARTICIPANT DETAIL VIEW
// =========================================================================
function openParticipantDetail(participantId) {
  const p = allParticipants.find(item => item.id === participantId);
  if (!p) return;

  adminDom.detailName.textContent = p.fullName;
  const completedCount = (p.completedDays || []).length;
  adminDom.detailMeta.textContent = `Progreso: ${completedCount} de 5 días completados · Registrado: ${formatDate(p.startedAt)}`;

  adminDom.detailBody.innerHTML = "";

  challengeData.forEach(day => {
    const isDayCompleted = (p.completedDays || []).includes(day.day);
    const dayReflection = (p.reflections || {})[day.day] || "";

    const dayBlock = document.createElement("div");
    dayBlock.className = "summary-day-block";

    let casesHtml = "";
    day.cases.forEach(c => {
      const answerKey = `d${day.day}_c${c.caseNumber}`;
      const selectedLetter = (p.answers || {})[answerKey];

      let answerBadge = `<span style="color: #A0AEC0; font-style: italic;">Sin respuesta</span>`;
      let answerText = "";

      if (selectedLetter) {
        const opt = c.options.find(o => o.letter === selectedLetter);
        answerBadge = `<strong style="color: var(--petrol); background: var(--turquoise-light); padding: 2px 8px; border-radius: 9999px;">Opción ${selectedLetter}</strong>`;
        answerText = opt ? opt.text : "";
      }

      casesHtml += `
        <div class="summary-case-item">
          <div class="summary-case-title">Caso ${c.caseNumber}: ${c.title}</div>
          <div style="font-size: 0.95rem; margin-bottom: 4px;">
            ${answerBadge}
          </div>
          ${answerText ? `<div class="summary-case-answer" style="color: var(--gray-dark);">${answerText}</div>` : ''}
        </div>
      `;
    });

    let reflectionHtml = "";
    if (dayReflection) {
      reflectionHtml = `
        <div class="summary-reflection-box">
          <h5>💭 Reflexión escrita del participante:</h5>
          <div class="summary-reflection-text">“${escapeHtml(dayReflection)}”</div>
        </div>
      `;
    } else {
      reflectionHtml = `
        <div class="summary-reflection-box" style="background: #F7FAFC; border: 1px dashed #CBD5E0;">
          <h5 style="color: #718096;">💭 Reflexión del Día:</h5>
          <div class="summary-reflection-text" style="color: #A0AEC0;">Pendiente por responder</div>
        </div>
      `;
    }

    dayBlock.innerHTML = `
      <div class="summary-day-header">
        <h4>${day.title} — ${day.subtitle}</h4>
        <span class="status-pill ${isDayCompleted ? 'status-finished' : 'status-in-progress'}">
          ${isDayCompleted ? 'Completado ✓' : 'En progreso'}
        </span>
      </div>
      <div class="summary-cases-list">
        ${casesHtml}
      </div>
      ${reflectionHtml}
    `;

    adminDom.detailBody.appendChild(dayBlock);
  });

  adminDom.detailModal.classList.remove("hidden");
}

// =========================================================================
// 5. EXPORT TO CSV / EXCEL & JSON
// =========================================================================
function exportToExcelCSV() {
  if (allParticipants.length === 0) {
    alert("No hay participantes registrados para exportar.");
    return;
  }

  // Define comprehensive columns
  const headers = [
    "ID Participante",
    "Nombre Completo",
    "Fecha Registro",
    "Ultima Actividad",
    "Dias Completados",
    "Porcentaje Progreso",
    "Estado"
  ];

  // Add columns for each of the 15 cases and 5 reflections
  for (let d = 1; d <= 5; d++) {
    for (let c = 1; c <= 3; c++) {
      headers.push(`Dia ${d} Caso ${c} Opcion`);
      headers.push(`Dia ${d} Caso ${c} Texto Respuesta`);
    }
    headers.push(`Dia ${d} Reflexion Final`);
  }

  const rows = [];
  rows.push(headers.map(cleanCsvValue).join(";"));

  allParticipants.forEach(p => {
    const completedCount = (p.completedDays || []).length;
    const percent = Math.round((completedCount / 5) * 100);
    const status = completedCount === 5 ? "Completado" : "En Progreso";

    const rowData = [
      p.id || "",
      p.fullName || "",
      formatDate(p.startedAt),
      formatDate(p.updatedAt || p.startedAt),
      `${completedCount} de 5`,
      `${percent}%`,
      status
    ];

    // Populate the 15 cases and 5 reflections
    for (let d = 1; d <= 5; d++) {
      const dayData = challengeData.find(dayItem => dayItem.day === d);
      for (let c = 1; c <= 3; c++) {
        const key = `d${d}_c${c}`;
        const selectedLetter = (p.answers || {})[key] || "";
        let selectedText = "";
        if (selectedLetter && dayData) {
          const caseObj = dayData.cases.find(caseItem => caseItem.caseNumber === c);
          if (caseObj) {
            const opt = caseObj.options.find(o => o.letter === selectedLetter);
            if (opt) selectedText = opt.text;
          }
        }
        rowData.push(selectedLetter);
        rowData.push(selectedText);
      }
      const reflectionText = (p.reflections || {})[d] || "";
      rowData.push(reflectionText);
    }

    rows.push(rowData.map(cleanCsvValue).join(";"));
  });

  // UTF-8 BOM for Excel character compatibility
  const csvContent = "\uFEFF" + rows.join("\r\n");
  const blob = new Blob([csvContent], { type: "text/csv;charset=utf-8;" });
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");

  const todayStr = new Date().toISOString().slice(0, 10);
  link.setAttribute("href", url);
  link.setAttribute("download", `Reporte_Desafio_Liderazgo_Medipiel_${todayStr}.csv`);
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
}

function cleanCsvValue(val) {
  if (val === null || val === undefined) return '""';
  const str = String(val).replace(/"/g, '""').replace(/\r?\n/g, ' ');
  return `"${str}"`;
}

function exportToJsonBackup() {
  if (allParticipants.length === 0) {
    alert("No hay datos para exportar.");
    return;
  }

  const exportData = {
    exportedAt: new Date().toISOString(),
    totalParticipants: allParticipants.length,
    participants: allParticipants
  };

  const jsonStr = JSON.stringify(exportData, null, 2);
  const blob = new Blob([jsonStr], { type: "application/json;charset=utf-8;" });
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");

  const todayStr = new Date().toISOString().slice(0, 10);
  link.setAttribute("href", url);
  link.setAttribute("download", `Respaldo_Desafio_Liderazgo_Medipiel_${todayStr}.json`);
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
}

// =========================================================================
// 6. DELETE MODAL
// =========================================================================
function openDeleteModal(id, name) {
  participantToDeleteId = id;
  adminDom.deleteMsg.innerHTML = `¿Estás seguro de que deseas eliminar permanentemente el registro de <strong>${name}</strong>?`;
  adminDom.deleteModal.classList.remove("hidden");
}

function confirmDeleteParticipant() {
  if (!participantToDeleteId) return;

  allParticipants = allParticipants.filter(p => p.id !== participantToDeleteId);
  localStorage.setItem(PARTICIPANTS_STORAGE_KEY, JSON.stringify(allParticipants));

  adminDom.deleteModal.classList.add("hidden");
  participantToDeleteId = null;
  loadAndRenderDashboard();
}

// =========================================================================
// 7. EVENT LISTENERS
// =========================================================================
function initAdminEvents() {
  // Login
  adminDom.loginForm.addEventListener("submit", handleAdminLogin);
  adminDom.btnLogout.addEventListener("click", handleAdminLogout);

  // Search & Filter
  adminDom.searchInput.addEventListener("input", (e) => {
    searchQuery = e.target.value.trim();
    renderTable();
  });

  adminDom.filterBtns.forEach(btn => {
    btn.addEventListener("click", () => {
      adminDom.filterBtns.forEach(b => b.classList.remove("active"));
      btn.classList.add("active");
      currentFilter = btn.getAttribute("data-filter");
      renderTable();
    });
  });

  // Exports
  adminDom.btnExportExcel.addEventListener("click", exportToExcelCSV);
  adminDom.btnExportJson.addEventListener("click", exportToJsonBackup);

  // Detail Modal
  adminDom.btnCloseDetail.addEventListener("click", () => adminDom.detailModal.classList.add("hidden"));
  adminDom.btnCloseDetailFooter.addEventListener("click", () => adminDom.detailModal.classList.add("hidden"));
  adminDom.btnPrintDetail.addEventListener("click", () => window.print());

  // Delete Modal
  adminDom.btnCancelDelete.addEventListener("click", () => adminDom.deleteModal.classList.add("hidden"));
  adminDom.btnConfirmDelete.addEventListener("click", confirmDeleteParticipant);

  // Close modals on clicking overlay backdrop
  [adminDom.detailModal, adminDom.deleteModal].forEach(modal => {
    modal.addEventListener("click", (e) => {
      if (e.target === modal) modal.classList.add("hidden");
    });
  });
}

// Bootstrap Admin
document.addEventListener("DOMContentLoaded", () => {
  initAdminEvents();
  checkAdminAuth();
});
