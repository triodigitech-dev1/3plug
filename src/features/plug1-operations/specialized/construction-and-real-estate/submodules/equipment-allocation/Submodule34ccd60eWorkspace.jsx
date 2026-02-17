const Submodule34ccd60eRoutes = {
  dashboard: 'equipment-allocation/dashboard',
  list: 'equipment-allocation/list',
  create: 'equipment-allocation/create',
  detail: 'equipment-allocation/detail/:id',
  edit: 'equipment-allocation/edit/:id',
  approvals: 'equipment-allocation/approvals',
  reports: 'equipment-allocation/reports',
  analytics: 'equipment-allocation/analytics',
}

function Submodule34ccd60eWorkspace() {
  return (
    <section className="space-y-4">
      <header className="rounded-xl border border-slate-300/60 bg-white p-4">
        <h3 className="text-base font-bold text-slate-800">equipment-allocation</h3>
        <p className="text-sm text-slate-600">Scaffold workspace generated from deep-work component maps.</p>
      </header>

      <article className="rounded-xl border border-slate-300/60 bg-white p-4">
        <p className="text-sm font-semibold text-slate-700">Screen routes</p>
        <pre className="mt-2 overflow-auto text-xs text-slate-600">{JSON.stringify(Submodule34ccd60eRoutes, null, 2)}</pre>
      </article>
    </section>
  )
}

export { Submodule34ccd60eRoutes }
export default Submodule34ccd60eWorkspace

