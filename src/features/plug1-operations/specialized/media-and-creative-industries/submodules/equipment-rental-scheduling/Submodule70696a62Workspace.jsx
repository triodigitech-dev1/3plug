const Submodule70696a62Routes = {
  dashboard: 'equipment-rental-scheduling/dashboard',
  list: 'equipment-rental-scheduling/list',
  create: 'equipment-rental-scheduling/create',
  detail: 'equipment-rental-scheduling/detail/:id',
  edit: 'equipment-rental-scheduling/edit/:id',
  approvals: 'equipment-rental-scheduling/approvals',
  reports: 'equipment-rental-scheduling/reports',
  analytics: 'equipment-rental-scheduling/analytics',
}

function Submodule70696a62Workspace() {
  return (
    <section className="space-y-4">
      <header className="rounded-xl border border-slate-300/60 bg-white p-4">
        <h3 className="text-base font-bold text-slate-800">equipment-rental-scheduling</h3>
        <p className="text-sm text-slate-600">Scaffold workspace generated from deep-work component maps.</p>
      </header>

      <article className="rounded-xl border border-slate-300/60 bg-white p-4">
        <p className="text-sm font-semibold text-slate-700">Screen routes</p>
        <pre className="mt-2 overflow-auto text-xs text-slate-600">{JSON.stringify(Submodule70696a62Routes, null, 2)}</pre>
      </article>
    </section>
  )
}

export { Submodule70696a62Routes }
export default Submodule70696a62Workspace

