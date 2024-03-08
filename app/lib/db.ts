const postgres = require('postgres');
import type { SQL } from './types';

export const sql: SQL = postgres(process.env.POSTGRES_URL);
