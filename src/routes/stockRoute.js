import express from 'express';
import { getStockPrice } from '../controllers/stockController.js';

const router = express.Router();

router.get('/stock-price', getStockPrice );

export default router;