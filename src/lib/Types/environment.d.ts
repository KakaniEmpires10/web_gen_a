export {};

declare global {
  namespace NodeJS {
    interface ProcessEnv {
      NEXTAUTH_SECRET: string,
      NEXTAUTH_URL: string;
      DATABASE_URL: string;
      TINY_API_KEY: string;
    }
  }
}
