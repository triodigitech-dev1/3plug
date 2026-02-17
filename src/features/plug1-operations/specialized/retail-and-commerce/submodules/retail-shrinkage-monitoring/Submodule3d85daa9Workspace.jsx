const Submodule3d85daa9Routes = {
  dashboard: 'retail-shrinkage-monitoring/dashboard',
  list: 'retail-shrinkage-monitoring/list',
  create: 'retail-shrinkage-monitoring/create',
  detail: 'retail-shrinkage-monitoring/detail/:id',
  edit: 'retail-shrinkage-monitoring/edit/:id',
  approvals: 'retail-shrinkage-monitoring/approvals',
  reports: 'retail-shrinkage-monitoring/reports',
  analytics: 'retail-shrinkage-monitoring/analytics',
}

function Submodule3d85daa9Workspace() {
  return (
    <section className="space-y-4">
      <header className="rounded-xl border border-slate-300/60 bg-white p-4">
        <h3 className="text-base font-bold text-slate-800">retail-shrinkage-monitoring</h3>
        <p className="text-sm text-slate-600">Scaffold workspace generated from deep-work component maps.</p>
      </header>

      <article className="rounded-xl border border-slate-300/60 bg-white p-4">
        <p className="text-sm font-semibold text-slate-700">Screen routes</p>
        <pre className="mt-2 overflow-auto text-xs text-slate-600">{JSON.stringify(Submodule3d85daa9Routes, null, 2)}</pre>
      </article>
    </section>
  )
}

export { Submodule3d85daa9Routes }
export default Submodule3d85daa9Workspace

