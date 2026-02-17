const Submodule02cf0e81Routes = {
  dashboard: 'cost-overrun-tracking/dashboard',
  list: 'cost-overrun-tracking/list',
  create: 'cost-overrun-tracking/create',
  detail: 'cost-overrun-tracking/detail/:id',
  edit: 'cost-overrun-tracking/edit/:id',
  approvals: 'cost-overrun-tracking/approvals',
  reports: 'cost-overrun-tracking/reports',
  analytics: 'cost-overrun-tracking/analytics',
}

function Submodule02cf0e81Workspace() {
  return (
    <section className="space-y-4">
      <header className="rounded-xl border border-slate-300/60 bg-white p-4">
        <h3 className="text-base font-bold text-slate-800">cost-overrun-tracking</h3>
        <p className="text-sm text-slate-600">Scaffold workspace generated from deep-work component maps.</p>
      </header>

      <article className="rounded-xl border border-slate-300/60 bg-white p-4">
        <p className="text-sm font-semibold text-slate-700">Screen routes</p>
        <pre className="mt-2 overflow-auto text-xs text-slate-600">{JSON.stringify(Submodule02cf0e81Routes, null, 2)}</pre>
      </article>
    </section>
  )
}

export { Submodule02cf0e81Routes }
export default Submodule02cf0e81Workspace

