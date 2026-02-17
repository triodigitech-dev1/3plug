const Submodule61fe3215Routes = {
  dashboard: 'discount-and-promotion-management/dashboard',
  list: 'discount-and-promotion-management/list',
  create: 'discount-and-promotion-management/create',
  detail: 'discount-and-promotion-management/detail/:id',
  edit: 'discount-and-promotion-management/edit/:id',
  approvals: 'discount-and-promotion-management/approvals',
  reports: 'discount-and-promotion-management/reports',
  analytics: 'discount-and-promotion-management/analytics',
}

function Submodule61fe3215Workspace() {
  return (
    <section className="space-y-4">
      <header className="rounded-xl border border-slate-300/60 bg-white p-4">
        <h3 className="text-base font-bold text-slate-800">discount-and-promotion-management</h3>
        <p className="text-sm text-slate-600">Scaffold workspace generated from deep-work component maps.</p>
      </header>

      <article className="rounded-xl border border-slate-300/60 bg-white p-4">
        <p className="text-sm font-semibold text-slate-700">Screen routes</p>
        <pre className="mt-2 overflow-auto text-xs text-slate-600">{JSON.stringify(Submodule61fe3215Routes, null, 2)}</pre>
      </article>
    </section>
  )
}

export { Submodule61fe3215Routes }
export default Submodule61fe3215Workspace

