import axios from 'axios';
import fs from 'fs';
import path from 'path';
import { GOOGLE_SHEET_JSON_URL } from '../config/googleSheet.js';

const savePath = path.join(process.cwd(), 'stockData.json');

const extractGoogleSheetJson = (rawText) => {
    try {
      // Find the JSON-like part (removes leading comments and extra text)
      const jsonText = rawText.match(/\{.*\}/s)?.[0]; // Match the first JSON block
      return JSON.parse(jsonText);
    } catch (error) {
      throw new Error('Failed to parse Google Sheets JSON.');
    }
  };
  
  // Fetch Google Sheets and save as JSON
  export const fetchGoogleSheetData = async () => {
    try {
      console.log('Fetching data from Google Sheets...');
      const response = await axios.get(GOOGLE_SHEET_JSON_URL);
  
      // Extract and parse the JSON
      const jsonData = extractGoogleSheetJson(response.data);
  
      // Convert Google's JSON format to a usable array
      const stockData = jsonData.table.rows.map((row) =>
        row.c.map((cell) => (cell ? cell.v : ''))
      );
  
      fs.writeFileSync(savePath, JSON.stringify(stockData, null, 2));
      console.log('Data saved to stockData.json');
    } catch (error) {
      console.error('Error fetching Google Sheets data:', error.message);
    }
  };
  
  // Read local JSON data
  export const readStockData = async() => {
    console.log('jkfd')
    if (!fs.existsSync(savePath)) return [];
    return JSON.parse(fs.readFileSync(savePath, 'utf8'));
  };
