const Submodule9d9205adRoutes = {
  dashboard: 'petty-cash-tracking/dashboard',
  list: 'petty-cash-tracking/list',
  create: 'petty-cash-tracking/create',
  detail: 'petty-cash-tracking/detail/:id',
  edit: 'petty-cash-tracking/edit/:id',
  approvals: 'petty-cash-tracking/approvals',
  reports: 'petty-cash-tracking/reports',
  analytics: 'petty-cash-tracking/analytics',
}

function Submodule9d9205adWorkspace() {
  return (
    <section className="space-y-4">
      <header className="rounded-xl border border-slate-300/60 bg-white p-4">
        <h3 className="text-base font-bold text-slate-800">petty-cash-tracking</h3>
        <p className="text-sm text-slate-600">Scaffold workspace generated from deep-work component maps.</p>
      </header>

      <article className="rounded-xl border border-slate-300/60 bg-white p-4">
        <p className="text-sm font-semibold text-slate-700">Screen routes</p>
        <pre className="mt-2 overflow-auto text-xs text-slate-600">{JSON.stringify(Submodule9d9205adRoutes, null, 2)}</pre>
      </article>
    </section>
  )
}

export { Submodule9d9205adRoutes }
export default Submodule9d9205adWorkspace

