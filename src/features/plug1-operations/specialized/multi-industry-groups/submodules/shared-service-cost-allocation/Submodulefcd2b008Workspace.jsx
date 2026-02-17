const Submodulefcd2b008Routes = {
  dashboard: 'shared-service-cost-allocation/dashboard',
  list: 'shared-service-cost-allocation/list',
  create: 'shared-service-cost-allocation/create',
  detail: 'shared-service-cost-allocation/detail/:id',
  edit: 'shared-service-cost-allocation/edit/:id',
  approvals: 'shared-service-cost-allocation/approvals',
  reports: 'shared-service-cost-allocation/reports',
  analytics: 'shared-service-cost-allocation/analytics',
}

function Submodulefcd2b008Workspace() {
  return (
    <section className="space-y-4">
      <header className="rounded-xl border border-slate-300/60 bg-white p-4">
        <h3 className="text-base font-bold text-slate-800">shared-service-cost-allocation</h3>
        <p className="text-sm text-slate-600">Scaffold workspace generated from deep-work component maps.</p>
      </header>

      <article className="rounded-xl border border-slate-300/60 bg-white p-4">
        <p className="text-sm font-semibold text-slate-700">Screen routes</p>
        <pre className="mt-2 overflow-auto text-xs text-slate-600">{JSON.stringify(Submodulefcd2b008Routes, null, 2)}</pre>
      </article>
    </section>
  )
}

export { Submodulefcd2b008Routes }
export default Submodulefcd2b008Workspace

