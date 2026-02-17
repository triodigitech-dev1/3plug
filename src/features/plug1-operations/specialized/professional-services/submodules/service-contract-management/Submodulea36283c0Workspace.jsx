const Submodulea36283c0Routes = {
  dashboard: 'service-contract-management/dashboard',
  list: 'service-contract-management/list',
  create: 'service-contract-management/create',
  detail: 'service-contract-management/detail/:id',
  edit: 'service-contract-management/edit/:id',
  approvals: 'service-contract-management/approvals',
  reports: 'service-contract-management/reports',
  analytics: 'service-contract-management/analytics',
}

function Submodulea36283c0Workspace() {
  return (
    <section className="space-y-4">
      <header className="rounded-xl border border-slate-300/60 bg-white p-4">
        <h3 className="text-base font-bold text-slate-800">service-contract-management</h3>
        <p className="text-sm text-slate-600">Scaffold workspace generated from deep-work component maps.</p>
      </header>

      <article className="rounded-xl border border-slate-300/60 bg-white p-4">
        <p className="text-sm font-semibold text-slate-700">Screen routes</p>
        <pre className="mt-2 overflow-auto text-xs text-slate-600">{JSON.stringify(Submodulea36283c0Routes, null, 2)}</pre>
      </article>
    </section>
  )
}

export { Submodulea36283c0Routes }
export default Submodulea36283c0Workspace

