const Submodule5162a929Routes = {
  dashboard: 'lease-agreements-tracking/dashboard',
  list: 'lease-agreements-tracking/list',
  create: 'lease-agreements-tracking/create',
  detail: 'lease-agreements-tracking/detail/:id',
  edit: 'lease-agreements-tracking/edit/:id',
  approvals: 'lease-agreements-tracking/approvals',
  reports: 'lease-agreements-tracking/reports',
  analytics: 'lease-agreements-tracking/analytics',
}

function Submodule5162a929Workspace() {
  return (
    <section className="space-y-4">
      <header className="rounded-xl border border-slate-300/60 bg-white p-4">
        <h3 className="text-base font-bold text-slate-800">lease-agreements-tracking</h3>
        <p className="text-sm text-slate-600">Scaffold workspace generated from deep-work component maps.</p>
      </header>

      <article className="rounded-xl border border-slate-300/60 bg-white p-4">
        <p className="text-sm font-semibold text-slate-700">Screen routes</p>
        <pre className="mt-2 overflow-auto text-xs text-slate-600">{JSON.stringify(Submodule5162a929Routes, null, 2)}</pre>
      </article>
    </section>
  )
}

export { Submodule5162a929Routes }
export default Submodule5162a929Workspace

