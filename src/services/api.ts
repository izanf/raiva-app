import ky from 'ky'

const api = ky.create({ prefixUrl: 'http://localhost:8080/api', headers: { 'Content-Type': 'application/json' } })

export const login = (json): any => {
  return api.post('usuario/autenticacao', { json }).json()
}

export const register = (body) => {
  return api.post('/api/usuario/registrar-usuario', { body }).json()
}

export const listCases = () => {
  return api.get('/api/caso/casos-por-usuario')
}

export const registerCase = (body) => {
  return api.post('/api/caso/registrar-caso', { body })
}

export const listHealthUnities = () => {
  return api.get('/api/unidades-por-distrito')
}
