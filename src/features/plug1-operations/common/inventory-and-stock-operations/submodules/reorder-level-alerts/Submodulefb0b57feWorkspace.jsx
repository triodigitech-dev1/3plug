const Submodulefb0b57feRoutes = {
  dashboard: 'reorder-level-alerts/dashboard',
  list: 'reorder-level-alerts/list',
  create: 'reorder-level-alerts/create',
  detail: 'reorder-level-alerts/detail/:id',
  edit: 'reorder-level-alerts/edit/:id',
  approvals: 'reorder-level-alerts/approvals',
  reports: 'reorder-level-alerts/reports',
  analytics: 'reorder-level-alerts/analytics',
}

function Submodulefb0b57feWorkspace() {
  return (
    <section className="space-y-4">
      <header className="rounded-xl border border-slate-300/60 bg-white p-4">
        <h3 className="text-base font-bold text-slate-800">reorder-level-alerts</h3>
        <p className="text-sm text-slate-600">Scaffold workspace generated from deep-work component maps.</p>
      </header>

      <article className="rounded-xl border border-slate-300/60 bg-white p-4">
        <p className="text-sm font-semibold text-slate-700">Screen routes</p>
        <pre className="mt-2 overflow-auto text-xs text-slate-600">{JSON.stringify(Submodulefb0b57feRoutes, null, 2)}</pre>
      </article>
    </section>
  )
}

export { Submodulefb0b57feRoutes }
export default Submodulefb0b57feWorkspace

