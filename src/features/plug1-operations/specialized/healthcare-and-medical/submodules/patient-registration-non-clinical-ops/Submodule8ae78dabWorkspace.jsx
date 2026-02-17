const Submodule8ae78dabRoutes = {
  dashboard: 'patient-registration-non-clinical-ops/dashboard',
  list: 'patient-registration-non-clinical-ops/list',
  create: 'patient-registration-non-clinical-ops/create',
  detail: 'patient-registration-non-clinical-ops/detail/:id',
  edit: 'patient-registration-non-clinical-ops/edit/:id',
  approvals: 'patient-registration-non-clinical-ops/approvals',
  reports: 'patient-registration-non-clinical-ops/reports',
  analytics: 'patient-registration-non-clinical-ops/analytics',
}

function Submodule8ae78dabWorkspace() {
  return (
    <section className="space-y-4">
      <header className="rounded-xl border border-slate-300/60 bg-white p-4">
        <h3 className="text-base font-bold text-slate-800">patient-registration-non-clinical-ops</h3>
        <p className="text-sm text-slate-600">Scaffold workspace generated from deep-work component maps.</p>
      </header>

      <article className="rounded-xl border border-slate-300/60 bg-white p-4">
        <p className="text-sm font-semibold text-slate-700">Screen routes</p>
        <pre className="mt-2 overflow-auto text-xs text-slate-600">{JSON.stringify(Submodule8ae78dabRoutes, null, 2)}</pre>
      </article>
    </section>
  )
}

export { Submodule8ae78dabRoutes }
export default Submodule8ae78dabWorkspace

