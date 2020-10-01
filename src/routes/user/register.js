import { Router } from 'express'
import {registerSchema, validate} from '../../validation'
import { User } from '../../models'
import { guest, catchAsync } from '../../middleware'

const router = Router()

router.post('/register', guest, catchAsync(async (req, res) => {
  await validate(registerSchema, req.body)
  const {email, name, password} = req.body

  const found = await User.exists({email})
  if(found) {
     throw Error('Email already existing');
  }
  
  const user = await User.create({
    email, name, password
  })  

  res.json({message: 'OK', user})
}))

export default router