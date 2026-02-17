const Submodule3600bc63Routes = {
  dashboard: 'regulatory-reporting-compliance/dashboard',
  list: 'regulatory-reporting-compliance/list',
  create: 'regulatory-reporting-compliance/create',
  detail: 'regulatory-reporting-compliance/detail/:id',
  edit: 'regulatory-reporting-compliance/edit/:id',
  approvals: 'regulatory-reporting-compliance/approvals',
  reports: 'regulatory-reporting-compliance/reports',
  analytics: 'regulatory-reporting-compliance/analytics',
}

function Submodule3600bc63Workspace() {
  return (
    <section className="space-y-4">
      <header className="rounded-xl border border-slate-300/60 bg-white p-4">
        <h3 className="text-base font-bold text-slate-800">regulatory-reporting-compliance</h3>
        <p className="text-sm text-slate-600">Scaffold workspace generated from deep-work component maps.</p>
      </header>

      <article className="rounded-xl border border-slate-300/60 bg-white p-4">
        <p className="text-sm font-semibold text-slate-700">Screen routes</p>
        <pre className="mt-2 overflow-auto text-xs text-slate-600">{JSON.stringify(Submodule3600bc63Routes, null, 2)}</pre>
      </article>
    </section>
  )
}

export { Submodule3600bc63Routes }
export default Submodule3600bc63Workspace

