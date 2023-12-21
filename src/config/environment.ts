import { resolve } from 'path'
import dotenv from 'dotenv'

dotenv.config({ path: resolve(__dirname, `../../.env`) })

export const port = process.env.PORT || 80
export const weather_url = process.env.WEATHER_URL
export const ibge_url = process.env.IBGE_URL