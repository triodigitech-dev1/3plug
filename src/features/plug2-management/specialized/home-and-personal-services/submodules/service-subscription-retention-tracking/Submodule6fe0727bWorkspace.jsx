const Submodule6fe0727bRoutes = {
  dashboard: 'service-subscription-retention-tracking/dashboard',
  list: 'service-subscription-retention-tracking/list',
  create: 'service-subscription-retention-tracking/create',
  detail: 'service-subscription-retention-tracking/detail/:id',
  edit: 'service-subscription-retention-tracking/edit/:id',
  approvals: 'service-subscription-retention-tracking/approvals',
  reports: 'service-subscription-retention-tracking/reports',
  analytics: 'service-subscription-retention-tracking/analytics',
}

function Submodule6fe0727bWorkspace() {
  return (
    <section className="space-y-4">
      <header className="rounded-xl border border-slate-300/60 bg-white p-4">
        <h3 className="text-base font-bold text-slate-800">service-subscription-retention-tracking</h3>
        <p className="text-sm text-slate-600">Scaffold workspace generated from deep-work component maps.</p>
      </header>

      <article className="rounded-xl border border-slate-300/60 bg-white p-4">
        <p className="text-sm font-semibold text-slate-700">Screen routes</p>
        <pre className="mt-2 overflow-auto text-xs text-slate-600">{JSON.stringify(Submodule6fe0727bRoutes, null, 2)}</pre>
      </article>
    </section>
  )
}

export { Submodule6fe0727bRoutes }
export default Submodule6fe0727bWorkspace

