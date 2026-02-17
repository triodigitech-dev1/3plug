const Submodule210656d8Routes = {
  dashboard: 'site-inventory-tracking/dashboard',
  list: 'site-inventory-tracking/list',
  create: 'site-inventory-tracking/create',
  detail: 'site-inventory-tracking/detail/:id',
  edit: 'site-inventory-tracking/edit/:id',
  approvals: 'site-inventory-tracking/approvals',
  reports: 'site-inventory-tracking/reports',
  analytics: 'site-inventory-tracking/analytics',
}

function Submodule210656d8Workspace() {
  return (
    <section className="space-y-4">
      <header className="rounded-xl border border-slate-300/60 bg-white p-4">
        <h3 className="text-base font-bold text-slate-800">site-inventory-tracking</h3>
        <p className="text-sm text-slate-600">Scaffold workspace generated from deep-work component maps.</p>
      </header>

      <article className="rounded-xl border border-slate-300/60 bg-white p-4">
        <p className="text-sm font-semibold text-slate-700">Screen routes</p>
        <pre className="mt-2 overflow-auto text-xs text-slate-600">{JSON.stringify(Submodule210656d8Routes, null, 2)}</pre>
      </article>
    </section>
  )
}

export { Submodule210656d8Routes }
export default Submodule210656d8Workspace

