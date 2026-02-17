const Submodule7134fc21Routes = {
  dashboard: 'input-cost-efficiency-analysis/dashboard',
  list: 'input-cost-efficiency-analysis/list',
  create: 'input-cost-efficiency-analysis/create',
  detail: 'input-cost-efficiency-analysis/detail/:id',
  edit: 'input-cost-efficiency-analysis/edit/:id',
  approvals: 'input-cost-efficiency-analysis/approvals',
  reports: 'input-cost-efficiency-analysis/reports',
  analytics: 'input-cost-efficiency-analysis/analytics',
}

function Submodule7134fc21Workspace() {
  return (
    <section className="space-y-4">
      <header className="rounded-xl border border-slate-300/60 bg-white p-4">
        <h3 className="text-base font-bold text-slate-800">input-cost-efficiency-analysis</h3>
        <p className="text-sm text-slate-600">Scaffold workspace generated from deep-work component maps.</p>
      </header>

      <article className="rounded-xl border border-slate-300/60 bg-white p-4">
        <p className="text-sm font-semibold text-slate-700">Screen routes</p>
        <pre className="mt-2 overflow-auto text-xs text-slate-600">{JSON.stringify(Submodule7134fc21Routes, null, 2)}</pre>
      </article>
    </section>
  )
}

export { Submodule7134fc21Routes }
export default Submodule7134fc21Workspace

