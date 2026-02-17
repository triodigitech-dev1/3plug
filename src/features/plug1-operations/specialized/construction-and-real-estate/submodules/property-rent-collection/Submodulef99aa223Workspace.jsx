const Submodulef99aa223Routes = {
  dashboard: 'property-rent-collection/dashboard',
  list: 'property-rent-collection/list',
  create: 'property-rent-collection/create',
  detail: 'property-rent-collection/detail/:id',
  edit: 'property-rent-collection/edit/:id',
  approvals: 'property-rent-collection/approvals',
  reports: 'property-rent-collection/reports',
  analytics: 'property-rent-collection/analytics',
}

function Submodulef99aa223Workspace() {
  return (
    <section className="space-y-4">
      <header className="rounded-xl border border-slate-300/60 bg-white p-4">
        <h3 className="text-base font-bold text-slate-800">property-rent-collection</h3>
        <p className="text-sm text-slate-600">Scaffold workspace generated from deep-work component maps.</p>
      </header>

      <article className="rounded-xl border border-slate-300/60 bg-white p-4">
        <p className="text-sm font-semibold text-slate-700">Screen routes</p>
        <pre className="mt-2 overflow-auto text-xs text-slate-600">{JSON.stringify(Submodulef99aa223Routes, null, 2)}</pre>
      </article>
    </section>
  )
}

export { Submodulef99aa223Routes }
export default Submodulef99aa223Workspace

