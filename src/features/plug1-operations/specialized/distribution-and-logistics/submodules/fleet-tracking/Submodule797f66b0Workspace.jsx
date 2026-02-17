const Submodule797f66b0Routes = {
  dashboard: 'fleet-tracking/dashboard',
  list: 'fleet-tracking/list',
  create: 'fleet-tracking/create',
  detail: 'fleet-tracking/detail/:id',
  edit: 'fleet-tracking/edit/:id',
  approvals: 'fleet-tracking/approvals',
  reports: 'fleet-tracking/reports',
  analytics: 'fleet-tracking/analytics',
}

function Submodule797f66b0Workspace() {
  return (
    <section className="space-y-4">
      <header className="rounded-xl border border-slate-300/60 bg-white p-4">
        <h3 className="text-base font-bold text-slate-800">fleet-tracking</h3>
        <p className="text-sm text-slate-600">Scaffold workspace generated from deep-work component maps.</p>
      </header>

      <article className="rounded-xl border border-slate-300/60 bg-white p-4">
        <p className="text-sm font-semibold text-slate-700">Screen routes</p>
        <pre className="mt-2 overflow-auto text-xs text-slate-600">{JSON.stringify(Submodule797f66b0Routes, null, 2)}</pre>
      </article>
    </section>
  )
}

export { Submodule797f66b0Routes }
export default Submodule797f66b0Workspace

