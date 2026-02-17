const Submodulecf74fd77Routes = {
  dashboard: 'safety-performance-metrics/dashboard',
  list: 'safety-performance-metrics/list',
  create: 'safety-performance-metrics/create',
  detail: 'safety-performance-metrics/detail/:id',
  edit: 'safety-performance-metrics/edit/:id',
  approvals: 'safety-performance-metrics/approvals',
  reports: 'safety-performance-metrics/reports',
  analytics: 'safety-performance-metrics/analytics',
}

function Submodulecf74fd77Workspace() {
  return (
    <section className="space-y-4">
      <header className="rounded-xl border border-slate-300/60 bg-white p-4">
        <h3 className="text-base font-bold text-slate-800">safety-performance-metrics</h3>
        <p className="text-sm text-slate-600">Scaffold workspace generated from deep-work component maps.</p>
      </header>

      <article className="rounded-xl border border-slate-300/60 bg-white p-4">
        <p className="text-sm font-semibold text-slate-700">Screen routes</p>
        <pre className="mt-2 overflow-auto text-xs text-slate-600">{JSON.stringify(Submodulecf74fd77Routes, null, 2)}</pre>
      </article>
    </section>
  )
}

export { Submodulecf74fd77Routes }
export default Submodulecf74fd77Workspace

