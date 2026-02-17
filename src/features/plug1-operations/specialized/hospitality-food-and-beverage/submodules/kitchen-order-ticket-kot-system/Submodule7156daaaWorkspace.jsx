const Submodule7156daaaRoutes = {
  dashboard: 'kitchen-order-ticket-kot-system/dashboard',
  list: 'kitchen-order-ticket-kot-system/list',
  create: 'kitchen-order-ticket-kot-system/create',
  detail: 'kitchen-order-ticket-kot-system/detail/:id',
  edit: 'kitchen-order-ticket-kot-system/edit/:id',
  approvals: 'kitchen-order-ticket-kot-system/approvals',
  reports: 'kitchen-order-ticket-kot-system/reports',
  analytics: 'kitchen-order-ticket-kot-system/analytics',
}

function Submodule7156daaaWorkspace() {
  return (
    <section className="space-y-4">
      <header className="rounded-xl border border-slate-300/60 bg-white p-4">
        <h3 className="text-base font-bold text-slate-800">kitchen-order-ticket-kot-system</h3>
        <p className="text-sm text-slate-600">Scaffold workspace generated from deep-work component maps.</p>
      </header>

      <article className="rounded-xl border border-slate-300/60 bg-white p-4">
        <p className="text-sm font-semibold text-slate-700">Screen routes</p>
        <pre className="mt-2 overflow-auto text-xs text-slate-600">{JSON.stringify(Submodule7156daaaRoutes, null, 2)}</pre>
      </article>
    </section>
  )
}

export { Submodule7156daaaRoutes }
export default Submodule7156daaaWorkspace

