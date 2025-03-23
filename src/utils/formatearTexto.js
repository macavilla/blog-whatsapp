// provisorio: transfroma *txt* en cursiva y **txt** en bold

export default function formatearTexto(texto) {

  const partes = texto.split(/(\*\*.*?\*\*|\*.*?\*)/g).map((parte) => {
    if (/^\*\*(.*)\*\*$/.test(parte)) {
      return `<b>${parte.slice(2, -2)}</b>`;
    } else if (/^\*(.*)\*$/.test(parte)) {
      return `<i>${parte.slice(1, -1)}</i>`;
    }
    return parte;
  });

  return partes.join("");
}