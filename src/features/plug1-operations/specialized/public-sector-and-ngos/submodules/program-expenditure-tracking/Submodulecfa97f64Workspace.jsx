const Submodulecfa97f64Routes = {
  dashboard: 'program-expenditure-tracking/dashboard',
  list: 'program-expenditure-tracking/list',
  create: 'program-expenditure-tracking/create',
  detail: 'program-expenditure-tracking/detail/:id',
  edit: 'program-expenditure-tracking/edit/:id',
  approvals: 'program-expenditure-tracking/approvals',
  reports: 'program-expenditure-tracking/reports',
  analytics: 'program-expenditure-tracking/analytics',
}

function Submodulecfa97f64Workspace() {
  return (
    <section className="space-y-4">
      <header className="rounded-xl border border-slate-300/60 bg-white p-4">
        <h3 className="text-base font-bold text-slate-800">program-expenditure-tracking</h3>
        <p className="text-sm text-slate-600">Scaffold workspace generated from deep-work component maps.</p>
      </header>

      <article className="rounded-xl border border-slate-300/60 bg-white p-4">
        <p className="text-sm font-semibold text-slate-700">Screen routes</p>
        <pre className="mt-2 overflow-auto text-xs text-slate-600">{JSON.stringify(Submodulecfa97f64Routes, null, 2)}</pre>
      </article>
    </section>
  )
}

export { Submodulecfa97f64Routes }
export default Submodulecfa97f64Workspace

