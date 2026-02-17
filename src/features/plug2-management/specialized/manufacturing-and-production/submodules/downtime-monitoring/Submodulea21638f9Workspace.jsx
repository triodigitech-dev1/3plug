const Submodulea21638f9Routes = {
  dashboard: 'downtime-monitoring/dashboard',
  list: 'downtime-monitoring/list',
  create: 'downtime-monitoring/create',
  detail: 'downtime-monitoring/detail/:id',
  edit: 'downtime-monitoring/edit/:id',
  approvals: 'downtime-monitoring/approvals',
  reports: 'downtime-monitoring/reports',
  analytics: 'downtime-monitoring/analytics',
}

function Submodulea21638f9Workspace() {
  return (
    <section className="space-y-4">
      <header className="rounded-xl border border-slate-300/60 bg-white p-4">
        <h3 className="text-base font-bold text-slate-800">downtime-monitoring</h3>
        <p className="text-sm text-slate-600">Scaffold workspace generated from deep-work component maps.</p>
      </header>

      <article className="rounded-xl border border-slate-300/60 bg-white p-4">
        <p className="text-sm font-semibold text-slate-700">Screen routes</p>
        <pre className="mt-2 overflow-auto text-xs text-slate-600">{JSON.stringify(Submodulea21638f9Routes, null, 2)}</pre>
      </article>
    </section>
  )
}

export { Submodulea21638f9Routes }
export default Submodulea21638f9Workspace

