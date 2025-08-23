import axios from 'axios'
import tokenHelper from './tokenHelper'

const baseURL = import.meta.env.VITE_API_URL || import.meta.env.REACT_APP_API_URL || 'http://localhost:4000/api'

const instance = axios.create({
  baseURL,
  headers: {
    'Content-Type': 'application/json'
  }
})

// attach token
instance.interceptors.request.use(
  (config) => {
    const token = tokenHelper.getToken()
    if (token) {
      config.headers.Authorization = `Bearer ${token}`
    }
    return config
  },
  (error) => Promise.reject(error)
)

export default instance
