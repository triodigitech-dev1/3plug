const Submodule238c7757Routes = {
  dashboard: 'credit-sales-and-receivables-tracking/dashboard',
  list: 'credit-sales-and-receivables-tracking/list',
  create: 'credit-sales-and-receivables-tracking/create',
  detail: 'credit-sales-and-receivables-tracking/detail/:id',
  edit: 'credit-sales-and-receivables-tracking/edit/:id',
  approvals: 'credit-sales-and-receivables-tracking/approvals',
  reports: 'credit-sales-and-receivables-tracking/reports',
  analytics: 'credit-sales-and-receivables-tracking/analytics',
}

function Submodule238c7757Workspace() {
  return (
    <section className="space-y-4">
      <header className="rounded-xl border border-slate-300/60 bg-white p-4">
        <h3 className="text-base font-bold text-slate-800">credit-sales-and-receivables-tracking</h3>
        <p className="text-sm text-slate-600">Scaffold workspace generated from deep-work component maps.</p>
      </header>

      <article className="rounded-xl border border-slate-300/60 bg-white p-4">
        <p className="text-sm font-semibold text-slate-700">Screen routes</p>
        <pre className="mt-2 overflow-auto text-xs text-slate-600">{JSON.stringify(Submodule238c7757Routes, null, 2)}</pre>
      </article>
    </section>
  )
}

export { Submodule238c7757Routes }
export default Submodule238c7757Workspace

