const { http } = require('@architect/functions')
const { clientConnect, clientClose, clientContext } = require('@architect/shared/mongodb-client');
const ObjectId = require('mongodb').ObjectId

exports.handler = http.async(clientContext, update)

async function update(req) {
  const client = await clientConnect;
  const db = client.db('todo-app')
  const collection = db.collection('todos')

  let todo = http.helpers.bodyParser(req)
  todo.completed = !!todo.completed

  await collection.updateOne({ _id: ObjectId(todo.key) }, { $set: { text: todo.text, completed: todo.completed } });

  await clientClose()

  return {
    statusCode: 302,
    headers: {
      location: '/',
      'cache-control': 'no-cache, no-store, must-revalidate, max-age=0, s-maxage=0'
    }
  }
}
