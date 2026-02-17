const Submodule7f5f2b99Routes = {
  dashboard: 'donor-compliance-reporting/dashboard',
  list: 'donor-compliance-reporting/list',
  create: 'donor-compliance-reporting/create',
  detail: 'donor-compliance-reporting/detail/:id',
  edit: 'donor-compliance-reporting/edit/:id',
  approvals: 'donor-compliance-reporting/approvals',
  reports: 'donor-compliance-reporting/reports',
  analytics: 'donor-compliance-reporting/analytics',
}

function Submodule7f5f2b99Workspace() {
  return (
    <section className="space-y-4">
      <header className="rounded-xl border border-slate-300/60 bg-white p-4">
        <h3 className="text-base font-bold text-slate-800">donor-compliance-reporting</h3>
        <p className="text-sm text-slate-600">Scaffold workspace generated from deep-work component maps.</p>
      </header>

      <article className="rounded-xl border border-slate-300/60 bg-white p-4">
        <p className="text-sm font-semibold text-slate-700">Screen routes</p>
        <pre className="mt-2 overflow-auto text-xs text-slate-600">{JSON.stringify(Submodule7f5f2b99Routes, null, 2)}</pre>
      </article>
    </section>
  )
}

export { Submodule7f5f2b99Routes }
export default Submodule7f5f2b99Workspace

