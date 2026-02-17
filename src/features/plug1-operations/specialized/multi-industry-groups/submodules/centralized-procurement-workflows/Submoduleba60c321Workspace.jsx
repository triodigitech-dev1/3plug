const Submoduleba60c321Routes = {
  dashboard: 'centralized-procurement-workflows/dashboard',
  list: 'centralized-procurement-workflows/list',
  create: 'centralized-procurement-workflows/create',
  detail: 'centralized-procurement-workflows/detail/:id',
  edit: 'centralized-procurement-workflows/edit/:id',
  approvals: 'centralized-procurement-workflows/approvals',
  reports: 'centralized-procurement-workflows/reports',
  analytics: 'centralized-procurement-workflows/analytics',
}

function Submoduleba60c321Workspace() {
  return (
    <section className="space-y-4">
      <header className="rounded-xl border border-slate-300/60 bg-white p-4">
        <h3 className="text-base font-bold text-slate-800">centralized-procurement-workflows</h3>
        <p className="text-sm text-slate-600">Scaffold workspace generated from deep-work component maps.</p>
      </header>

      <article className="rounded-xl border border-slate-300/60 bg-white p-4">
        <p className="text-sm font-semibold text-slate-700">Screen routes</p>
        <pre className="mt-2 overflow-auto text-xs text-slate-600">{JSON.stringify(Submoduleba60c321Routes, null, 2)}</pre>
      </article>
    </section>
  )
}

export { Submoduleba60c321Routes }
export default Submoduleba60c321Workspace

