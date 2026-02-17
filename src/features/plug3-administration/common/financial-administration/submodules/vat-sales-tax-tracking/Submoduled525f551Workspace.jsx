const Submoduled525f551Routes = {
  dashboard: 'vat-sales-tax-tracking/dashboard',
  list: 'vat-sales-tax-tracking/list',
  create: 'vat-sales-tax-tracking/create',
  detail: 'vat-sales-tax-tracking/detail/:id',
  edit: 'vat-sales-tax-tracking/edit/:id',
  approvals: 'vat-sales-tax-tracking/approvals',
  reports: 'vat-sales-tax-tracking/reports',
  analytics: 'vat-sales-tax-tracking/analytics',
}

function Submoduled525f551Workspace() {
  return (
    <section className="space-y-4">
      <header className="rounded-xl border border-slate-300/60 bg-white p-4">
        <h3 className="text-base font-bold text-slate-800">vat-sales-tax-tracking</h3>
        <p className="text-sm text-slate-600">Scaffold workspace generated from deep-work component maps.</p>
      </header>

      <article className="rounded-xl border border-slate-300/60 bg-white p-4">
        <p className="text-sm font-semibold text-slate-700">Screen routes</p>
        <pre className="mt-2 overflow-auto text-xs text-slate-600">{JSON.stringify(Submoduled525f551Routes, null, 2)}</pre>
      </article>
    </section>
  )
}

export { Submoduled525f551Routes }
export default Submoduled525f551Workspace

