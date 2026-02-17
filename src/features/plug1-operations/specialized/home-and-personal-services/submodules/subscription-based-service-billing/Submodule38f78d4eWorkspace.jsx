const Submodule38f78d4eRoutes = {
  dashboard: 'subscription-based-service-billing/dashboard',
  list: 'subscription-based-service-billing/list',
  create: 'subscription-based-service-billing/create',
  detail: 'subscription-based-service-billing/detail/:id',
  edit: 'subscription-based-service-billing/edit/:id',
  approvals: 'subscription-based-service-billing/approvals',
  reports: 'subscription-based-service-billing/reports',
  analytics: 'subscription-based-service-billing/analytics',
}

function Submodule38f78d4eWorkspace() {
  return (
    <section className="space-y-4">
      <header className="rounded-xl border border-slate-300/60 bg-white p-4">
        <h3 className="text-base font-bold text-slate-800">subscription-based-service-billing</h3>
        <p className="text-sm text-slate-600">Scaffold workspace generated from deep-work component maps.</p>
      </header>

      <article className="rounded-xl border border-slate-300/60 bg-white p-4">
        <p className="text-sm font-semibold text-slate-700">Screen routes</p>
        <pre className="mt-2 overflow-auto text-xs text-slate-600">{JSON.stringify(Submodule38f78d4eRoutes, null, 2)}</pre>
      </article>
    </section>
  )
}

export { Submodule38f78d4eRoutes }
export default Submodule38f78d4eWorkspace

