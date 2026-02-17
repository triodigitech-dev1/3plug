const Submodulee1956fa3Routes = {
  dashboard: 'insurance-coverage-tracking/dashboard',
  list: 'insurance-coverage-tracking/list',
  create: 'insurance-coverage-tracking/create',
  detail: 'insurance-coverage-tracking/detail/:id',
  edit: 'insurance-coverage-tracking/edit/:id',
  approvals: 'insurance-coverage-tracking/approvals',
  reports: 'insurance-coverage-tracking/reports',
  analytics: 'insurance-coverage-tracking/analytics',
}

function Submodulee1956fa3Workspace() {
  return (
    <section className="space-y-4">
      <header className="rounded-xl border border-slate-300/60 bg-white p-4">
        <h3 className="text-base font-bold text-slate-800">insurance-coverage-tracking</h3>
        <p className="text-sm text-slate-600">Scaffold workspace generated from deep-work component maps.</p>
      </header>

      <article className="rounded-xl border border-slate-300/60 bg-white p-4">
        <p className="text-sm font-semibold text-slate-700">Screen routes</p>
        <pre className="mt-2 overflow-auto text-xs text-slate-600">{JSON.stringify(Submodulee1956fa3Routes, null, 2)}</pre>
      </article>
    </section>
  )
}

export { Submodulee1956fa3Routes }
export default Submodulee1956fa3Workspace

