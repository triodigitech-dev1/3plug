const Submoduleb6668293Routes = {
  dashboard: 'default-rate-monitoring/dashboard',
  list: 'default-rate-monitoring/list',
  create: 'default-rate-monitoring/create',
  detail: 'default-rate-monitoring/detail/:id',
  edit: 'default-rate-monitoring/edit/:id',
  approvals: 'default-rate-monitoring/approvals',
  reports: 'default-rate-monitoring/reports',
  analytics: 'default-rate-monitoring/analytics',
}

function Submoduleb6668293Workspace() {
  return (
    <section className="space-y-4">
      <header className="rounded-xl border border-slate-300/60 bg-white p-4">
        <h3 className="text-base font-bold text-slate-800">default-rate-monitoring</h3>
        <p className="text-sm text-slate-600">Scaffold workspace generated from deep-work component maps.</p>
      </header>

      <article className="rounded-xl border border-slate-300/60 bg-white p-4">
        <p className="text-sm font-semibold text-slate-700">Screen routes</p>
        <pre className="mt-2 overflow-auto text-xs text-slate-600">{JSON.stringify(Submoduleb6668293Routes, null, 2)}</pre>
      </article>
    </section>
  )
}

export { Submoduleb6668293Routes }
export default Submoduleb6668293Workspace

