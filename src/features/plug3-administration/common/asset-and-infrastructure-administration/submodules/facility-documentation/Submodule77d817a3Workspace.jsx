const Submodule77d817a3Routes = {
  dashboard: 'facility-documentation/dashboard',
  list: 'facility-documentation/list',
  create: 'facility-documentation/create',
  detail: 'facility-documentation/detail/:id',
  edit: 'facility-documentation/edit/:id',
  approvals: 'facility-documentation/approvals',
  reports: 'facility-documentation/reports',
  analytics: 'facility-documentation/analytics',
}

function Submodule77d817a3Workspace() {
  return (
    <section className="space-y-4">
      <header className="rounded-xl border border-slate-300/60 bg-white p-4">
        <h3 className="text-base font-bold text-slate-800">facility-documentation</h3>
        <p className="text-sm text-slate-600">Scaffold workspace generated from deep-work component maps.</p>
      </header>

      <article className="rounded-xl border border-slate-300/60 bg-white p-4">
        <p className="text-sm font-semibold text-slate-700">Screen routes</p>
        <pre className="mt-2 overflow-auto text-xs text-slate-600">{JSON.stringify(Submodule77d817a3Routes, null, 2)}</pre>
      </article>
    </section>
  )
}

export { Submodule77d817a3Routes }
export default Submodule77d817a3Workspace

