import { Router } from 'express'
import { catchAsync } from '../../middleware'
import zodiac from './zodiac';

const router = Router();

router.get('/',  catchAsync(async (req, res) => {
    return res.json(zodiac)
  }
  
  ))
  
  
  export default router