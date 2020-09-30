import express, { Application } from 'express'
import cors from 'cors'
import mongoose from 'mongoose'
import routes from './router'

class App {
    public express:Application;

    constructor () {
      this.express = express()
      this.middleware()
      this.database()
      this.routes()
    }

    private middleware (): void {
      this.express.use(express.json())
      this.express.use(cors())
    }

    private database (): void {
      mongoose.connect('mongodb://localhost:27017/desafio-fullstack', {
        useNewUrlParser: true
      })
    }

    private routes (): void {
      this.express.use(routes)
      this.express.get('/', (req, res) => {
        return res.send('Hello world')
      })
    }
}
export interface IApp {
  express: Application
}

export default new App().express
