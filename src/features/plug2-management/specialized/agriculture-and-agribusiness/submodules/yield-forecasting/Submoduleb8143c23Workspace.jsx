const Submoduleb8143c23Routes = {
  dashboard: 'yield-forecasting/dashboard',
  list: 'yield-forecasting/list',
  create: 'yield-forecasting/create',
  detail: 'yield-forecasting/detail/:id',
  edit: 'yield-forecasting/edit/:id',
  approvals: 'yield-forecasting/approvals',
  reports: 'yield-forecasting/reports',
  analytics: 'yield-forecasting/analytics',
}

function Submoduleb8143c23Workspace() {
  return (
    <section className="space-y-4">
      <header className="rounded-xl border border-slate-300/60 bg-white p-4">
        <h3 className="text-base font-bold text-slate-800">yield-forecasting</h3>
        <p className="text-sm text-slate-600">Scaffold workspace generated from deep-work component maps.</p>
      </header>

      <article className="rounded-xl border border-slate-300/60 bg-white p-4">
        <p className="text-sm font-semibold text-slate-700">Screen routes</p>
        <pre className="mt-2 overflow-auto text-xs text-slate-600">{JSON.stringify(Submoduleb8143c23Routes, null, 2)}</pre>
      </article>
    </section>
  )
}

export { Submoduleb8143c23Routes }
export default Submoduleb8143c23Workspace

