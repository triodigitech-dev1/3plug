const Submodule9fff2b61Routes = {
  dashboard: 'budget-control-enforcement/dashboard',
  list: 'budget-control-enforcement/list',
  create: 'budget-control-enforcement/create',
  detail: 'budget-control-enforcement/detail/:id',
  edit: 'budget-control-enforcement/edit/:id',
  approvals: 'budget-control-enforcement/approvals',
  reports: 'budget-control-enforcement/reports',
  analytics: 'budget-control-enforcement/analytics',
}

function Submodule9fff2b61Workspace() {
  return (
    <section className="space-y-4">
      <header className="rounded-xl border border-slate-300/60 bg-white p-4">
        <h3 className="text-base font-bold text-slate-800">budget-control-enforcement</h3>
        <p className="text-sm text-slate-600">Scaffold workspace generated from deep-work component maps.</p>
      </header>

      <article className="rounded-xl border border-slate-300/60 bg-white p-4">
        <p className="text-sm font-semibold text-slate-700">Screen routes</p>
        <pre className="mt-2 overflow-auto text-xs text-slate-600">{JSON.stringify(Submodule9fff2b61Routes, null, 2)}</pre>
      </article>
    </section>
  )
}

export { Submodule9fff2b61Routes }
export default Submodule9fff2b61Workspace

