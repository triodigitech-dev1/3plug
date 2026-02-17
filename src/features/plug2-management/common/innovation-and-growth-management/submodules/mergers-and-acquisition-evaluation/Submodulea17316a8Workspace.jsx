const Submodulea17316a8Routes = {
  dashboard: 'mergers-and-acquisition-evaluation/dashboard',
  list: 'mergers-and-acquisition-evaluation/list',
  create: 'mergers-and-acquisition-evaluation/create',
  detail: 'mergers-and-acquisition-evaluation/detail/:id',
  edit: 'mergers-and-acquisition-evaluation/edit/:id',
  approvals: 'mergers-and-acquisition-evaluation/approvals',
  reports: 'mergers-and-acquisition-evaluation/reports',
  analytics: 'mergers-and-acquisition-evaluation/analytics',
}

function Submodulea17316a8Workspace() {
  return (
    <section className="space-y-4">
      <header className="rounded-xl border border-slate-300/60 bg-white p-4">
        <h3 className="text-base font-bold text-slate-800">mergers-and-acquisition-evaluation</h3>
        <p className="text-sm text-slate-600">Scaffold workspace generated from deep-work component maps.</p>
      </header>

      <article className="rounded-xl border border-slate-300/60 bg-white p-4">
        <p className="text-sm font-semibold text-slate-700">Screen routes</p>
        <pre className="mt-2 overflow-auto text-xs text-slate-600">{JSON.stringify(Submodulea17316a8Routes, null, 2)}</pre>
      </article>
    </section>
  )
}

export { Submodulea17316a8Routes }
export default Submodulea17316a8Workspace

