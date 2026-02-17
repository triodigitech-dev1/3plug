const Submodule0aa3f382Routes = {
  dashboard: 'logistics-cost-optimization/dashboard',
  list: 'logistics-cost-optimization/list',
  create: 'logistics-cost-optimization/create',
  detail: 'logistics-cost-optimization/detail/:id',
  edit: 'logistics-cost-optimization/edit/:id',
  approvals: 'logistics-cost-optimization/approvals',
  reports: 'logistics-cost-optimization/reports',
  analytics: 'logistics-cost-optimization/analytics',
}

function Submodule0aa3f382Workspace() {
  return (
    <section className="space-y-4">
      <header className="rounded-xl border border-slate-300/60 bg-white p-4">
        <h3 className="text-base font-bold text-slate-800">logistics-cost-optimization</h3>
        <p className="text-sm text-slate-600">Scaffold workspace generated from deep-work component maps.</p>
      </header>

      <article className="rounded-xl border border-slate-300/60 bg-white p-4">
        <p className="text-sm font-semibold text-slate-700">Screen routes</p>
        <pre className="mt-2 overflow-auto text-xs text-slate-600">{JSON.stringify(Submodule0aa3f382Routes, null, 2)}</pre>
      </article>
    </section>
  )
}

export { Submodule0aa3f382Routes }
export default Submodule0aa3f382Workspace

