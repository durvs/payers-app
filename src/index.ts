import app from './server/server'

import clients from './routes/clients'

app.use('/clients', clients)

app.get('/', function (req, res) {
  res.send('Hello World!')
})
