import axios from 'axios'
function getAPIClient() {
  // MUDE CASO HAJA NECESSIDADE

  console.log(process.env.SERVER)
  const api = axios.create({
    baseURL: process.env.SERVER
      ? 'https://yellow-nextjs.herokuapp.com/api/v1/'
      : 'http://localhost:3000/api/v1/'
  })

  api.interceptors.request.use((config) => {
    return config
  })
  return api
}

export default getAPIClient()
