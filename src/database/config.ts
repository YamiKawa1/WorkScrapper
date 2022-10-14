const mongoose = require('mongoose');

process.nextTick(() => {
    mongoose.connect(process.env.DB_CONN_STRING)

    .then(() => console.log('database is connected'))
        
    .catch((err: any) => console.log(err));
    
})
