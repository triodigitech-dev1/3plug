const Submodulef0a3a6e0Routes = {
  dashboard: 'production-compliance-documentation/dashboard',
  list: 'production-compliance-documentation/list',
  create: 'production-compliance-documentation/create',
  detail: 'production-compliance-documentation/detail/:id',
  edit: 'production-compliance-documentation/edit/:id',
  approvals: 'production-compliance-documentation/approvals',
  reports: 'production-compliance-documentation/reports',
  analytics: 'production-compliance-documentation/analytics',
}

function Submodulef0a3a6e0Workspace() {
  return (
    <section className="space-y-4">
      <header className="rounded-xl border border-slate-300/60 bg-white p-4">
        <h3 className="text-base font-bold text-slate-800">production-compliance-documentation</h3>
        <p className="text-sm text-slate-600">Scaffold workspace generated from deep-work component maps.</p>
      </header>

      <article className="rounded-xl border border-slate-300/60 bg-white p-4">
        <p className="text-sm font-semibold text-slate-700">Screen routes</p>
        <pre className="mt-2 overflow-auto text-xs text-slate-600">{JSON.stringify(Submodulef0a3a6e0Routes, null, 2)}</pre>
      </article>
    </section>
  )
}

export { Submodulef0a3a6e0Routes }
export default Submodulef0a3a6e0Workspace

