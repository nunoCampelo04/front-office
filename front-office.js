// front-office.js
import { addOccurrence } from './storage-service.js';

document.addEventListener('DOMContentLoaded', () => {
  const form = document.querySelector('.formulario-ocorrencia');
  form.addEventListener('submit', e => {
    e.preventDefault();

    // 1) Recolher valores do form
    const data  = form.data.value;
    const local = form.localizacao.value;
    const tipo  = form.tipo.value;
    const desc  = form.descricao.value;

    // 2) Construir objeto
    const occ = {
      id: 'occ_' + Date.now(),
      date: data,
      location: local,
      type: tipo,
      description: desc,
      status: 'pending'
    };

    // 3) Guardar em localStorage
    try {
      addOccurrence(occ);
      alert('Ocorrência registada com sucesso!');
      form.reset();
      // Opcional: mudar para tab “A Decorrer”
      document.querySelector('[onclick*="adecorrer"]').click();
    } catch (err) {
      console.error(err);
      alert('Falha ao registar ocorrência.');
    }
  });
});
