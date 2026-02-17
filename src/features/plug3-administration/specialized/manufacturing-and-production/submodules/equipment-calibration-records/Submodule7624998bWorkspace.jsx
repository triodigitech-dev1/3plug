const Submodule7624998bRoutes = {
  dashboard: 'equipment-calibration-records/dashboard',
  list: 'equipment-calibration-records/list',
  create: 'equipment-calibration-records/create',
  detail: 'equipment-calibration-records/detail/:id',
  edit: 'equipment-calibration-records/edit/:id',
  approvals: 'equipment-calibration-records/approvals',
  reports: 'equipment-calibration-records/reports',
  analytics: 'equipment-calibration-records/analytics',
}

function Submodule7624998bWorkspace() {
  return (
    <section className="space-y-4">
      <header className="rounded-xl border border-slate-300/60 bg-white p-4">
        <h3 className="text-base font-bold text-slate-800">equipment-calibration-records</h3>
        <p className="text-sm text-slate-600">Scaffold workspace generated from deep-work component maps.</p>
      </header>

      <article className="rounded-xl border border-slate-300/60 bg-white p-4">
        <p className="text-sm font-semibold text-slate-700">Screen routes</p>
        <pre className="mt-2 overflow-auto text-xs text-slate-600">{JSON.stringify(Submodule7624998bRoutes, null, 2)}</pre>
      </article>
    </section>
  )
}

export { Submodule7624998bRoutes }
export default Submodule7624998bWorkspace

