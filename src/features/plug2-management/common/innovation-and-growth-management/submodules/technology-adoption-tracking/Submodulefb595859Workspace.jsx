const Submodulefb595859Routes = {
  dashboard: 'technology-adoption-tracking/dashboard',
  list: 'technology-adoption-tracking/list',
  create: 'technology-adoption-tracking/create',
  detail: 'technology-adoption-tracking/detail/:id',
  edit: 'technology-adoption-tracking/edit/:id',
  approvals: 'technology-adoption-tracking/approvals',
  reports: 'technology-adoption-tracking/reports',
  analytics: 'technology-adoption-tracking/analytics',
}

function Submodulefb595859Workspace() {
  return (
    <section className="space-y-4">
      <header className="rounded-xl border border-slate-300/60 bg-white p-4">
        <h3 className="text-base font-bold text-slate-800">technology-adoption-tracking</h3>
        <p className="text-sm text-slate-600">Scaffold workspace generated from deep-work component maps.</p>
      </header>

      <article className="rounded-xl border border-slate-300/60 bg-white p-4">
        <p className="text-sm font-semibold text-slate-700">Screen routes</p>
        <pre className="mt-2 overflow-auto text-xs text-slate-600">{JSON.stringify(Submodulefb595859Routes, null, 2)}</pre>
      </article>
    </section>
  )
}

export { Submodulefb595859Routes }
export default Submodulefb595859Workspace

