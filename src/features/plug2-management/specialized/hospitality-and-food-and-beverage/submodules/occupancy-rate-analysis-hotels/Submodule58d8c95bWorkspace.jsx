const Submodule58d8c95bRoutes = {
  dashboard: 'occupancy-rate-analysis-hotels/dashboard',
  list: 'occupancy-rate-analysis-hotels/list',
  create: 'occupancy-rate-analysis-hotels/create',
  detail: 'occupancy-rate-analysis-hotels/detail/:id',
  edit: 'occupancy-rate-analysis-hotels/edit/:id',
  approvals: 'occupancy-rate-analysis-hotels/approvals',
  reports: 'occupancy-rate-analysis-hotels/reports',
  analytics: 'occupancy-rate-analysis-hotels/analytics',
}

function Submodule58d8c95bWorkspace() {
  return (
    <section className="space-y-4">
      <header className="rounded-xl border border-slate-300/60 bg-white p-4">
        <h3 className="text-base font-bold text-slate-800">occupancy-rate-analysis-hotels</h3>
        <p className="text-sm text-slate-600">Scaffold workspace generated from deep-work component maps.</p>
      </header>

      <article className="rounded-xl border border-slate-300/60 bg-white p-4">
        <p className="text-sm font-semibold text-slate-700">Screen routes</p>
        <pre className="mt-2 overflow-auto text-xs text-slate-600">{JSON.stringify(Submodule58d8c95bRoutes, null, 2)}</pre>
      </article>
    </section>
  )
}

export { Submodule58d8c95bRoutes }
export default Submodule58d8c95bWorkspace

