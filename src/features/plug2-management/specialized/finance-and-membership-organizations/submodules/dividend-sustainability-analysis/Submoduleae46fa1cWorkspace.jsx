const Submoduleae46fa1cRoutes = {
  dashboard: 'dividend-sustainability-analysis/dashboard',
  list: 'dividend-sustainability-analysis/list',
  create: 'dividend-sustainability-analysis/create',
  detail: 'dividend-sustainability-analysis/detail/:id',
  edit: 'dividend-sustainability-analysis/edit/:id',
  approvals: 'dividend-sustainability-analysis/approvals',
  reports: 'dividend-sustainability-analysis/reports',
  analytics: 'dividend-sustainability-analysis/analytics',
}

function Submoduleae46fa1cWorkspace() {
  return (
    <section className="space-y-4">
      <header className="rounded-xl border border-slate-300/60 bg-white p-4">
        <h3 className="text-base font-bold text-slate-800">dividend-sustainability-analysis</h3>
        <p className="text-sm text-slate-600">Scaffold workspace generated from deep-work component maps.</p>
      </header>

      <article className="rounded-xl border border-slate-300/60 bg-white p-4">
        <p className="text-sm font-semibold text-slate-700">Screen routes</p>
        <pre className="mt-2 overflow-auto text-xs text-slate-600">{JSON.stringify(Submoduleae46fa1cRoutes, null, 2)}</pre>
      </article>
    </section>
  )
}

export { Submoduleae46fa1cRoutes }
export default Submoduleae46fa1cWorkspace

