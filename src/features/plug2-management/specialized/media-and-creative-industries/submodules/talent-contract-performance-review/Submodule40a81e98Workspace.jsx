const Submodule40a81e98Routes = {
  dashboard: 'talent-contract-performance-review/dashboard',
  list: 'talent-contract-performance-review/list',
  create: 'talent-contract-performance-review/create',
  detail: 'talent-contract-performance-review/detail/:id',
  edit: 'talent-contract-performance-review/edit/:id',
  approvals: 'talent-contract-performance-review/approvals',
  reports: 'talent-contract-performance-review/reports',
  analytics: 'talent-contract-performance-review/analytics',
}

function Submodule40a81e98Workspace() {
  return (
    <section className="space-y-4">
      <header className="rounded-xl border border-slate-300/60 bg-white p-4">
        <h3 className="text-base font-bold text-slate-800">talent-contract-performance-review</h3>
        <p className="text-sm text-slate-600">Scaffold workspace generated from deep-work component maps.</p>
      </header>

      <article className="rounded-xl border border-slate-300/60 bg-white p-4">
        <p className="text-sm font-semibold text-slate-700">Screen routes</p>
        <pre className="mt-2 overflow-auto text-xs text-slate-600">{JSON.stringify(Submodule40a81e98Routes, null, 2)}</pre>
      </article>
    </section>
  )
}

export { Submodule40a81e98Routes }
export default Submodule40a81e98Workspace

