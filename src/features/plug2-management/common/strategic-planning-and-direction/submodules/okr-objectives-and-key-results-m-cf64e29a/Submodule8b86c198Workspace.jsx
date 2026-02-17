const Submodule8b86c198Routes = {
  dashboard: 'okr-objectives-and-key-results-management/dashboard',
  list: 'okr-objectives-and-key-results-management/list',
  create: 'okr-objectives-and-key-results-management/create',
  detail: 'okr-objectives-and-key-results-management/detail/:id',
  edit: 'okr-objectives-and-key-results-management/edit/:id',
  approvals: 'okr-objectives-and-key-results-management/approvals',
  reports: 'okr-objectives-and-key-results-management/reports',
  analytics: 'okr-objectives-and-key-results-management/analytics',
}

function Submodule8b86c198Workspace() {
  return (
    <section className="space-y-4">
      <header className="rounded-xl border border-slate-300/60 bg-white p-4">
        <h3 className="text-base font-bold text-slate-800">okr-objectives-and-key-results-management</h3>
        <p className="text-sm text-slate-600">Scaffold workspace generated from deep-work component maps.</p>
      </header>

      <article className="rounded-xl border border-slate-300/60 bg-white p-4">
        <p className="text-sm font-semibold text-slate-700">Screen routes</p>
        <pre className="mt-2 overflow-auto text-xs text-slate-600">{JSON.stringify(Submodule8b86c198Routes, null, 2)}</pre>
      </article>
    </section>
  )
}

export { Submodule8b86c198Routes }
export default Submodule8b86c198Workspace

