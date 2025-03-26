
import { getStockBySymbolAndDate } from '../models/stockModel.js';


export const getStockPrice = (req, res) => {
  const { symbol, date } = req.query;

  if (!symbol || !date) {
    return res.status(400).json({ error: 'Symbol and date are required.' });
  }

  const stock = getStockBySymbolAndDate(symbol, date);

  if (!stock) {
    return res.status(404).json({ error: 'Stock data not found.' });
  }

  res.json(stock);
};
