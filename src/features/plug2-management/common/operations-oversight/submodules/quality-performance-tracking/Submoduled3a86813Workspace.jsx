const Submoduled3a86813Routes = {
  dashboard: 'quality-performance-tracking/dashboard',
  list: 'quality-performance-tracking/list',
  create: 'quality-performance-tracking/create',
  detail: 'quality-performance-tracking/detail/:id',
  edit: 'quality-performance-tracking/edit/:id',
  approvals: 'quality-performance-tracking/approvals',
  reports: 'quality-performance-tracking/reports',
  analytics: 'quality-performance-tracking/analytics',
}

function Submoduled3a86813Workspace() {
  return (
    <section className="space-y-4">
      <header className="rounded-xl border border-slate-300/60 bg-white p-4">
        <h3 className="text-base font-bold text-slate-800">quality-performance-tracking</h3>
        <p className="text-sm text-slate-600">Scaffold workspace generated from deep-work component maps.</p>
      </header>

      <article className="rounded-xl border border-slate-300/60 bg-white p-4">
        <p className="text-sm font-semibold text-slate-700">Screen routes</p>
        <pre className="mt-2 overflow-auto text-xs text-slate-600">{JSON.stringify(Submoduled3a86813Routes, null, 2)}</pre>
      </article>
    </section>
  )
}

export { Submoduled3a86813Routes }
export default Submoduled3a86813Workspace

