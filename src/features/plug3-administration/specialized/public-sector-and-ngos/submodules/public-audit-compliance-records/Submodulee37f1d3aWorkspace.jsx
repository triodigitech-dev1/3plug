const Submodulee37f1d3aRoutes = {
  dashboard: 'public-audit-compliance-records/dashboard',
  list: 'public-audit-compliance-records/list',
  create: 'public-audit-compliance-records/create',
  detail: 'public-audit-compliance-records/detail/:id',
  edit: 'public-audit-compliance-records/edit/:id',
  approvals: 'public-audit-compliance-records/approvals',
  reports: 'public-audit-compliance-records/reports',
  analytics: 'public-audit-compliance-records/analytics',
}

function Submodulee37f1d3aWorkspace() {
  return (
    <section className="space-y-4">
      <header className="rounded-xl border border-slate-300/60 bg-white p-4">
        <h3 className="text-base font-bold text-slate-800">public-audit-compliance-records</h3>
        <p className="text-sm text-slate-600">Scaffold workspace generated from deep-work component maps.</p>
      </header>

      <article className="rounded-xl border border-slate-300/60 bg-white p-4">
        <p className="text-sm font-semibold text-slate-700">Screen routes</p>
        <pre className="mt-2 overflow-auto text-xs text-slate-600">{JSON.stringify(Submodulee37f1d3aRoutes, null, 2)}</pre>
      </article>
    </section>
  )
}

export { Submodulee37f1d3aRoutes }
export default Submodulee37f1d3aWorkspace

