import temasRaw from '../../temas.md?raw';
import { marked } from 'marked';

const lineas = temasRaw.replace(/\r\n/g, '\n').split('\n');
const intro = [];
const apartados = [];
let actual = null;
let descartar = false;

for (const linea of lineas) {
  const coincidencia = linea.match(/^## (\d+)\. (.+)$/);

  if (coincidencia) {
    descartar = false;
    actual = {
      numero: Number(coincidencia[1]),
      titulo: coincidencia[2].trim(),
      slug: coincidencia[1],
      lineas: [],
    };
    apartados.push(actual);
    continue;
  }

  if (linea.startsWith('## ')) {
    descartar = true;
    continue;
  }

  if (descartar) continue;
  (actual ? actual.lineas : intro).push(linea);
}

const limpiar = (lineas) => lineas.join('\n').trim();
const aHtml = (texto) => marked.parse(texto, { gfm: true });

function resumenDe(fuente) {
  const bloque = fuente
    .split(/\n\s*\n/)
    .map((parte) => parte.trim())
    .find((parte) => parte && !parte.startsWith('#') && !parte.startsWith('|') && !parte.startsWith('>'));

  if (!bloque) return '';

  return bloque
    .replace(/^###\s+/, '')
    .replace(/\*\*(.+?)\*\*/g, '$1')
    .replace(/`([^`]+)`/g, '$1')
    .replace(/\s+/g, ' ')
    .trim();
}

export const introduccion = aHtml(limpiar(intro));

export const temas = apartados.map((apartado) => {
  const fuente = limpiar(apartado.lineas);
  const { lineas: _lineas, ...datos } = apartado;

  return {
    ...datos,
    resumen: resumenDe(fuente),
    html: aHtml(fuente),
  };
});
