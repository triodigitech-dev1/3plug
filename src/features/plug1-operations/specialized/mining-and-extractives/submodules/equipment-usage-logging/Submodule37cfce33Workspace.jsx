const Submodule37cfce33Routes = {
  dashboard: 'equipment-usage-logging/dashboard',
  list: 'equipment-usage-logging/list',
  create: 'equipment-usage-logging/create',
  detail: 'equipment-usage-logging/detail/:id',
  edit: 'equipment-usage-logging/edit/:id',
  approvals: 'equipment-usage-logging/approvals',
  reports: 'equipment-usage-logging/reports',
  analytics: 'equipment-usage-logging/analytics',
}

function Submodule37cfce33Workspace() {
  return (
    <section className="space-y-4">
      <header className="rounded-xl border border-slate-300/60 bg-white p-4">
        <h3 className="text-base font-bold text-slate-800">equipment-usage-logging</h3>
        <p className="text-sm text-slate-600">Scaffold workspace generated from deep-work component maps.</p>
      </header>

      <article className="rounded-xl border border-slate-300/60 bg-white p-4">
        <p className="text-sm font-semibold text-slate-700">Screen routes</p>
        <pre className="mt-2 overflow-auto text-xs text-slate-600">{JSON.stringify(Submodule37cfce33Routes, null, 2)}</pre>
      </article>
    </section>
  )
}

export { Submodule37cfce33Routes }
export default Submodule37cfce33Workspace

