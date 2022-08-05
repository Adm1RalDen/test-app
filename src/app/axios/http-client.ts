import axios from 'axios'
import { BASE_API_URL } from './consts'

export const httpClient = axios.create({
  baseURL: BASE_API_URL,
  headers: {
    "Content-type": "application/json"
  }
})
