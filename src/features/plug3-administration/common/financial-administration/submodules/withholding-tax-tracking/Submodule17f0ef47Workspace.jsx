const Submodule17f0ef47Routes = {
  dashboard: 'withholding-tax-tracking/dashboard',
  list: 'withholding-tax-tracking/list',
  create: 'withholding-tax-tracking/create',
  detail: 'withholding-tax-tracking/detail/:id',
  edit: 'withholding-tax-tracking/edit/:id',
  approvals: 'withholding-tax-tracking/approvals',
  reports: 'withholding-tax-tracking/reports',
  analytics: 'withholding-tax-tracking/analytics',
}

function Submodule17f0ef47Workspace() {
  return (
    <section className="space-y-4">
      <header className="rounded-xl border border-slate-300/60 bg-white p-4">
        <h3 className="text-base font-bold text-slate-800">withholding-tax-tracking</h3>
        <p className="text-sm text-slate-600">Scaffold workspace generated from deep-work component maps.</p>
      </header>

      <article className="rounded-xl border border-slate-300/60 bg-white p-4">
        <p className="text-sm font-semibold text-slate-700">Screen routes</p>
        <pre className="mt-2 overflow-auto text-xs text-slate-600">{JSON.stringify(Submodule17f0ef47Routes, null, 2)}</pre>
      </article>
    </section>
  )
}

export { Submodule17f0ef47Routes }
export default Submodule17f0ef47Workspace

