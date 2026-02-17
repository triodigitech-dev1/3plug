const Submodule3aa17985Routes = {
  dashboard: 'cash-flow-forecasting/dashboard',
  list: 'cash-flow-forecasting/list',
  create: 'cash-flow-forecasting/create',
  detail: 'cash-flow-forecasting/detail/:id',
  edit: 'cash-flow-forecasting/edit/:id',
  approvals: 'cash-flow-forecasting/approvals',
  reports: 'cash-flow-forecasting/reports',
  analytics: 'cash-flow-forecasting/analytics',
}

function Submodule3aa17985Workspace() {
  return (
    <section className="space-y-4">
      <header className="rounded-xl border border-slate-300/60 bg-white p-4">
        <h3 className="text-base font-bold text-slate-800">cash-flow-forecasting</h3>
        <p className="text-sm text-slate-600">Scaffold workspace generated from deep-work component maps.</p>
      </header>

      <article className="rounded-xl border border-slate-300/60 bg-white p-4">
        <p className="text-sm font-semibold text-slate-700">Screen routes</p>
        <pre className="mt-2 overflow-auto text-xs text-slate-600">{JSON.stringify(Submodule3aa17985Routes, null, 2)}</pre>
      </article>
    </section>
  )
}

export { Submodule3aa17985Routes }
export default Submodule3aa17985Workspace

