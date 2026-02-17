const Submodule8bcb2c98Routes = {
  dashboard: 'tender-documentation-tracking/dashboard',
  list: 'tender-documentation-tracking/list',
  create: 'tender-documentation-tracking/create',
  detail: 'tender-documentation-tracking/detail/:id',
  edit: 'tender-documentation-tracking/edit/:id',
  approvals: 'tender-documentation-tracking/approvals',
  reports: 'tender-documentation-tracking/reports',
  analytics: 'tender-documentation-tracking/analytics',
}

function Submodule8bcb2c98Workspace() {
  return (
    <section className="space-y-4">
      <header className="rounded-xl border border-slate-300/60 bg-white p-4">
        <h3 className="text-base font-bold text-slate-800">tender-documentation-tracking</h3>
        <p className="text-sm text-slate-600">Scaffold workspace generated from deep-work component maps.</p>
      </header>

      <article className="rounded-xl border border-slate-300/60 bg-white p-4">
        <p className="text-sm font-semibold text-slate-700">Screen routes</p>
        <pre className="mt-2 overflow-auto text-xs text-slate-600">{JSON.stringify(Submodule8bcb2c98Routes, null, 2)}</pre>
      </article>
    </section>
  )
}

export { Submodule8bcb2c98Routes }
export default Submodule8bcb2c98Workspace

