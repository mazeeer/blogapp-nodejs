
const mongoose = require('mongoose');
require('dotenv').config();
const dbConnection = (app) => {
    // connect to a database
    let dbURI = process.env.DB_CONNECTION;
    mongoose.connect(dbURI,{ useNewUrlParser: true, useUnifiedTopology:true  })
    .then((res)=>{ 
        console.log("connected to db")
        app.listen(3000);
    })
    .catch((err) =>{
    console.log(err)
    })
}
module.exports = {
    dbConnection
}
