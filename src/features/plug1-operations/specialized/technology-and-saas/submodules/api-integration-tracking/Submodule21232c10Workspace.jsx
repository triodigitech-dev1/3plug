const Submodule21232c10Routes = {
  dashboard: 'api-integration-tracking/dashboard',
  list: 'api-integration-tracking/list',
  create: 'api-integration-tracking/create',
  detail: 'api-integration-tracking/detail/:id',
  edit: 'api-integration-tracking/edit/:id',
  approvals: 'api-integration-tracking/approvals',
  reports: 'api-integration-tracking/reports',
  analytics: 'api-integration-tracking/analytics',
}

function Submodule21232c10Workspace() {
  return (
    <section className="space-y-4">
      <header className="rounded-xl border border-slate-300/60 bg-white p-4">
        <h3 className="text-base font-bold text-slate-800">api-integration-tracking</h3>
        <p className="text-sm text-slate-600">Scaffold workspace generated from deep-work component maps.</p>
      </header>

      <article className="rounded-xl border border-slate-300/60 bg-white p-4">
        <p className="text-sm font-semibold text-slate-700">Screen routes</p>
        <pre className="mt-2 overflow-auto text-xs text-slate-600">{JSON.stringify(Submodule21232c10Routes, null, 2)}</pre>
      </article>
    </section>
  )
}

export { Submodule21232c10Routes }
export default Submodule21232c10Workspace

