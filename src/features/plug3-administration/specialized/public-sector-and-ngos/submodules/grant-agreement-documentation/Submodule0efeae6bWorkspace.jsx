const Submodule0efeae6bRoutes = {
  dashboard: 'grant-agreement-documentation/dashboard',
  list: 'grant-agreement-documentation/list',
  create: 'grant-agreement-documentation/create',
  detail: 'grant-agreement-documentation/detail/:id',
  edit: 'grant-agreement-documentation/edit/:id',
  approvals: 'grant-agreement-documentation/approvals',
  reports: 'grant-agreement-documentation/reports',
  analytics: 'grant-agreement-documentation/analytics',
}

function Submodule0efeae6bWorkspace() {
  return (
    <section className="space-y-4">
      <header className="rounded-xl border border-slate-300/60 bg-white p-4">
        <h3 className="text-base font-bold text-slate-800">grant-agreement-documentation</h3>
        <p className="text-sm text-slate-600">Scaffold workspace generated from deep-work component maps.</p>
      </header>

      <article className="rounded-xl border border-slate-300/60 bg-white p-4">
        <p className="text-sm font-semibold text-slate-700">Screen routes</p>
        <pre className="mt-2 overflow-auto text-xs text-slate-600">{JSON.stringify(Submodule0efeae6bRoutes, null, 2)}</pre>
      </article>
    </section>
  )
}

export { Submodule0efeae6bRoutes }
export default Submodule0efeae6bWorkspace

