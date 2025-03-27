import { readStockData } from '../services/googleSheetService.js';

export const getStockBySymbolAndDate = async(symbol, date) => {
    console.log('get')
  const stockData = await readStockData();

  console.log(stockData)

  return stockData.find((item) => item.Symbol === symbol && item.Date === date);
};