const Submoduleecb01728Routes = {
  dashboard: 'service-compliance-documentation/dashboard',
  list: 'service-compliance-documentation/list',
  create: 'service-compliance-documentation/create',
  detail: 'service-compliance-documentation/detail/:id',
  edit: 'service-compliance-documentation/edit/:id',
  approvals: 'service-compliance-documentation/approvals',
  reports: 'service-compliance-documentation/reports',
  analytics: 'service-compliance-documentation/analytics',
}

function Submoduleecb01728Workspace() {
  return (
    <section className="space-y-4">
      <header className="rounded-xl border border-slate-300/60 bg-white p-4">
        <h3 className="text-base font-bold text-slate-800">service-compliance-documentation</h3>
        <p className="text-sm text-slate-600">Scaffold workspace generated from deep-work component maps.</p>
      </header>

      <article className="rounded-xl border border-slate-300/60 bg-white p-4">
        <p className="text-sm font-semibold text-slate-700">Screen routes</p>
        <pre className="mt-2 overflow-auto text-xs text-slate-600">{JSON.stringify(Submoduleecb01728Routes, null, 2)}</pre>
      </article>
    </section>
  )
}

export { Submoduleecb01728Routes }
export default Submoduleecb01728Workspace

