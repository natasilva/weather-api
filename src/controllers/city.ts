import { NextFunction, Request, Response } from "express"
import { default as city_service } from "../services/city"

const listCities = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const data = await city_service.listCities()

        res.status(200).send(data)
    } catch (error) {
        next(error)
    }
}

export default { listCities }