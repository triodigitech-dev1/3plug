const Submodule43dc5e66Routes = {
  dashboard: 'subscription-contract-governance/dashboard',
  list: 'subscription-contract-governance/list',
  create: 'subscription-contract-governance/create',
  detail: 'subscription-contract-governance/detail/:id',
  edit: 'subscription-contract-governance/edit/:id',
  approvals: 'subscription-contract-governance/approvals',
  reports: 'subscription-contract-governance/reports',
  analytics: 'subscription-contract-governance/analytics',
}

function Submodule43dc5e66Workspace() {
  return (
    <section className="space-y-4">
      <header className="rounded-xl border border-slate-300/60 bg-white p-4">
        <h3 className="text-base font-bold text-slate-800">subscription-contract-governance</h3>
        <p className="text-sm text-slate-600">Scaffold workspace generated from deep-work component maps.</p>
      </header>

      <article className="rounded-xl border border-slate-300/60 bg-white p-4">
        <p className="text-sm font-semibold text-slate-700">Screen routes</p>
        <pre className="mt-2 overflow-auto text-xs text-slate-600">{JSON.stringify(Submodule43dc5e66Routes, null, 2)}</pre>
      </article>
    </section>
  )
}

export { Submodule43dc5e66Routes }
export default Submodule43dc5e66Workspace

