const Submodule06ea45d3Routes = {
  dashboard: 'mobile-service-compliance-documentation/dashboard',
  list: 'mobile-service-compliance-documentation/list',
  create: 'mobile-service-compliance-documentation/create',
  detail: 'mobile-service-compliance-documentation/detail/:id',
  edit: 'mobile-service-compliance-documentation/edit/:id',
  approvals: 'mobile-service-compliance-documentation/approvals',
  reports: 'mobile-service-compliance-documentation/reports',
  analytics: 'mobile-service-compliance-documentation/analytics',
}

function Submodule06ea45d3Workspace() {
  return (
    <section className="space-y-4">
      <header className="rounded-xl border border-slate-300/60 bg-white p-4">
        <h3 className="text-base font-bold text-slate-800">mobile-service-compliance-documentation</h3>
        <p className="text-sm text-slate-600">Scaffold workspace generated from deep-work component maps.</p>
      </header>

      <article className="rounded-xl border border-slate-300/60 bg-white p-4">
        <p className="text-sm font-semibold text-slate-700">Screen routes</p>
        <pre className="mt-2 overflow-auto text-xs text-slate-600">{JSON.stringify(Submodule06ea45d3Routes, null, 2)}</pre>
      </article>
    </section>
  )
}

export { Submodule06ea45d3Routes }
export default Submodule06ea45d3Workspace

