const Submodule84356631Routes = {
  dashboard: 'pharmacy-regulatory-compliance/dashboard',
  list: 'pharmacy-regulatory-compliance/list',
  create: 'pharmacy-regulatory-compliance/create',
  detail: 'pharmacy-regulatory-compliance/detail/:id',
  edit: 'pharmacy-regulatory-compliance/edit/:id',
  approvals: 'pharmacy-regulatory-compliance/approvals',
  reports: 'pharmacy-regulatory-compliance/reports',
  analytics: 'pharmacy-regulatory-compliance/analytics',
}

function Submodule84356631Workspace() {
  return (
    <section className="space-y-4">
      <header className="rounded-xl border border-slate-300/60 bg-white p-4">
        <h3 className="text-base font-bold text-slate-800">pharmacy-regulatory-compliance</h3>
        <p className="text-sm text-slate-600">Scaffold workspace generated from deep-work component maps.</p>
      </header>

      <article className="rounded-xl border border-slate-300/60 bg-white p-4">
        <p className="text-sm font-semibold text-slate-700">Screen routes</p>
        <pre className="mt-2 overflow-auto text-xs text-slate-600">{JSON.stringify(Submodule84356631Routes, null, 2)}</pre>
      </article>
    </section>
  )
}

export { Submodule84356631Routes }
export default Submodule84356631Workspace

