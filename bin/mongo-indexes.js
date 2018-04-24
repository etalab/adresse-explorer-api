#!/usr/env/bin node
const mongo = require('../lib/utils/mongo')

async function main() {
  await mongo.connect()
  await mongo.db.collection('voies').createIndex({codeCommune: 1})
  await mongo.db.collection('voies').createIndex({idVoie: 1})
  await mongo.db.collection('numeros').createIndex({idVoie: 1})
  await mongo.db.collection('numeros').createIndex({id: 1})
  await mongo.disconnect()
}

main().catch(err => {
  console.error(err)
  process.exit(1)
})