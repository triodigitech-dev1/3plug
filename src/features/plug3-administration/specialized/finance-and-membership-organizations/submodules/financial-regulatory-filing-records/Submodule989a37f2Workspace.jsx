const Submodule989a37f2Routes = {
  dashboard: 'financial-regulatory-filing-records/dashboard',
  list: 'financial-regulatory-filing-records/list',
  create: 'financial-regulatory-filing-records/create',
  detail: 'financial-regulatory-filing-records/detail/:id',
  edit: 'financial-regulatory-filing-records/edit/:id',
  approvals: 'financial-regulatory-filing-records/approvals',
  reports: 'financial-regulatory-filing-records/reports',
  analytics: 'financial-regulatory-filing-records/analytics',
}

function Submodule989a37f2Workspace() {
  return (
    <section className="space-y-4">
      <header className="rounded-xl border border-slate-300/60 bg-white p-4">
        <h3 className="text-base font-bold text-slate-800">financial-regulatory-filing-records</h3>
        <p className="text-sm text-slate-600">Scaffold workspace generated from deep-work component maps.</p>
      </header>

      <article className="rounded-xl border border-slate-300/60 bg-white p-4">
        <p className="text-sm font-semibold text-slate-700">Screen routes</p>
        <pre className="mt-2 overflow-auto text-xs text-slate-600">{JSON.stringify(Submodule989a37f2Routes, null, 2)}</pre>
      </article>
    </section>
  )
}

export { Submodule989a37f2Routes }
export default Submodule989a37f2Workspace

