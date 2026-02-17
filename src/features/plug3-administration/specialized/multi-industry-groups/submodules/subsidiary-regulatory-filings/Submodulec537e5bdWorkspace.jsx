const Submodulec537e5bdRoutes = {
  dashboard: 'subsidiary-regulatory-filings/dashboard',
  list: 'subsidiary-regulatory-filings/list',
  create: 'subsidiary-regulatory-filings/create',
  detail: 'subsidiary-regulatory-filings/detail/:id',
  edit: 'subsidiary-regulatory-filings/edit/:id',
  approvals: 'subsidiary-regulatory-filings/approvals',
  reports: 'subsidiary-regulatory-filings/reports',
  analytics: 'subsidiary-regulatory-filings/analytics',
}

function Submodulec537e5bdWorkspace() {
  return (
    <section className="space-y-4">
      <header className="rounded-xl border border-slate-300/60 bg-white p-4">
        <h3 className="text-base font-bold text-slate-800">subsidiary-regulatory-filings</h3>
        <p className="text-sm text-slate-600">Scaffold workspace generated from deep-work component maps.</p>
      </header>

      <article className="rounded-xl border border-slate-300/60 bg-white p-4">
        <p className="text-sm font-semibold text-slate-700">Screen routes</p>
        <pre className="mt-2 overflow-auto text-xs text-slate-600">{JSON.stringify(Submodulec537e5bdRoutes, null, 2)}</pre>
      </article>
    </section>
  )
}

export { Submodulec537e5bdRoutes }
export default Submodulec537e5bdWorkspace

