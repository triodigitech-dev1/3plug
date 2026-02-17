const Submoduled2c83b67Routes = {
  dashboard: 'data-visualization-systems/dashboard',
  list: 'data-visualization-systems/list',
  create: 'data-visualization-systems/create',
  detail: 'data-visualization-systems/detail/:id',
  edit: 'data-visualization-systems/edit/:id',
  approvals: 'data-visualization-systems/approvals',
  reports: 'data-visualization-systems/reports',
  analytics: 'data-visualization-systems/analytics',
}

function Submoduled2c83b67Workspace() {
  return (
    <section className="space-y-4">
      <header className="rounded-xl border border-slate-300/60 bg-white p-4">
        <h3 className="text-base font-bold text-slate-800">data-visualization-systems</h3>
        <p className="text-sm text-slate-600">Scaffold workspace generated from deep-work component maps.</p>
      </header>

      <article className="rounded-xl border border-slate-300/60 bg-white p-4">
        <p className="text-sm font-semibold text-slate-700">Screen routes</p>
        <pre className="mt-2 overflow-auto text-xs text-slate-600">{JSON.stringify(Submoduled2c83b67Routes, null, 2)}</pre>
      </article>
    </section>
  )
}

export { Submoduled2c83b67Routes }
export default Submoduled2c83b67Workspace

