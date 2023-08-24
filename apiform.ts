import axios from 'axios'
import Cookies from 'js-cookie'

const api = axios.create({
  // baseURL: 'http://jaydenl.pythonanywhere.com/api/', // Replace with the URL of your Django API
  baseURL: 'http://127.0.0.1:8000/api/',
  headers: {
    "Content-Type": "multipart/form-data",
    "Authorization": "Token 043ac7dda62905f56ca9d0029ccf9dff922dd54d",
    "Accept": "application/json",
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
