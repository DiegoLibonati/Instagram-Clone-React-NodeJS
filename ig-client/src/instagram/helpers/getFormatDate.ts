export const getFormatDate = (date: string) => {
  const currentDate = new Date();

  const dateFormat = new Date(date);

  if (
    currentDate.toISOString().slice(0, 10) ===
    dateFormat.toISOString().slice(0, 10)
  ) {
    return "Hoy";
  }

  const day = dateFormat.getDate();
  const month = dateFormat.toLocaleString("es-MX", { month: "long" });
  const year = dateFormat.getFullYear();

  return `${day} de ${month} del ${year}`;
};
