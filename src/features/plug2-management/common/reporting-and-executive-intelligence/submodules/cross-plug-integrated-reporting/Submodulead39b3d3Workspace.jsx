const Submodulead39b3d3Routes = {
  dashboard: 'cross-plug-integrated-reporting/dashboard',
  list: 'cross-plug-integrated-reporting/list',
  create: 'cross-plug-integrated-reporting/create',
  detail: 'cross-plug-integrated-reporting/detail/:id',
  edit: 'cross-plug-integrated-reporting/edit/:id',
  approvals: 'cross-plug-integrated-reporting/approvals',
  reports: 'cross-plug-integrated-reporting/reports',
  analytics: 'cross-plug-integrated-reporting/analytics',
}

function Submodulead39b3d3Workspace() {
  return (
    <section className="space-y-4">
      <header className="rounded-xl border border-slate-300/60 bg-white p-4">
        <h3 className="text-base font-bold text-slate-800">cross-plug-integrated-reporting</h3>
        <p className="text-sm text-slate-600">Scaffold workspace generated from deep-work component maps.</p>
      </header>

      <article className="rounded-xl border border-slate-300/60 bg-white p-4">
        <p className="text-sm font-semibold text-slate-700">Screen routes</p>
        <pre className="mt-2 overflow-auto text-xs text-slate-600">{JSON.stringify(Submodulead39b3d3Routes, null, 2)}</pre>
      </article>
    </section>
  )
}

export { Submodulead39b3d3Routes }
export default Submodulead39b3d3Workspace

