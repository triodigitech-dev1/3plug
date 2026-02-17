const Submodule9805038cRoutes = {
  dashboard: 'daily-cash-reconciliation/dashboard',
  list: 'daily-cash-reconciliation/list',
  create: 'daily-cash-reconciliation/create',
  detail: 'daily-cash-reconciliation/detail/:id',
  edit: 'daily-cash-reconciliation/edit/:id',
  approvals: 'daily-cash-reconciliation/approvals',
  reports: 'daily-cash-reconciliation/reports',
  analytics: 'daily-cash-reconciliation/analytics',
}

function Submodule9805038cWorkspace() {
  return (
    <section className="space-y-4">
      <header className="rounded-xl border border-slate-300/60 bg-white p-4">
        <h3 className="text-base font-bold text-slate-800">daily-cash-reconciliation</h3>
        <p className="text-sm text-slate-600">Scaffold workspace generated from deep-work component maps.</p>
      </header>

      <article className="rounded-xl border border-slate-300/60 bg-white p-4">
        <p className="text-sm font-semibold text-slate-700">Screen routes</p>
        <pre className="mt-2 overflow-auto text-xs text-slate-600">{JSON.stringify(Submodule9805038cRoutes, null, 2)}</pre>
      </article>
    </section>
  )
}

export { Submodule9805038cRoutes }
export default Submodule9805038cWorkspace

