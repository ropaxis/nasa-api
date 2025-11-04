import axios from 'axios'

export const nasaAPI = axios.create({
  baseURL: 'https://images-api.nasa.gov/',
  timeout: 5000, // optional
  headers: {
    'Content-Type': 'application/json',
  },
})