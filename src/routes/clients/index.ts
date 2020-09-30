import * as express from 'express'

const router = express.Router()

router.get('/', function (req, res) {
  res.send([{}, {}, {}])
})

export default router
