const Submodule1ea82972Routes = {
  dashboard: 'supplier-invoice-capture/dashboard',
  list: 'supplier-invoice-capture/list',
  create: 'supplier-invoice-capture/create',
  detail: 'supplier-invoice-capture/detail/:id',
  edit: 'supplier-invoice-capture/edit/:id',
  approvals: 'supplier-invoice-capture/approvals',
  reports: 'supplier-invoice-capture/reports',
  analytics: 'supplier-invoice-capture/analytics',
}

function Submodule1ea82972Workspace() {
  return (
    <section className="space-y-4">
      <header className="rounded-xl border border-slate-300/60 bg-white p-4">
        <h3 className="text-base font-bold text-slate-800">supplier-invoice-capture</h3>
        <p className="text-sm text-slate-600">Scaffold workspace generated from deep-work component maps.</p>
      </header>

      <article className="rounded-xl border border-slate-300/60 bg-white p-4">
        <p className="text-sm font-semibold text-slate-700">Screen routes</p>
        <pre className="mt-2 overflow-auto text-xs text-slate-600">{JSON.stringify(Submodule1ea82972Routes, null, 2)}</pre>
      </article>
    </section>
  )
}

export { Submodule1ea82972Routes }
export default Submodule1ea82972Workspace

