const Submodule9042ca34Routes = {
  dashboard: 'fraud-risk-monitoring/dashboard',
  list: 'fraud-risk-monitoring/list',
  create: 'fraud-risk-monitoring/create',
  detail: 'fraud-risk-monitoring/detail/:id',
  edit: 'fraud-risk-monitoring/edit/:id',
  approvals: 'fraud-risk-monitoring/approvals',
  reports: 'fraud-risk-monitoring/reports',
  analytics: 'fraud-risk-monitoring/analytics',
}

function Submodule9042ca34Workspace() {
  return (
    <section className="space-y-4">
      <header className="rounded-xl border border-slate-300/60 bg-white p-4">
        <h3 className="text-base font-bold text-slate-800">fraud-risk-monitoring</h3>
        <p className="text-sm text-slate-600">Scaffold workspace generated from deep-work component maps.</p>
      </header>

      <article className="rounded-xl border border-slate-300/60 bg-white p-4">
        <p className="text-sm font-semibold text-slate-700">Screen routes</p>
        <pre className="mt-2 overflow-auto text-xs text-slate-600">{JSON.stringify(Submodule9042ca34Routes, null, 2)}</pre>
      </article>
    </section>
  )
}

export { Submodule9042ca34Routes }
export default Submodule9042ca34Workspace

