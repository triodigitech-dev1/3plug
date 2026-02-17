const Submodulec1517736Routes = {
  dashboard: 'staff-certification-tracking/dashboard',
  list: 'staff-certification-tracking/list',
  create: 'staff-certification-tracking/create',
  detail: 'staff-certification-tracking/detail/:id',
  edit: 'staff-certification-tracking/edit/:id',
  approvals: 'staff-certification-tracking/approvals',
  reports: 'staff-certification-tracking/reports',
  analytics: 'staff-certification-tracking/analytics',
}

function Submodulec1517736Workspace() {
  return (
    <section className="space-y-4">
      <header className="rounded-xl border border-slate-300/60 bg-white p-4">
        <h3 className="text-base font-bold text-slate-800">staff-certification-tracking</h3>
        <p className="text-sm text-slate-600">Scaffold workspace generated from deep-work component maps.</p>
      </header>

      <article className="rounded-xl border border-slate-300/60 bg-white p-4">
        <p className="text-sm font-semibold text-slate-700">Screen routes</p>
        <pre className="mt-2 overflow-auto text-xs text-slate-600">{JSON.stringify(Submodulec1517736Routes, null, 2)}</pre>
      </article>
    </section>
  )
}

export { Submodulec1517736Routes }
export default Submodulec1517736Workspace

