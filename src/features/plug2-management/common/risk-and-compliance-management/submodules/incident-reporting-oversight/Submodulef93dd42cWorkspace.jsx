const Submodulef93dd42cRoutes = {
  dashboard: 'incident-reporting-oversight/dashboard',
  list: 'incident-reporting-oversight/list',
  create: 'incident-reporting-oversight/create',
  detail: 'incident-reporting-oversight/detail/:id',
  edit: 'incident-reporting-oversight/edit/:id',
  approvals: 'incident-reporting-oversight/approvals',
  reports: 'incident-reporting-oversight/reports',
  analytics: 'incident-reporting-oversight/analytics',
}

function Submodulef93dd42cWorkspace() {
  return (
    <section className="space-y-4">
      <header className="rounded-xl border border-slate-300/60 bg-white p-4">
        <h3 className="text-base font-bold text-slate-800">incident-reporting-oversight</h3>
        <p className="text-sm text-slate-600">Scaffold workspace generated from deep-work component maps.</p>
      </header>

      <article className="rounded-xl border border-slate-300/60 bg-white p-4">
        <p className="text-sm font-semibold text-slate-700">Screen routes</p>
        <pre className="mt-2 overflow-auto text-xs text-slate-600">{JSON.stringify(Submodulef93dd42cRoutes, null, 2)}</pre>
      </article>
    </section>
  )
}

export { Submodulef93dd42cRoutes }
export default Submodulef93dd42cWorkspace

