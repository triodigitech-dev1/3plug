const Submodule65660864Routes = {
  dashboard: 'talent-contract-administration/dashboard',
  list: 'talent-contract-administration/list',
  create: 'talent-contract-administration/create',
  detail: 'talent-contract-administration/detail/:id',
  edit: 'talent-contract-administration/edit/:id',
  approvals: 'talent-contract-administration/approvals',
  reports: 'talent-contract-administration/reports',
  analytics: 'talent-contract-administration/analytics',
}

function Submodule65660864Workspace() {
  return (
    <section className="space-y-4">
      <header className="rounded-xl border border-slate-300/60 bg-white p-4">
        <h3 className="text-base font-bold text-slate-800">talent-contract-administration</h3>
        <p className="text-sm text-slate-600">Scaffold workspace generated from deep-work component maps.</p>
      </header>

      <article className="rounded-xl border border-slate-300/60 bg-white p-4">
        <p className="text-sm font-semibold text-slate-700">Screen routes</p>
        <pre className="mt-2 overflow-auto text-xs text-slate-600">{JSON.stringify(Submodule65660864Routes, null, 2)}</pre>
      </article>
    </section>
  )
}

export { Submodule65660864Routes }
export default Submodule65660864Workspace

