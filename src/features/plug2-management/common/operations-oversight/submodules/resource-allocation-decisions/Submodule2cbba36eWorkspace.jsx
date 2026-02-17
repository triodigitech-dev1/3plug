const Submodule2cbba36eRoutes = {
  dashboard: 'resource-allocation-decisions/dashboard',
  list: 'resource-allocation-decisions/list',
  create: 'resource-allocation-decisions/create',
  detail: 'resource-allocation-decisions/detail/:id',
  edit: 'resource-allocation-decisions/edit/:id',
  approvals: 'resource-allocation-decisions/approvals',
  reports: 'resource-allocation-decisions/reports',
  analytics: 'resource-allocation-decisions/analytics',
}

function Submodule2cbba36eWorkspace() {
  return (
    <section className="space-y-4">
      <header className="rounded-xl border border-slate-300/60 bg-white p-4">
        <h3 className="text-base font-bold text-slate-800">resource-allocation-decisions</h3>
        <p className="text-sm text-slate-600">Scaffold workspace generated from deep-work component maps.</p>
      </header>

      <article className="rounded-xl border border-slate-300/60 bg-white p-4">
        <p className="text-sm font-semibold text-slate-700">Screen routes</p>
        <pre className="mt-2 overflow-auto text-xs text-slate-600">{JSON.stringify(Submodule2cbba36eRoutes, null, 2)}</pre>
      </article>
    </section>
  )
}

export { Submodule2cbba36eRoutes }
export default Submodule2cbba36eWorkspace

