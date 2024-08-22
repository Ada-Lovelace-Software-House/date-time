// Converte data em string de data
export function dateFormatter(date: Date) {
  const newDate = new Date(date);
  return newDate.toLocaleDateString('pt-BR');
}
