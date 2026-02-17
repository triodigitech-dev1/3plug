const Submoduledcb98796Routes = {
  dashboard: 'building-permits-documentation/dashboard',
  list: 'building-permits-documentation/list',
  create: 'building-permits-documentation/create',
  detail: 'building-permits-documentation/detail/:id',
  edit: 'building-permits-documentation/edit/:id',
  approvals: 'building-permits-documentation/approvals',
  reports: 'building-permits-documentation/reports',
  analytics: 'building-permits-documentation/analytics',
}

function Submoduledcb98796Workspace() {
  return (
    <section className="space-y-4">
      <header className="rounded-xl border border-slate-300/60 bg-white p-4">
        <h3 className="text-base font-bold text-slate-800">building-permits-documentation</h3>
        <p className="text-sm text-slate-600">Scaffold workspace generated from deep-work component maps.</p>
      </header>

      <article className="rounded-xl border border-slate-300/60 bg-white p-4">
        <p className="text-sm font-semibold text-slate-700">Screen routes</p>
        <pre className="mt-2 overflow-auto text-xs text-slate-600">{JSON.stringify(Submoduledcb98796Routes, null, 2)}</pre>
      </article>
    </section>
  )
}

export { Submoduledcb98796Routes }
export default Submoduledcb98796Workspace

