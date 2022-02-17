const mongoose = require('mongoose')

async function main() {
  await mongoose.connect('mongodb+srv://Geovanne:<xouGMQZ0DLo8iOKg>@cluster0.lhpb0.mongodb.net/Cluster0?retryWrites=true&w=majority')
  console.log('Conectou ao moongose')
}

main().catch((err) => console.log(err))

module.exports = mongoose

