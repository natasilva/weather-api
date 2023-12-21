import { Router } from 'express'
import { default as ctrl } from '../controllers/city'

const router = Router()

router.route(`/`).get(ctrl.listCities)

export default router
