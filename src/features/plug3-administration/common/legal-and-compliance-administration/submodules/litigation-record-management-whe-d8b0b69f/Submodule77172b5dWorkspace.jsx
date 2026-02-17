const Submodule77172b5dRoutes = {
  dashboard: 'litigation-record-management-where-applicable/dashboard',
  list: 'litigation-record-management-where-applicable/list',
  create: 'litigation-record-management-where-applicable/create',
  detail: 'litigation-record-management-where-applicable/detail/:id',
  edit: 'litigation-record-management-where-applicable/edit/:id',
  approvals: 'litigation-record-management-where-applicable/approvals',
  reports: 'litigation-record-management-where-applicable/reports',
  analytics: 'litigation-record-management-where-applicable/analytics',
}

function Submodule77172b5dWorkspace() {
  return (
    <section className="space-y-4">
      <header className="rounded-xl border border-slate-300/60 bg-white p-4">
        <h3 className="text-base font-bold text-slate-800">litigation-record-management-where-applicable</h3>
        <p className="text-sm text-slate-600">Scaffold workspace generated from deep-work component maps.</p>
      </header>

      <article className="rounded-xl border border-slate-300/60 bg-white p-4">
        <p className="text-sm font-semibold text-slate-700">Screen routes</p>
        <pre className="mt-2 overflow-auto text-xs text-slate-600">{JSON.stringify(Submodule77172b5dRoutes, null, 2)}</pre>
      </article>
    </section>
  )
}

export { Submodule77172b5dRoutes }
export default Submodule77172b5dWorkspace

