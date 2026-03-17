export default function session(key: string, value?: string) {
  if (value) {
    // TODO: To set a session
    sessionStorage.setItem(key, value);
    return value;
  }
  // TODO: To fetch a session
  return sessionStorage.getItem(key);
}
