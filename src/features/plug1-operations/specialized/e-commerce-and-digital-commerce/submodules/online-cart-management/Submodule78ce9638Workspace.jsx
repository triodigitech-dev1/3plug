const Submodule78ce9638Routes = {
  dashboard: 'online-cart-management/dashboard',
  list: 'online-cart-management/list',
  create: 'online-cart-management/create',
  detail: 'online-cart-management/detail/:id',
  edit: 'online-cart-management/edit/:id',
  approvals: 'online-cart-management/approvals',
  reports: 'online-cart-management/reports',
  analytics: 'online-cart-management/analytics',
}

function Submodule78ce9638Workspace() {
  return (
    <section className="space-y-4">
      <header className="rounded-xl border border-slate-300/60 bg-white p-4">
        <h3 className="text-base font-bold text-slate-800">online-cart-management</h3>
        <p className="text-sm text-slate-600">Scaffold workspace generated from deep-work component maps.</p>
      </header>

      <article className="rounded-xl border border-slate-300/60 bg-white p-4">
        <p className="text-sm font-semibold text-slate-700">Screen routes</p>
        <pre className="mt-2 overflow-auto text-xs text-slate-600">{JSON.stringify(Submodule78ce9638Routes, null, 2)}</pre>
      </article>
    </section>
  )
}

export { Submodule78ce9638Routes }
export default Submodule78ce9638Workspace

