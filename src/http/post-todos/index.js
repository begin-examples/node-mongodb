const { http } = require('@architect/functions')
const { clientConnect, clientClose, clientContext } = require('@architect/shared/mongodb-client');

exports.handler = http.async(clientContext, create)

async function create(req) {
  const client = await clientConnect;
  const db = client.db('todos')
  const collection = db.collection('todos')

  let todo = http.helpers.bodyParser(req)

  await collection.insertOne({ ...todo });

  await clientClose()

  return {
    statusCode: 302,
    headers: {
      location: '/',
      'cache-control': 'no-cache, no-store, must-revalidate, max-age=0, s-maxage=0'
    }
  }
}
