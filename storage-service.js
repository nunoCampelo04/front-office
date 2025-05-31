// storage-service.js

const STORAGE_KEY = 'PROJECT_DATA_V1';

// 1) Estado em memória
let state;
try {
  state = JSON.parse(localStorage.getItem(STORAGE_KEY)) || { occurrences: [], audits: [] };
} catch (e) {
  console.error('Erro a fazer parse do localStorage:', e);
  state = { occurrences: [], audits: [] };
}

// 2) Persistência
function persist() {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
  } catch (e) {
    console.error('Erro ao gravar no localStorage:', e);
  }
}

// 3) Ocorrências
export function getOccurrences() {
  return state.occurrences;
}
export function addOccurrence(occ) {
  state.occurrences.push(occ);
  persist();
}
export function updateOccurrence(id, patch) {
  state.occurrences = state.occurrences.map(o =>
    o.id === id ? { ...o, ...patch } : o
  );
  persist();
}

// 4) Auditorias (mais tarde, se for preciso)
export function getAudits() {
  return state.audits;
}
export function addAudit(audit) {
  state.audits.push(audit);
  persist();
}
export function updateAudit(id, patch) {
  state.audits = state.audits.map(a =>
    a.id === id ? { ...a, ...patch } : a
  );
  persist();
}

// 5) Sincronização entre abas/janelas
window.addEventListener('storage', e => {
  if (e.key === STORAGE_KEY) {
    try {
      state = JSON.parse(e.newValue);
      document.dispatchEvent(new CustomEvent('storageUpdated', { detail: state }));
    } catch (err) {
      console.error('Erro ao sincronizar storage:', err);
    }
  }
});
