const { MongoClient } = require('mongodb')

const client = new MongoClient(process.env.MONGODB_URL,
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
