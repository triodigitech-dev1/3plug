const Submodule22fbf663Routes = {
  dashboard: 'production-cost-tracking/dashboard',
  list: 'production-cost-tracking/list',
  create: 'production-cost-tracking/create',
  detail: 'production-cost-tracking/detail/:id',
  edit: 'production-cost-tracking/edit/:id',
  approvals: 'production-cost-tracking/approvals',
  reports: 'production-cost-tracking/reports',
  analytics: 'production-cost-tracking/analytics',
}

function Submodule22fbf663Workspace() {
  return (
    <section className="space-y-4">
      <header className="rounded-xl border border-slate-300/60 bg-white p-4">
        <h3 className="text-base font-bold text-slate-800">production-cost-tracking</h3>
        <p className="text-sm text-slate-600">Scaffold workspace generated from deep-work component maps.</p>
      </header>

      <article className="rounded-xl border border-slate-300/60 bg-white p-4">
        <p className="text-sm font-semibold text-slate-700">Screen routes</p>
        <pre className="mt-2 overflow-auto text-xs text-slate-600">{JSON.stringify(Submodule22fbf663Routes, null, 2)}</pre>
      </article>
    </section>
  )
}

export { Submodule22fbf663Routes }
export default Submodule22fbf663Workspace

