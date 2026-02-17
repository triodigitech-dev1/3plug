const Submoduled0e32196Routes = {
  dashboard: 'compensation-strategy-oversight/dashboard',
  list: 'compensation-strategy-oversight/list',
  create: 'compensation-strategy-oversight/create',
  detail: 'compensation-strategy-oversight/detail/:id',
  edit: 'compensation-strategy-oversight/edit/:id',
  approvals: 'compensation-strategy-oversight/approvals',
  reports: 'compensation-strategy-oversight/reports',
  analytics: 'compensation-strategy-oversight/analytics',
}

function Submoduled0e32196Workspace() {
  return (
    <section className="space-y-4">
      <header className="rounded-xl border border-slate-300/60 bg-white p-4">
        <h3 className="text-base font-bold text-slate-800">compensation-strategy-oversight</h3>
        <p className="text-sm text-slate-600">Scaffold workspace generated from deep-work component maps.</p>
      </header>

      <article className="rounded-xl border border-slate-300/60 bg-white p-4">
        <p className="text-sm font-semibold text-slate-700">Screen routes</p>
        <pre className="mt-2 overflow-auto text-xs text-slate-600">{JSON.stringify(Submoduled0e32196Routes, null, 2)}</pre>
      </article>
    </section>
  )
}

export { Submoduled0e32196Routes }
export default Submoduled0e32196Workspace

