A super simple Begin **c**reate **r**ead **u**pdate **d**elete app that exemplifies a basic todo app that uses one static html page and three API endpoints that connect to a MongoDB database.

# Prerequisites

1. You must go to https://mongodb.com/ and set up a MongoDB account and get a server secret required to run this example

2. Create an `.env` file in the root of this project and add the content below with your server secret added

```sh
@testing
MONGODB_URL=mongodb+srv://<username>:<password>@<hostname>.mongodb.net/<cluster>?retryWrites=true&w=majority

@staging
MONGODB_URL=mongodb+srv://<username>:<password>@<hostname>.mongodb.net/<cluster>?retryWrites=true&w=majority

@production
MONGODB_URL=mongodb+srv://<username>:<password>@<hostname>.mongodb.net/<cluster>?retryWrites=true&w=majority
```

3. Create a database named 'todos'

4. Create a collection named 'todos'


## Deploy your own

[![Deploy to Begin](https://static.begin.com/deploy-to-begin.svg)](https://begin.com/apps/create?template=https://github.com/begin-examples/node-mongodb)

Deploy your own clone of this app to Begin!

## Getting started

- Start the local dev server: `npm start`

## Reference

- [Quickstart](https://docs.begin.com/en/guides/quickstart/) - basics on working locally, project structure, deploying, and accessing your Begin app
- [Creating new routes](https://docs.begin.com/en/functions/creating-new-functions) - basics on expanding the capabilities of your app

Head to [docs.begin.com](https://docs.begin.com/) to learn more!
