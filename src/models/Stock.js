import { readStockData } from '../services/googleSheetService.js';

export const getStockBySymbolAndDate = (symbol, date) => {
  const stockData = readStockData();
  return stockData.find((item) => item.Symbol === symbol && item.Date === date);
};