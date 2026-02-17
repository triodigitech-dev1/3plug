const Submodule1027de25Routes = {
  dashboard: 'pharmacy-dispensing-tracking/dashboard',
  list: 'pharmacy-dispensing-tracking/list',
  create: 'pharmacy-dispensing-tracking/create',
  detail: 'pharmacy-dispensing-tracking/detail/:id',
  edit: 'pharmacy-dispensing-tracking/edit/:id',
  approvals: 'pharmacy-dispensing-tracking/approvals',
  reports: 'pharmacy-dispensing-tracking/reports',
  analytics: 'pharmacy-dispensing-tracking/analytics',
}

function Submodule1027de25Workspace() {
  return (
    <section className="space-y-4">
      <header className="rounded-xl border border-slate-300/60 bg-white p-4">
        <h3 className="text-base font-bold text-slate-800">pharmacy-dispensing-tracking</h3>
        <p className="text-sm text-slate-600">Scaffold workspace generated from deep-work component maps.</p>
      </header>

      <article className="rounded-xl border border-slate-300/60 bg-white p-4">
        <p className="text-sm font-semibold text-slate-700">Screen routes</p>
        <pre className="mt-2 overflow-auto text-xs text-slate-600">{JSON.stringify(Submodule1027de25Routes, null, 2)}</pre>
      </article>
    </section>
  )
}

export { Submodule1027de25Routes }
export default Submodule1027de25Workspace

