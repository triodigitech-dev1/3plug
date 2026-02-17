const Submodule6bec0f76Routes = {
  dashboard: 'loyalty-programs/dashboard',
  list: 'loyalty-programs/list',
  create: 'loyalty-programs/create',
  detail: 'loyalty-programs/detail/:id',
  edit: 'loyalty-programs/edit/:id',
  approvals: 'loyalty-programs/approvals',
  reports: 'loyalty-programs/reports',
  analytics: 'loyalty-programs/analytics',
}

function Submodule6bec0f76Workspace() {
  return (
    <section className="space-y-4">
      <header className="rounded-xl border border-slate-300/60 bg-white p-4">
        <h3 className="text-base font-bold text-slate-800">loyalty-programs</h3>
        <p className="text-sm text-slate-600">Scaffold workspace generated from deep-work component maps.</p>
      </header>

      <article className="rounded-xl border border-slate-300/60 bg-white p-4">
        <p className="text-sm font-semibold text-slate-700">Screen routes</p>
        <pre className="mt-2 overflow-auto text-xs text-slate-600">{JSON.stringify(Submodule6bec0f76Routes, null, 2)}</pre>
      </article>
    </section>
  )
}

export { Submodule6bec0f76Routes }
export default Submodule6bec0f76Workspace

