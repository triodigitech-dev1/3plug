const Submodulede0d6dccRoutes = {
  dashboard: 'talent-contract-tracking/dashboard',
  list: 'talent-contract-tracking/list',
  create: 'talent-contract-tracking/create',
  detail: 'talent-contract-tracking/detail/:id',
  edit: 'talent-contract-tracking/edit/:id',
  approvals: 'talent-contract-tracking/approvals',
  reports: 'talent-contract-tracking/reports',
  analytics: 'talent-contract-tracking/analytics',
}

function Submodulede0d6dccWorkspace() {
  return (
    <section className="space-y-4">
      <header className="rounded-xl border border-slate-300/60 bg-white p-4">
        <h3 className="text-base font-bold text-slate-800">talent-contract-tracking</h3>
        <p className="text-sm text-slate-600">Scaffold workspace generated from deep-work component maps.</p>
      </header>

      <article className="rounded-xl border border-slate-300/60 bg-white p-4">
        <p className="text-sm font-semibold text-slate-700">Screen routes</p>
        <pre className="mt-2 overflow-auto text-xs text-slate-600">{JSON.stringify(Submodulede0d6dccRoutes, null, 2)}</pre>
      </article>
    </section>
  )
}

export { Submodulede0d6dccRoutes }
export default Submodulede0d6dccWorkspace

