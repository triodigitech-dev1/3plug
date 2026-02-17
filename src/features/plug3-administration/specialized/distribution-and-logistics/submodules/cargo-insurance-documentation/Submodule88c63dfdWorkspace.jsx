const Submodule88c63dfdRoutes = {
  dashboard: 'cargo-insurance-documentation/dashboard',
  list: 'cargo-insurance-documentation/list',
  create: 'cargo-insurance-documentation/create',
  detail: 'cargo-insurance-documentation/detail/:id',
  edit: 'cargo-insurance-documentation/edit/:id',
  approvals: 'cargo-insurance-documentation/approvals',
  reports: 'cargo-insurance-documentation/reports',
  analytics: 'cargo-insurance-documentation/analytics',
}

function Submodule88c63dfdWorkspace() {
  return (
    <section className="space-y-4">
      <header className="rounded-xl border border-slate-300/60 bg-white p-4">
        <h3 className="text-base font-bold text-slate-800">cargo-insurance-documentation</h3>
        <p className="text-sm text-slate-600">Scaffold workspace generated from deep-work component maps.</p>
      </header>

      <article className="rounded-xl border border-slate-300/60 bg-white p-4">
        <p className="text-sm font-semibold text-slate-700">Screen routes</p>
        <pre className="mt-2 overflow-auto text-xs text-slate-600">{JSON.stringify(Submodule88c63dfdRoutes, null, 2)}</pre>
      </article>
    </section>
  )
}

export { Submodule88c63dfdRoutes }
export default Submodule88c63dfdWorkspace

