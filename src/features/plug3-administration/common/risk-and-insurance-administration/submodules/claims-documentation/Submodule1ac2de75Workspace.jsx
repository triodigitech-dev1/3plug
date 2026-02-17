const Submodule1ac2de75Routes = {
  dashboard: 'claims-documentation/dashboard',
  list: 'claims-documentation/list',
  create: 'claims-documentation/create',
  detail: 'claims-documentation/detail/:id',
  edit: 'claims-documentation/edit/:id',
  approvals: 'claims-documentation/approvals',
  reports: 'claims-documentation/reports',
  analytics: 'claims-documentation/analytics',
}

function Submodule1ac2de75Workspace() {
  return (
    <section className="space-y-4">
      <header className="rounded-xl border border-slate-300/60 bg-white p-4">
        <h3 className="text-base font-bold text-slate-800">claims-documentation</h3>
        <p className="text-sm text-slate-600">Scaffold workspace generated from deep-work component maps.</p>
      </header>

      <article className="rounded-xl border border-slate-300/60 bg-white p-4">
        <p className="text-sm font-semibold text-slate-700">Screen routes</p>
        <pre className="mt-2 overflow-auto text-xs text-slate-600">{JSON.stringify(Submodule1ac2de75Routes, null, 2)}</pre>
      </article>
    </section>
  )
}

export { Submodule1ac2de75Routes }
export default Submodule1ac2de75Workspace

