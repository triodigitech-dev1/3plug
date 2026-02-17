const Submodule785348e2Routes = {
  dashboard: 'refund-policy-governance/dashboard',
  list: 'refund-policy-governance/list',
  create: 'refund-policy-governance/create',
  detail: 'refund-policy-governance/detail/:id',
  edit: 'refund-policy-governance/edit/:id',
  approvals: 'refund-policy-governance/approvals',
  reports: 'refund-policy-governance/reports',
  analytics: 'refund-policy-governance/analytics',
}

function Submodule785348e2Workspace() {
  return (
    <section className="space-y-4">
      <header className="rounded-xl border border-slate-300/60 bg-white p-4">
        <h3 className="text-base font-bold text-slate-800">refund-policy-governance</h3>
        <p className="text-sm text-slate-600">Scaffold workspace generated from deep-work component maps.</p>
      </header>

      <article className="rounded-xl border border-slate-300/60 bg-white p-4">
        <p className="text-sm font-semibold text-slate-700">Screen routes</p>
        <pre className="mt-2 overflow-auto text-xs text-slate-600">{JSON.stringify(Submodule785348e2Routes, null, 2)}</pre>
      </article>
    </section>
  )
}

export { Submodule785348e2Routes }
export default Submodule785348e2Workspace

