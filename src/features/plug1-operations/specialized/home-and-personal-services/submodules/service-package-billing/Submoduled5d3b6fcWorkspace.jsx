const Submoduled5d3b6fcRoutes = {
  dashboard: 'service-package-billing/dashboard',
  list: 'service-package-billing/list',
  create: 'service-package-billing/create',
  detail: 'service-package-billing/detail/:id',
  edit: 'service-package-billing/edit/:id',
  approvals: 'service-package-billing/approvals',
  reports: 'service-package-billing/reports',
  analytics: 'service-package-billing/analytics',
}

function Submoduled5d3b6fcWorkspace() {
  return (
    <section className="space-y-4">
      <header className="rounded-xl border border-slate-300/60 bg-white p-4">
        <h3 className="text-base font-bold text-slate-800">service-package-billing</h3>
        <p className="text-sm text-slate-600">Scaffold workspace generated from deep-work component maps.</p>
      </header>

      <article className="rounded-xl border border-slate-300/60 bg-white p-4">
        <p className="text-sm font-semibold text-slate-700">Screen routes</p>
        <pre className="mt-2 overflow-auto text-xs text-slate-600">{JSON.stringify(Submoduled5d3b6fcRoutes, null, 2)}</pre>
      </article>
    </section>
  )
}

export { Submoduled5d3b6fcRoutes }
export default Submoduled5d3b6fcWorkspace

