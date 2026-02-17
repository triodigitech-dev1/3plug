const Submodule4163fa29Routes = {
  dashboard: 'ensures-regulatory-compliance/dashboard',
  list: 'ensures-regulatory-compliance/list',
  create: 'ensures-regulatory-compliance/create',
  detail: 'ensures-regulatory-compliance/detail/:id',
  edit: 'ensures-regulatory-compliance/edit/:id',
  approvals: 'ensures-regulatory-compliance/approvals',
  reports: 'ensures-regulatory-compliance/reports',
  analytics: 'ensures-regulatory-compliance/analytics',
}

function Submodule4163fa29Workspace() {
  return (
    <section className="space-y-4">
      <header className="rounded-xl border border-slate-300/60 bg-white p-4">
        <h3 className="text-base font-bold text-slate-800">ensures-regulatory-compliance</h3>
        <p className="text-sm text-slate-600">Scaffold workspace generated from deep-work component maps.</p>
      </header>

      <article className="rounded-xl border border-slate-300/60 bg-white p-4">
        <p className="text-sm font-semibold text-slate-700">Screen routes</p>
        <pre className="mt-2 overflow-auto text-xs text-slate-600">{JSON.stringify(Submodule4163fa29Routes, null, 2)}</pre>
      </article>
    </section>
  )
}

export { Submodule4163fa29Routes }
export default Submodule4163fa29Workspace

