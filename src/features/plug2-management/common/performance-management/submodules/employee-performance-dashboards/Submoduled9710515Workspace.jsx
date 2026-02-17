const Submoduled9710515Routes = {
  dashboard: 'employee-performance-dashboards/dashboard',
  list: 'employee-performance-dashboards/list',
  create: 'employee-performance-dashboards/create',
  detail: 'employee-performance-dashboards/detail/:id',
  edit: 'employee-performance-dashboards/edit/:id',
  approvals: 'employee-performance-dashboards/approvals',
  reports: 'employee-performance-dashboards/reports',
  analytics: 'employee-performance-dashboards/analytics',
}

function Submoduled9710515Workspace() {
  return (
    <section className="space-y-4">
      <header className="rounded-xl border border-slate-300/60 bg-white p-4">
        <h3 className="text-base font-bold text-slate-800">employee-performance-dashboards</h3>
        <p className="text-sm text-slate-600">Scaffold workspace generated from deep-work component maps.</p>
      </header>

      <article className="rounded-xl border border-slate-300/60 bg-white p-4">
        <p className="text-sm font-semibold text-slate-700">Screen routes</p>
        <pre className="mt-2 overflow-auto text-xs text-slate-600">{JSON.stringify(Submoduled9710515Routes, null, 2)}</pre>
      </article>
    </section>
  )
}

export { Submoduled9710515Routes }
export default Submoduled9710515Workspace

