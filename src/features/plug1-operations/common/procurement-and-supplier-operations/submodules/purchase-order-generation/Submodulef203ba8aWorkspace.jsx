const Submodulef203ba8aRoutes = {
  dashboard: 'purchase-order-generation/dashboard',
  list: 'purchase-order-generation/list',
  create: 'purchase-order-generation/create',
  detail: 'purchase-order-generation/detail/:id',
  edit: 'purchase-order-generation/edit/:id',
  approvals: 'purchase-order-generation/approvals',
  reports: 'purchase-order-generation/reports',
  analytics: 'purchase-order-generation/analytics',
}

function Submodulef203ba8aWorkspace() {
  return (
    <section className="space-y-4">
      <header className="rounded-xl border border-slate-300/60 bg-white p-4">
        <h3 className="text-base font-bold text-slate-800">purchase-order-generation</h3>
        <p className="text-sm text-slate-600">Scaffold workspace generated from deep-work component maps.</p>
      </header>

      <article className="rounded-xl border border-slate-300/60 bg-white p-4">
        <p className="text-sm font-semibold text-slate-700">Screen routes</p>
        <pre className="mt-2 overflow-auto text-xs text-slate-600">{JSON.stringify(Submodulef203ba8aRoutes, null, 2)}</pre>
      </article>
    </section>
  )
}

export { Submodulef203ba8aRoutes }
export default Submodulef203ba8aWorkspace

