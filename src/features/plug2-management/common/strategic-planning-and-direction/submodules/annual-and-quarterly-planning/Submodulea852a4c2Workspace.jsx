const Submodulea852a4c2Routes = {
  dashboard: 'annual-and-quarterly-planning/dashboard',
  list: 'annual-and-quarterly-planning/list',
  create: 'annual-and-quarterly-planning/create',
  detail: 'annual-and-quarterly-planning/detail/:id',
  edit: 'annual-and-quarterly-planning/edit/:id',
  approvals: 'annual-and-quarterly-planning/approvals',
  reports: 'annual-and-quarterly-planning/reports',
  analytics: 'annual-and-quarterly-planning/analytics',
}

function Submodulea852a4c2Workspace() {
  return (
    <section className="space-y-4">
      <header className="rounded-xl border border-slate-300/60 bg-white p-4">
        <h3 className="text-base font-bold text-slate-800">annual-and-quarterly-planning</h3>
        <p className="text-sm text-slate-600">Scaffold workspace generated from deep-work component maps.</p>
      </header>

      <article className="rounded-xl border border-slate-300/60 bg-white p-4">
        <p className="text-sm font-semibold text-slate-700">Screen routes</p>
        <pre className="mt-2 overflow-auto text-xs text-slate-600">{JSON.stringify(Submodulea852a4c2Routes, null, 2)}</pre>
      </article>
    </section>
  )
}

export { Submodulea852a4c2Routes }
export default Submodulea852a4c2Workspace

