const Submodulee30d8630Routes = {
  dashboard: 'contract-management-supply-agreements/dashboard',
  list: 'contract-management-supply-agreements/list',
  create: 'contract-management-supply-agreements/create',
  detail: 'contract-management-supply-agreements/detail/:id',
  edit: 'contract-management-supply-agreements/edit/:id',
  approvals: 'contract-management-supply-agreements/approvals',
  reports: 'contract-management-supply-agreements/reports',
  analytics: 'contract-management-supply-agreements/analytics',
}

function Submodulee30d8630Workspace() {
  return (
    <section className="space-y-4">
      <header className="rounded-xl border border-slate-300/60 bg-white p-4">
        <h3 className="text-base font-bold text-slate-800">contract-management-supply-agreements</h3>
        <p className="text-sm text-slate-600">Scaffold workspace generated from deep-work component maps.</p>
      </header>

      <article className="rounded-xl border border-slate-300/60 bg-white p-4">
        <p className="text-sm font-semibold text-slate-700">Screen routes</p>
        <pre className="mt-2 overflow-auto text-xs text-slate-600">{JSON.stringify(Submodulee30d8630Routes, null, 2)}</pre>
      </article>
    </section>
  )
}

export { Submodulee30d8630Routes }
export default Submodulee30d8630Workspace

