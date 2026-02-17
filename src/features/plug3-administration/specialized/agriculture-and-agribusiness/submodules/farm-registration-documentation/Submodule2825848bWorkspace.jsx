const Submodule2825848bRoutes = {
  dashboard: 'farm-registration-documentation/dashboard',
  list: 'farm-registration-documentation/list',
  create: 'farm-registration-documentation/create',
  detail: 'farm-registration-documentation/detail/:id',
  edit: 'farm-registration-documentation/edit/:id',
  approvals: 'farm-registration-documentation/approvals',
  reports: 'farm-registration-documentation/reports',
  analytics: 'farm-registration-documentation/analytics',
}

function Submodule2825848bWorkspace() {
  return (
    <section className="space-y-4">
      <header className="rounded-xl border border-slate-300/60 bg-white p-4">
        <h3 className="text-base font-bold text-slate-800">farm-registration-documentation</h3>
        <p className="text-sm text-slate-600">Scaffold workspace generated from deep-work component maps.</p>
      </header>

      <article className="rounded-xl border border-slate-300/60 bg-white p-4">
        <p className="text-sm font-semibold text-slate-700">Screen routes</p>
        <pre className="mt-2 overflow-auto text-xs text-slate-600">{JSON.stringify(Submodule2825848bRoutes, null, 2)}</pre>
      </article>
    </section>
  )
}

export { Submodule2825848bRoutes }
export default Submodule2825848bWorkspace

