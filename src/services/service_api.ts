import axios from 'axios'
function getAPIClient() {

  // MUDE PARA HAJA NECESSIDADE

  const api = axios.create({
    baseURL:
      process.env.SERVER === 'start'
        ? 'https://www.alsol.com.br/api/v1/'
        : 'http://localhost:3000/api/v1/'
  })

  api.interceptors.request.use((config) => {
    return config
  })
  return api
}

export default getAPIClient()
