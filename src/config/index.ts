import express, { NextFunction, Request, Response } from 'express'
import helmet from 'helmet'
import { port } from './environment'

import _http from 'http'

import router from '../routes/weather'

const app = express()

app.get(`/health-check`, (req, res) => res.status(200).json(`OK`))

app.use(express.urlencoded({ extended: true }))
app.use(express.json())

// app seguro
app.use(helmet())

// Adiciona a rota
app.use('/weather', router)

// pega 404 e encaminhar para manipulador de erro
app.use((req, res, next) => {
  const err = { message: 'API not found', status: 404 }
  return next(err)
})

// manipulador de erros, envie o stacktrace apenas durante o desenvolvimento
app.use((err: any, req: Request, res: Response) => {
  const result: { message: string; error?: any; code?: number } = { message: err.message || err }

  console.warn(result.message)

  return res.status(err.status || 500).json(result)
})

let http = _http.createServer(app)

http.listen(port, () => console.log(`-- Weather Service (${port}) --`))