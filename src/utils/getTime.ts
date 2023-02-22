export function getTime(date: Date) {
  return `${date.getHours()}:${
    date.getMinutes() > 9 ? date.getMinutes() : "0" + date.getMinutes()
  }`;
}
