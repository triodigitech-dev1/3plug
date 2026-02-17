const Submodulef572a979Routes = {
  dashboard: 'enables-scalability-across-sectors/dashboard',
  list: 'enables-scalability-across-sectors/list',
  create: 'enables-scalability-across-sectors/create',
  detail: 'enables-scalability-across-sectors/detail/:id',
  edit: 'enables-scalability-across-sectors/edit/:id',
  approvals: 'enables-scalability-across-sectors/approvals',
  reports: 'enables-scalability-across-sectors/reports',
  analytics: 'enables-scalability-across-sectors/analytics',
}

function Submodulef572a979Workspace() {
  return (
    <section className="space-y-4">
      <header className="rounded-xl border border-slate-300/60 bg-white p-4">
        <h3 className="text-base font-bold text-slate-800">enables-scalability-across-sectors</h3>
        <p className="text-sm text-slate-600">Scaffold workspace generated from deep-work component maps.</p>
      </header>

      <article className="rounded-xl border border-slate-300/60 bg-white p-4">
        <p className="text-sm font-semibold text-slate-700">Screen routes</p>
        <pre className="mt-2 overflow-auto text-xs text-slate-600">{JSON.stringify(Submodulef572a979Routes, null, 2)}</pre>
      </article>
    </section>
  )
}

export { Submodulef572a979Routes }
export default Submodulef572a979Workspace

