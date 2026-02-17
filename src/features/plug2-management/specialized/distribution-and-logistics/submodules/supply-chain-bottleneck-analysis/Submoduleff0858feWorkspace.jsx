const Submoduleff0858feRoutes = {
  dashboard: 'supply-chain-bottleneck-analysis/dashboard',
  list: 'supply-chain-bottleneck-analysis/list',
  create: 'supply-chain-bottleneck-analysis/create',
  detail: 'supply-chain-bottleneck-analysis/detail/:id',
  edit: 'supply-chain-bottleneck-analysis/edit/:id',
  approvals: 'supply-chain-bottleneck-analysis/approvals',
  reports: 'supply-chain-bottleneck-analysis/reports',
  analytics: 'supply-chain-bottleneck-analysis/analytics',
}

function Submoduleff0858feWorkspace() {
  return (
    <section className="space-y-4">
      <header className="rounded-xl border border-slate-300/60 bg-white p-4">
        <h3 className="text-base font-bold text-slate-800">supply-chain-bottleneck-analysis</h3>
        <p className="text-sm text-slate-600">Scaffold workspace generated from deep-work component maps.</p>
      </header>

      <article className="rounded-xl border border-slate-300/60 bg-white p-4">
        <p className="text-sm font-semibold text-slate-700">Screen routes</p>
        <pre className="mt-2 overflow-auto text-xs text-slate-600">{JSON.stringify(Submoduleff0858feRoutes, null, 2)}</pre>
      </article>
    </section>
  )
}

export { Submoduleff0858feRoutes }
export default Submoduleff0858feWorkspace

