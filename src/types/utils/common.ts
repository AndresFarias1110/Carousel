export const handleEllipsis = (texto: string) => {
  return texto.length > 13 ? `${texto.substring(0, 13)}...` : texto;
};
