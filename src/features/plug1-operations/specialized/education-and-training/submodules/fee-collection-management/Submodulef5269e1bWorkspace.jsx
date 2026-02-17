const Submodulef5269e1bRoutes = {
  dashboard: 'fee-collection-management/dashboard',
  list: 'fee-collection-management/list',
  create: 'fee-collection-management/create',
  detail: 'fee-collection-management/detail/:id',
  edit: 'fee-collection-management/edit/:id',
  approvals: 'fee-collection-management/approvals',
  reports: 'fee-collection-management/reports',
  analytics: 'fee-collection-management/analytics',
}

function Submodulef5269e1bWorkspace() {
  return (
    <section className="space-y-4">
      <header className="rounded-xl border border-slate-300/60 bg-white p-4">
        <h3 className="text-base font-bold text-slate-800">fee-collection-management</h3>
        <p className="text-sm text-slate-600">Scaffold workspace generated from deep-work component maps.</p>
      </header>

      <article className="rounded-xl border border-slate-300/60 bg-white p-4">
        <p className="text-sm font-semibold text-slate-700">Screen routes</p>
        <pre className="mt-2 overflow-auto text-xs text-slate-600">{JSON.stringify(Submodulef5269e1bRoutes, null, 2)}</pre>
      </article>
    </section>
  )
}

export { Submodulef5269e1bRoutes }
export default Submodulef5269e1bWorkspace

