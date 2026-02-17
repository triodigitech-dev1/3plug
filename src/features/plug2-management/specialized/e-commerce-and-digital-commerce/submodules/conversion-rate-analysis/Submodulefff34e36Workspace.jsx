const Submodulefff34e36Routes = {
  dashboard: 'conversion-rate-analysis/dashboard',
  list: 'conversion-rate-analysis/list',
  create: 'conversion-rate-analysis/create',
  detail: 'conversion-rate-analysis/detail/:id',
  edit: 'conversion-rate-analysis/edit/:id',
  approvals: 'conversion-rate-analysis/approvals',
  reports: 'conversion-rate-analysis/reports',
  analytics: 'conversion-rate-analysis/analytics',
}

function Submodulefff34e36Workspace() {
  return (
    <section className="space-y-4">
      <header className="rounded-xl border border-slate-300/60 bg-white p-4">
        <h3 className="text-base font-bold text-slate-800">conversion-rate-analysis</h3>
        <p className="text-sm text-slate-600">Scaffold workspace generated from deep-work component maps.</p>
      </header>

      <article className="rounded-xl border border-slate-300/60 bg-white p-4">
        <p className="text-sm font-semibold text-slate-700">Screen routes</p>
        <pre className="mt-2 overflow-auto text-xs text-slate-600">{JSON.stringify(Submodulefff34e36Routes, null, 2)}</pre>
      </article>
    </section>
  )
}

export { Submodulefff34e36Routes }
export default Submodulefff34e36Workspace

