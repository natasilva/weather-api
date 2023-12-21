
import request from 'axios'
import { ibge_url } from '../config/environment'

const listCities = async () => {
    return request.get(`${ ibge_url }/localidades/municipios`)
        .then((res) => res.data)
}

export default { listCities }