const Submodule82a2c9d1Routes = {
  dashboard: 'accounts-receivable-oversight/dashboard',
  list: 'accounts-receivable-oversight/list',
  create: 'accounts-receivable-oversight/create',
  detail: 'accounts-receivable-oversight/detail/:id',
  edit: 'accounts-receivable-oversight/edit/:id',
  approvals: 'accounts-receivable-oversight/approvals',
  reports: 'accounts-receivable-oversight/reports',
  analytics: 'accounts-receivable-oversight/analytics',
}

function Submodule82a2c9d1Workspace() {
  return (
    <section className="space-y-4">
      <header className="rounded-xl border border-slate-300/60 bg-white p-4">
        <h3 className="text-base font-bold text-slate-800">accounts-receivable-oversight</h3>
        <p className="text-sm text-slate-600">Scaffold workspace generated from deep-work component maps.</p>
      </header>

      <article className="rounded-xl border border-slate-300/60 bg-white p-4">
        <p className="text-sm font-semibold text-slate-700">Screen routes</p>
        <pre className="mt-2 overflow-auto text-xs text-slate-600">{JSON.stringify(Submodule82a2c9d1Routes, null, 2)}</pre>
      </article>
    </section>
  )
}

export { Submodule82a2c9d1Routes }
export default Submodule82a2c9d1Workspace

