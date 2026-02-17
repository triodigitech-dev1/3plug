const Submodule81c364a0Routes = {
  dashboard: 'api-contract-documentation/dashboard',
  list: 'api-contract-documentation/list',
  create: 'api-contract-documentation/create',
  detail: 'api-contract-documentation/detail/:id',
  edit: 'api-contract-documentation/edit/:id',
  approvals: 'api-contract-documentation/approvals',
  reports: 'api-contract-documentation/reports',
  analytics: 'api-contract-documentation/analytics',
}

function Submodule81c364a0Workspace() {
  return (
    <section className="space-y-4">
      <header className="rounded-xl border border-slate-300/60 bg-white p-4">
        <h3 className="text-base font-bold text-slate-800">api-contract-documentation</h3>
        <p className="text-sm text-slate-600">Scaffold workspace generated from deep-work component maps.</p>
      </header>

      <article className="rounded-xl border border-slate-300/60 bg-white p-4">
        <p className="text-sm font-semibold text-slate-700">Screen routes</p>
        <pre className="mt-2 overflow-auto text-xs text-slate-600">{JSON.stringify(Submodule81c364a0Routes, null, 2)}</pre>
      </article>
    </section>
  )
}

export { Submodule81c364a0Routes }
export default Submodule81c364a0Workspace

