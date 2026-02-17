const Submodule78e9c3b6Routes = {
  dashboard: 'uniform-and-bookstore-sales/dashboard',
  list: 'uniform-and-bookstore-sales/list',
  create: 'uniform-and-bookstore-sales/create',
  detail: 'uniform-and-bookstore-sales/detail/:id',
  edit: 'uniform-and-bookstore-sales/edit/:id',
  approvals: 'uniform-and-bookstore-sales/approvals',
  reports: 'uniform-and-bookstore-sales/reports',
  analytics: 'uniform-and-bookstore-sales/analytics',
}

function Submodule78e9c3b6Workspace() {
  return (
    <section className="space-y-4">
      <header className="rounded-xl border border-slate-300/60 bg-white p-4">
        <h3 className="text-base font-bold text-slate-800">uniform-and-bookstore-sales</h3>
        <p className="text-sm text-slate-600">Scaffold workspace generated from deep-work component maps.</p>
      </header>

      <article className="rounded-xl border border-slate-300/60 bg-white p-4">
        <p className="text-sm font-semibold text-slate-700">Screen routes</p>
        <pre className="mt-2 overflow-auto text-xs text-slate-600">{JSON.stringify(Submodule78e9c3b6Routes, null, 2)}</pre>
      </article>
    </section>
  )
}

export { Submodule78e9c3b6Routes }
export default Submodule78e9c3b6Workspace

