export { };

declare global {
  namespace NodeJS {
    interface ProcessEnv {
      PUBLIC_URL: string | undefined
    }
  }
}
