export const formatDate = (date) => {
  return date.toLocaleString('pt-BR', {
    hour: "2-digit",
    minute: "2-digit",
    year: "numeric",
    day: "2-digit",
    month: "2-digit",
  })
}