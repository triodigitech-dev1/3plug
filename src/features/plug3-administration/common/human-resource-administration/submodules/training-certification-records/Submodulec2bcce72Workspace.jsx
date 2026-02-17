const Submodulec2bcce72Routes = {
  dashboard: 'training-certification-records/dashboard',
  list: 'training-certification-records/list',
  create: 'training-certification-records/create',
  detail: 'training-certification-records/detail/:id',
  edit: 'training-certification-records/edit/:id',
  approvals: 'training-certification-records/approvals',
  reports: 'training-certification-records/reports',
  analytics: 'training-certification-records/analytics',
}

function Submodulec2bcce72Workspace() {
  return (
    <section className="space-y-4">
      <header className="rounded-xl border border-slate-300/60 bg-white p-4">
        <h3 className="text-base font-bold text-slate-800">training-certification-records</h3>
        <p className="text-sm text-slate-600">Scaffold workspace generated from deep-work component maps.</p>
      </header>

      <article className="rounded-xl border border-slate-300/60 bg-white p-4">
        <p className="text-sm font-semibold text-slate-700">Screen routes</p>
        <pre className="mt-2 overflow-auto text-xs text-slate-600">{JSON.stringify(Submodulec2bcce72Routes, null, 2)}</pre>
      </article>
    </section>
  )
}

export { Submodulec2bcce72Routes }
export default Submodulec2bcce72Workspace

