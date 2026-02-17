const Submodule9f6d573eRoutes = {
  dashboard: 'expense-logging/dashboard',
  list: 'expense-logging/list',
  create: 'expense-logging/create',
  detail: 'expense-logging/detail/:id',
  edit: 'expense-logging/edit/:id',
  approvals: 'expense-logging/approvals',
  reports: 'expense-logging/reports',
  analytics: 'expense-logging/analytics',
}

function Submodule9f6d573eWorkspace() {
  return (
    <section className="space-y-4">
      <header className="rounded-xl border border-slate-300/60 bg-white p-4">
        <h3 className="text-base font-bold text-slate-800">expense-logging</h3>
        <p className="text-sm text-slate-600">Scaffold workspace generated from deep-work component maps.</p>
      </header>

      <article className="rounded-xl border border-slate-300/60 bg-white p-4">
        <p className="text-sm font-semibold text-slate-700">Screen routes</p>
        <pre className="mt-2 overflow-auto text-xs text-slate-600">{JSON.stringify(Submodule9f6d573eRoutes, null, 2)}</pre>
      </article>
    </section>
  )
}

export { Submodule9f6d573eRoutes }
export default Submodule9f6d573eWorkspace

