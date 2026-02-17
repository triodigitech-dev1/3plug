const Submodule5bb04a58Routes = {
  dashboard: 'risk-assessment-planning/dashboard',
  list: 'risk-assessment-planning/list',
  create: 'risk-assessment-planning/create',
  detail: 'risk-assessment-planning/detail/:id',
  edit: 'risk-assessment-planning/edit/:id',
  approvals: 'risk-assessment-planning/approvals',
  reports: 'risk-assessment-planning/reports',
  analytics: 'risk-assessment-planning/analytics',
}

function Submodule5bb04a58Workspace() {
  return (
    <section className="space-y-4">
      <header className="rounded-xl border border-slate-300/60 bg-white p-4">
        <h3 className="text-base font-bold text-slate-800">risk-assessment-planning</h3>
        <p className="text-sm text-slate-600">Scaffold workspace generated from deep-work component maps.</p>
      </header>

      <article className="rounded-xl border border-slate-300/60 bg-white p-4">
        <p className="text-sm font-semibold text-slate-700">Screen routes</p>
        <pre className="mt-2 overflow-auto text-xs text-slate-600">{JSON.stringify(Submodule5bb04a58Routes, null, 2)}</pre>
      </article>
    </section>
  )
}

export { Submodule5bb04a58Routes }
export default Submodule5bb04a58Workspace

