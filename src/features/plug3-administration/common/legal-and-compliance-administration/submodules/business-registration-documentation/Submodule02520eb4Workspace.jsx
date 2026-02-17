const Submodule02520eb4Routes = {
  dashboard: 'business-registration-documentation/dashboard',
  list: 'business-registration-documentation/list',
  create: 'business-registration-documentation/create',
  detail: 'business-registration-documentation/detail/:id',
  edit: 'business-registration-documentation/edit/:id',
  approvals: 'business-registration-documentation/approvals',
  reports: 'business-registration-documentation/reports',
  analytics: 'business-registration-documentation/analytics',
}

function Submodule02520eb4Workspace() {
  return (
    <section className="space-y-4">
      <header className="rounded-xl border border-slate-300/60 bg-white p-4">
        <h3 className="text-base font-bold text-slate-800">business-registration-documentation</h3>
        <p className="text-sm text-slate-600">Scaffold workspace generated from deep-work component maps.</p>
      </header>

      <article className="rounded-xl border border-slate-300/60 bg-white p-4">
        <p className="text-sm font-semibold text-slate-700">Screen routes</p>
        <pre className="mt-2 overflow-auto text-xs text-slate-600">{JSON.stringify(Submodule02520eb4Routes, null, 2)}</pre>
      </article>
    </section>
  )
}

export { Submodule02520eb4Routes }
export default Submodule02520eb4Workspace

