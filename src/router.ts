import { Router } from 'express'
import PayerController from './controller/PayerController'
import UserController from './controller/UserController'
const routes = Router()

routes.get('/users', UserController.index)
routes.post('/users', UserController.create)

routes.get('/payer', PayerController.index)
routes.post('/payer', PayerController.create)

export default routes
