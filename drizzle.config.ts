import type { Config } from "drizzle-kit";
import * as dotenv from "dotenv";
dotenv.config({ path: ".env.local" });

if (!process.env.DATABASE_URL) {
  throw new Error("DATABASE_URL is not set");
}

const connectionString = process.env.DATABASE_URL;
const [credentials, host] = connectionString.split('@');
const [username, password] = credentials.replace('postgresql://', '').split(':');
const [hostname, port] = host.split(':');
const database = 'postgres';

export default {
  schema: "./db/schema.ts",
  out: "./db/migrations",
  dialect: "postgresql",
  dbCredentials: {
    host: hostname,
    port: parseInt(port),
    user: username,
    password: password,
    database: database,
    ssl: {
      rejectUnauthorized: false
    }
  },
} satisfies Config; 