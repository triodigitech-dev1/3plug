const Submodule943742e7Routes = {
  dashboard: 'subscription-billing-where-applicable/dashboard',
  list: 'subscription-billing-where-applicable/list',
  create: 'subscription-billing-where-applicable/create',
  detail: 'subscription-billing-where-applicable/detail/:id',
  edit: 'subscription-billing-where-applicable/edit/:id',
  approvals: 'subscription-billing-where-applicable/approvals',
  reports: 'subscription-billing-where-applicable/reports',
  analytics: 'subscription-billing-where-applicable/analytics',
}

function Submodule943742e7Workspace() {
  return (
    <section className="space-y-4">
      <header className="rounded-xl border border-slate-300/60 bg-white p-4">
        <h3 className="text-base font-bold text-slate-800">subscription-billing-where-applicable</h3>
        <p className="text-sm text-slate-600">Scaffold workspace generated from deep-work component maps.</p>
      </header>

      <article className="rounded-xl border border-slate-300/60 bg-white p-4">
        <p className="text-sm font-semibold text-slate-700">Screen routes</p>
        <pre className="mt-2 overflow-auto text-xs text-slate-600">{JSON.stringify(Submodule943742e7Routes, null, 2)}</pre>
      </article>
    </section>
  )
}

export { Submodule943742e7Routes }
export default Submodule943742e7Workspace

