const Submodulefa8a87f2Routes = {
  dashboard: 'medical-inventory-control/dashboard',
  list: 'medical-inventory-control/list',
  create: 'medical-inventory-control/create',
  detail: 'medical-inventory-control/detail/:id',
  edit: 'medical-inventory-control/edit/:id',
  approvals: 'medical-inventory-control/approvals',
  reports: 'medical-inventory-control/reports',
  analytics: 'medical-inventory-control/analytics',
}

function Submodulefa8a87f2Workspace() {
  return (
    <section className="space-y-4">
      <header className="rounded-xl border border-slate-300/60 bg-white p-4">
        <h3 className="text-base font-bold text-slate-800">medical-inventory-control</h3>
        <p className="text-sm text-slate-600">Scaffold workspace generated from deep-work component maps.</p>
      </header>

      <article className="rounded-xl border border-slate-300/60 bg-white p-4">
        <p className="text-sm font-semibold text-slate-700">Screen routes</p>
        <pre className="mt-2 overflow-auto text-xs text-slate-600">{JSON.stringify(Submodulefa8a87f2Routes, null, 2)}</pre>
      </article>
    </section>
  )
}

export { Submodulefa8a87f2Routes }
export default Submodulefa8a87f2Workspace

