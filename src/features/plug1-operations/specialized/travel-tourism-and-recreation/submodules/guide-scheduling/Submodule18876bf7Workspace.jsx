const Submodule18876bf7Routes = {
  dashboard: 'guide-scheduling/dashboard',
  list: 'guide-scheduling/list',
  create: 'guide-scheduling/create',
  detail: 'guide-scheduling/detail/:id',
  edit: 'guide-scheduling/edit/:id',
  approvals: 'guide-scheduling/approvals',
  reports: 'guide-scheduling/reports',
  analytics: 'guide-scheduling/analytics',
}

function Submodule18876bf7Workspace() {
  return (
    <section className="space-y-4">
      <header className="rounded-xl border border-slate-300/60 bg-white p-4">
        <h3 className="text-base font-bold text-slate-800">guide-scheduling</h3>
        <p className="text-sm text-slate-600">Scaffold workspace generated from deep-work component maps.</p>
      </header>

      <article className="rounded-xl border border-slate-300/60 bg-white p-4">
        <p className="text-sm font-semibold text-slate-700">Screen routes</p>
        <pre className="mt-2 overflow-auto text-xs text-slate-600">{JSON.stringify(Submodule18876bf7Routes, null, 2)}</pre>
      </article>
    </section>
  )
}

export { Submodule18876bf7Routes }
export default Submodule18876bf7Workspace

