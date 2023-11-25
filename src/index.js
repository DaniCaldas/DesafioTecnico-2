import express from 'express';
import cors from 'cors';
import { routes } from './routes/routes.js';

const app = express()
app.use(express.json())
app.use(cors())
app.use(routes)
app.get("/", (req, res) => {
    res.json({mensagem: "Olá"})
})

app.listen(3333 || process.env.PORT, () => console.log("server is running"))