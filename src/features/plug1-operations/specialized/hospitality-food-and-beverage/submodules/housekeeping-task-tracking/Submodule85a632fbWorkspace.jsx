const Submodule85a632fbRoutes = {
  dashboard: 'housekeeping-task-tracking/dashboard',
  list: 'housekeeping-task-tracking/list',
  create: 'housekeeping-task-tracking/create',
  detail: 'housekeeping-task-tracking/detail/:id',
  edit: 'housekeeping-task-tracking/edit/:id',
  approvals: 'housekeeping-task-tracking/approvals',
  reports: 'housekeeping-task-tracking/reports',
  analytics: 'housekeeping-task-tracking/analytics',
}

function Submodule85a632fbWorkspace() {
  return (
    <section className="space-y-4">
      <header className="rounded-xl border border-slate-300/60 bg-white p-4">
        <h3 className="text-base font-bold text-slate-800">housekeeping-task-tracking</h3>
        <p className="text-sm text-slate-600">Scaffold workspace generated from deep-work component maps.</p>
      </header>

      <article className="rounded-xl border border-slate-300/60 bg-white p-4">
        <p className="text-sm font-semibold text-slate-700">Screen routes</p>
        <pre className="mt-2 overflow-auto text-xs text-slate-600">{JSON.stringify(Submodule85a632fbRoutes, null, 2)}</pre>
      </article>
    </section>
  )
}

export { Submodule85a632fbRoutes }
export default Submodule85a632fbWorkspace

