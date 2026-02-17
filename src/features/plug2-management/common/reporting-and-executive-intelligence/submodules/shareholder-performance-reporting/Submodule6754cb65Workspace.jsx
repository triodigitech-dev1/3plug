const Submodule6754cb65Routes = {
  dashboard: 'shareholder-performance-reporting/dashboard',
  list: 'shareholder-performance-reporting/list',
  create: 'shareholder-performance-reporting/create',
  detail: 'shareholder-performance-reporting/detail/:id',
  edit: 'shareholder-performance-reporting/edit/:id',
  approvals: 'shareholder-performance-reporting/approvals',
  reports: 'shareholder-performance-reporting/reports',
  analytics: 'shareholder-performance-reporting/analytics',
}

function Submodule6754cb65Workspace() {
  return (
    <section className="space-y-4">
      <header className="rounded-xl border border-slate-300/60 bg-white p-4">
        <h3 className="text-base font-bold text-slate-800">shareholder-performance-reporting</h3>
        <p className="text-sm text-slate-600">Scaffold workspace generated from deep-work component maps.</p>
      </header>

      <article className="rounded-xl border border-slate-300/60 bg-white p-4">
        <p className="text-sm font-semibold text-slate-700">Screen routes</p>
        <pre className="mt-2 overflow-auto text-xs text-slate-600">{JSON.stringify(Submodule6754cb65Routes, null, 2)}</pre>
      </article>
    </section>
  )
}

export { Submodule6754cb65Routes }
export default Submodule6754cb65Workspace

