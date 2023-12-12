import { Router } from 'express'
import { default as ctrl } from '../controllers/weather'

const router = Router()

router.route(`/`).get(ctrl.getWeatherByCity)

export default router
