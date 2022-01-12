const { http } = require('@architect/functions')
const { clientConnect, clientClose, clientContext } = require('@architect/shared/mongodb-client');
const ObjectId = require('mongodb').ObjectId

exports.handler = http.async(clientContext, destroy)

async function destroy(req) {
  const client = await clientConnect;
  const db = client.db('todos')
  const collection = db.collection('todos')

  let { key } = http.helpers.bodyParser(req)

  await collection.deleteOne({ _id: ObjectId(key) });

  await clientClose()

  return {
    statusCode: 302,
    headers: {
      location: '/',
      'cache-control': 'no-cache, no-store, must-revalidate, max-age=0, s-maxage=0'
    }
  }
}
