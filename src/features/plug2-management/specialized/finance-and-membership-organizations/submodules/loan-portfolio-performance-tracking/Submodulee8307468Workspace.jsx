const Submodulee8307468Routes = {
  dashboard: 'loan-portfolio-performance-tracking/dashboard',
  list: 'loan-portfolio-performance-tracking/list',
  create: 'loan-portfolio-performance-tracking/create',
  detail: 'loan-portfolio-performance-tracking/detail/:id',
  edit: 'loan-portfolio-performance-tracking/edit/:id',
  approvals: 'loan-portfolio-performance-tracking/approvals',
  reports: 'loan-portfolio-performance-tracking/reports',
  analytics: 'loan-portfolio-performance-tracking/analytics',
}

function Submodulee8307468Workspace() {
  return (
    <section className="space-y-4">
      <header className="rounded-xl border border-slate-300/60 bg-white p-4">
        <h3 className="text-base font-bold text-slate-800">loan-portfolio-performance-tracking</h3>
        <p className="text-sm text-slate-600">Scaffold workspace generated from deep-work component maps.</p>
      </header>

      <article className="rounded-xl border border-slate-300/60 bg-white p-4">
        <p className="text-sm font-semibold text-slate-700">Screen routes</p>
        <pre className="mt-2 overflow-auto text-xs text-slate-600">{JSON.stringify(Submodulee8307468Routes, null, 2)}</pre>
      </article>
    </section>
  )
}

export { Submodulee8307468Routes }
export default Submodulee8307468Workspace

