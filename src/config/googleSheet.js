import dotenv from 'dotenv';
dotenv.config();

const GOOGLE_SHEET_ID = process.env.GOOGLE_SHEET_ID;

export const GOOGLE_SHEET_JSON_URL = `https://docs.google.com/spreadsheets/d/${GOOGLE_SHEET_ID}/gviz/tq?tqx=out:json`