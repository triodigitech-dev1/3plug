const Submodule8d4660f8Routes = {
  dashboard: 'safety-inspection-logs/dashboard',
  list: 'safety-inspection-logs/list',
  create: 'safety-inspection-logs/create',
  detail: 'safety-inspection-logs/detail/:id',
  edit: 'safety-inspection-logs/edit/:id',
  approvals: 'safety-inspection-logs/approvals',
  reports: 'safety-inspection-logs/reports',
  analytics: 'safety-inspection-logs/analytics',
}

function Submodule8d4660f8Workspace() {
  return (
    <section className="space-y-4">
      <header className="rounded-xl border border-slate-300/60 bg-white p-4">
        <h3 className="text-base font-bold text-slate-800">safety-inspection-logs</h3>
        <p className="text-sm text-slate-600">Scaffold workspace generated from deep-work component maps.</p>
      </header>

      <article className="rounded-xl border border-slate-300/60 bg-white p-4">
        <p className="text-sm font-semibold text-slate-700">Screen routes</p>
        <pre className="mt-2 overflow-auto text-xs text-slate-600">{JSON.stringify(Submodule8d4660f8Routes, null, 2)}</pre>
      </article>
    </section>
  )
}

export { Submodule8d4660f8Routes }
export default Submodule8d4660f8Workspace

