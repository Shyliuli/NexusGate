export const PORT = process.env.PORT ?? "3000";
export const ADMIN_SUPER_SECRET = process.env.ADMIN_SUPER_SECRET ?? "admin";
export const ALLOWED_ORIGINS = process.env.ALLOWED_ORIGINS ?? "*";
export const DATABASE_URL = process.env.DATABASE_URL || "postgres://localhost:5432";
export const REDIS_URL = process.env.REDIS_URL || "redis://localhost:6379";
export const PRODUCTION = process.env.NODE_ENV === "production";
export const COMMIT_SHA = process.env.COMMIT_SHA || "unknown";