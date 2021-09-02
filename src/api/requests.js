import axios from 'axios'

const BASE_URL = 'https://api.github.com'

const client = axios.create({
  baseUrl: BASE_URL
})

export const makeRequest = ({ url, method = 'get', data = {}, headers = {} }) => client({ url, method, data, headers })
