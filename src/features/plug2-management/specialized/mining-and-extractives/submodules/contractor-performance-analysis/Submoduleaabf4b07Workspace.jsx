const Submoduleaabf4b07Routes = {
  dashboard: 'contractor-performance-analysis/dashboard',
  list: 'contractor-performance-analysis/list',
  create: 'contractor-performance-analysis/create',
  detail: 'contractor-performance-analysis/detail/:id',
  edit: 'contractor-performance-analysis/edit/:id',
  approvals: 'contractor-performance-analysis/approvals',
  reports: 'contractor-performance-analysis/reports',
  analytics: 'contractor-performance-analysis/analytics',
}

function Submoduleaabf4b07Workspace() {
  return (
    <section className="space-y-4">
      <header className="rounded-xl border border-slate-300/60 bg-white p-4">
        <h3 className="text-base font-bold text-slate-800">contractor-performance-analysis</h3>
        <p className="text-sm text-slate-600">Scaffold workspace generated from deep-work component maps.</p>
      </header>

      <article className="rounded-xl border border-slate-300/60 bg-white p-4">
        <p className="text-sm font-semibold text-slate-700">Screen routes</p>
        <pre className="mt-2 overflow-auto text-xs text-slate-600">{JSON.stringify(Submoduleaabf4b07Routes, null, 2)}</pre>
      </article>
    </section>
  )
}

export { Submoduleaabf4b07Routes }
export default Submoduleaabf4b07Workspace

