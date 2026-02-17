const Submodulebd53b3f8Routes = {
  dashboard: 'cross-subsidiary-reporting/dashboard',
  list: 'cross-subsidiary-reporting/list',
  create: 'cross-subsidiary-reporting/create',
  detail: 'cross-subsidiary-reporting/detail/:id',
  edit: 'cross-subsidiary-reporting/edit/:id',
  approvals: 'cross-subsidiary-reporting/approvals',
  reports: 'cross-subsidiary-reporting/reports',
  analytics: 'cross-subsidiary-reporting/analytics',
}

function Submodulebd53b3f8Workspace() {
  return (
    <section className="space-y-4">
      <header className="rounded-xl border border-slate-300/60 bg-white p-4">
        <h3 className="text-base font-bold text-slate-800">cross-subsidiary-reporting</h3>
        <p className="text-sm text-slate-600">Scaffold workspace generated from deep-work component maps.</p>
      </header>

      <article className="rounded-xl border border-slate-300/60 bg-white p-4">
        <p className="text-sm font-semibold text-slate-700">Screen routes</p>
        <pre className="mt-2 overflow-auto text-xs text-slate-600">{JSON.stringify(Submodulebd53b3f8Routes, null, 2)}</pre>
      </article>
    </section>
  )
}

export { Submodulebd53b3f8Routes }
export default Submodulebd53b3f8Workspace

