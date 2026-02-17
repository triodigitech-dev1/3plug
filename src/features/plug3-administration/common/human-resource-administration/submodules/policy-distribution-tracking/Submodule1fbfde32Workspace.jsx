const Submodule1fbfde32Routes = {
  dashboard: 'policy-distribution-tracking/dashboard',
  list: 'policy-distribution-tracking/list',
  create: 'policy-distribution-tracking/create',
  detail: 'policy-distribution-tracking/detail/:id',
  edit: 'policy-distribution-tracking/edit/:id',
  approvals: 'policy-distribution-tracking/approvals',
  reports: 'policy-distribution-tracking/reports',
  analytics: 'policy-distribution-tracking/analytics',
}

function Submodule1fbfde32Workspace() {
  return (
    <section className="space-y-4">
      <header className="rounded-xl border border-slate-300/60 bg-white p-4">
        <h3 className="text-base font-bold text-slate-800">policy-distribution-tracking</h3>
        <p className="text-sm text-slate-600">Scaffold workspace generated from deep-work component maps.</p>
      </header>

      <article className="rounded-xl border border-slate-300/60 bg-white p-4">
        <p className="text-sm font-semibold text-slate-700">Screen routes</p>
        <pre className="mt-2 overflow-auto text-xs text-slate-600">{JSON.stringify(Submodule1fbfde32Routes, null, 2)}</pre>
      </article>
    </section>
  )
}

export { Submodule1fbfde32Routes }
export default Submodule1fbfde32Workspace

