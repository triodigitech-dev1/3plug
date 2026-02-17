const Submodule14ea9cd7Routes = {
  dashboard: 'practice-compliance-documentation/dashboard',
  list: 'practice-compliance-documentation/list',
  create: 'practice-compliance-documentation/create',
  detail: 'practice-compliance-documentation/detail/:id',
  edit: 'practice-compliance-documentation/edit/:id',
  approvals: 'practice-compliance-documentation/approvals',
  reports: 'practice-compliance-documentation/reports',
  analytics: 'practice-compliance-documentation/analytics',
}

function Submodule14ea9cd7Workspace() {
  return (
    <section className="space-y-4">
      <header className="rounded-xl border border-slate-300/60 bg-white p-4">
        <h3 className="text-base font-bold text-slate-800">practice-compliance-documentation</h3>
        <p className="text-sm text-slate-600">Scaffold workspace generated from deep-work component maps.</p>
      </header>

      <article className="rounded-xl border border-slate-300/60 bg-white p-4">
        <p className="text-sm font-semibold text-slate-700">Screen routes</p>
        <pre className="mt-2 overflow-auto text-xs text-slate-600">{JSON.stringify(Submodule14ea9cd7Routes, null, 2)}</pre>
      </article>
    </section>
  )
}

export { Submodule14ea9cd7Routes }
export default Submodule14ea9cd7Workspace

