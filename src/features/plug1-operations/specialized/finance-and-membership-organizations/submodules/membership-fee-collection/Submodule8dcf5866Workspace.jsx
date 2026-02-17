const Submodule8dcf5866Routes = {
  dashboard: 'membership-fee-collection/dashboard',
  list: 'membership-fee-collection/list',
  create: 'membership-fee-collection/create',
  detail: 'membership-fee-collection/detail/:id',
  edit: 'membership-fee-collection/edit/:id',
  approvals: 'membership-fee-collection/approvals',
  reports: 'membership-fee-collection/reports',
  analytics: 'membership-fee-collection/analytics',
}

function Submodule8dcf5866Workspace() {
  return (
    <section className="space-y-4">
      <header className="rounded-xl border border-slate-300/60 bg-white p-4">
        <h3 className="text-base font-bold text-slate-800">membership-fee-collection</h3>
        <p className="text-sm text-slate-600">Scaffold workspace generated from deep-work component maps.</p>
      </header>

      <article className="rounded-xl border border-slate-300/60 bg-white p-4">
        <p className="text-sm font-semibold text-slate-700">Screen routes</p>
        <pre className="mt-2 overflow-auto text-xs text-slate-600">{JSON.stringify(Submodule8dcf5866Routes, null, 2)}</pre>
      </article>
    </section>
  )
}

export { Submodule8dcf5866Routes }
export default Submodule8dcf5866Workspace

