import { Router } from 'express'
import { catchAsync } from '../../middleware'

const router = Router()
router.get('/profile',  catchAsync(async (req, res) => {
   
  
    return res.json({message: 'ok'})
  
  }
  
  ))
  
  
  export default router