const Submodule25566a6eRoutes = {
  dashboard: 'multi-channel-sales-in-store-online-mobile/dashboard',
  list: 'multi-channel-sales-in-store-online-mobile/list',
  create: 'multi-channel-sales-in-store-online-mobile/create',
  detail: 'multi-channel-sales-in-store-online-mobile/detail/:id',
  edit: 'multi-channel-sales-in-store-online-mobile/edit/:id',
  approvals: 'multi-channel-sales-in-store-online-mobile/approvals',
  reports: 'multi-channel-sales-in-store-online-mobile/reports',
  analytics: 'multi-channel-sales-in-store-online-mobile/analytics',
}

function Submodule25566a6eWorkspace() {
  return (
    <section className="space-y-4">
      <header className="rounded-xl border border-slate-300/60 bg-white p-4">
        <h3 className="text-base font-bold text-slate-800">multi-channel-sales-in-store-online-mobile</h3>
        <p className="text-sm text-slate-600">Scaffold workspace generated from deep-work component maps.</p>
      </header>

      <article className="rounded-xl border border-slate-300/60 bg-white p-4">
        <p className="text-sm font-semibold text-slate-700">Screen routes</p>
        <pre className="mt-2 overflow-auto text-xs text-slate-600">{JSON.stringify(Submodule25566a6eRoutes, null, 2)}</pre>
      </article>
    </section>
  )
}

export { Submodule25566a6eRoutes }
export default Submodule25566a6eWorkspace

