import axios from 'axios'
function getAPIClient() {
  // MUDE CASO HAJA NECESSIDADE

  const api = axios.create({
    baseURL:
      process.env.NODE_ENV === 'production'
        ? 'https://yellow-nextjs.herokuapp.com/api/v1/'
        : 'http://localhost:3000/api/v1/'
  })

  api.interceptors.request.use((config) => {
    return config
  })
  return api
}

export default getAPIClient()
