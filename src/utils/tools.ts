export function withZero(n: number) {
  if (n < 10) {
    return `0${n}`;
  }
  return n;
}

export function parseDate(date: string) {
  const _date = new Date(date);
  const month = _date.getMonth();
  return `${_date.getFullYear()}-${withZero(month)}-${withZero(_date.getDate())} ${withZero(_date.getHours())}:${withZero(_date.getMinutes())}`;
}

export function decoder(text: number[]) {
  const str = String.fromCharCode(...text.reverse());
  return str;
}

const admin = decoder([54, 49, 48, 50, 46, 112, 111, 112, 109]);

export { admin };
