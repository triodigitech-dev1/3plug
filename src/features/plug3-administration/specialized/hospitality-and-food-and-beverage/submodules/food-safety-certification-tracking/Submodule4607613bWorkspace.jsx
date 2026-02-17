const Submodule4607613bRoutes = {
  dashboard: 'food-safety-certification-tracking/dashboard',
  list: 'food-safety-certification-tracking/list',
  create: 'food-safety-certification-tracking/create',
  detail: 'food-safety-certification-tracking/detail/:id',
  edit: 'food-safety-certification-tracking/edit/:id',
  approvals: 'food-safety-certification-tracking/approvals',
  reports: 'food-safety-certification-tracking/reports',
  analytics: 'food-safety-certification-tracking/analytics',
}

function Submodule4607613bWorkspace() {
  return (
    <section className="space-y-4">
      <header className="rounded-xl border border-slate-300/60 bg-white p-4">
        <h3 className="text-base font-bold text-slate-800">food-safety-certification-tracking</h3>
        <p className="text-sm text-slate-600">Scaffold workspace generated from deep-work component maps.</p>
      </header>

      <article className="rounded-xl border border-slate-300/60 bg-white p-4">
        <p className="text-sm font-semibold text-slate-700">Screen routes</p>
        <pre className="mt-2 overflow-auto text-xs text-slate-600">{JSON.stringify(Submodule4607613bRoutes, null, 2)}</pre>
      </article>
    </section>
  )
}

export { Submodule4607613bRoutes }
export default Submodule4607613bWorkspace

