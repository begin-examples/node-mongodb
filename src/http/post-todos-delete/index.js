const arc = require('@architect/functions')
const mongodb = require('@architect/shared/mongodb');
const ObjectID = require("bson-objectid")

exports.handler = async function create(req) {
  const { client, db } = await mongodb({dbName: 'todos'})
  const collection = db.collection('todos')

  let { key } = arc.http.helpers.bodyParser(req)

  await collection.deleteOne({ _id: ObjectID(key) });

  client.close()

  return {
    statusCode: 302,
    headers: {
      location: '/',
      'cache-control': 'no-cache, no-store, must-revalidate, max-age=0, s-maxage=0'
    }
  }
}
