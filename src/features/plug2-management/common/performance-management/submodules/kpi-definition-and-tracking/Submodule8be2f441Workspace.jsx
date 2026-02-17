const Submodule8be2f441Routes = {
  dashboard: 'kpi-definition-and-tracking/dashboard',
  list: 'kpi-definition-and-tracking/list',
  create: 'kpi-definition-and-tracking/create',
  detail: 'kpi-definition-and-tracking/detail/:id',
  edit: 'kpi-definition-and-tracking/edit/:id',
  approvals: 'kpi-definition-and-tracking/approvals',
  reports: 'kpi-definition-and-tracking/reports',
  analytics: 'kpi-definition-and-tracking/analytics',
}

function Submodule8be2f441Workspace() {
  return (
    <section className="space-y-4">
      <header className="rounded-xl border border-slate-300/60 bg-white p-4">
        <h3 className="text-base font-bold text-slate-800">kpi-definition-and-tracking</h3>
        <p className="text-sm text-slate-600">Scaffold workspace generated from deep-work component maps.</p>
      </header>

      <article className="rounded-xl border border-slate-300/60 bg-white p-4">
        <p className="text-sm font-semibold text-slate-700">Screen routes</p>
        <pre className="mt-2 overflow-auto text-xs text-slate-600">{JSON.stringify(Submodule8be2f441Routes, null, 2)}</pre>
      </article>
    </section>
  )
}

export { Submodule8be2f441Routes }
export default Submodule8be2f441Workspace

