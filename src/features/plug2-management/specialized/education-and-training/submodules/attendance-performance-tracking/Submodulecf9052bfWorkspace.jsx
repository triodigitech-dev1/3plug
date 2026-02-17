const Submodulecf9052bfRoutes = {
  dashboard: 'attendance-performance-tracking/dashboard',
  list: 'attendance-performance-tracking/list',
  create: 'attendance-performance-tracking/create',
  detail: 'attendance-performance-tracking/detail/:id',
  edit: 'attendance-performance-tracking/edit/:id',
  approvals: 'attendance-performance-tracking/approvals',
  reports: 'attendance-performance-tracking/reports',
  analytics: 'attendance-performance-tracking/analytics',
}

function Submodulecf9052bfWorkspace() {
  return (
    <section className="space-y-4">
      <header className="rounded-xl border border-slate-300/60 bg-white p-4">
        <h3 className="text-base font-bold text-slate-800">attendance-performance-tracking</h3>
        <p className="text-sm text-slate-600">Scaffold workspace generated from deep-work component maps.</p>
      </header>

      <article className="rounded-xl border border-slate-300/60 bg-white p-4">
        <p className="text-sm font-semibold text-slate-700">Screen routes</p>
        <pre className="mt-2 overflow-auto text-xs text-slate-600">{JSON.stringify(Submodulecf9052bfRoutes, null, 2)}</pre>
      </article>
    </section>
  )
}

export { Submodulecf9052bfRoutes }
export default Submodulecf9052bfWorkspace

