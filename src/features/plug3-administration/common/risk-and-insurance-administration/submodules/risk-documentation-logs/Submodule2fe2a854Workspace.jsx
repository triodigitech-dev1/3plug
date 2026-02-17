const Submodule2fe2a854Routes = {
  dashboard: 'risk-documentation-logs/dashboard',
  list: 'risk-documentation-logs/list',
  create: 'risk-documentation-logs/create',
  detail: 'risk-documentation-logs/detail/:id',
  edit: 'risk-documentation-logs/edit/:id',
  approvals: 'risk-documentation-logs/approvals',
  reports: 'risk-documentation-logs/reports',
  analytics: 'risk-documentation-logs/analytics',
}

function Submodule2fe2a854Workspace() {
  return (
    <section className="space-y-4">
      <header className="rounded-xl border border-slate-300/60 bg-white p-4">
        <h3 className="text-base font-bold text-slate-800">risk-documentation-logs</h3>
        <p className="text-sm text-slate-600">Scaffold workspace generated from deep-work component maps.</p>
      </header>

      <article className="rounded-xl border border-slate-300/60 bg-white p-4">
        <p className="text-sm font-semibold text-slate-700">Screen routes</p>
        <pre className="mt-2 overflow-auto text-xs text-slate-600">{JSON.stringify(Submodule2fe2a854Routes, null, 2)}</pre>
      </article>
    </section>
  )
}

export { Submodule2fe2a854Routes }
export default Submodule2fe2a854Workspace

