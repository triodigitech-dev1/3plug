const Submodule5da9e32bRoutes = {
  dashboard: 'event-ticket-scanning/dashboard',
  list: 'event-ticket-scanning/list',
  create: 'event-ticket-scanning/create',
  detail: 'event-ticket-scanning/detail/:id',
  edit: 'event-ticket-scanning/edit/:id',
  approvals: 'event-ticket-scanning/approvals',
  reports: 'event-ticket-scanning/reports',
  analytics: 'event-ticket-scanning/analytics',
}

function Submodule5da9e32bWorkspace() {
  return (
    <section className="space-y-4">
      <header className="rounded-xl border border-slate-300/60 bg-white p-4">
        <h3 className="text-base font-bold text-slate-800">event-ticket-scanning</h3>
        <p className="text-sm text-slate-600">Scaffold workspace generated from deep-work component maps.</p>
      </header>

      <article className="rounded-xl border border-slate-300/60 bg-white p-4">
        <p className="text-sm font-semibold text-slate-700">Screen routes</p>
        <pre className="mt-2 overflow-auto text-xs text-slate-600">{JSON.stringify(Submodule5da9e32bRoutes, null, 2)}</pre>
      </article>
    </section>
  )
}

export { Submodule5da9e32bRoutes }
export default Submodule5da9e32bWorkspace

