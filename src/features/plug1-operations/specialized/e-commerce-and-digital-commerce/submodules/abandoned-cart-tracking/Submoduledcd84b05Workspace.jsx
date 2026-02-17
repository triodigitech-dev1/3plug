const Submoduledcd84b05Routes = {
  dashboard: 'abandoned-cart-tracking/dashboard',
  list: 'abandoned-cart-tracking/list',
  create: 'abandoned-cart-tracking/create',
  detail: 'abandoned-cart-tracking/detail/:id',
  edit: 'abandoned-cart-tracking/edit/:id',
  approvals: 'abandoned-cart-tracking/approvals',
  reports: 'abandoned-cart-tracking/reports',
  analytics: 'abandoned-cart-tracking/analytics',
}

function Submoduledcd84b05Workspace() {
  return (
    <section className="space-y-4">
      <header className="rounded-xl border border-slate-300/60 bg-white p-4">
        <h3 className="text-base font-bold text-slate-800">abandoned-cart-tracking</h3>
        <p className="text-sm text-slate-600">Scaffold workspace generated from deep-work component maps.</p>
      </header>

      <article className="rounded-xl border border-slate-300/60 bg-white p-4">
        <p className="text-sm font-semibold text-slate-700">Screen routes</p>
        <pre className="mt-2 overflow-auto text-xs text-slate-600">{JSON.stringify(Submoduledcd84b05Routes, null, 2)}</pre>
      </article>
    </section>
  )
}

export { Submoduledcd84b05Routes }
export default Submoduledcd84b05Workspace

