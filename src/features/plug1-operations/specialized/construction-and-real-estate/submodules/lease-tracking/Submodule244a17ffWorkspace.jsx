const Submodule244a17ffRoutes = {
  dashboard: 'lease-tracking/dashboard',
  list: 'lease-tracking/list',
  create: 'lease-tracking/create',
  detail: 'lease-tracking/detail/:id',
  edit: 'lease-tracking/edit/:id',
  approvals: 'lease-tracking/approvals',
  reports: 'lease-tracking/reports',
  analytics: 'lease-tracking/analytics',
}

function Submodule244a17ffWorkspace() {
  return (
    <section className="space-y-4">
      <header className="rounded-xl border border-slate-300/60 bg-white p-4">
        <h3 className="text-base font-bold text-slate-800">lease-tracking</h3>
        <p className="text-sm text-slate-600">Scaffold workspace generated from deep-work component maps.</p>
      </header>

      <article className="rounded-xl border border-slate-300/60 bg-white p-4">
        <p className="text-sm font-semibold text-slate-700">Screen routes</p>
        <pre className="mt-2 overflow-auto text-xs text-slate-600">{JSON.stringify(Submodule244a17ffRoutes, null, 2)}</pre>
      </article>
    </section>
  )
}

export { Submodule244a17ffRoutes }
export default Submodule244a17ffWorkspace

