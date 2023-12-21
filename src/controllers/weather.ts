import { NextFunction, Request, Response } from "express"
import { default as weather_service } from "../services/weather"

const getWeatherByCity = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const { city } = req.query
        const data = await weather_service.getWeatherByCity(city as string)

        res.status(200).send(data.results)
    } catch (error) {
        next(error)
    }
}

export default { getWeatherByCity }