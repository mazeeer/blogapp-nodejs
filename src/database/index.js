
const mongoose = require('mongoose');
require('dotenv').config();
const dbConnection = (app) => {
    // connect to a database
    let dbURI = process.env.DB_CONNECTION;
    mongoose.connect(dbURI,{ useNewUrlParser: true, useUnifiedTopology:true  })
    .then((res)=>{ 
        app.listen(80);
    })
    .catch((err) =>{
    console.log(err)
    })
}
module.exports = {
    dbConnection
}
