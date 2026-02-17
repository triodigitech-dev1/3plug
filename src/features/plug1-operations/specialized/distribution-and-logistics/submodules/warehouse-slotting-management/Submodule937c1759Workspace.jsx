const Submodule937c1759Routes = {
  dashboard: 'warehouse-slotting-management/dashboard',
  list: 'warehouse-slotting-management/list',
  create: 'warehouse-slotting-management/create',
  detail: 'warehouse-slotting-management/detail/:id',
  edit: 'warehouse-slotting-management/edit/:id',
  approvals: 'warehouse-slotting-management/approvals',
  reports: 'warehouse-slotting-management/reports',
  analytics: 'warehouse-slotting-management/analytics',
}

function Submodule937c1759Workspace() {
  return (
    <section className="space-y-4">
      <header className="rounded-xl border border-slate-300/60 bg-white p-4">
        <h3 className="text-base font-bold text-slate-800">warehouse-slotting-management</h3>
        <p className="text-sm text-slate-600">Scaffold workspace generated from deep-work component maps.</p>
      </header>

      <article className="rounded-xl border border-slate-300/60 bg-white p-4">
        <p className="text-sm font-semibold text-slate-700">Screen routes</p>
        <pre className="mt-2 overflow-auto text-xs text-slate-600">{JSON.stringify(Submodule937c1759Routes, null, 2)}</pre>
      </article>
    </section>
  )
}

export { Submodule937c1759Routes }
export default Submodule937c1759Workspace

