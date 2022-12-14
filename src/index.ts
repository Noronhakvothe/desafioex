import 'express-async-errors'
import { errorMiddleware } from './middlewares/error';
import express from 'express'
import { AppDataSource } from './data-source'
import routes from './routes'
import * as dotenv from "dotenv"

//vinculando dot env ao index
dotenv.config()

AppDataSource.initialize().then(() => {

    const app = express()

    app.use(express.json())

    app.use(routes)

    app.use(errorMiddleware)
    return app.listen(3000)
})