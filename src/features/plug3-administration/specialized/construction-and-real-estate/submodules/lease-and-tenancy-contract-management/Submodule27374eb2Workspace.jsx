const Submodule27374eb2Routes = {
  dashboard: 'lease-and-tenancy-contract-management/dashboard',
  list: 'lease-and-tenancy-contract-management/list',
  create: 'lease-and-tenancy-contract-management/create',
  detail: 'lease-and-tenancy-contract-management/detail/:id',
  edit: 'lease-and-tenancy-contract-management/edit/:id',
  approvals: 'lease-and-tenancy-contract-management/approvals',
  reports: 'lease-and-tenancy-contract-management/reports',
  analytics: 'lease-and-tenancy-contract-management/analytics',
}

function Submodule27374eb2Workspace() {
  return (
    <section className="space-y-4">
      <header className="rounded-xl border border-slate-300/60 bg-white p-4">
        <h3 className="text-base font-bold text-slate-800">lease-and-tenancy-contract-management</h3>
        <p className="text-sm text-slate-600">Scaffold workspace generated from deep-work component maps.</p>
      </header>

      <article className="rounded-xl border border-slate-300/60 bg-white p-4">
        <p className="text-sm font-semibold text-slate-700">Screen routes</p>
        <pre className="mt-2 overflow-auto text-xs text-slate-600">{JSON.stringify(Submodule27374eb2Routes, null, 2)}</pre>
      </article>
    </section>
  )
}

export { Submodule27374eb2Routes }
export default Submodule27374eb2Workspace

