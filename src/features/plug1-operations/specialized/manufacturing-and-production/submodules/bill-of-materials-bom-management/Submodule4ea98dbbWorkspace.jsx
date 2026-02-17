const Submodule4ea98dbbRoutes = {
  dashboard: 'bill-of-materials-bom-management/dashboard',
  list: 'bill-of-materials-bom-management/list',
  create: 'bill-of-materials-bom-management/create',
  detail: 'bill-of-materials-bom-management/detail/:id',
  edit: 'bill-of-materials-bom-management/edit/:id',
  approvals: 'bill-of-materials-bom-management/approvals',
  reports: 'bill-of-materials-bom-management/reports',
  analytics: 'bill-of-materials-bom-management/analytics',
}

function Submodule4ea98dbbWorkspace() {
  return (
    <section className="space-y-4">
      <header className="rounded-xl border border-slate-300/60 bg-white p-4">
        <h3 className="text-base font-bold text-slate-800">bill-of-materials-bom-management</h3>
        <p className="text-sm text-slate-600">Scaffold workspace generated from deep-work component maps.</p>
      </header>

      <article className="rounded-xl border border-slate-300/60 bg-white p-4">
        <p className="text-sm font-semibold text-slate-700">Screen routes</p>
        <pre className="mt-2 overflow-auto text-xs text-slate-600">{JSON.stringify(Submodule4ea98dbbRoutes, null, 2)}</pre>
      </article>
    </section>
  )
}

export { Submodule4ea98dbbRoutes }
export default Submodule4ea98dbbWorkspace

