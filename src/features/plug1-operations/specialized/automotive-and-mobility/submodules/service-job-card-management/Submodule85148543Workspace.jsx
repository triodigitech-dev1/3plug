const Submodule85148543Routes = {
  dashboard: 'service-job-card-management/dashboard',
  list: 'service-job-card-management/list',
  create: 'service-job-card-management/create',
  detail: 'service-job-card-management/detail/:id',
  edit: 'service-job-card-management/edit/:id',
  approvals: 'service-job-card-management/approvals',
  reports: 'service-job-card-management/reports',
  analytics: 'service-job-card-management/analytics',
}

function Submodule85148543Workspace() {
  return (
    <section className="space-y-4">
      <header className="rounded-xl border border-slate-300/60 bg-white p-4">
        <h3 className="text-base font-bold text-slate-800">service-job-card-management</h3>
        <p className="text-sm text-slate-600">Scaffold workspace generated from deep-work component maps.</p>
      </header>

      <article className="rounded-xl border border-slate-300/60 bg-white p-4">
        <p className="text-sm font-semibold text-slate-700">Screen routes</p>
        <pre className="mt-2 overflow-auto text-xs text-slate-600">{JSON.stringify(Submodule85148543Routes, null, 2)}</pre>
      </article>
    </section>
  )
}

export { Submodule85148543Routes }
export default Submodule85148543Workspace

