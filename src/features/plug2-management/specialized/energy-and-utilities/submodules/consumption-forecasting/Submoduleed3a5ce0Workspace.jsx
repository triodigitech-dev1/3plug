const Submoduleed3a5ce0Routes = {
  dashboard: 'consumption-forecasting/dashboard',
  list: 'consumption-forecasting/list',
  create: 'consumption-forecasting/create',
  detail: 'consumption-forecasting/detail/:id',
  edit: 'consumption-forecasting/edit/:id',
  approvals: 'consumption-forecasting/approvals',
  reports: 'consumption-forecasting/reports',
  analytics: 'consumption-forecasting/analytics',
}

function Submoduleed3a5ce0Workspace() {
  return (
    <section className="space-y-4">
      <header className="rounded-xl border border-slate-300/60 bg-white p-4">
        <h3 className="text-base font-bold text-slate-800">consumption-forecasting</h3>
        <p className="text-sm text-slate-600">Scaffold workspace generated from deep-work component maps.</p>
      </header>

      <article className="rounded-xl border border-slate-300/60 bg-white p-4">
        <p className="text-sm font-semibold text-slate-700">Screen routes</p>
        <pre className="mt-2 overflow-auto text-xs text-slate-600">{JSON.stringify(Submoduleed3a5ce0Routes, null, 2)}</pre>
      </article>
    </section>
  )
}

export { Submoduleed3a5ce0Routes }
export default Submoduleed3a5ce0Workspace

