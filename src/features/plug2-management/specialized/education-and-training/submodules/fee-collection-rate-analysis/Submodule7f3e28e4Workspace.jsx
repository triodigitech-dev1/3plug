const Submodule7f3e28e4Routes = {
  dashboard: 'fee-collection-rate-analysis/dashboard',
  list: 'fee-collection-rate-analysis/list',
  create: 'fee-collection-rate-analysis/create',
  detail: 'fee-collection-rate-analysis/detail/:id',
  edit: 'fee-collection-rate-analysis/edit/:id',
  approvals: 'fee-collection-rate-analysis/approvals',
  reports: 'fee-collection-rate-analysis/reports',
  analytics: 'fee-collection-rate-analysis/analytics',
}

function Submodule7f3e28e4Workspace() {
  return (
    <section className="space-y-4">
      <header className="rounded-xl border border-slate-300/60 bg-white p-4">
        <h3 className="text-base font-bold text-slate-800">fee-collection-rate-analysis</h3>
        <p className="text-sm text-slate-600">Scaffold workspace generated from deep-work component maps.</p>
      </header>

      <article className="rounded-xl border border-slate-300/60 bg-white p-4">
        <p className="text-sm font-semibold text-slate-700">Screen routes</p>
        <pre className="mt-2 overflow-auto text-xs text-slate-600">{JSON.stringify(Submodule7f3e28e4Routes, null, 2)}</pre>
      </article>
    </section>
  )
}

export { Submodule7f3e28e4Routes }
export default Submodule7f3e28e4Workspace

