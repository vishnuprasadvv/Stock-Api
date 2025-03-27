
import { getStockBySymbolAndDate } from '../models/Stock.js';


export const getStockPrice = async(req, res) => {
    console.log('fetch')
  const { symbol, date } = req.query;

  if (!symbol || !date) {
    return res.status(400).json({ error: 'Symbol and date are required.' });
  }

  const stock = await getStockBySymbolAndDate(symbol, date);

  if (!stock) {
    return res.status(404).json({ error: 'Stock data not found.' });
  }

  res.json(stock);
};
