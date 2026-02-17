const Submodule44fa8979Routes = {
  dashboard: 'site-compliance-reports/dashboard',
  list: 'site-compliance-reports/list',
  create: 'site-compliance-reports/create',
  detail: 'site-compliance-reports/detail/:id',
  edit: 'site-compliance-reports/edit/:id',
  approvals: 'site-compliance-reports/approvals',
  reports: 'site-compliance-reports/reports',
  analytics: 'site-compliance-reports/analytics',
}

function Submodule44fa8979Workspace() {
  return (
    <section className="space-y-4">
      <header className="rounded-xl border border-slate-300/60 bg-white p-4">
        <h3 className="text-base font-bold text-slate-800">site-compliance-reports</h3>
        <p className="text-sm text-slate-600">Scaffold workspace generated from deep-work component maps.</p>
      </header>

      <article className="rounded-xl border border-slate-300/60 bg-white p-4">
        <p className="text-sm font-semibold text-slate-700">Screen routes</p>
        <pre className="mt-2 overflow-auto text-xs text-slate-600">{JSON.stringify(Submodule44fa8979Routes, null, 2)}</pre>
      </article>
    </section>
  )
}

export { Submodule44fa8979Routes }
export default Submodule44fa8979Workspace

