const Submodule447f4890Routes = {
  dashboard: 'utility-regulatory-compliance/dashboard',
  list: 'utility-regulatory-compliance/list',
  create: 'utility-regulatory-compliance/create',
  detail: 'utility-regulatory-compliance/detail/:id',
  edit: 'utility-regulatory-compliance/edit/:id',
  approvals: 'utility-regulatory-compliance/approvals',
  reports: 'utility-regulatory-compliance/reports',
  analytics: 'utility-regulatory-compliance/analytics',
}

function Submodule447f4890Workspace() {
  return (
    <section className="space-y-4">
      <header className="rounded-xl border border-slate-300/60 bg-white p-4">
        <h3 className="text-base font-bold text-slate-800">utility-regulatory-compliance</h3>
        <p className="text-sm text-slate-600">Scaffold workspace generated from deep-work component maps.</p>
      </header>

      <article className="rounded-xl border border-slate-300/60 bg-white p-4">
        <p className="text-sm font-semibold text-slate-700">Screen routes</p>
        <pre className="mt-2 overflow-auto text-xs text-slate-600">{JSON.stringify(Submodule447f4890Routes, null, 2)}</pre>
      </article>
    </section>
  )
}

export { Submodule447f4890Routes }
export default Submodule447f4890Workspace

