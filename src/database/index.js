
const mongoose = require('mongoose');
require('dotenv').config();
const dbConnection = (app) => {
    // connect to a database
    let dbURI = process.env.DB_CONNECTION;
    mongoose.connect(dbURI,{ useNewUrlParser: true, useUnifiedTopology:true  })
    .then((res)=>{ 
        let port = process.env.PORT || 8000;
        app.listen(port);
    })
    .catch((err) =>{
    console.log(err)
    })
}
module.exports = {
    dbConnection
}
