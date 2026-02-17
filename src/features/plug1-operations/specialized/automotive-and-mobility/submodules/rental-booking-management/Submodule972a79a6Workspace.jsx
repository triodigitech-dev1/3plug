const Submodule972a79a6Routes = {
  dashboard: 'rental-booking-management/dashboard',
  list: 'rental-booking-management/list',
  create: 'rental-booking-management/create',
  detail: 'rental-booking-management/detail/:id',
  edit: 'rental-booking-management/edit/:id',
  approvals: 'rental-booking-management/approvals',
  reports: 'rental-booking-management/reports',
  analytics: 'rental-booking-management/analytics',
}

function Submodule972a79a6Workspace() {
  return (
    <section className="space-y-4">
      <header className="rounded-xl border border-slate-300/60 bg-white p-4">
        <h3 className="text-base font-bold text-slate-800">rental-booking-management</h3>
        <p className="text-sm text-slate-600">Scaffold workspace generated from deep-work component maps.</p>
      </header>

      <article className="rounded-xl border border-slate-300/60 bg-white p-4">
        <p className="text-sm font-semibold text-slate-700">Screen routes</p>
        <pre className="mt-2 overflow-auto text-xs text-slate-600">{JSON.stringify(Submodule972a79a6Routes, null, 2)}</pre>
      </article>
    </section>
  )
}

export { Submodule972a79a6Routes }
export default Submodule972a79a6Workspace

