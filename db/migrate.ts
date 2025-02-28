import { drizzle } from 'drizzle-orm/node-postgres';
import { migrate } from 'drizzle-orm/node-postgres/migrator';
import { Pool } from 'pg';
import * as dotenv from 'dotenv';

dotenv.config({ path: '.env.local' });

const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: {
    rejectUnauthorized: false
  }
});

const db = drizzle(pool);

async function main() {
  console.log('Migration started...');
  await migrate(db, { migrationsFolder: 'db/migrations' });
  console.log('Migration completed!');
  await pool.end();
}

main().catch((err) => {
  console.error('Migration failed!', err);
  process.exit(1);
}); 