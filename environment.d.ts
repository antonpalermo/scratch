declare global {
  namespace NodeJS {
    interface ProcessEnv {
      NEXTAUTH_URL: string;
      GOOGLE_CLIENT: string;
      GOOGLE_SECRET: string;
      GITHUB_CLIENT: string;
      GITHUB_SECRET: string;
      NODE_ENV: "development" | "production";
    }
  }
}

export {};
