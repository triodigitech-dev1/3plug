const Submodule130dac26Routes = {
  dashboard: 'capital-allocation-planning/dashboard',
  list: 'capital-allocation-planning/list',
  create: 'capital-allocation-planning/create',
  detail: 'capital-allocation-planning/detail/:id',
  edit: 'capital-allocation-planning/edit/:id',
  approvals: 'capital-allocation-planning/approvals',
  reports: 'capital-allocation-planning/reports',
  analytics: 'capital-allocation-planning/analytics',
}

function Submodule130dac26Workspace() {
  return (
    <section className="space-y-4">
      <header className="rounded-xl border border-slate-300/60 bg-white p-4">
        <h3 className="text-base font-bold text-slate-800">capital-allocation-planning</h3>
        <p className="text-sm text-slate-600">Scaffold workspace generated from deep-work component maps.</p>
      </header>

      <article className="rounded-xl border border-slate-300/60 bg-white p-4">
        <p className="text-sm font-semibold text-slate-700">Screen routes</p>
        <pre className="mt-2 overflow-auto text-xs text-slate-600">{JSON.stringify(Submodule130dac26Routes, null, 2)}</pre>
      </article>
    </section>
  )
}

export { Submodule130dac26Routes }
export default Submodule130dac26Workspace

