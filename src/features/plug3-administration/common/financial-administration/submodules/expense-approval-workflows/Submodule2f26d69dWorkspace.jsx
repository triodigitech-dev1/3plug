const Submodule2f26d69dRoutes = {
  dashboard: 'expense-approval-workflows/dashboard',
  list: 'expense-approval-workflows/list',
  create: 'expense-approval-workflows/create',
  detail: 'expense-approval-workflows/detail/:id',
  edit: 'expense-approval-workflows/edit/:id',
  approvals: 'expense-approval-workflows/approvals',
  reports: 'expense-approval-workflows/reports',
  analytics: 'expense-approval-workflows/analytics',
}

function Submodule2f26d69dWorkspace() {
  return (
    <section className="space-y-4">
      <header className="rounded-xl border border-slate-300/60 bg-white p-4">
        <h3 className="text-base font-bold text-slate-800">expense-approval-workflows</h3>
        <p className="text-sm text-slate-600">Scaffold workspace generated from deep-work component maps.</p>
      </header>

      <article className="rounded-xl border border-slate-300/60 bg-white p-4">
        <p className="text-sm font-semibold text-slate-700">Screen routes</p>
        <pre className="mt-2 overflow-auto text-xs text-slate-600">{JSON.stringify(Submodule2f26d69dRoutes, null, 2)}</pre>
      </article>
    </section>
  )
}

export { Submodule2f26d69dRoutes }
export default Submodule2f26d69dWorkspace

