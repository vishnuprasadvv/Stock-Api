import express from 'express';
import stockRoutes from './routes/stockRoute';
import dotenv from 'dotenv';
import { fetchGoogleSheetData } from './services/googleSheetService';
dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

    //middleware
app.use(express.json());

//routes
app.use('/api', stockRoutes);

app.get('/', (req, res) => {
    res.send('API is running');
});


await fetchGoogleSheetData();

app.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}`);
});