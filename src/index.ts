import express from "express"

const app = express();

app.get('/', (req, res) => {
    res.send('hola TS')
})

app.listen(3000, () => {
    console.log(`Working on port ` + 3000);
    
})