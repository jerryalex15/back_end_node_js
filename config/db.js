const mongoose = require('mongoose')
const dbConfig = require('./dbConfig')

const connect = async()=>{
    try{
        const conn = await mongoose.connect(dbConfig.database,
            {
                useUnifiedTopology:true,
                useNewUrlParser:true,
            })
        console.log(`Mongodb connected : ${conn.connection.host}`)
    }catch(err){
        console.log(err)
        process.exit(1)
    }
}
module.exports = connect;