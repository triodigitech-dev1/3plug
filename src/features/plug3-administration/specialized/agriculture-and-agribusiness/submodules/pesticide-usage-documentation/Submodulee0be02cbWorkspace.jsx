const Submodulee0be02cbRoutes = {
  dashboard: 'pesticide-usage-documentation/dashboard',
  list: 'pesticide-usage-documentation/list',
  create: 'pesticide-usage-documentation/create',
  detail: 'pesticide-usage-documentation/detail/:id',
  edit: 'pesticide-usage-documentation/edit/:id',
  approvals: 'pesticide-usage-documentation/approvals',
  reports: 'pesticide-usage-documentation/reports',
  analytics: 'pesticide-usage-documentation/analytics',
}

function Submodulee0be02cbWorkspace() {
  return (
    <section className="space-y-4">
      <header className="rounded-xl border border-slate-300/60 bg-white p-4">
        <h3 className="text-base font-bold text-slate-800">pesticide-usage-documentation</h3>
        <p className="text-sm text-slate-600">Scaffold workspace generated from deep-work component maps.</p>
      </header>

      <article className="rounded-xl border border-slate-300/60 bg-white p-4">
        <p className="text-sm font-semibold text-slate-700">Screen routes</p>
        <pre className="mt-2 overflow-auto text-xs text-slate-600">{JSON.stringify(Submodulee0be02cbRoutes, null, 2)}</pre>
      </article>
    </section>
  )
}

export { Submodulee0be02cbRoutes }
export default Submodulee0be02cbWorkspace

