const Submodule2f2a8f32Routes = {
  dashboard: 'vehicle-registration-tracking/dashboard',
  list: 'vehicle-registration-tracking/list',
  create: 'vehicle-registration-tracking/create',
  detail: 'vehicle-registration-tracking/detail/:id',
  edit: 'vehicle-registration-tracking/edit/:id',
  approvals: 'vehicle-registration-tracking/approvals',
  reports: 'vehicle-registration-tracking/reports',
  analytics: 'vehicle-registration-tracking/analytics',
}

function Submodule2f2a8f32Workspace() {
  return (
    <section className="space-y-4">
      <header className="rounded-xl border border-slate-300/60 bg-white p-4">
        <h3 className="text-base font-bold text-slate-800">vehicle-registration-tracking</h3>
        <p className="text-sm text-slate-600">Scaffold workspace generated from deep-work component maps.</p>
      </header>

      <article className="rounded-xl border border-slate-300/60 bg-white p-4">
        <p className="text-sm font-semibold text-slate-700">Screen routes</p>
        <pre className="mt-2 overflow-auto text-xs text-slate-600">{JSON.stringify(Submodule2f2a8f32Routes, null, 2)}</pre>
      </article>
    </section>
  )
}

export { Submodule2f2a8f32Routes }
export default Submodule2f2a8f32Workspace

