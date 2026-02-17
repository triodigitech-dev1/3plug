const Submodulea9494a62Routes = {
  dashboard: 'internal-policy-documentation/dashboard',
  list: 'internal-policy-documentation/list',
  create: 'internal-policy-documentation/create',
  detail: 'internal-policy-documentation/detail/:id',
  edit: 'internal-policy-documentation/edit/:id',
  approvals: 'internal-policy-documentation/approvals',
  reports: 'internal-policy-documentation/reports',
  analytics: 'internal-policy-documentation/analytics',
}

function Submodulea9494a62Workspace() {
  return (
    <section className="space-y-4">
      <header className="rounded-xl border border-slate-300/60 bg-white p-4">
        <h3 className="text-base font-bold text-slate-800">internal-policy-documentation</h3>
        <p className="text-sm text-slate-600">Scaffold workspace generated from deep-work component maps.</p>
      </header>

      <article className="rounded-xl border border-slate-300/60 bg-white p-4">
        <p className="text-sm font-semibold text-slate-700">Screen routes</p>
        <pre className="mt-2 overflow-auto text-xs text-slate-600">{JSON.stringify(Submodulea9494a62Routes, null, 2)}</pre>
      </article>
    </section>
  )
}

export { Submodulea9494a62Routes }
export default Submodulea9494a62Workspace

