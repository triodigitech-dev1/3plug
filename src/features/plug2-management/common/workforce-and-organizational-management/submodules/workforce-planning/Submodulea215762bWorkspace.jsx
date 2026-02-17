const Submodulea215762bRoutes = {
  dashboard: 'workforce-planning/dashboard',
  list: 'workforce-planning/list',
  create: 'workforce-planning/create',
  detail: 'workforce-planning/detail/:id',
  edit: 'workforce-planning/edit/:id',
  approvals: 'workforce-planning/approvals',
  reports: 'workforce-planning/reports',
  analytics: 'workforce-planning/analytics',
}

function Submodulea215762bWorkspace() {
  return (
    <section className="space-y-4">
      <header className="rounded-xl border border-slate-300/60 bg-white p-4">
        <h3 className="text-base font-bold text-slate-800">workforce-planning</h3>
        <p className="text-sm text-slate-600">Scaffold workspace generated from deep-work component maps.</p>
      </header>

      <article className="rounded-xl border border-slate-300/60 bg-white p-4">
        <p className="text-sm font-semibold text-slate-700">Screen routes</p>
        <pre className="mt-2 overflow-auto text-xs text-slate-600">{JSON.stringify(Submodulea215762bRoutes, null, 2)}</pre>
      </article>
    </section>
  )
}

export { Submodulea215762bRoutes }
export default Submodulea215762bWorkspace

