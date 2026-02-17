const Submoduled77660c2Routes = {
  dashboard: 'partnership-evaluation/dashboard',
  list: 'partnership-evaluation/list',
  create: 'partnership-evaluation/create',
  detail: 'partnership-evaluation/detail/:id',
  edit: 'partnership-evaluation/edit/:id',
  approvals: 'partnership-evaluation/approvals',
  reports: 'partnership-evaluation/reports',
  analytics: 'partnership-evaluation/analytics',
}

function Submoduled77660c2Workspace() {
  return (
    <section className="space-y-4">
      <header className="rounded-xl border border-slate-300/60 bg-white p-4">
        <h3 className="text-base font-bold text-slate-800">partnership-evaluation</h3>
        <p className="text-sm text-slate-600">Scaffold workspace generated from deep-work component maps.</p>
      </header>

      <article className="rounded-xl border border-slate-300/60 bg-white p-4">
        <p className="text-sm font-semibold text-slate-700">Screen routes</p>
        <pre className="mt-2 overflow-auto text-xs text-slate-600">{JSON.stringify(Submoduled77660c2Routes, null, 2)}</pre>
      </article>
    </section>
  )
}

export { Submoduled77660c2Routes }
export default Submoduled77660c2Workspace

