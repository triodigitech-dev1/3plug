const Submodule39586fbcRoutes = {
  dashboard: 'fleet-maintenance-scheduling/dashboard',
  list: 'fleet-maintenance-scheduling/list',
  create: 'fleet-maintenance-scheduling/create',
  detail: 'fleet-maintenance-scheduling/detail/:id',
  edit: 'fleet-maintenance-scheduling/edit/:id',
  approvals: 'fleet-maintenance-scheduling/approvals',
  reports: 'fleet-maintenance-scheduling/reports',
  analytics: 'fleet-maintenance-scheduling/analytics',
}

function Submodule39586fbcWorkspace() {
  return (
    <section className="space-y-4">
      <header className="rounded-xl border border-slate-300/60 bg-white p-4">
        <h3 className="text-base font-bold text-slate-800">fleet-maintenance-scheduling</h3>
        <p className="text-sm text-slate-600">Scaffold workspace generated from deep-work component maps.</p>
      </header>

      <article className="rounded-xl border border-slate-300/60 bg-white p-4">
        <p className="text-sm font-semibold text-slate-700">Screen routes</p>
        <pre className="mt-2 overflow-auto text-xs text-slate-600">{JSON.stringify(Submodule39586fbcRoutes, null, 2)}</pre>
      </article>
    </section>
  )
}

export { Submodule39586fbcRoutes }
export default Submodule39586fbcWorkspace

