import axios from "axios";
import fs from 'fs';
import path from 'path';

const GOOGLE_SHEET_ID = process.env.GOOGLE_SHEET_ID;

const GOOGLESHEET_CSV_URL = `https://docs.google.com/spreadsheets/d/e/${GOOGLE_SHEET_ID}/pub?output=csv`;

const savePath = path.join(process.cwd(), 'stockData.json');

const csvToJson = (csv) => {
    const [header, ...rows] = csv.trim().split('\n').map(row => row.split(','));
    return rows.map(row => {
      return header.reduce((acc, key, index) => {
        acc[key.trim()] = row[index] ? row[index].trim() : null;
        return acc;
      }, {});
    });
  };


export const fetchAndSave = async () => {
    try {
        console.log('Fetching Google Sheets data...');
        const { data } = await axios.get(GOOGLE_SHEET_CSV_URL);
        const jsonData = csvToJson(data);
    
        fs.writeFileSync(savePath, JSON.stringify(jsonData, null, 2));
        console.log(' Data saved to stockData.json');
      } catch (error) {
        console.error('Error fetching data:', error.message);
      }
};

if(require.main === module) {
    fetchAndSave();
}
