import { NextFunction, Request, Response } from "express"
import { default as weather_service } from "../services/weather"

const getWeatherByCity = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const { city } = req.body
        const result = await weather_service.getWeatherByCity(city)

        res.status(200).send(result.results)
    } catch (error) {
        next(error)
    }
}

export default { getWeatherByCity }