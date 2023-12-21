import express, { NextFunction, Request, Response } from 'express'
import helmet from 'helmet'
import cors from 'cors'

import { port } from './environment'

import _http from 'http'

import weather_router from '../routes/weather'
import city_router from '../routes/city'

const app = express()

app.get(`/health-check`, (req, res) => res.status(200).json(`OK`))

app.use(express.urlencoded({ extended: true }))
app.use(express.json())

// app seguro
app.use(helmet())

// CORS - Cross Origin Resource Sharing
app.use(cors());

// Adicionando as rotas
app.use('/weather-api/weather', weather_router)
app.use('/weather-api/city', city_router)


// pega 404 e encaminha para manipulador de erro
app.use((req, res, next) => {
  const err = { message: 'API not found', status: 404 }
  return next(err)
})

// manipulador de erros
app.use((err: any, req: Request, res: Response) => {
  const result: { message: string; error?: any; code?: number } = { message: err.message || err }

  console.warn(result.message)

  return res.status(err.status || 500).json(result)
})

let http = _http.createServer(app)

http.listen(port, () => console.log(`-- Weather Service (${port}) --`))