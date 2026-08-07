import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'
import router from './routes/route';
dotenv.config();
const PORT = process.env.PORT ?? "";
const App = express();
App.use(express.json());
App.use(cors());
App.use("/arcanum", router);

App.listen(PORT, () => {
    console.clear();
    console.log(`Rodando na porta http://localhost:${PORT}`)
})