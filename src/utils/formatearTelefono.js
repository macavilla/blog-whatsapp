export default function formatearTelefono(numero) {
  const str = String(numero);
  return `+${str.slice(0, 2)} ${str.slice(2, 4)} ${str.slice(4, 8)}-${str.slice(8)}`;
}
