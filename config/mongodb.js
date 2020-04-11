const mongoose = require('mongoose')

mongoose.connect('mongodb://localhost/chat_stats', { useNewUrlParser: true,  useUnifiedTopology: true })
  .catch(e => {
    const msg = 'ERROR! It was not possible connect to MongoDB'
    console.log('\x1b[41m%s\x1b[37m', msg, '\x1b[0m')
  })
  