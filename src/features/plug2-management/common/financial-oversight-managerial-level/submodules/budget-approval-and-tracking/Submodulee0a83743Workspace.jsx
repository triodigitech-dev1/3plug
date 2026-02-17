const Submodulee0a83743Routes = {
  dashboard: 'budget-approval-and-tracking/dashboard',
  list: 'budget-approval-and-tracking/list',
  create: 'budget-approval-and-tracking/create',
  detail: 'budget-approval-and-tracking/detail/:id',
  edit: 'budget-approval-and-tracking/edit/:id',
  approvals: 'budget-approval-and-tracking/approvals',
  reports: 'budget-approval-and-tracking/reports',
  analytics: 'budget-approval-and-tracking/analytics',
}

function Submodulee0a83743Workspace() {
  return (
    <section className="space-y-4">
      <header className="rounded-xl border border-slate-300/60 bg-white p-4">
        <h3 className="text-base font-bold text-slate-800">budget-approval-and-tracking</h3>
        <p className="text-sm text-slate-600">Scaffold workspace generated from deep-work component maps.</p>
      </header>

      <article className="rounded-xl border border-slate-300/60 bg-white p-4">
        <p className="text-sm font-semibold text-slate-700">Screen routes</p>
        <pre className="mt-2 overflow-auto text-xs text-slate-600">{JSON.stringify(Submodulee0a83743Routes, null, 2)}</pre>
      </article>
    </section>
  )
}

export { Submodulee0a83743Routes }
export default Submodulee0a83743Workspace

