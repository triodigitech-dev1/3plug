const Submoduleb2c79b1eRoutes = {
  dashboard: 'staff-attendance-tracking/dashboard',
  list: 'staff-attendance-tracking/list',
  create: 'staff-attendance-tracking/create',
  detail: 'staff-attendance-tracking/detail/:id',
  edit: 'staff-attendance-tracking/edit/:id',
  approvals: 'staff-attendance-tracking/approvals',
  reports: 'staff-attendance-tracking/reports',
  analytics: 'staff-attendance-tracking/analytics',
}

function Submoduleb2c79b1eWorkspace() {
  return (
    <section className="space-y-4">
      <header className="rounded-xl border border-slate-300/60 bg-white p-4">
        <h3 className="text-base font-bold text-slate-800">staff-attendance-tracking</h3>
        <p className="text-sm text-slate-600">Scaffold workspace generated from deep-work component maps.</p>
      </header>

      <article className="rounded-xl border border-slate-300/60 bg-white p-4">
        <p className="text-sm font-semibold text-slate-700">Screen routes</p>
        <pre className="mt-2 overflow-auto text-xs text-slate-600">{JSON.stringify(Submoduleb2c79b1eRoutes, null, 2)}</pre>
      </article>
    </section>
  )
}

export { Submoduleb2c79b1eRoutes }
export default Submoduleb2c79b1eWorkspace

