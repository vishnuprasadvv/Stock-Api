import express from 'express';
import { getStockPrice } from '../controllers/stockController';

const router = express.Router();

router.get('/stock-price', getStockPrice );

export default router;