const Submodulefb6796a9Routes = {
  dashboard: 'incident-reporting-documentation/dashboard',
  list: 'incident-reporting-documentation/list',
  create: 'incident-reporting-documentation/create',
  detail: 'incident-reporting-documentation/detail/:id',
  edit: 'incident-reporting-documentation/edit/:id',
  approvals: 'incident-reporting-documentation/approvals',
  reports: 'incident-reporting-documentation/reports',
  analytics: 'incident-reporting-documentation/analytics',
}

function Submodulefb6796a9Workspace() {
  return (
    <section className="space-y-4">
      <header className="rounded-xl border border-slate-300/60 bg-white p-4">
        <h3 className="text-base font-bold text-slate-800">incident-reporting-documentation</h3>
        <p className="text-sm text-slate-600">Scaffold workspace generated from deep-work component maps.</p>
      </header>

      <article className="rounded-xl border border-slate-300/60 bg-white p-4">
        <p className="text-sm font-semibold text-slate-700">Screen routes</p>
        <pre className="mt-2 overflow-auto text-xs text-slate-600">{JSON.stringify(Submodulefb6796a9Routes, null, 2)}</pre>
      </article>
    </section>
  )
}

export { Submodulefb6796a9Routes }
export default Submodulefb6796a9Workspace

