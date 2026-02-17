const Submodule3f96aee5Routes = {
  dashboard: 'governance-policy-management/dashboard',
  list: 'governance-policy-management/list',
  create: 'governance-policy-management/create',
  detail: 'governance-policy-management/detail/:id',
  edit: 'governance-policy-management/edit/:id',
  approvals: 'governance-policy-management/approvals',
  reports: 'governance-policy-management/reports',
  analytics: 'governance-policy-management/analytics',
}

function Submodule3f96aee5Workspace() {
  return (
    <section className="space-y-4">
      <header className="rounded-xl border border-slate-300/60 bg-white p-4">
        <h3 className="text-base font-bold text-slate-800">governance-policy-management</h3>
        <p className="text-sm text-slate-600">Scaffold workspace generated from deep-work component maps.</p>
      </header>

      <article className="rounded-xl border border-slate-300/60 bg-white p-4">
        <p className="text-sm font-semibold text-slate-700">Screen routes</p>
        <pre className="mt-2 overflow-auto text-xs text-slate-600">{JSON.stringify(Submodule3f96aee5Routes, null, 2)}</pre>
      </article>
    </section>
  )
}

export { Submodule3f96aee5Routes }
export default Submodule3f96aee5Workspace

