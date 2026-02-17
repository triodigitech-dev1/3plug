const Submoduleecb8383eRoutes = {
  dashboard: 'intercompany-contract-documentation/dashboard',
  list: 'intercompany-contract-documentation/list',
  create: 'intercompany-contract-documentation/create',
  detail: 'intercompany-contract-documentation/detail/:id',
  edit: 'intercompany-contract-documentation/edit/:id',
  approvals: 'intercompany-contract-documentation/approvals',
  reports: 'intercompany-contract-documentation/reports',
  analytics: 'intercompany-contract-documentation/analytics',
}

function Submoduleecb8383eWorkspace() {
  return (
    <section className="space-y-4">
      <header className="rounded-xl border border-slate-300/60 bg-white p-4">
        <h3 className="text-base font-bold text-slate-800">intercompany-contract-documentation</h3>
        <p className="text-sm text-slate-600">Scaffold workspace generated from deep-work component maps.</p>
      </header>

      <article className="rounded-xl border border-slate-300/60 bg-white p-4">
        <p className="text-sm font-semibold text-slate-700">Screen routes</p>
        <pre className="mt-2 overflow-auto text-xs text-slate-600">{JSON.stringify(Submoduleecb8383eRoutes, null, 2)}</pre>
      </article>
    </section>
  )
}

export { Submoduleecb8383eRoutes }
export default Submoduleecb8383eWorkspace

