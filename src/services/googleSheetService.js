import axios from 'axios';
import fs from 'fs';
import path from 'path';
import { GOOGLE_SHEET_CSV_URL } from '../config/googleSheet.js';
import { csvToJson } from '../utils/csvToJson.js';

const savePath = path.join(process.cwd(), 'stockData.json');

// Fetch Google Sheets and save as JSON
export const fetchGoogleSheetData = async () => {
  try {
    console.log('Fetching data from Google Sheets...');
    const { data } = await axios.get(GOOGLE_SHEET_CSV_URL);
    const jsonData = csvToJson(data);

    fs.writeFileSync(savePath, JSON.stringify(jsonData, null, 2));
    console.log('Data saved to stockData.json');
  } catch (error) {
    console.error('Error fetching Google Sheets data:', error.message);
  }
};

// Read local JSON data
export const readStockData = () => {
  if (!fs.existsSync(savePath)) return [];
  return JSON.parse(fs.readFileSync(savePath, 'utf8'));
};
