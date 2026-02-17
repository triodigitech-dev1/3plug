const Submodulebd40fef0Routes = {
  dashboard: 'retainer-agreement-tracking/dashboard',
  list: 'retainer-agreement-tracking/list',
  create: 'retainer-agreement-tracking/create',
  detail: 'retainer-agreement-tracking/detail/:id',
  edit: 'retainer-agreement-tracking/edit/:id',
  approvals: 'retainer-agreement-tracking/approvals',
  reports: 'retainer-agreement-tracking/reports',
  analytics: 'retainer-agreement-tracking/analytics',
}

function Submodulebd40fef0Workspace() {
  return (
    <section className="space-y-4">
      <header className="rounded-xl border border-slate-300/60 bg-white p-4">
        <h3 className="text-base font-bold text-slate-800">retainer-agreement-tracking</h3>
        <p className="text-sm text-slate-600">Scaffold workspace generated from deep-work component maps.</p>
      </header>

      <article className="rounded-xl border border-slate-300/60 bg-white p-4">
        <p className="text-sm font-semibold text-slate-700">Screen routes</p>
        <pre className="mt-2 overflow-auto text-xs text-slate-600">{JSON.stringify(Submodulebd40fef0Routes, null, 2)}</pre>
      </article>
    </section>
  )
}

export { Submodulebd40fef0Routes }
export default Submodulebd40fef0Workspace

