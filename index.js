import express from 'express';
import Connection from './database/db.js';
import dotenv from 'dotenv';
import cors from 'cors'
import bodyParser from 'body-parser';
import Routes from './routes/route.js';
const app = express();

dotenv.config();
app.use(bodyParser.json({extended:true}));
app.use(bodyParser.urlencoded({extended:true}));
app.use(cors());

app.use('/',Routes);

const PORT= process.env.PORT || 8001;

const username = process.env.DB_U;
const password = process.env.DB_PW;

Connection(username, password);
app.listen(PORT,()=> console.log(`server is running on PORT ${PORT}`))

