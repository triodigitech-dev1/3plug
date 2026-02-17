const Submodule37e847ffRoutes = {
  dashboard: 'attendance-tracking/dashboard',
  list: 'attendance-tracking/list',
  create: 'attendance-tracking/create',
  detail: 'attendance-tracking/detail/:id',
  edit: 'attendance-tracking/edit/:id',
  approvals: 'attendance-tracking/approvals',
  reports: 'attendance-tracking/reports',
  analytics: 'attendance-tracking/analytics',
}

function Submodule37e847ffWorkspace() {
  return (
    <section className="space-y-4">
      <header className="rounded-xl border border-slate-300/60 bg-white p-4">
        <h3 className="text-base font-bold text-slate-800">attendance-tracking</h3>
        <p className="text-sm text-slate-600">Scaffold workspace generated from deep-work component maps.</p>
      </header>

      <article className="rounded-xl border border-slate-300/60 bg-white p-4">
        <p className="text-sm font-semibold text-slate-700">Screen routes</p>
        <pre className="mt-2 overflow-auto text-xs text-slate-600">{JSON.stringify(Submodule37e847ffRoutes, null, 2)}</pre>
      </article>
    </section>
  )
}

export { Submodule37e847ffRoutes }
export default Submodule37e847ffWorkspace

