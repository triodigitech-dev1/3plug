const Submodulefd7dc6bbRoutes = {
  dashboard: 'regulatory-filing-reminders/dashboard',
  list: 'regulatory-filing-reminders/list',
  create: 'regulatory-filing-reminders/create',
  detail: 'regulatory-filing-reminders/detail/:id',
  edit: 'regulatory-filing-reminders/edit/:id',
  approvals: 'regulatory-filing-reminders/approvals',
  reports: 'regulatory-filing-reminders/reports',
  analytics: 'regulatory-filing-reminders/analytics',
}

function Submodulefd7dc6bbWorkspace() {
  return (
    <section className="space-y-4">
      <header className="rounded-xl border border-slate-300/60 bg-white p-4">
        <h3 className="text-base font-bold text-slate-800">regulatory-filing-reminders</h3>
        <p className="text-sm text-slate-600">Scaffold workspace generated from deep-work component maps.</p>
      </header>

      <article className="rounded-xl border border-slate-300/60 bg-white p-4">
        <p className="text-sm font-semibold text-slate-700">Screen routes</p>
        <pre className="mt-2 overflow-auto text-xs text-slate-600">{JSON.stringify(Submodulefd7dc6bbRoutes, null, 2)}</pre>
      </article>
    </section>
  )
}

export { Submodulefd7dc6bbRoutes }
export default Submodulefd7dc6bbWorkspace

