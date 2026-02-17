const Submodule91afe479Routes = {
  dashboard: 'site-material-tracking/dashboard',
  list: 'site-material-tracking/list',
  create: 'site-material-tracking/create',
  detail: 'site-material-tracking/detail/:id',
  edit: 'site-material-tracking/edit/:id',
  approvals: 'site-material-tracking/approvals',
  reports: 'site-material-tracking/reports',
  analytics: 'site-material-tracking/analytics',
}

function Submodule91afe479Workspace() {
  return (
    <section className="space-y-4">
      <header className="rounded-xl border border-slate-300/60 bg-white p-4">
        <h3 className="text-base font-bold text-slate-800">site-material-tracking</h3>
        <p className="text-sm text-slate-600">Scaffold workspace generated from deep-work component maps.</p>
      </header>

      <article className="rounded-xl border border-slate-300/60 bg-white p-4">
        <p className="text-sm font-semibold text-slate-700">Screen routes</p>
        <pre className="mt-2 overflow-auto text-xs text-slate-600">{JSON.stringify(Submodule91afe479Routes, null, 2)}</pre>
      </article>
    </section>
  )
}

export { Submodule91afe479Routes }
export default Submodule91afe479Workspace

