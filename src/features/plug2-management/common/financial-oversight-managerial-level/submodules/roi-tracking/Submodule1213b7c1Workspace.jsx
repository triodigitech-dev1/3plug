const Submodule1213b7c1Routes = {
  dashboard: 'roi-tracking/dashboard',
  list: 'roi-tracking/list',
  create: 'roi-tracking/create',
  detail: 'roi-tracking/detail/:id',
  edit: 'roi-tracking/edit/:id',
  approvals: 'roi-tracking/approvals',
  reports: 'roi-tracking/reports',
  analytics: 'roi-tracking/analytics',
}

function Submodule1213b7c1Workspace() {
  return (
    <section className="space-y-4">
      <header className="rounded-xl border border-slate-300/60 bg-white p-4">
        <h3 className="text-base font-bold text-slate-800">roi-tracking</h3>
        <p className="text-sm text-slate-600">Scaffold workspace generated from deep-work component maps.</p>
      </header>

      <article className="rounded-xl border border-slate-300/60 bg-white p-4">
        <p className="text-sm font-semibold text-slate-700">Screen routes</p>
        <pre className="mt-2 overflow-auto text-xs text-slate-600">{JSON.stringify(Submodule1213b7c1Routes, null, 2)}</pre>
      </article>
    </section>
  )
}

export { Submodule1213b7c1Routes }
export default Submodule1213b7c1Workspace

