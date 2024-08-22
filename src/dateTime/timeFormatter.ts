// Converte data em string de hora
export function timeFormatter(date: Date) {
  const newDate = new Date(date);
  return newDate.toLocaleTimeString('pt-BR');
}
