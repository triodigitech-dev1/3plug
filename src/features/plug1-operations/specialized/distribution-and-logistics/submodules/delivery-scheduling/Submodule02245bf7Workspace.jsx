const Submodule02245bf7Routes = {
  dashboard: 'delivery-scheduling/dashboard',
  list: 'delivery-scheduling/list',
  create: 'delivery-scheduling/create',
  detail: 'delivery-scheduling/detail/:id',
  edit: 'delivery-scheduling/edit/:id',
  approvals: 'delivery-scheduling/approvals',
  reports: 'delivery-scheduling/reports',
  analytics: 'delivery-scheduling/analytics',
}

function Submodule02245bf7Workspace() {
  return (
    <section className="space-y-4">
      <header className="rounded-xl border border-slate-300/60 bg-white p-4">
        <h3 className="text-base font-bold text-slate-800">delivery-scheduling</h3>
        <p className="text-sm text-slate-600">Scaffold workspace generated from deep-work component maps.</p>
      </header>

      <article className="rounded-xl border border-slate-300/60 bg-white p-4">
        <p className="text-sm font-semibold text-slate-700">Screen routes</p>
        <pre className="mt-2 overflow-auto text-xs text-slate-600">{JSON.stringify(Submodule02245bf7Routes, null, 2)}</pre>
      </article>
    </section>
  )
}

export { Submodule02245bf7Routes }
export default Submodule02245bf7Workspace

