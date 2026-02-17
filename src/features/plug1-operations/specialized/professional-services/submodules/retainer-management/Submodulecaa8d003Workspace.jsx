const Submodulecaa8d003Routes = {
  dashboard: 'retainer-management/dashboard',
  list: 'retainer-management/list',
  create: 'retainer-management/create',
  detail: 'retainer-management/detail/:id',
  edit: 'retainer-management/edit/:id',
  approvals: 'retainer-management/approvals',
  reports: 'retainer-management/reports',
  analytics: 'retainer-management/analytics',
}

function Submodulecaa8d003Workspace() {
  return (
    <section className="space-y-4">
      <header className="rounded-xl border border-slate-300/60 bg-white p-4">
        <h3 className="text-base font-bold text-slate-800">retainer-management</h3>
        <p className="text-sm text-slate-600">Scaffold workspace generated from deep-work component maps.</p>
      </header>

      <article className="rounded-xl border border-slate-300/60 bg-white p-4">
        <p className="text-sm font-semibold text-slate-700">Screen routes</p>
        <pre className="mt-2 overflow-auto text-xs text-slate-600">{JSON.stringify(Submodulecaa8d003Routes, null, 2)}</pre>
      </article>
    </section>
  )
}

export { Submodulecaa8d003Routes }
export default Submodulecaa8d003Workspace

