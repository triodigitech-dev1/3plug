const Submodule17620ff3Routes = {
  dashboard: 'tourism-board-compliance-reporting/dashboard',
  list: 'tourism-board-compliance-reporting/list',
  create: 'tourism-board-compliance-reporting/create',
  detail: 'tourism-board-compliance-reporting/detail/:id',
  edit: 'tourism-board-compliance-reporting/edit/:id',
  approvals: 'tourism-board-compliance-reporting/approvals',
  reports: 'tourism-board-compliance-reporting/reports',
  analytics: 'tourism-board-compliance-reporting/analytics',
}

function Submodule17620ff3Workspace() {
  return (
    <section className="space-y-4">
      <header className="rounded-xl border border-slate-300/60 bg-white p-4">
        <h3 className="text-base font-bold text-slate-800">tourism-board-compliance-reporting</h3>
        <p className="text-sm text-slate-600">Scaffold workspace generated from deep-work component maps.</p>
      </header>

      <article className="rounded-xl border border-slate-300/60 bg-white p-4">
        <p className="text-sm font-semibold text-slate-700">Screen routes</p>
        <pre className="mt-2 overflow-auto text-xs text-slate-600">{JSON.stringify(Submodule17620ff3Routes, null, 2)}</pre>
      </article>
    </section>
  )
}

export { Submodule17620ff3Routes }
export default Submodule17620ff3Workspace

