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

const separa = new Date().toLocaleDateString().split("/")
var reverse = separa.reverse()
var join = reverse.join("/")

var time = new Date().toLocaleTimeString()
var every = join + ' ' + time
const date = new Date().toISOString();

app.listen(3333, () => console.log("server is running"))