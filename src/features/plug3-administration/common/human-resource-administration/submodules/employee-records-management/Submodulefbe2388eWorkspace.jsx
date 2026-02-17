const Submodulefbe2388eRoutes = {
  dashboard: 'employee-records-management/dashboard',
  list: 'employee-records-management/list',
  create: 'employee-records-management/create',
  detail: 'employee-records-management/detail/:id',
  edit: 'employee-records-management/edit/:id',
  approvals: 'employee-records-management/approvals',
  reports: 'employee-records-management/reports',
  analytics: 'employee-records-management/analytics',
}

function Submodulefbe2388eWorkspace() {
  return (
    <section className="space-y-4">
      <header className="rounded-xl border border-slate-300/60 bg-white p-4">
        <h3 className="text-base font-bold text-slate-800">employee-records-management</h3>
        <p className="text-sm text-slate-600">Scaffold workspace generated from deep-work component maps.</p>
      </header>

      <article className="rounded-xl border border-slate-300/60 bg-white p-4">
        <p className="text-sm font-semibold text-slate-700">Screen routes</p>
        <pre className="mt-2 overflow-auto text-xs text-slate-600">{JSON.stringify(Submodulefbe2388eRoutes, null, 2)}</pre>
      </article>
    </section>
  )
}

export { Submodulefbe2388eRoutes }
export default Submodulefbe2388eWorkspace

