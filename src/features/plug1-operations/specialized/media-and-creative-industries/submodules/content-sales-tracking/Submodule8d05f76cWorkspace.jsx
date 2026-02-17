const Submodule8d05f76cRoutes = {
  dashboard: 'content-sales-tracking/dashboard',
  list: 'content-sales-tracking/list',
  create: 'content-sales-tracking/create',
  detail: 'content-sales-tracking/detail/:id',
  edit: 'content-sales-tracking/edit/:id',
  approvals: 'content-sales-tracking/approvals',
  reports: 'content-sales-tracking/reports',
  analytics: 'content-sales-tracking/analytics',
}

function Submodule8d05f76cWorkspace() {
  return (
    <section className="space-y-4">
      <header className="rounded-xl border border-slate-300/60 bg-white p-4">
        <h3 className="text-base font-bold text-slate-800">content-sales-tracking</h3>
        <p className="text-sm text-slate-600">Scaffold workspace generated from deep-work component maps.</p>
      </header>

      <article className="rounded-xl border border-slate-300/60 bg-white p-4">
        <p className="text-sm font-semibold text-slate-700">Screen routes</p>
        <pre className="mt-2 overflow-auto text-xs text-slate-600">{JSON.stringify(Submodule8d05f76cRoutes, null, 2)}</pre>
      </article>
    </section>
  )
}

export { Submodule8d05f76cRoutes }
export default Submodule8d05f76cWorkspace

