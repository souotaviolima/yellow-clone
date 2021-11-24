import axios from 'axios'
function getAPIClient() {

  // MUDE CASO HAJA NECESSIDADE

  const api = axios.create({
    baseURL:
      process.env.SERVER === 'start'
        ? 'https://yellow-nextjs.herokuapp.com/api/v1/'
        : 'http://localhost:3000/api/v1/'
  })

  api.interceptors.request.use((config) => {
    return config
  })
  return api
}

export default getAPIClient()


