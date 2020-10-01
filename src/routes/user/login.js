import { Router } from 'express'
import {loginSchema } from '../../validation'
import { auth,guest, catchAsync, validate } from '../../middleware'
import { User } from '../../models'
import { logIn, logOut } from '../../auth'

const router = Router()

router.post('/login', guest, catchAsync(async (req, res) => {
  await validate(loginSchema, req.body)
  const {email, password} = req.body
  const user = await User.findOne({email})

  if(!user || user.email !== email || user.password !== password) {
    throw Error('Incorrect email or password')
  }else {
    logIn(req, user.id)
    res.json({message: 'OK'})

  }

}))

router.post('/logout', auth, catchAsync( async (req, res) => {
  await logOut(req, res)
  res.json({message: 'OK'})
}))

export default router