const Submodule9f77cb79Routes = {
  dashboard: 'room-booking-for-hotels/dashboard',
  list: 'room-booking-for-hotels/list',
  create: 'room-booking-for-hotels/create',
  detail: 'room-booking-for-hotels/detail/:id',
  edit: 'room-booking-for-hotels/edit/:id',
  approvals: 'room-booking-for-hotels/approvals',
  reports: 'room-booking-for-hotels/reports',
  analytics: 'room-booking-for-hotels/analytics',
}

function Submodule9f77cb79Workspace() {
  return (
    <section className="space-y-4">
      <header className="rounded-xl border border-slate-300/60 bg-white p-4">
        <h3 className="text-base font-bold text-slate-800">room-booking-for-hotels</h3>
        <p className="text-sm text-slate-600">Scaffold workspace generated from deep-work component maps.</p>
      </header>

      <article className="rounded-xl border border-slate-300/60 bg-white p-4">
        <p className="text-sm font-semibold text-slate-700">Screen routes</p>
        <pre className="mt-2 overflow-auto text-xs text-slate-600">{JSON.stringify(Submodule9f77cb79Routes, null, 2)}</pre>
      </article>
    </section>
  )
}

export { Submodule9f77cb79Routes }
export default Submodule9f77cb79Workspace

