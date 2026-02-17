const Submodule8ef427d7Routes = {
  dashboard: 'customer-acquisition-metrics/dashboard',
  list: 'customer-acquisition-metrics/list',
  create: 'customer-acquisition-metrics/create',
  detail: 'customer-acquisition-metrics/detail/:id',
  edit: 'customer-acquisition-metrics/edit/:id',
  approvals: 'customer-acquisition-metrics/approvals',
  reports: 'customer-acquisition-metrics/reports',
  analytics: 'customer-acquisition-metrics/analytics',
}

function Submodule8ef427d7Workspace() {
  return (
    <section className="space-y-4">
      <header className="rounded-xl border border-slate-300/60 bg-white p-4">
        <h3 className="text-base font-bold text-slate-800">customer-acquisition-metrics</h3>
        <p className="text-sm text-slate-600">Scaffold workspace generated from deep-work component maps.</p>
      </header>

      <article className="rounded-xl border border-slate-300/60 bg-white p-4">
        <p className="text-sm font-semibold text-slate-700">Screen routes</p>
        <pre className="mt-2 overflow-auto text-xs text-slate-600">{JSON.stringify(Submodule8ef427d7Routes, null, 2)}</pre>
      </article>
    </section>
  )
}

export { Submodule8ef427d7Routes }
export default Submodule8ef427d7Workspace

