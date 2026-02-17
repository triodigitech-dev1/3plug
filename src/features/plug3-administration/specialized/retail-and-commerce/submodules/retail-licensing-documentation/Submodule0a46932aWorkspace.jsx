const Submodule0a46932aRoutes = {
  dashboard: 'retail-licensing-documentation/dashboard',
  list: 'retail-licensing-documentation/list',
  create: 'retail-licensing-documentation/create',
  detail: 'retail-licensing-documentation/detail/:id',
  edit: 'retail-licensing-documentation/edit/:id',
  approvals: 'retail-licensing-documentation/approvals',
  reports: 'retail-licensing-documentation/reports',
  analytics: 'retail-licensing-documentation/analytics',
}

function Submodule0a46932aWorkspace() {
  return (
    <section className="space-y-4">
      <header className="rounded-xl border border-slate-300/60 bg-white p-4">
        <h3 className="text-base font-bold text-slate-800">retail-licensing-documentation</h3>
        <p className="text-sm text-slate-600">Scaffold workspace generated from deep-work component maps.</p>
      </header>

      <article className="rounded-xl border border-slate-300/60 bg-white p-4">
        <p className="text-sm font-semibold text-slate-700">Screen routes</p>
        <pre className="mt-2 overflow-auto text-xs text-slate-600">{JSON.stringify(Submodule0a46932aRoutes, null, 2)}</pre>
      </article>
    </section>
  )
}

export { Submodule0a46932aRoutes }
export default Submodule0a46932aWorkspace

