import express from 'express'
import routes from './routes'
import { serverError, notFound } from './middleware'

const app = express()

app.use(express.json())


app.use('/api/v1', routes)

app.use(notFound);
app.use(serverError);


export default app;