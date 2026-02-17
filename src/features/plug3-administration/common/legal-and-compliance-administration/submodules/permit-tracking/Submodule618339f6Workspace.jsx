const Submodule618339f6Routes = {
  dashboard: 'permit-tracking/dashboard',
  list: 'permit-tracking/list',
  create: 'permit-tracking/create',
  detail: 'permit-tracking/detail/:id',
  edit: 'permit-tracking/edit/:id',
  approvals: 'permit-tracking/approvals',
  reports: 'permit-tracking/reports',
  analytics: 'permit-tracking/analytics',
}

function Submodule618339f6Workspace() {
  return (
    <section className="space-y-4">
      <header className="rounded-xl border border-slate-300/60 bg-white p-4">
        <h3 className="text-base font-bold text-slate-800">permit-tracking</h3>
        <p className="text-sm text-slate-600">Scaffold workspace generated from deep-work component maps.</p>
      </header>

      <article className="rounded-xl border border-slate-300/60 bg-white p-4">
        <p className="text-sm font-semibold text-slate-700">Screen routes</p>
        <pre className="mt-2 overflow-auto text-xs text-slate-600">{JSON.stringify(Submodule618339f6Routes, null, 2)}</pre>
      </article>
    </section>
  )
}

export { Submodule618339f6Routes }
export default Submodule618339f6Workspace

