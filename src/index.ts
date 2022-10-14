import express from "express"
import jobsRoutes from './routes/jobs.routes'

const app = express();

app.use('/jobs', jobsRoutes)

app.listen(3000, () => {
    console.log(`Working on port ` + 3000);
    
})