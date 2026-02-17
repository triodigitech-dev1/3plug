const Submodulea253838bRoutes = {
  dashboard: 'consultant-productivity-dashboards/dashboard',
  list: 'consultant-productivity-dashboards/list',
  create: 'consultant-productivity-dashboards/create',
  detail: 'consultant-productivity-dashboards/detail/:id',
  edit: 'consultant-productivity-dashboards/edit/:id',
  approvals: 'consultant-productivity-dashboards/approvals',
  reports: 'consultant-productivity-dashboards/reports',
  analytics: 'consultant-productivity-dashboards/analytics',
}

function Submodulea253838bWorkspace() {
  return (
    <section className="space-y-4">
      <header className="rounded-xl border border-slate-300/60 bg-white p-4">
        <h3 className="text-base font-bold text-slate-800">consultant-productivity-dashboards</h3>
        <p className="text-sm text-slate-600">Scaffold workspace generated from deep-work component maps.</p>
      </header>

      <article className="rounded-xl border border-slate-300/60 bg-white p-4">
        <p className="text-sm font-semibold text-slate-700">Screen routes</p>
        <pre className="mt-2 overflow-auto text-xs text-slate-600">{JSON.stringify(Submodulea253838bRoutes, null, 2)}</pre>
      </article>
    </section>
  )
}

export { Submodulea253838bRoutes }
export default Submodulea253838bWorkspace

