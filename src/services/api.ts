import ky from 'ky'

const api = ky.create({ prefixUrl: 'http://34.224.31.137:8080/api', headers: { 'Content-Type': 'application/json' } })

export const login = (json): any => {
  return api.post('usuario/autenticacao', { json }).json()
}

export const register = (body) => {
  return api.post('usuario/registrar-usuario', { body }).json()
}

export const listCases = (userId): Promise<any[]> => {
  return api.get(`casos${userId ? '/' + userId : ''}`).json()
}

export const registerCase = (userId, json) => {
  return api.post(`casos/registrar/${userId}`, { json }).json()
}

export const listHealthUnities = (): Promise<any[]> => {
  return api.get('unidades-de-saude/listar').json()
}
