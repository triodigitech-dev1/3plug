const Submodule91ba8498Routes = {
  dashboard: 'cross-docking-workflows/dashboard',
  list: 'cross-docking-workflows/list',
  create: 'cross-docking-workflows/create',
  detail: 'cross-docking-workflows/detail/:id',
  edit: 'cross-docking-workflows/edit/:id',
  approvals: 'cross-docking-workflows/approvals',
  reports: 'cross-docking-workflows/reports',
  analytics: 'cross-docking-workflows/analytics',
}

function Submodule91ba8498Workspace() {
  return (
    <section className="space-y-4">
      <header className="rounded-xl border border-slate-300/60 bg-white p-4">
        <h3 className="text-base font-bold text-slate-800">cross-docking-workflows</h3>
        <p className="text-sm text-slate-600">Scaffold workspace generated from deep-work component maps.</p>
      </header>

      <article className="rounded-xl border border-slate-300/60 bg-white p-4">
        <p className="text-sm font-semibold text-slate-700">Screen routes</p>
        <pre className="mt-2 overflow-auto text-xs text-slate-600">{JSON.stringify(Submodule91ba8498Routes, null, 2)}</pre>
      </article>
    </section>
  )
}

export { Submodule91ba8498Routes }
export default Submodule91ba8498Workspace

