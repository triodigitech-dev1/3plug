const Submodule8a580327Routes = {
  dashboard: 'fleet-licensing-documentation/dashboard',
  list: 'fleet-licensing-documentation/list',
  create: 'fleet-licensing-documentation/create',
  detail: 'fleet-licensing-documentation/detail/:id',
  edit: 'fleet-licensing-documentation/edit/:id',
  approvals: 'fleet-licensing-documentation/approvals',
  reports: 'fleet-licensing-documentation/reports',
  analytics: 'fleet-licensing-documentation/analytics',
}

function Submodule8a580327Workspace() {
  return (
    <section className="space-y-4">
      <header className="rounded-xl border border-slate-300/60 bg-white p-4">
        <h3 className="text-base font-bold text-slate-800">fleet-licensing-documentation</h3>
        <p className="text-sm text-slate-600">Scaffold workspace generated from deep-work component maps.</p>
      </header>

      <article className="rounded-xl border border-slate-300/60 bg-white p-4">
        <p className="text-sm font-semibold text-slate-700">Screen routes</p>
        <pre className="mt-2 overflow-auto text-xs text-slate-600">{JSON.stringify(Submodule8a580327Routes, null, 2)}</pre>
      </article>
    </section>
  )
}

export { Submodule8a580327Routes }
export default Submodule8a580327Workspace

