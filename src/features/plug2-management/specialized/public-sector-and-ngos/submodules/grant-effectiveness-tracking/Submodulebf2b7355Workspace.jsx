const Submodulebf2b7355Routes = {
  dashboard: 'grant-effectiveness-tracking/dashboard',
  list: 'grant-effectiveness-tracking/list',
  create: 'grant-effectiveness-tracking/create',
  detail: 'grant-effectiveness-tracking/detail/:id',
  edit: 'grant-effectiveness-tracking/edit/:id',
  approvals: 'grant-effectiveness-tracking/approvals',
  reports: 'grant-effectiveness-tracking/reports',
  analytics: 'grant-effectiveness-tracking/analytics',
}

function Submodulebf2b7355Workspace() {
  return (
    <section className="space-y-4">
      <header className="rounded-xl border border-slate-300/60 bg-white p-4">
        <h3 className="text-base font-bold text-slate-800">grant-effectiveness-tracking</h3>
        <p className="text-sm text-slate-600">Scaffold workspace generated from deep-work component maps.</p>
      </header>

      <article className="rounded-xl border border-slate-300/60 bg-white p-4">
        <p className="text-sm font-semibold text-slate-700">Screen routes</p>
        <pre className="mt-2 overflow-auto text-xs text-slate-600">{JSON.stringify(Submodulebf2b7355Routes, null, 2)}</pre>
      </article>
    </section>
  )
}

export { Submodulebf2b7355Routes }
export default Submodulebf2b7355Workspace

