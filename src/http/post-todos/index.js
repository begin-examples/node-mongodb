const arc = require('@architect/functions')
const mongodb = require('@architect/shared/mongodb');

exports.handler = async function create(req) {
  const { client, db } = await mongodb({dbName: 'todos'})
  const collection = db.collection('todos')

  let todo = arc.http.helpers.bodyParser(req)

  await collection.insertOne({ ...todo });

  client.close()

  return {
    statusCode: 302,
    headers: {
      location: '/',
      'cache-control': 'no-cache, no-store, must-revalidate, max-age=0, s-maxage=0'
    }
  }
}
