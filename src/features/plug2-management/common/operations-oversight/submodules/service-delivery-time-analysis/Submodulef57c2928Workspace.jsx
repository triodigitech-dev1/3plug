const Submodulef57c2928Routes = {
  dashboard: 'service-delivery-time-analysis/dashboard',
  list: 'service-delivery-time-analysis/list',
  create: 'service-delivery-time-analysis/create',
  detail: 'service-delivery-time-analysis/detail/:id',
  edit: 'service-delivery-time-analysis/edit/:id',
  approvals: 'service-delivery-time-analysis/approvals',
  reports: 'service-delivery-time-analysis/reports',
  analytics: 'service-delivery-time-analysis/analytics',
}

function Submodulef57c2928Workspace() {
  return (
    <section className="space-y-4">
      <header className="rounded-xl border border-slate-300/60 bg-white p-4">
        <h3 className="text-base font-bold text-slate-800">service-delivery-time-analysis</h3>
        <p className="text-sm text-slate-600">Scaffold workspace generated from deep-work component maps.</p>
      </header>

      <article className="rounded-xl border border-slate-300/60 bg-white p-4">
        <p className="text-sm font-semibold text-slate-700">Screen routes</p>
        <pre className="mt-2 overflow-auto text-xs text-slate-600">{JSON.stringify(Submodulef57c2928Routes, null, 2)}</pre>
      </article>
    </section>
  )
}

export { Submodulef57c2928Routes }
export default Submodulef57c2928Workspace

