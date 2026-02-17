const Submodule5c2538d7Routes = {
  dashboard: 'supply-chain-performance-metrics/dashboard',
  list: 'supply-chain-performance-metrics/list',
  create: 'supply-chain-performance-metrics/create',
  detail: 'supply-chain-performance-metrics/detail/:id',
  edit: 'supply-chain-performance-metrics/edit/:id',
  approvals: 'supply-chain-performance-metrics/approvals',
  reports: 'supply-chain-performance-metrics/reports',
  analytics: 'supply-chain-performance-metrics/analytics',
}

function Submodule5c2538d7Workspace() {
  return (
    <section className="space-y-4">
      <header className="rounded-xl border border-slate-300/60 bg-white p-4">
        <h3 className="text-base font-bold text-slate-800">supply-chain-performance-metrics</h3>
        <p className="text-sm text-slate-600">Scaffold workspace generated from deep-work component maps.</p>
      </header>

      <article className="rounded-xl border border-slate-300/60 bg-white p-4">
        <p className="text-sm font-semibold text-slate-700">Screen routes</p>
        <pre className="mt-2 overflow-auto text-xs text-slate-600">{JSON.stringify(Submodule5c2538d7Routes, null, 2)}</pre>
      </article>
    </section>
  )
}

export { Submodule5c2538d7Routes }
export default Submodule5c2538d7Workspace

