const Submoduledd2952f2Routes = {
  dashboard: 'drug-inventory-compliance-documentation/dashboard',
  list: 'drug-inventory-compliance-documentation/list',
  create: 'drug-inventory-compliance-documentation/create',
  detail: 'drug-inventory-compliance-documentation/detail/:id',
  edit: 'drug-inventory-compliance-documentation/edit/:id',
  approvals: 'drug-inventory-compliance-documentation/approvals',
  reports: 'drug-inventory-compliance-documentation/reports',
  analytics: 'drug-inventory-compliance-documentation/analytics',
}

function Submoduledd2952f2Workspace() {
  return (
    <section className="space-y-4">
      <header className="rounded-xl border border-slate-300/60 bg-white p-4">
        <h3 className="text-base font-bold text-slate-800">drug-inventory-compliance-documentation</h3>
        <p className="text-sm text-slate-600">Scaffold workspace generated from deep-work component maps.</p>
      </header>

      <article className="rounded-xl border border-slate-300/60 bg-white p-4">
        <p className="text-sm font-semibold text-slate-700">Screen routes</p>
        <pre className="mt-2 overflow-auto text-xs text-slate-600">{JSON.stringify(Submoduledd2952f2Routes, null, 2)}</pre>
      </article>
    </section>
  )
}

export { Submoduledd2952f2Routes }
export default Submoduledd2952f2Workspace

