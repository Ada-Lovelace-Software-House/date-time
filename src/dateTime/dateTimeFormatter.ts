// Converte data em string de data e hora
export function dateTimeFormatter(date: Date) {
  const newDate = new Date(date);
  return newDate.toLocaleString('pt-BR');
}
