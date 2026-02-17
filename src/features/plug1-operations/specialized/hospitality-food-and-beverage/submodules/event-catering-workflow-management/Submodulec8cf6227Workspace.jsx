const Submodulec8cf6227Routes = {
  dashboard: 'event-catering-workflow-management/dashboard',
  list: 'event-catering-workflow-management/list',
  create: 'event-catering-workflow-management/create',
  detail: 'event-catering-workflow-management/detail/:id',
  edit: 'event-catering-workflow-management/edit/:id',
  approvals: 'event-catering-workflow-management/approvals',
  reports: 'event-catering-workflow-management/reports',
  analytics: 'event-catering-workflow-management/analytics',
}

function Submodulec8cf6227Workspace() {
  return (
    <section className="space-y-4">
      <header className="rounded-xl border border-slate-300/60 bg-white p-4">
        <h3 className="text-base font-bold text-slate-800">event-catering-workflow-management</h3>
        <p className="text-sm text-slate-600">Scaffold workspace generated from deep-work component maps.</p>
      </header>

      <article className="rounded-xl border border-slate-300/60 bg-white p-4">
        <p className="text-sm font-semibold text-slate-700">Screen routes</p>
        <pre className="mt-2 overflow-auto text-xs text-slate-600">{JSON.stringify(Submodulec8cf6227Routes, null, 2)}</pre>
      </article>
    </section>
  )
}

export { Submodulec8cf6227Routes }
export default Submodulec8cf6227Workspace

