const { http } = require('@architect/functions')
const { clientConnect, clientClose, clientContext } = require('@architect/shared/mongodb-helper');

exports.handler = http.async(clientContext, read)

async function read() {
  const client = await clientConnect;
  const db = client.db('todos')
  const collection = db.collection('todos')

  let todos = await collection.find({}).toArray();

  await clientClose()

  return {
    statusCode: 201,
    headers: {
      'content-type': 'application/json; charset=utf8',
      'cache-control': 'no-cache, no-store, must-revalidate, max-age=0, s-maxage=0'
    },
    body: JSON.stringify(todos)
  }
}
