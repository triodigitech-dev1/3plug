const Submodule6aee35d0Routes = {
  dashboard: 'customer-travel-behavior-analytics/dashboard',
  list: 'customer-travel-behavior-analytics/list',
  create: 'customer-travel-behavior-analytics/create',
  detail: 'customer-travel-behavior-analytics/detail/:id',
  edit: 'customer-travel-behavior-analytics/edit/:id',
  approvals: 'customer-travel-behavior-analytics/approvals',
  reports: 'customer-travel-behavior-analytics/reports',
  analytics: 'customer-travel-behavior-analytics/analytics',
}

function Submodule6aee35d0Workspace() {
  return (
    <section className="space-y-4">
      <header className="rounded-xl border border-slate-300/60 bg-white p-4">
        <h3 className="text-base font-bold text-slate-800">customer-travel-behavior-analytics</h3>
        <p className="text-sm text-slate-600">Scaffold workspace generated from deep-work component maps.</p>
      </header>

      <article className="rounded-xl border border-slate-300/60 bg-white p-4">
        <p className="text-sm font-semibold text-slate-700">Screen routes</p>
        <pre className="mt-2 overflow-auto text-xs text-slate-600">{JSON.stringify(Submodule6aee35d0Routes, null, 2)}</pre>
      </article>
    </section>
  )
}

export { Submodule6aee35d0Routes }
export default Submodule6aee35d0Workspace

