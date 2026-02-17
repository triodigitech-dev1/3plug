const Submoduled3854e7cRoutes = {
  dashboard: 'operational-budgeting/dashboard',
  list: 'operational-budgeting/list',
  create: 'operational-budgeting/create',
  detail: 'operational-budgeting/detail/:id',
  edit: 'operational-budgeting/edit/:id',
  approvals: 'operational-budgeting/approvals',
  reports: 'operational-budgeting/reports',
  analytics: 'operational-budgeting/analytics',
}

function Submoduled3854e7cWorkspace() {
  return (
    <section className="space-y-4">
      <header className="rounded-xl border border-slate-300/60 bg-white p-4">
        <h3 className="text-base font-bold text-slate-800">operational-budgeting</h3>
        <p className="text-sm text-slate-600">Scaffold workspace generated from deep-work component maps.</p>
      </header>

      <article className="rounded-xl border border-slate-300/60 bg-white p-4">
        <p className="text-sm font-semibold text-slate-700">Screen routes</p>
        <pre className="mt-2 overflow-auto text-xs text-slate-600">{JSON.stringify(Submoduled3854e7cRoutes, null, 2)}</pre>
      </article>
    </section>
  )
}

export { Submoduled3854e7cRoutes }
export default Submoduled3854e7cWorkspace

