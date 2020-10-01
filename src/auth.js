import { SESSION_NAME } from  './config'


export const isLoggedIn = (req) => !!req.session.userId

export const logIn = (req, userId) => {
  return req.session.userId = userId
}


export const logOut = (req, res) => 
  new Promise((resolve, reject) => {
    req.session.destroy((err) => {
      if(err) reject(err)
      
      res.clearCookie(SESSION_NAME)

      resolve()
    })
  })