import ky from 'ky'

const api = ky.create({ prefixUrl: 'http://localhost:8080/api', headers: { 'Content-Type': 'application/json' } })

export const login = (json): any => {
  return api.post('usuario/autenticacao', { json }).json()
}

export const register = (body) => {
  return api.post('usuario/registrar-usuario', { body }).json()
}

export const listCases = (userId): Promise<any[]> => {
  return api.get(`caso/casos?usuarioId=${userId}`).json()
}

export const registerCase = (userId, json) => {
  return api.post(`caso/registrar-caso?usuarioId=${userId}`, { json }).json()
}

export const listHealthUnities = () => {
  return api.get('unidades-por-distrito')
}
