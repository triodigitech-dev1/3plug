const Submodule81496564Routes = {
  dashboard: 'general-ledger-management/dashboard',
  list: 'general-ledger-management/list',
  create: 'general-ledger-management/create',
  detail: 'general-ledger-management/detail/:id',
  edit: 'general-ledger-management/edit/:id',
  approvals: 'general-ledger-management/approvals',
  reports: 'general-ledger-management/reports',
  analytics: 'general-ledger-management/analytics',
}

function Submodule81496564Workspace() {
  return (
    <section className="space-y-4">
      <header className="rounded-xl border border-slate-300/60 bg-white p-4">
        <h3 className="text-base font-bold text-slate-800">general-ledger-management</h3>
        <p className="text-sm text-slate-600">Scaffold workspace generated from deep-work component maps.</p>
      </header>

      <article className="rounded-xl border border-slate-300/60 bg-white p-4">
        <p className="text-sm font-semibold text-slate-700">Screen routes</p>
        <pre className="mt-2 overflow-auto text-xs text-slate-600">{JSON.stringify(Submodule81496564Routes, null, 2)}</pre>
      </article>
    </section>
  )
}

export { Submodule81496564Routes }
export default Submodule81496564Workspace

