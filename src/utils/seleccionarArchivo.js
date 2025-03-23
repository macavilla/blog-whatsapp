import fs from "fs";
import path from "path";

export default function seleccionarArchivo(ruta, nombre, fallback, extension) {
  const rutaFisica = path.resolve(`public${ruta}/${nombre}.${extension}`);
  const rutaOriginal = `${ruta}/${nombre}.${extension}`;
  const rutaFallback = `${ruta}/${fallback}.${extension}`;

  return fs.existsSync(rutaFisica) ? rutaOriginal : rutaFallback;
}