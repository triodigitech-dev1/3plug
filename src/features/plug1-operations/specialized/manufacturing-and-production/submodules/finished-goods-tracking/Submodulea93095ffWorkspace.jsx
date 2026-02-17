const Submodulea93095ffRoutes = {
  dashboard: 'finished-goods-tracking/dashboard',
  list: 'finished-goods-tracking/list',
  create: 'finished-goods-tracking/create',
  detail: 'finished-goods-tracking/detail/:id',
  edit: 'finished-goods-tracking/edit/:id',
  approvals: 'finished-goods-tracking/approvals',
  reports: 'finished-goods-tracking/reports',
  analytics: 'finished-goods-tracking/analytics',
}

function Submodulea93095ffWorkspace() {
  return (
    <section className="space-y-4">
      <header className="rounded-xl border border-slate-300/60 bg-white p-4">
        <h3 className="text-base font-bold text-slate-800">finished-goods-tracking</h3>
        <p className="text-sm text-slate-600">Scaffold workspace generated from deep-work component maps.</p>
      </header>

      <article className="rounded-xl border border-slate-300/60 bg-white p-4">
        <p className="text-sm font-semibold text-slate-700">Screen routes</p>
        <pre className="mt-2 overflow-auto text-xs text-slate-600">{JSON.stringify(Submodulea93095ffRoutes, null, 2)}</pre>
      </article>
    </section>
  )
}

export { Submodulea93095ffRoutes }
export default Submodulea93095ffWorkspace

