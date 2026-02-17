const Submodulebdc4c302Routes = {
  dashboard: 'public-accountability-reporting/dashboard',
  list: 'public-accountability-reporting/list',
  create: 'public-accountability-reporting/create',
  detail: 'public-accountability-reporting/detail/:id',
  edit: 'public-accountability-reporting/edit/:id',
  approvals: 'public-accountability-reporting/approvals',
  reports: 'public-accountability-reporting/reports',
  analytics: 'public-accountability-reporting/analytics',
}

function Submodulebdc4c302Workspace() {
  return (
    <section className="space-y-4">
      <header className="rounded-xl border border-slate-300/60 bg-white p-4">
        <h3 className="text-base font-bold text-slate-800">public-accountability-reporting</h3>
        <p className="text-sm text-slate-600">Scaffold workspace generated from deep-work component maps.</p>
      </header>

      <article className="rounded-xl border border-slate-300/60 bg-white p-4">
        <p className="text-sm font-semibold text-slate-700">Screen routes</p>
        <pre className="mt-2 overflow-auto text-xs text-slate-600">{JSON.stringify(Submodulebdc4c302Routes, null, 2)}</pre>
      </article>
    </section>
  )
}

export { Submodulebdc4c302Routes }
export default Submodulebdc4c302Workspace

