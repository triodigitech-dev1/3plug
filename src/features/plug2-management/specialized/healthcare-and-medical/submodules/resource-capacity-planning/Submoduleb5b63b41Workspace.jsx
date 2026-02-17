const Submoduleb5b63b41Routes = {
  dashboard: 'resource-capacity-planning/dashboard',
  list: 'resource-capacity-planning/list',
  create: 'resource-capacity-planning/create',
  detail: 'resource-capacity-planning/detail/:id',
  edit: 'resource-capacity-planning/edit/:id',
  approvals: 'resource-capacity-planning/approvals',
  reports: 'resource-capacity-planning/reports',
  analytics: 'resource-capacity-planning/analytics',
}

function Submoduleb5b63b41Workspace() {
  return (
    <section className="space-y-4">
      <header className="rounded-xl border border-slate-300/60 bg-white p-4">
        <h3 className="text-base font-bold text-slate-800">resource-capacity-planning</h3>
        <p className="text-sm text-slate-600">Scaffold workspace generated from deep-work component maps.</p>
      </header>

      <article className="rounded-xl border border-slate-300/60 bg-white p-4">
        <p className="text-sm font-semibold text-slate-700">Screen routes</p>
        <pre className="mt-2 overflow-auto text-xs text-slate-600">{JSON.stringify(Submoduleb5b63b41Routes, null, 2)}</pre>
      </article>
    </section>
  )
}

export { Submoduleb5b63b41Routes }
export default Submoduleb5b63b41Workspace

