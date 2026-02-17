const Submodulef12973a2Routes = {
  dashboard: 'safety-compliance-documentation/dashboard',
  list: 'safety-compliance-documentation/list',
  create: 'safety-compliance-documentation/create',
  detail: 'safety-compliance-documentation/detail/:id',
  edit: 'safety-compliance-documentation/edit/:id',
  approvals: 'safety-compliance-documentation/approvals',
  reports: 'safety-compliance-documentation/reports',
  analytics: 'safety-compliance-documentation/analytics',
}

function Submodulef12973a2Workspace() {
  return (
    <section className="space-y-4">
      <header className="rounded-xl border border-slate-300/60 bg-white p-4">
        <h3 className="text-base font-bold text-slate-800">safety-compliance-documentation</h3>
        <p className="text-sm text-slate-600">Scaffold workspace generated from deep-work component maps.</p>
      </header>

      <article className="rounded-xl border border-slate-300/60 bg-white p-4">
        <p className="text-sm font-semibold text-slate-700">Screen routes</p>
        <pre className="mt-2 overflow-auto text-xs text-slate-600">{JSON.stringify(Submodulef12973a2Routes, null, 2)}</pre>
      </article>
    </section>
  )
}

export { Submodulef12973a2Routes }
export default Submodulef12973a2Workspace

