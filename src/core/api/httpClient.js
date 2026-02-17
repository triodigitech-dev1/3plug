export async function fetchJson(url, options = {}) {
  const response = await fetch(url, {
    headers: {
      'Content-Type': 'application/json',
      ...(options.headers || {}),
    },
    ...options,
  })

  if (!response.ok) {
    const message = `Request failed: ${response.status} ${response.statusText}`
    throw new Error(message)
  }

  return response.json()
}
