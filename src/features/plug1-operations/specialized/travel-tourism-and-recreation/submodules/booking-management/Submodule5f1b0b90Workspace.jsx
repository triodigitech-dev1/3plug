const Submodule5f1b0b90Routes = {
  dashboard: 'booking-management/dashboard',
  list: 'booking-management/list',
  create: 'booking-management/create',
  detail: 'booking-management/detail/:id',
  edit: 'booking-management/edit/:id',
  approvals: 'booking-management/approvals',
  reports: 'booking-management/reports',
  analytics: 'booking-management/analytics',
}

function Submodule5f1b0b90Workspace() {
  return (
    <section className="space-y-4">
      <header className="rounded-xl border border-slate-300/60 bg-white p-4">
        <h3 className="text-base font-bold text-slate-800">booking-management</h3>
        <p className="text-sm text-slate-600">Scaffold workspace generated from deep-work component maps.</p>
      </header>

      <article className="rounded-xl border border-slate-300/60 bg-white p-4">
        <p className="text-sm font-semibold text-slate-700">Screen routes</p>
        <pre className="mt-2 overflow-auto text-xs text-slate-600">{JSON.stringify(Submodule5f1b0b90Routes, null, 2)}</pre>
      </article>
    </section>
  )
}

export { Submodule5f1b0b90Routes }
export default Submodule5f1b0b90Workspace

