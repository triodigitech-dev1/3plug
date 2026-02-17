const Submodulebab9d208Routes = {
  dashboard: 'discount-policy-governance/dashboard',
  list: 'discount-policy-governance/list',
  create: 'discount-policy-governance/create',
  detail: 'discount-policy-governance/detail/:id',
  edit: 'discount-policy-governance/edit/:id',
  approvals: 'discount-policy-governance/approvals',
  reports: 'discount-policy-governance/reports',
  analytics: 'discount-policy-governance/analytics',
}

function Submodulebab9d208Workspace() {
  return (
    <section className="space-y-4">
      <header className="rounded-xl border border-slate-300/60 bg-white p-4">
        <h3 className="text-base font-bold text-slate-800">discount-policy-governance</h3>
        <p className="text-sm text-slate-600">Scaffold workspace generated from deep-work component maps.</p>
      </header>

      <article className="rounded-xl border border-slate-300/60 bg-white p-4">
        <p className="text-sm font-semibold text-slate-700">Screen routes</p>
        <pre className="mt-2 overflow-auto text-xs text-slate-600">{JSON.stringify(Submodulebab9d208Routes, null, 2)}</pre>
      </article>
    </section>
  )
}

export { Submodulebab9d208Routes }
export default Submodulebab9d208Workspace

