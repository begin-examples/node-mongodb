const arc = require('@architect/functions')
const mongodb = require('@architect/shared/mongodb')
const ObjectId = require('mongodb').ObjectId

exports.handler = async function create(req, context) {
  process.env.ARC_ENV === 'testing' ? context.callbackWaitsForEmptyEventLoop = true : context.callbackWaitsForEmptyEventLoop = false
  const { client, db } = await mongodb({dbName: 'todos'})
  const collection = db.collection('todos')

  let { key } = arc.http.helpers.bodyParser(req)

  await collection.deleteOne({ _id: ObjectId(key) });

  if (process.env.ARC_ENV === 'testing') {
    await client.close()
  }

  return {
    statusCode: 302,
    headers: {
      location: '/',
      'cache-control': 'no-cache, no-store, must-revalidate, max-age=0, s-maxage=0'
    }
  }
}
