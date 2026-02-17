const Submodule2801ff51Routes = {
  dashboard: 'controls-financial-administration/dashboard',
  list: 'controls-financial-administration/list',
  create: 'controls-financial-administration/create',
  detail: 'controls-financial-administration/detail/:id',
  edit: 'controls-financial-administration/edit/:id',
  approvals: 'controls-financial-administration/approvals',
  reports: 'controls-financial-administration/reports',
  analytics: 'controls-financial-administration/analytics',
}

function Submodule2801ff51Workspace() {
  return (
    <section className="space-y-4">
      <header className="rounded-xl border border-slate-300/60 bg-white p-4">
        <h3 className="text-base font-bold text-slate-800">controls-financial-administration</h3>
        <p className="text-sm text-slate-600">Scaffold workspace generated from deep-work component maps.</p>
      </header>

      <article className="rounded-xl border border-slate-300/60 bg-white p-4">
        <p className="text-sm font-semibold text-slate-700">Screen routes</p>
        <pre className="mt-2 overflow-auto text-xs text-slate-600">{JSON.stringify(Submodule2801ff51Routes, null, 2)}</pre>
      </article>
    </section>
  )
}

export { Submodule2801ff51Routes }
export default Submodule2801ff51Workspace

