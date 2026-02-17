const Submodule727d5095Routes = {
  dashboard: 'renewal-and-termination-alerts/dashboard',
  list: 'renewal-and-termination-alerts/list',
  create: 'renewal-and-termination-alerts/create',
  detail: 'renewal-and-termination-alerts/detail/:id',
  edit: 'renewal-and-termination-alerts/edit/:id',
  approvals: 'renewal-and-termination-alerts/approvals',
  reports: 'renewal-and-termination-alerts/reports',
  analytics: 'renewal-and-termination-alerts/analytics',
}

function Submodule727d5095Workspace() {
  return (
    <section className="space-y-4">
      <header className="rounded-xl border border-slate-300/60 bg-white p-4">
        <h3 className="text-base font-bold text-slate-800">renewal-and-termination-alerts</h3>
        <p className="text-sm text-slate-600">Scaffold workspace generated from deep-work component maps.</p>
      </header>

      <article className="rounded-xl border border-slate-300/60 bg-white p-4">
        <p className="text-sm font-semibold text-slate-700">Screen routes</p>
        <pre className="mt-2 overflow-auto text-xs text-slate-600">{JSON.stringify(Submodule727d5095Routes, null, 2)}</pre>
      </article>
    </section>
  )
}

export { Submodule727d5095Routes }
export default Submodule727d5095Workspace

