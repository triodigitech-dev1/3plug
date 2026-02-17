const Submodulea3c5111dRoutes = {
  dashboard: 'property-occupancy-analysis/dashboard',
  list: 'property-occupancy-analysis/list',
  create: 'property-occupancy-analysis/create',
  detail: 'property-occupancy-analysis/detail/:id',
  edit: 'property-occupancy-analysis/edit/:id',
  approvals: 'property-occupancy-analysis/approvals',
  reports: 'property-occupancy-analysis/reports',
  analytics: 'property-occupancy-analysis/analytics',
}

function Submodulea3c5111dWorkspace() {
  return (
    <section className="space-y-4">
      <header className="rounded-xl border border-slate-300/60 bg-white p-4">
        <h3 className="text-base font-bold text-slate-800">property-occupancy-analysis</h3>
        <p className="text-sm text-slate-600">Scaffold workspace generated from deep-work component maps.</p>
      </header>

      <article className="rounded-xl border border-slate-300/60 bg-white p-4">
        <p className="text-sm font-semibold text-slate-700">Screen routes</p>
        <pre className="mt-2 overflow-auto text-xs text-slate-600">{JSON.stringify(Submodulea3c5111dRoutes, null, 2)}</pre>
      </article>
    </section>
  )
}

export { Submodulea3c5111dRoutes }
export default Submodulea3c5111dWorkspace

