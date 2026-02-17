const Submodule82526a72Routes = {
  dashboard: 'route-optimization/dashboard',
  list: 'route-optimization/list',
  create: 'route-optimization/create',
  detail: 'route-optimization/detail/:id',
  edit: 'route-optimization/edit/:id',
  approvals: 'route-optimization/approvals',
  reports: 'route-optimization/reports',
  analytics: 'route-optimization/analytics',
}

function Submodule82526a72Workspace() {
  return (
    <section className="space-y-4">
      <header className="rounded-xl border border-slate-300/60 bg-white p-4">
        <h3 className="text-base font-bold text-slate-800">route-optimization</h3>
        <p className="text-sm text-slate-600">Scaffold workspace generated from deep-work component maps.</p>
      </header>

      <article className="rounded-xl border border-slate-300/60 bg-white p-4">
        <p className="text-sm font-semibold text-slate-700">Screen routes</p>
        <pre className="mt-2 overflow-auto text-xs text-slate-600">{JSON.stringify(Submodule82526a72Routes, null, 2)}</pre>
      </article>
    </section>
  )
}

export { Submodule82526a72Routes }
export default Submodule82526a72Workspace

