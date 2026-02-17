const Submodule2902dc64Routes = {
  dashboard: 'transport-permits-management/dashboard',
  list: 'transport-permits-management/list',
  create: 'transport-permits-management/create',
  detail: 'transport-permits-management/detail/:id',
  edit: 'transport-permits-management/edit/:id',
  approvals: 'transport-permits-management/approvals',
  reports: 'transport-permits-management/reports',
  analytics: 'transport-permits-management/analytics',
}

function Submodule2902dc64Workspace() {
  return (
    <section className="space-y-4">
      <header className="rounded-xl border border-slate-300/60 bg-white p-4">
        <h3 className="text-base font-bold text-slate-800">transport-permits-management</h3>
        <p className="text-sm text-slate-600">Scaffold workspace generated from deep-work component maps.</p>
      </header>

      <article className="rounded-xl border border-slate-300/60 bg-white p-4">
        <p className="text-sm font-semibold text-slate-700">Screen routes</p>
        <pre className="mt-2 overflow-auto text-xs text-slate-600">{JSON.stringify(Submodule2902dc64Routes, null, 2)}</pre>
      </article>
    </section>
  )
}

export { Submodule2902dc64Routes }
export default Submodule2902dc64Workspace

