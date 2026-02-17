const Submoduleab69de53Routes = {
  dashboard: 'bar-tab-management/dashboard',
  list: 'bar-tab-management/list',
  create: 'bar-tab-management/create',
  detail: 'bar-tab-management/detail/:id',
  edit: 'bar-tab-management/edit/:id',
  approvals: 'bar-tab-management/approvals',
  reports: 'bar-tab-management/reports',
  analytics: 'bar-tab-management/analytics',
}

function Submoduleab69de53Workspace() {
  return (
    <section className="space-y-4">
      <header className="rounded-xl border border-slate-300/60 bg-white p-4">
        <h3 className="text-base font-bold text-slate-800">bar-tab-management</h3>
        <p className="text-sm text-slate-600">Scaffold workspace generated from deep-work component maps.</p>
      </header>

      <article className="rounded-xl border border-slate-300/60 bg-white p-4">
        <p className="text-sm font-semibold text-slate-700">Screen routes</p>
        <pre className="mt-2 overflow-auto text-xs text-slate-600">{JSON.stringify(Submoduleab69de53Routes, null, 2)}</pre>
      </article>
    </section>
  )
}

export { Submoduleab69de53Routes }
export default Submoduleab69de53Workspace

