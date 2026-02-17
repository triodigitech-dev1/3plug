const Submodule8a9eda94Routes = {
  dashboard: 'executive-dashboards/dashboard',
  list: 'executive-dashboards/list',
  create: 'executive-dashboards/create',
  detail: 'executive-dashboards/detail/:id',
  edit: 'executive-dashboards/edit/:id',
  approvals: 'executive-dashboards/approvals',
  reports: 'executive-dashboards/reports',
  analytics: 'executive-dashboards/analytics',
}

function Submodule8a9eda94Workspace() {
  return (
    <section className="space-y-4">
      <header className="rounded-xl border border-slate-300/60 bg-white p-4">
        <h3 className="text-base font-bold text-slate-800">executive-dashboards</h3>
        <p className="text-sm text-slate-600">Scaffold workspace generated from deep-work component maps.</p>
      </header>

      <article className="rounded-xl border border-slate-300/60 bg-white p-4">
        <p className="text-sm font-semibold text-slate-700">Screen routes</p>
        <pre className="mt-2 overflow-auto text-xs text-slate-600">{JSON.stringify(Submodule8a9eda94Routes, null, 2)}</pre>
      </article>
    </section>
  )
}

export { Submodule8a9eda94Routes }
export default Submodule8a9eda94Workspace

