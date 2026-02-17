const Submoduled43a88bfRoutes = {
  dashboard: 'pricing-strategy-management/dashboard',
  list: 'pricing-strategy-management/list',
  create: 'pricing-strategy-management/create',
  detail: 'pricing-strategy-management/detail/:id',
  edit: 'pricing-strategy-management/edit/:id',
  approvals: 'pricing-strategy-management/approvals',
  reports: 'pricing-strategy-management/reports',
  analytics: 'pricing-strategy-management/analytics',
}

function Submoduled43a88bfWorkspace() {
  return (
    <section className="space-y-4">
      <header className="rounded-xl border border-slate-300/60 bg-white p-4">
        <h3 className="text-base font-bold text-slate-800">pricing-strategy-management</h3>
        <p className="text-sm text-slate-600">Scaffold workspace generated from deep-work component maps.</p>
      </header>

      <article className="rounded-xl border border-slate-300/60 bg-white p-4">
        <p className="text-sm font-semibold text-slate-700">Screen routes</p>
        <pre className="mt-2 overflow-auto text-xs text-slate-600">{JSON.stringify(Submoduled43a88bfRoutes, null, 2)}</pre>
      </article>
    </section>
  )
}

export { Submoduled43a88bfRoutes }
export default Submoduled43a88bfWorkspace

