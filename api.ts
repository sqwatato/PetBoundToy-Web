import axios from 'axios'
import Cookies from 'js-cookie'

const api = axios.create({
  baseURL: 'http://jaydenl.pythonanywhere.com/api/', // Replace with the URL of your Django API
  headers: {
    'Content-Type': 'application/json',
  },
})
api.interceptors.request.use((config) => {
  const token = Cookies.get('token')
  if (token) {
    config.headers['Authorization'] = `Token ${token}`
  }
  return config
})

export default api
