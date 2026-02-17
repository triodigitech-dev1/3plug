const Submodule20225a66Routes = {
  dashboard: 'route-authorization-documentation/dashboard',
  list: 'route-authorization-documentation/list',
  create: 'route-authorization-documentation/create',
  detail: 'route-authorization-documentation/detail/:id',
  edit: 'route-authorization-documentation/edit/:id',
  approvals: 'route-authorization-documentation/approvals',
  reports: 'route-authorization-documentation/reports',
  analytics: 'route-authorization-documentation/analytics',
}

function Submodule20225a66Workspace() {
  return (
    <section className="space-y-4">
      <header className="rounded-xl border border-slate-300/60 bg-white p-4">
        <h3 className="text-base font-bold text-slate-800">route-authorization-documentation</h3>
        <p className="text-sm text-slate-600">Scaffold workspace generated from deep-work component maps.</p>
      </header>

      <article className="rounded-xl border border-slate-300/60 bg-white p-4">
        <p className="text-sm font-semibold text-slate-700">Screen routes</p>
        <pre className="mt-2 overflow-auto text-xs text-slate-600">{JSON.stringify(Submodule20225a66Routes, null, 2)}</pre>
      </article>
    </section>
  )
}

export { Submodule20225a66Routes }
export default Submodule20225a66Workspace

