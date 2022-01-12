const { MongoClient } = require('mongodb');
const uri = `mongodb+srv://${process.env.MONGODB_USER}:${process.env.MONGODB_PASSWORD}@${process.env.MONGODB_SERVER}/${process.env.MONGODB_CLUSTER}?maxPoolSize=20&w=majority`
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true })

module.exports = client.connect()
