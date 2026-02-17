import { useEffect, useMemo, useState } from 'react'
import PageMeta from '../components/common/PageMeta'
import PosCartPanel from '../components/pos/PosCartPanel'
import PosCatalogGrid from '../components/pos/PosCatalogGrid'
import PosQuickMenu from '../components/pos/PosQuickMenu'
import PosTopBar from '../components/pos/PosTopBar'
import { usePosDashboardData } from '../hooks/usePosDashboardData'

function formatCurrency(value) {
  return new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(value)
}

function OverviewPage() {
  const [clock, setClock] = useState(() => new Date())
  const [query, setQuery] = useState('')
  const { data, loading, error, reload } = usePosDashboardData()

  useEffect(() => {
    const timer = setInterval(() => setClock(new Date()), 1000)
    return () => clearInterval(timer)
  }, [])

  const filteredCatalog = useMemo(
    () =>
      data.catalog.filter(
        (item) =>
          item.name.toLowerCase().includes(query.toLowerCase()) ||
          item.id.toLowerCase().includes(query.toLowerCase()),
      ),
    [data.catalog, query],
  )

  const subtotal = useMemo(
    () => data.cartRows.reduce((sum, row) => sum + row.qty * row.price, 0),
    [data.cartRows],
  )
  const tax = subtotal > 0 ? subtotal * 0.08 : 0
  const total = subtotal + tax

  return (
    <>
      <PageMeta pageTitle="POS Dashboard" />
      <section className="flex min-h-0 flex-1 flex-col gap-4">
        <PosTopBar clock={clock} />

        {error && (
          <div className="rounded-xl border border-amber-300 bg-amber-50 px-3 py-2 text-sm text-amber-800">
            Backend unavailable, showing fallback data. {error}
            <button type="button" onClick={reload} className="ml-2 rounded-md border border-amber-300 px-2 py-0.5">
              Retry
            </button>
          </div>
        )}

        <div className="grid min-h-0 flex-1 gap-4 xl:grid-cols-[220px_minmax(0,1fr)_360px]">
          <PosQuickMenu items={data.quickMenu} />
          <PosCatalogGrid
            query={query}
            onQueryChange={setQuery}
            products={filteredCatalog}
            formatCurrency={formatCurrency}
          />
          <PosCartPanel
            cartRows={data.cartRows}
            subtotal={subtotal}
            tax={tax}
            total={total}
            formatCurrency={formatCurrency}
          />
        </div>

        {loading && (
          <p className="text-xs text-[#5a7892]">Loading POS data...</p>
        )}
      </section>
    </>
  )
}

export default OverviewPage
