const Submodulebebf9661Routes = {
  dashboard: 'service-appointment-scheduling/dashboard',
  list: 'service-appointment-scheduling/list',
  create: 'service-appointment-scheduling/create',
  detail: 'service-appointment-scheduling/detail/:id',
  edit: 'service-appointment-scheduling/edit/:id',
  approvals: 'service-appointment-scheduling/approvals',
  reports: 'service-appointment-scheduling/reports',
  analytics: 'service-appointment-scheduling/analytics',
}

function Submodulebebf9661Workspace() {
  return (
    <section className="space-y-4">
      <header className="rounded-xl border border-slate-300/60 bg-white p-4">
        <h3 className="text-base font-bold text-slate-800">service-appointment-scheduling</h3>
        <p className="text-sm text-slate-600">Scaffold workspace generated from deep-work component maps.</p>
      </header>

      <article className="rounded-xl border border-slate-300/60 bg-white p-4">
        <p className="text-sm font-semibold text-slate-700">Screen routes</p>
        <pre className="mt-2 overflow-auto text-xs text-slate-600">{JSON.stringify(Submodulebebf9661Routes, null, 2)}</pre>
      </article>
    </section>
  )
}

export { Submodulebebf9661Routes }
export default Submodulebebf9661Workspace

