const Submodulec16c3db6Routes = {
  dashboard: 'expense-summaries/dashboard',
  list: 'expense-summaries/list',
  create: 'expense-summaries/create',
  detail: 'expense-summaries/detail/:id',
  edit: 'expense-summaries/edit/:id',
  approvals: 'expense-summaries/approvals',
  reports: 'expense-summaries/reports',
  analytics: 'expense-summaries/analytics',
}

function Submodulec16c3db6Workspace() {
  return (
    <section className="space-y-4">
      <header className="rounded-xl border border-slate-300/60 bg-white p-4">
        <h3 className="text-base font-bold text-slate-800">expense-summaries</h3>
        <p className="text-sm text-slate-600">Scaffold workspace generated from deep-work component maps.</p>
      </header>

      <article className="rounded-xl border border-slate-300/60 bg-white p-4">
        <p className="text-sm font-semibold text-slate-700">Screen routes</p>
        <pre className="mt-2 overflow-auto text-xs text-slate-600">{JSON.stringify(Submodulec16c3db6Routes, null, 2)}</pre>
      </article>
    </section>
  )
}

export { Submodulec16c3db6Routes }
export default Submodulec16c3db6Workspace

