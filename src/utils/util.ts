function convertDateFormat(dateString: Date) {
  const date = new Date(dateString);

  const formattedDate =
    ("0" + (date.getMonth() + 1)).slice(-2) +
    "/" +
    ("0" + date.getDate()).slice(-2) +
    "/" +
    date.getFullYear();
  return formattedDate;
}

export { convertDateFormat };
