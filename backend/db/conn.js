const mongoose = require('mongoose')

const mongodb_conn = () => {
  if(!process.env.MONGODB_CONN) throw new Error('É necessário a conexão com o MongoDB no arquivo .env')
  return process.env.MONGODB_CONN
}

async function main() {
  await mongoose.connect(mongodb_conn())
  console.log('Conectou ao moongose')
}

main().catch((err) => console.error(err))

module.exports = mongoose

