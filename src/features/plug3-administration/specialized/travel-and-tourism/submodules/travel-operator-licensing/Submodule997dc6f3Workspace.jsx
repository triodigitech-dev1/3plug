const Submodule997dc6f3Routes = {
  dashboard: 'travel-operator-licensing/dashboard',
  list: 'travel-operator-licensing/list',
  create: 'travel-operator-licensing/create',
  detail: 'travel-operator-licensing/detail/:id',
  edit: 'travel-operator-licensing/edit/:id',
  approvals: 'travel-operator-licensing/approvals',
  reports: 'travel-operator-licensing/reports',
  analytics: 'travel-operator-licensing/analytics',
}

function Submodule997dc6f3Workspace() {
  return (
    <section className="space-y-4">
      <header className="rounded-xl border border-slate-300/60 bg-white p-4">
        <h3 className="text-base font-bold text-slate-800">travel-operator-licensing</h3>
        <p className="text-sm text-slate-600">Scaffold workspace generated from deep-work component maps.</p>
      </header>

      <article className="rounded-xl border border-slate-300/60 bg-white p-4">
        <p className="text-sm font-semibold text-slate-700">Screen routes</p>
        <pre className="mt-2 overflow-auto text-xs text-slate-600">{JSON.stringify(Submodule997dc6f3Routes, null, 2)}</pre>
      </article>
    </section>
  )
}

export { Submodule997dc6f3Routes }
export default Submodule997dc6f3Workspace

