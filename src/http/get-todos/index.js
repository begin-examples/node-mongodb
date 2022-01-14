const { http } = require('@architect/functions')
const { clientConnect, clientClose, clientContext } = require('@architect/shared/mongodb-client');

exports.handler = http.async(clientContext, read)

async function read() {
  const client = await clientConnect;
  const db = client.db('todo-app')
  const collection = db.collection('todos')

  let todos = await collection.find({}).toArray();

  await clientClose()

  return {
    statusCode: 200,
    cacheControl: 'no-cache, no-store, must-revalidate, max-age=0, s-maxage=0',
    json: todos
  }
}
