const Submodulebacbdb40Routes = {
  dashboard: 'dispatch-management/dashboard',
  list: 'dispatch-management/list',
  create: 'dispatch-management/create',
  detail: 'dispatch-management/detail/:id',
  edit: 'dispatch-management/edit/:id',
  approvals: 'dispatch-management/approvals',
  reports: 'dispatch-management/reports',
  analytics: 'dispatch-management/analytics',
}

function Submodulebacbdb40Workspace() {
  return (
    <section className="space-y-4">
      <header className="rounded-xl border border-slate-300/60 bg-white p-4">
        <h3 className="text-base font-bold text-slate-800">dispatch-management</h3>
        <p className="text-sm text-slate-600">Scaffold workspace generated from deep-work component maps.</p>
      </header>

      <article className="rounded-xl border border-slate-300/60 bg-white p-4">
        <p className="text-sm font-semibold text-slate-700">Screen routes</p>
        <pre className="mt-2 overflow-auto text-xs text-slate-600">{JSON.stringify(Submodulebacbdb40Routes, null, 2)}</pre>
      </article>
    </section>
  )
}

export { Submodulebacbdb40Routes }
export default Submodulebacbdb40Workspace

