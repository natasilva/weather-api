
import request from 'axios'
import { weather_url } from '../config/environment'

const getWeatherByCity = async (city_name: string) => {
    return request.get(`${ weather_url }/weather?key=SUA-CHAVE&city_name=${ city_name }`)
        .then((res) => res.data)
}

export default { getWeatherByCity }