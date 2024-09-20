import crypto from "crypto-js";
const SECRET_PASSWORD = process.env.REACT_APP_SECRET_PASSWORD;
export const existChipsSearch = (chips: any) => {
  for (let chip in chips) {
    if (chips[chip].length) {
      return true;
    } else {
      return false;
    }
  }
};

export const customRange = (start: number, stop: number, step = 1) => {
  const startArray = stop === undefined ? 0 : start;
  const stopArray = stop === undefined ? start : stop;
  return Array.from(
    { length: (stopArray - startArray) / step + 1 },
    (_, i) => startArray + i * step,
  );
};

export const cifrar = (texto: string): string => {
  const textoCifrado: string = crypto.AES.encrypt(
    texto,
    SECRET_PASSWORD!,
  ).toString();
  return textoCifrado;
};
export const descifrar = (texto: string): string => {
  const bytes: crypto.lib.WordArray = crypto.AES.decrypt(
    texto,
    SECRET_PASSWORD!,
  );
  const textoDescrifrado: string = bytes.toString(crypto.enc.Utf8);
  return textoDescrifrado;
};
