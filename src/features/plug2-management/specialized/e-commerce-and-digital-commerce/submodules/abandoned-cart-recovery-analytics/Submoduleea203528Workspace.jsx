const Submoduleea203528Routes = {
  dashboard: 'abandoned-cart-recovery-analytics/dashboard',
  list: 'abandoned-cart-recovery-analytics/list',
  create: 'abandoned-cart-recovery-analytics/create',
  detail: 'abandoned-cart-recovery-analytics/detail/:id',
  edit: 'abandoned-cart-recovery-analytics/edit/:id',
  approvals: 'abandoned-cart-recovery-analytics/approvals',
  reports: 'abandoned-cart-recovery-analytics/reports',
  analytics: 'abandoned-cart-recovery-analytics/analytics',
}

function Submoduleea203528Workspace() {
  return (
    <section className="space-y-4">
      <header className="rounded-xl border border-slate-300/60 bg-white p-4">
        <h3 className="text-base font-bold text-slate-800">abandoned-cart-recovery-analytics</h3>
        <p className="text-sm text-slate-600">Scaffold workspace generated from deep-work component maps.</p>
      </header>

      <article className="rounded-xl border border-slate-300/60 bg-white p-4">
        <p className="text-sm font-semibold text-slate-700">Screen routes</p>
        <pre className="mt-2 overflow-auto text-xs text-slate-600">{JSON.stringify(Submoduleea203528Routes, null, 2)}</pre>
      </article>
    </section>
  )
}

export { Submoduleea203528Routes }
export default Submoduleea203528Workspace

