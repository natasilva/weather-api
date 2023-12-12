import { resolve } from 'path'
import dotenv from 'dotenv'

dotenv.config({ path: resolve(__dirname, `../../.env`) })

export const port = process.env.PORT || 80
export const api_url = process.env.API_URL
