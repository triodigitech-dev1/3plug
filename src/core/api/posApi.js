import { fetchJson } from './httpClient'

export async function getPosDashboardData() {
  return fetchJson('/api/v1/pos/dashboard')
}

export async function getPosSession() {
  return fetchJson('/api/v1/pos/session/active')
}

export async function getPosCatalog(params = '') {
  const query = params ? `?${params}` : ''
  return fetchJson(`/api/v1/pos/catalog${query}`)
}

export async function getPosCart() {
  return fetchJson('/api/v1/pos/cart/current')
}
