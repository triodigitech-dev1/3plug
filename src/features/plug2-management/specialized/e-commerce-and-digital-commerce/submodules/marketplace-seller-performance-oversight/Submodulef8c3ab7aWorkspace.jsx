const Submodulef8c3ab7aRoutes = {
  dashboard: 'marketplace-seller-performance-oversight/dashboard',
  list: 'marketplace-seller-performance-oversight/list',
  create: 'marketplace-seller-performance-oversight/create',
  detail: 'marketplace-seller-performance-oversight/detail/:id',
  edit: 'marketplace-seller-performance-oversight/edit/:id',
  approvals: 'marketplace-seller-performance-oversight/approvals',
  reports: 'marketplace-seller-performance-oversight/reports',
  analytics: 'marketplace-seller-performance-oversight/analytics',
}

function Submodulef8c3ab7aWorkspace() {
  return (
    <section className="space-y-4">
      <header className="rounded-xl border border-slate-300/60 bg-white p-4">
        <h3 className="text-base font-bold text-slate-800">marketplace-seller-performance-oversight</h3>
        <p className="text-sm text-slate-600">Scaffold workspace generated from deep-work component maps.</p>
      </header>

      <article className="rounded-xl border border-slate-300/60 bg-white p-4">
        <p className="text-sm font-semibold text-slate-700">Screen routes</p>
        <pre className="mt-2 overflow-auto text-xs text-slate-600">{JSON.stringify(Submodulef8c3ab7aRoutes, null, 2)}</pre>
      </article>
    </section>
  )
}

export { Submodulef8c3ab7aRoutes }
export default Submodulef8c3ab7aWorkspace

