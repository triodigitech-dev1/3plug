const Submodule8f89af11Routes = {
  dashboard: 'vehicle-assignment/dashboard',
  list: 'vehicle-assignment/list',
  create: 'vehicle-assignment/create',
  detail: 'vehicle-assignment/detail/:id',
  edit: 'vehicle-assignment/edit/:id',
  approvals: 'vehicle-assignment/approvals',
  reports: 'vehicle-assignment/reports',
  analytics: 'vehicle-assignment/analytics',
}

function Submodule8f89af11Workspace() {
  return (
    <section className="space-y-4">
      <header className="rounded-xl border border-slate-300/60 bg-white p-4">
        <h3 className="text-base font-bold text-slate-800">vehicle-assignment</h3>
        <p className="text-sm text-slate-600">Scaffold workspace generated from deep-work component maps.</p>
      </header>

      <article className="rounded-xl border border-slate-300/60 bg-white p-4">
        <p className="text-sm font-semibold text-slate-700">Screen routes</p>
        <pre className="mt-2 overflow-auto text-xs text-slate-600">{JSON.stringify(Submodule8f89af11Routes, null, 2)}</pre>
      </article>
    </section>
  )
}

export { Submodule8f89af11Routes }
export default Submodule8f89af11Workspace

