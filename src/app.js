import express from 'express'
import mongoose from 'mongoose'
import session from 'express-session'
import Redis from 'ioredis'
import connectRedis from 'connect-redis'
import  cors  from 'cors'
import routes from './routes'
import { serverError, notFound } from './middleware'
import  {REDIS_OPTIONS, MONGO_URI, MONGO_OPTIONS, SESSION_OPTIONS} from './config'
import graphqlRouter from './routes/graphql'
const app = express()
mongoose.Promise = global.Promise;

mongoose.connect(MONGO_URI, MONGO_OPTIONS)
.then(() => { /** ready to use. The `mongoose.connect()` promise resolves to undefined. */ })
.catch(err => {
  console.log("MongoDB connection error. Please make sure MongoDB is running. " + err); // process.exit();
});

const RedisStore = connectRedis(session)

const client = new Redis(REDIS_OPTIONS)

const store = new RedisStore({client})

app.use(
  session({
    ...SESSION_OPTIONS, 
    store
  })
)

app.use(express.json())
app.use(cors())
app.use('/api/v1', routes)
app.use('/graphql', graphqlRouter)

app.use(notFound);
app.use(serverError);


export default app;