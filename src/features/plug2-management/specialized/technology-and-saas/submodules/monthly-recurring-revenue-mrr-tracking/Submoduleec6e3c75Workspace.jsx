const Submoduleec6e3c75Routes = {
  dashboard: 'monthly-recurring-revenue-mrr-tracking/dashboard',
  list: 'monthly-recurring-revenue-mrr-tracking/list',
  create: 'monthly-recurring-revenue-mrr-tracking/create',
  detail: 'monthly-recurring-revenue-mrr-tracking/detail/:id',
  edit: 'monthly-recurring-revenue-mrr-tracking/edit/:id',
  approvals: 'monthly-recurring-revenue-mrr-tracking/approvals',
  reports: 'monthly-recurring-revenue-mrr-tracking/reports',
  analytics: 'monthly-recurring-revenue-mrr-tracking/analytics',
}

function Submoduleec6e3c75Workspace() {
  return (
    <section className="space-y-4">
      <header className="rounded-xl border border-slate-300/60 bg-white p-4">
        <h3 className="text-base font-bold text-slate-800">monthly-recurring-revenue-mrr-tracking</h3>
        <p className="text-sm text-slate-600">Scaffold workspace generated from deep-work component maps.</p>
      </header>

      <article className="rounded-xl border border-slate-300/60 bg-white p-4">
        <p className="text-sm font-semibold text-slate-700">Screen routes</p>
        <pre className="mt-2 overflow-auto text-xs text-slate-600">{JSON.stringify(Submoduleec6e3c75Routes, null, 2)}</pre>
      </article>
    </section>
  )
}

export { Submoduleec6e3c75Routes }
export default Submoduleec6e3c75Workspace

