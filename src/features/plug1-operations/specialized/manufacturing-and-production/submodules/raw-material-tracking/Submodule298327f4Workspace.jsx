const Submodule298327f4Routes = {
  dashboard: 'raw-material-tracking/dashboard',
  list: 'raw-material-tracking/list',
  create: 'raw-material-tracking/create',
  detail: 'raw-material-tracking/detail/:id',
  edit: 'raw-material-tracking/edit/:id',
  approvals: 'raw-material-tracking/approvals',
  reports: 'raw-material-tracking/reports',
  analytics: 'raw-material-tracking/analytics',
}

function Submodule298327f4Workspace() {
  return (
    <section className="space-y-4">
      <header className="rounded-xl border border-slate-300/60 bg-white p-4">
        <h3 className="text-base font-bold text-slate-800">raw-material-tracking</h3>
        <p className="text-sm text-slate-600">Scaffold workspace generated from deep-work component maps.</p>
      </header>

      <article className="rounded-xl border border-slate-300/60 bg-white p-4">
        <p className="text-sm font-semibold text-slate-700">Screen routes</p>
        <pre className="mt-2 overflow-auto text-xs text-slate-600">{JSON.stringify(Submodule298327f4Routes, null, 2)}</pre>
      </article>
    </section>
  )
}

export { Submodule298327f4Routes }
export default Submodule298327f4Workspace

