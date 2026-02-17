import { useCallback, useEffect, useState } from 'react'
import { getPosDashboardData } from '../core/api/posApi'
import { fallbackPosDashboard } from '../core/mock/posDashboardMock'

export function usePosDashboardData() {
  const [data, setData] = useState(fallbackPosDashboard)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')

  const load = useCallback(async () => {
    setLoading(true)
    setError('')
    try {
      const payload = await getPosDashboardData()
      setData({
        quickMenu: payload.quickMenu || fallbackPosDashboard.quickMenu,
        catalog: payload.catalog || fallbackPosDashboard.catalog,
        cartRows: payload.cartRows || fallbackPosDashboard.cartRows,
      })
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to load POS data')
      setData(fallbackPosDashboard)
    } finally {
      setLoading(false)
    }
  }, [])

  useEffect(() => {
    load()
  }, [load])

  return { data, loading, error, reload: load }
}
