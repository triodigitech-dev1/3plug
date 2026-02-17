const Submodulebc0c6088Routes = {
  dashboard: 'bank-reconciliation-operational-level/dashboard',
  list: 'bank-reconciliation-operational-level/list',
  create: 'bank-reconciliation-operational-level/create',
  detail: 'bank-reconciliation-operational-level/detail/:id',
  edit: 'bank-reconciliation-operational-level/edit/:id',
  approvals: 'bank-reconciliation-operational-level/approvals',
  reports: 'bank-reconciliation-operational-level/reports',
  analytics: 'bank-reconciliation-operational-level/analytics',
}

function Submodulebc0c6088Workspace() {
  return (
    <section className="space-y-4">
      <header className="rounded-xl border border-slate-300/60 bg-white p-4">
        <h3 className="text-base font-bold text-slate-800">bank-reconciliation-operational-level</h3>
        <p className="text-sm text-slate-600">Scaffold workspace generated from deep-work component maps.</p>
      </header>

      <article className="rounded-xl border border-slate-300/60 bg-white p-4">
        <p className="text-sm font-semibold text-slate-700">Screen routes</p>
        <pre className="mt-2 overflow-auto text-xs text-slate-600">{JSON.stringify(Submodulebc0c6088Routes, null, 2)}</pre>
      </article>
    </section>
  )
}

export { Submodulebc0c6088Routes }
export default Submodulebc0c6088Workspace

