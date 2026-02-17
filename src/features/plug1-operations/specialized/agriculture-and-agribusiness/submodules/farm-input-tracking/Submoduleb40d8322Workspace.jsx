const Submoduleb40d8322Routes = {
  dashboard: 'farm-input-tracking/dashboard',
  list: 'farm-input-tracking/list',
  create: 'farm-input-tracking/create',
  detail: 'farm-input-tracking/detail/:id',
  edit: 'farm-input-tracking/edit/:id',
  approvals: 'farm-input-tracking/approvals',
  reports: 'farm-input-tracking/reports',
  analytics: 'farm-input-tracking/analytics',
}

function Submoduleb40d8322Workspace() {
  return (
    <section className="space-y-4">
      <header className="rounded-xl border border-slate-300/60 bg-white p-4">
        <h3 className="text-base font-bold text-slate-800">farm-input-tracking</h3>
        <p className="text-sm text-slate-600">Scaffold workspace generated from deep-work component maps.</p>
      </header>

      <article className="rounded-xl border border-slate-300/60 bg-white p-4">
        <p className="text-sm font-semibold text-slate-700">Screen routes</p>
        <pre className="mt-2 overflow-auto text-xs text-slate-600">{JSON.stringify(Submoduleb40d8322Routes, null, 2)}</pre>
      </article>
    </section>
  )
}

export { Submoduleb40d8322Routes }
export default Submoduleb40d8322Workspace

