const Submodule98e124b4Routes = {
  dashboard: 'vendor-performance-evaluation/dashboard',
  list: 'vendor-performance-evaluation/list',
  create: 'vendor-performance-evaluation/create',
  detail: 'vendor-performance-evaluation/detail/:id',
  edit: 'vendor-performance-evaluation/edit/:id',
  approvals: 'vendor-performance-evaluation/approvals',
  reports: 'vendor-performance-evaluation/reports',
  analytics: 'vendor-performance-evaluation/analytics',
}

function Submodule98e124b4Workspace() {
  return (
    <section className="space-y-4">
      <header className="rounded-xl border border-slate-300/60 bg-white p-4">
        <h3 className="text-base font-bold text-slate-800">vendor-performance-evaluation</h3>
        <p className="text-sm text-slate-600">Scaffold workspace generated from deep-work component maps.</p>
      </header>

      <article className="rounded-xl border border-slate-300/60 bg-white p-4">
        <p className="text-sm font-semibold text-slate-700">Screen routes</p>
        <pre className="mt-2 overflow-auto text-xs text-slate-600">{JSON.stringify(Submodule98e124b4Routes, null, 2)}</pre>
      </article>
    </section>
  )
}

export { Submodule98e124b4Routes }
export default Submodule98e124b4Workspace

