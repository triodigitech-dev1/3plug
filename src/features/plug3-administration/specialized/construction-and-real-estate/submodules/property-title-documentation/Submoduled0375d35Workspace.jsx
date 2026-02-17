const Submoduled0375d35Routes = {
  dashboard: 'property-title-documentation/dashboard',
  list: 'property-title-documentation/list',
  create: 'property-title-documentation/create',
  detail: 'property-title-documentation/detail/:id',
  edit: 'property-title-documentation/edit/:id',
  approvals: 'property-title-documentation/approvals',
  reports: 'property-title-documentation/reports',
  analytics: 'property-title-documentation/analytics',
}

function Submoduled0375d35Workspace() {
  return (
    <section className="space-y-4">
      <header className="rounded-xl border border-slate-300/60 bg-white p-4">
        <h3 className="text-base font-bold text-slate-800">property-title-documentation</h3>
        <p className="text-sm text-slate-600">Scaffold workspace generated from deep-work component maps.</p>
      </header>

      <article className="rounded-xl border border-slate-300/60 bg-white p-4">
        <p className="text-sm font-semibold text-slate-700">Screen routes</p>
        <pre className="mt-2 overflow-auto text-xs text-slate-600">{JSON.stringify(Submoduled0375d35Routes, null, 2)}</pre>
      </article>
    </section>
  )
}

export { Submoduled0375d35Routes }
export default Submoduled0375d35Workspace

