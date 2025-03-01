import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://zynjaspwqtygnukbtysr.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inp5bmphc3B3cXR5Z251a2J0eXNyIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDA2Nzk5MjEsImV4cCI6MjA1NjI1NTkyMX0.obnTzhzwj87-FP3s4zApbP9GIXpQkuoXHJ_ie2D6Ubo';

export const supabase = createClient(supabaseUrl, supabaseKey); 