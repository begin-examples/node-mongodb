const arc = require('@architect/functions')
const clientPromise = require('@architect/shared/mongodb');
const ObjectId = require('mongodb').ObjectId

exports.handler = async function create(req) {
  const client = await clientPromise
  const db = client.db('todos')
  const collection = db.collection('todos')

  let { key } = arc.http.helpers.bodyParser(req)

  await collection.deleteOne({ _id: ObjectId(key) });

  client.close()

  return {
    statusCode: 302,
    headers: {
      location: '/',
      'cache-control': 'no-cache, no-store, must-revalidate, max-age=0, s-maxage=0'
    }
  }
}
