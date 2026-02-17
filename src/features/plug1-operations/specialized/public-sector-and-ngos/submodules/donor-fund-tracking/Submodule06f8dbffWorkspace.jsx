const Submodule06f8dbffRoutes = {
  dashboard: 'donor-fund-tracking/dashboard',
  list: 'donor-fund-tracking/list',
  create: 'donor-fund-tracking/create',
  detail: 'donor-fund-tracking/detail/:id',
  edit: 'donor-fund-tracking/edit/:id',
  approvals: 'donor-fund-tracking/approvals',
  reports: 'donor-fund-tracking/reports',
  analytics: 'donor-fund-tracking/analytics',
}

function Submodule06f8dbffWorkspace() {
  return (
    <section className="space-y-4">
      <header className="rounded-xl border border-slate-300/60 bg-white p-4">
        <h3 className="text-base font-bold text-slate-800">donor-fund-tracking</h3>
        <p className="text-sm text-slate-600">Scaffold workspace generated from deep-work component maps.</p>
      </header>

      <article className="rounded-xl border border-slate-300/60 bg-white p-4">
        <p className="text-sm font-semibold text-slate-700">Screen routes</p>
        <pre className="mt-2 overflow-auto text-xs text-slate-600">{JSON.stringify(Submodule06f8dbffRoutes, null, 2)}</pre>
      </article>
    </section>
  )
}

export { Submodule06f8dbffRoutes }
export default Submodule06f8dbffWorkspace

