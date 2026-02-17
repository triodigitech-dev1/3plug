const Submodule7139bec8Routes = {
  dashboard: 'break-even-analysis/dashboard',
  list: 'break-even-analysis/list',
  create: 'break-even-analysis/create',
  detail: 'break-even-analysis/detail/:id',
  edit: 'break-even-analysis/edit/:id',
  approvals: 'break-even-analysis/approvals',
  reports: 'break-even-analysis/reports',
  analytics: 'break-even-analysis/analytics',
}

function Submodule7139bec8Workspace() {
  return (
    <section className="space-y-4">
      <header className="rounded-xl border border-slate-300/60 bg-white p-4">
        <h3 className="text-base font-bold text-slate-800">break-even-analysis</h3>
        <p className="text-sm text-slate-600">Scaffold workspace generated from deep-work component maps.</p>
      </header>

      <article className="rounded-xl border border-slate-300/60 bg-white p-4">
        <p className="text-sm font-semibold text-slate-700">Screen routes</p>
        <pre className="mt-2 overflow-auto text-xs text-slate-600">{JSON.stringify(Submodule7139bec8Routes, null, 2)}</pre>
      </article>
    </section>
  )
}

export { Submodule7139bec8Routes }
export default Submodule7139bec8Workspace

