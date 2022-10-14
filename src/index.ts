import express from "express";
import jobsRoutes from './routes/jobs.routes';
import * as dotenv from "dotenv";
import './database/config'
dotenv.config();


const app = express();

app.use('/api/v1/jobs', jobsRoutes)

app.listen(process.env.PORT, () => {
    console.log(`Working on port ` + process.env.PORT);
    
})