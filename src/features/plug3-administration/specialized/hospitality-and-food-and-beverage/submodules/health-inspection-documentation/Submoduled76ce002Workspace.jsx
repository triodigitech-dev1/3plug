const Submoduled76ce002Routes = {
  dashboard: 'health-inspection-documentation/dashboard',
  list: 'health-inspection-documentation/list',
  create: 'health-inspection-documentation/create',
  detail: 'health-inspection-documentation/detail/:id',
  edit: 'health-inspection-documentation/edit/:id',
  approvals: 'health-inspection-documentation/approvals',
  reports: 'health-inspection-documentation/reports',
  analytics: 'health-inspection-documentation/analytics',
}

function Submoduled76ce002Workspace() {
  return (
    <section className="space-y-4">
      <header className="rounded-xl border border-slate-300/60 bg-white p-4">
        <h3 className="text-base font-bold text-slate-800">health-inspection-documentation</h3>
        <p className="text-sm text-slate-600">Scaffold workspace generated from deep-work component maps.</p>
      </header>

      <article className="rounded-xl border border-slate-300/60 bg-white p-4">
        <p className="text-sm font-semibold text-slate-700">Screen routes</p>
        <pre className="mt-2 overflow-auto text-xs text-slate-600">{JSON.stringify(Submoduled76ce002Routes, null, 2)}</pre>
      </article>
    </section>
  )
}

export { Submoduled76ce002Routes }
export default Submoduled76ce002Workspace

