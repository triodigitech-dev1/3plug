const Submodule8adea01fRoutes = {
  dashboard: 'food-cost-percentage-tracking/dashboard',
  list: 'food-cost-percentage-tracking/list',
  create: 'food-cost-percentage-tracking/create',
  detail: 'food-cost-percentage-tracking/detail/:id',
  edit: 'food-cost-percentage-tracking/edit/:id',
  approvals: 'food-cost-percentage-tracking/approvals',
  reports: 'food-cost-percentage-tracking/reports',
  analytics: 'food-cost-percentage-tracking/analytics',
}

function Submodule8adea01fWorkspace() {
  return (
    <section className="space-y-4">
      <header className="rounded-xl border border-slate-300/60 bg-white p-4">
        <h3 className="text-base font-bold text-slate-800">food-cost-percentage-tracking</h3>
        <p className="text-sm text-slate-600">Scaffold workspace generated from deep-work component maps.</p>
      </header>

      <article className="rounded-xl border border-slate-300/60 bg-white p-4">
        <p className="text-sm font-semibold text-slate-700">Screen routes</p>
        <pre className="mt-2 overflow-auto text-xs text-slate-600">{JSON.stringify(Submodule8adea01fRoutes, null, 2)}</pre>
      </article>
    </section>
  )
}

export { Submodule8adea01fRoutes }
export default Submodule8adea01fWorkspace

