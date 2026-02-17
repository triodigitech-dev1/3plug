const Submodule689d9b20Routes = {
  dashboard: 'education-authority-reporting-documentation/dashboard',
  list: 'education-authority-reporting-documentation/list',
  create: 'education-authority-reporting-documentation/create',
  detail: 'education-authority-reporting-documentation/detail/:id',
  edit: 'education-authority-reporting-documentation/edit/:id',
  approvals: 'education-authority-reporting-documentation/approvals',
  reports: 'education-authority-reporting-documentation/reports',
  analytics: 'education-authority-reporting-documentation/analytics',
}

function Submodule689d9b20Workspace() {
  return (
    <section className="space-y-4">
      <header className="rounded-xl border border-slate-300/60 bg-white p-4">
        <h3 className="text-base font-bold text-slate-800">education-authority-reporting-documentation</h3>
        <p className="text-sm text-slate-600">Scaffold workspace generated from deep-work component maps.</p>
      </header>

      <article className="rounded-xl border border-slate-300/60 bg-white p-4">
        <p className="text-sm font-semibold text-slate-700">Screen routes</p>
        <pre className="mt-2 overflow-auto text-xs text-slate-600">{JSON.stringify(Submodule689d9b20Routes, null, 2)}</pre>
      </article>
    </section>
  )
}

export { Submodule689d9b20Routes }
export default Submodule689d9b20Workspace

