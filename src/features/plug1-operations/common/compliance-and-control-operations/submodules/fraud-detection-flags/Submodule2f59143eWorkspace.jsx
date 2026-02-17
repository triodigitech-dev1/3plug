const Submodule2f59143eRoutes = {
  dashboard: 'fraud-detection-flags/dashboard',
  list: 'fraud-detection-flags/list',
  create: 'fraud-detection-flags/create',
  detail: 'fraud-detection-flags/detail/:id',
  edit: 'fraud-detection-flags/edit/:id',
  approvals: 'fraud-detection-flags/approvals',
  reports: 'fraud-detection-flags/reports',
  analytics: 'fraud-detection-flags/analytics',
}

function Submodule2f59143eWorkspace() {
  return (
    <section className="space-y-4">
      <header className="rounded-xl border border-slate-300/60 bg-white p-4">
        <h3 className="text-base font-bold text-slate-800">fraud-detection-flags</h3>
        <p className="text-sm text-slate-600">Scaffold workspace generated from deep-work component maps.</p>
      </header>

      <article className="rounded-xl border border-slate-300/60 bg-white p-4">
        <p className="text-sm font-semibold text-slate-700">Screen routes</p>
        <pre className="mt-2 overflow-auto text-xs text-slate-600">{JSON.stringify(Submodule2f59143eRoutes, null, 2)}</pre>
      </article>
    </section>
  )
}

export { Submodule2f59143eRoutes }
export default Submodule2f59143eWorkspace

