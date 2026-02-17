const Submoduleb197b0a2Routes = {
  dashboard: 'new-branch-store-rollout-monitoring/dashboard',
  list: 'new-branch-store-rollout-monitoring/list',
  create: 'new-branch-store-rollout-monitoring/create',
  detail: 'new-branch-store-rollout-monitoring/detail/:id',
  edit: 'new-branch-store-rollout-monitoring/edit/:id',
  approvals: 'new-branch-store-rollout-monitoring/approvals',
  reports: 'new-branch-store-rollout-monitoring/reports',
  analytics: 'new-branch-store-rollout-monitoring/analytics',
}

function Submoduleb197b0a2Workspace() {
  return (
    <section className="space-y-4">
      <header className="rounded-xl border border-slate-300/60 bg-white p-4">
        <h3 className="text-base font-bold text-slate-800">new-branch-store-rollout-monitoring</h3>
        <p className="text-sm text-slate-600">Scaffold workspace generated from deep-work component maps.</p>
      </header>

      <article className="rounded-xl border border-slate-300/60 bg-white p-4">
        <p className="text-sm font-semibold text-slate-700">Screen routes</p>
        <pre className="mt-2 overflow-auto text-xs text-slate-600">{JSON.stringify(Submoduleb197b0a2Routes, null, 2)}</pre>
      </article>
    </section>
  )
}

export { Submoduleb197b0a2Routes }
export default Submoduleb197b0a2Workspace

