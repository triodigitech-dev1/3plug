const Submodulec317658fRoutes = {
  dashboard: 'insurance-documentation-tracking/dashboard',
  list: 'insurance-documentation-tracking/list',
  create: 'insurance-documentation-tracking/create',
  detail: 'insurance-documentation-tracking/detail/:id',
  edit: 'insurance-documentation-tracking/edit/:id',
  approvals: 'insurance-documentation-tracking/approvals',
  reports: 'insurance-documentation-tracking/reports',
  analytics: 'insurance-documentation-tracking/analytics',
}

function Submodulec317658fWorkspace() {
  return (
    <section className="space-y-4">
      <header className="rounded-xl border border-slate-300/60 bg-white p-4">
        <h3 className="text-base font-bold text-slate-800">insurance-documentation-tracking</h3>
        <p className="text-sm text-slate-600">Scaffold workspace generated from deep-work component maps.</p>
      </header>

      <article className="rounded-xl border border-slate-300/60 bg-white p-4">
        <p className="text-sm font-semibold text-slate-700">Screen routes</p>
        <pre className="mt-2 overflow-auto text-xs text-slate-600">{JSON.stringify(Submodulec317658fRoutes, null, 2)}</pre>
      </article>
    </section>
  )
}

export { Submodulec317658fRoutes }
export default Submodulec317658fWorkspace

