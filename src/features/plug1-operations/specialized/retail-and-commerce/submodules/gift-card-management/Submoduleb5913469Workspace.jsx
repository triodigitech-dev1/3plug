const Submoduleb5913469Routes = {
  dashboard: 'gift-card-management/dashboard',
  list: 'gift-card-management/list',
  create: 'gift-card-management/create',
  detail: 'gift-card-management/detail/:id',
  edit: 'gift-card-management/edit/:id',
  approvals: 'gift-card-management/approvals',
  reports: 'gift-card-management/reports',
  analytics: 'gift-card-management/analytics',
}

function Submoduleb5913469Workspace() {
  return (
    <section className="space-y-4">
      <header className="rounded-xl border border-slate-300/60 bg-white p-4">
        <h3 className="text-base font-bold text-slate-800">gift-card-management</h3>
        <p className="text-sm text-slate-600">Scaffold workspace generated from deep-work component maps.</p>
      </header>

      <article className="rounded-xl border border-slate-300/60 bg-white p-4">
        <p className="text-sm font-semibold text-slate-700">Screen routes</p>
        <pre className="mt-2 overflow-auto text-xs text-slate-600">{JSON.stringify(Submoduleb5913469Routes, null, 2)}</pre>
      </article>
    </section>
  )
}

export { Submoduleb5913469Routes }
export default Submoduleb5913469Workspace

