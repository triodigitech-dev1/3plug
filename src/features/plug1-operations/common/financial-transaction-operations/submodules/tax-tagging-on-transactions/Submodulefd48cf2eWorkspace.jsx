const Submodulefd48cf2eRoutes = {
  dashboard: 'tax-tagging-on-transactions/dashboard',
  list: 'tax-tagging-on-transactions/list',
  create: 'tax-tagging-on-transactions/create',
  detail: 'tax-tagging-on-transactions/detail/:id',
  edit: 'tax-tagging-on-transactions/edit/:id',
  approvals: 'tax-tagging-on-transactions/approvals',
  reports: 'tax-tagging-on-transactions/reports',
  analytics: 'tax-tagging-on-transactions/analytics',
}

function Submodulefd48cf2eWorkspace() {
  return (
    <section className="space-y-4">
      <header className="rounded-xl border border-slate-300/60 bg-white p-4">
        <h3 className="text-base font-bold text-slate-800">tax-tagging-on-transactions</h3>
        <p className="text-sm text-slate-600">Scaffold workspace generated from deep-work component maps.</p>
      </header>

      <article className="rounded-xl border border-slate-300/60 bg-white p-4">
        <p className="text-sm font-semibold text-slate-700">Screen routes</p>
        <pre className="mt-2 overflow-auto text-xs text-slate-600">{JSON.stringify(Submodulefd48cf2eRoutes, null, 2)}</pre>
      </article>
    </section>
  )
}

export { Submodulefd48cf2eRoutes }
export default Submodulefd48cf2eWorkspace

