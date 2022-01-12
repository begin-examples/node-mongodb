const mongodb = require('@architect/shared/mongodb')

exports.handler = async function read(req, context) {
  context.callbackWaitsForEmptyEventLoop = false
  const { client, db } = await mongodb({dbName: 'todos'})
  const collection = db.collection('todos')

  console.log('ask for todos')
  let todos = await collection.find({}).toArray();
  console.log('got todos')

  // await client.close()

  return {
    statusCode: 201,
    headers: {
      'content-type': 'application/json; charset=utf8',
      'cache-control': 'no-cache, no-store, must-revalidate, max-age=0, s-maxage=0'
    },
    body: JSON.stringify(todos)
  }
}
