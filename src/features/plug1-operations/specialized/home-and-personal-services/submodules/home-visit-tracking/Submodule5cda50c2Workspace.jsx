const Submodule5cda50c2Routes = {
  dashboard: 'home-visit-tracking/dashboard',
  list: 'home-visit-tracking/list',
  create: 'home-visit-tracking/create',
  detail: 'home-visit-tracking/detail/:id',
  edit: 'home-visit-tracking/edit/:id',
  approvals: 'home-visit-tracking/approvals',
  reports: 'home-visit-tracking/reports',
  analytics: 'home-visit-tracking/analytics',
}

function Submodule5cda50c2Workspace() {
  return (
    <section className="space-y-4">
      <header className="rounded-xl border border-slate-300/60 bg-white p-4">
        <h3 className="text-base font-bold text-slate-800">home-visit-tracking</h3>
        <p className="text-sm text-slate-600">Scaffold workspace generated from deep-work component maps.</p>
      </header>

      <article className="rounded-xl border border-slate-300/60 bg-white p-4">
        <p className="text-sm font-semibold text-slate-700">Screen routes</p>
        <pre className="mt-2 overflow-auto text-xs text-slate-600">{JSON.stringify(Submodule5cda50c2Routes, null, 2)}</pre>
      </article>
    </section>
  )
}

export { Submodule5cda50c2Routes }
export default Submodule5cda50c2Workspace

