export default function local(key: string, value?: string) {
  if (value) {
    // TODO: To set a session
    localStorage.setItem(key, value);
    return value;
  }
  // TODO: To fetch a session
  return localStorage.getItem(key);
}
