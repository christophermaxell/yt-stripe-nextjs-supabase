import { pgTable, text, timestamp, boolean, uuid } from "drizzle-orm/pg-core";

export const users = pgTable("users", {
  id: uuid("id").primaryKey().defaultRandom(),
  email: text("email").notNull().unique(),
  created_at: timestamp("created_at").defaultNow().notNull(),
  updated_at: timestamp("updated_at").defaultNow().notNull(),
  is_deleted: boolean("is_deleted").default(false).notNull(),
});

export const userPreferences = pgTable("user_preferences", {
  user_id: uuid("user_id").references(() => users.id).primaryKey(),
  has_completed_onboarding: boolean("has_completed_onboarding").default(false).notNull(),
});

export const userTrials = pgTable("user_trials", {
  user_id: uuid("user_id").references(() => users.id).primaryKey(),
  trial_start_time: timestamp("trial_start_time").defaultNow().notNull(),
  trial_end_time: timestamp("trial_end_time").notNull(),
}); 