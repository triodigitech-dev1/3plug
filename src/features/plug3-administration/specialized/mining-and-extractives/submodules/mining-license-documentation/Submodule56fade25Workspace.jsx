const Submodule56fade25Routes = {
  dashboard: 'mining-license-documentation/dashboard',
  list: 'mining-license-documentation/list',
  create: 'mining-license-documentation/create',
  detail: 'mining-license-documentation/detail/:id',
  edit: 'mining-license-documentation/edit/:id',
  approvals: 'mining-license-documentation/approvals',
  reports: 'mining-license-documentation/reports',
  analytics: 'mining-license-documentation/analytics',
}

function Submodule56fade25Workspace() {
  return (
    <section className="space-y-4">
      <header className="rounded-xl border border-slate-300/60 bg-white p-4">
        <h3 className="text-base font-bold text-slate-800">mining-license-documentation</h3>
        <p className="text-sm text-slate-600">Scaffold workspace generated from deep-work component maps.</p>
      </header>

      <article className="rounded-xl border border-slate-300/60 bg-white p-4">
        <p className="text-sm font-semibold text-slate-700">Screen routes</p>
        <pre className="mt-2 overflow-auto text-xs text-slate-600">{JSON.stringify(Submodule56fade25Routes, null, 2)}</pre>
      </article>
    </section>
  )
}

export { Submodule56fade25Routes }
export default Submodule56fade25Workspace

