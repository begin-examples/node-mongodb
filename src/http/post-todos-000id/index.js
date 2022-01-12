const arc = require('@architect/functions')
const clientPromise = require('@architect/shared/mongodb');
const ObjectId = require('mongodb').ObjectId

exports.handler = async function create(req) {
  const client = await clientPromise
  const db = client.db('todos')
  const collection = db.collection('todos')

  let todo = arc.http.helpers.bodyParser(req)
  todo.completed = !!todo.completed

  await collection.updateOne({ _id: ObjectId(todo.key) }, { $set: { text: todo.text, completed: todo.completed } });

  client.close()

  return {
    statusCode: 302,
    headers: {
      location: '/',
      'cache-control': 'no-cache, no-store, must-revalidate, max-age=0, s-maxage=0'
    }
  }
}
