const Submodule2add1522Routes = {
  dashboard: 'trade-permit-management/dashboard',
  list: 'trade-permit-management/list',
  create: 'trade-permit-management/create',
  detail: 'trade-permit-management/detail/:id',
  edit: 'trade-permit-management/edit/:id',
  approvals: 'trade-permit-management/approvals',
  reports: 'trade-permit-management/reports',
  analytics: 'trade-permit-management/analytics',
}

function Submodule2add1522Workspace() {
  return (
    <section className="space-y-4">
      <header className="rounded-xl border border-slate-300/60 bg-white p-4">
        <h3 className="text-base font-bold text-slate-800">trade-permit-management</h3>
        <p className="text-sm text-slate-600">Scaffold workspace generated from deep-work component maps.</p>
      </header>

      <article className="rounded-xl border border-slate-300/60 bg-white p-4">
        <p className="text-sm font-semibold text-slate-700">Screen routes</p>
        <pre className="mt-2 overflow-auto text-xs text-slate-600">{JSON.stringify(Submodule2add1522Routes, null, 2)}</pre>
      </article>
    </section>
  )
}

export { Submodule2add1522Routes }
export default Submodule2add1522Workspace

