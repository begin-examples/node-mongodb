const { MongoClient } = require('mongodb')

const uri = `mongodb+srv://${process.env.MONGODB_USER}:${process.env.MONGODB_PASSWORD}@${process.env.MONGODB_SERVER}/${process.env.MONGODB_CLUSTER}?maxPoolSize=20&w=majority`

const client = new MongoClient(uri,
  { useNewUrlParser: true,  useUnifiedTopology: true })

async function clientClose() {
  if (process.env.ARC_ENV === 'testing') {
    await client.close()
  }
}

async function clientContext(req, context) {
  process.env.ARC_ENV === 'testing' ? context.callbackWaitsForEmptyEventLoop = true : context.callbackWaitsForEmptyEventLoop = false
}

module.exports = { clientConnect: client.connect(), clientClose, clientContext }
