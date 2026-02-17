const Submoduleb1d5b538Routes = {
  dashboard: 'innovation-pipeline-oversight/dashboard',
  list: 'innovation-pipeline-oversight/list',
  create: 'innovation-pipeline-oversight/create',
  detail: 'innovation-pipeline-oversight/detail/:id',
  edit: 'innovation-pipeline-oversight/edit/:id',
  approvals: 'innovation-pipeline-oversight/approvals',
  reports: 'innovation-pipeline-oversight/reports',
  analytics: 'innovation-pipeline-oversight/analytics',
}

function Submoduleb1d5b538Workspace() {
  return (
    <section className="space-y-4">
      <header className="rounded-xl border border-slate-300/60 bg-white p-4">
        <h3 className="text-base font-bold text-slate-800">innovation-pipeline-oversight</h3>
        <p className="text-sm text-slate-600">Scaffold workspace generated from deep-work component maps.</p>
      </header>

      <article className="rounded-xl border border-slate-300/60 bg-white p-4">
        <p className="text-sm font-semibold text-slate-700">Screen routes</p>
        <pre className="mt-2 overflow-auto text-xs text-slate-600">{JSON.stringify(Submoduleb1d5b538Routes, null, 2)}</pre>
      </article>
    </section>
  )
}

export { Submoduleb1d5b538Routes }
export default Submoduleb1d5b538Workspace

