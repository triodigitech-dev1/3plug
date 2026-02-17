const Submoduleadac8ec9Routes = {
  dashboard: 'reservation-management/dashboard',
  list: 'reservation-management/list',
  create: 'reservation-management/create',
  detail: 'reservation-management/detail/:id',
  edit: 'reservation-management/edit/:id',
  approvals: 'reservation-management/approvals',
  reports: 'reservation-management/reports',
  analytics: 'reservation-management/analytics',
}

function Submoduleadac8ec9Workspace() {
  return (
    <section className="space-y-4">
      <header className="rounded-xl border border-slate-300/60 bg-white p-4">
        <h3 className="text-base font-bold text-slate-800">reservation-management</h3>
        <p className="text-sm text-slate-600">Scaffold workspace generated from deep-work component maps.</p>
      </header>

      <article className="rounded-xl border border-slate-300/60 bg-white p-4">
        <p className="text-sm font-semibold text-slate-700">Screen routes</p>
        <pre className="mt-2 overflow-auto text-xs text-slate-600">{JSON.stringify(Submoduleadac8ec9Routes, null, 2)}</pre>
      </article>
    </section>
  )
}

export { Submoduleadac8ec9Routes }
export default Submoduleadac8ec9Workspace

