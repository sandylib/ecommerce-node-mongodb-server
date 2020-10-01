import { isLoggedIn } from  '../auth'


export const guest = (req, res, next) => {

  if(isLoggedIn(req)){
   return next(new Error('You are already logged in'))
  }

  next()

}

export const auth = (req, res, next) => {

  if(!isLoggedIn(req)){
   return next(new Error('You must be logged in'))
  }

  next()

}