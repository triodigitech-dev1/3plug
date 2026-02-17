const Submodule3ebd713fRoutes = {
  dashboard: 'maintains-governance-integrity/dashboard',
  list: 'maintains-governance-integrity/list',
  create: 'maintains-governance-integrity/create',
  detail: 'maintains-governance-integrity/detail/:id',
  edit: 'maintains-governance-integrity/edit/:id',
  approvals: 'maintains-governance-integrity/approvals',
  reports: 'maintains-governance-integrity/reports',
  analytics: 'maintains-governance-integrity/analytics',
}

function Submodule3ebd713fWorkspace() {
  return (
    <section className="space-y-4">
      <header className="rounded-xl border border-slate-300/60 bg-white p-4">
        <h3 className="text-base font-bold text-slate-800">maintains-governance-integrity</h3>
        <p className="text-sm text-slate-600">Scaffold workspace generated from deep-work component maps.</p>
      </header>

      <article className="rounded-xl border border-slate-300/60 bg-white p-4">
        <p className="text-sm font-semibold text-slate-700">Screen routes</p>
        <pre className="mt-2 overflow-auto text-xs text-slate-600">{JSON.stringify(Submodule3ebd713fRoutes, null, 2)}</pre>
      </article>
    </section>
  )
}

export { Submodule3ebd713fRoutes }
export default Submodule3ebd713fWorkspace

