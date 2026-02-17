const Submodule03fb9c91Routes = {
  dashboard: 'training-effectiveness-evaluation/dashboard',
  list: 'training-effectiveness-evaluation/list',
  create: 'training-effectiveness-evaluation/create',
  detail: 'training-effectiveness-evaluation/detail/:id',
  edit: 'training-effectiveness-evaluation/edit/:id',
  approvals: 'training-effectiveness-evaluation/approvals',
  reports: 'training-effectiveness-evaluation/reports',
  analytics: 'training-effectiveness-evaluation/analytics',
}

function Submodule03fb9c91Workspace() {
  return (
    <section className="space-y-4">
      <header className="rounded-xl border border-slate-300/60 bg-white p-4">
        <h3 className="text-base font-bold text-slate-800">training-effectiveness-evaluation</h3>
        <p className="text-sm text-slate-600">Scaffold workspace generated from deep-work component maps.</p>
      </header>

      <article className="rounded-xl border border-slate-300/60 bg-white p-4">
        <p className="text-sm font-semibold text-slate-700">Screen routes</p>
        <pre className="mt-2 overflow-auto text-xs text-slate-600">{JSON.stringify(Submodule03fb9c91Routes, null, 2)}</pre>
      </article>
    </section>
  )
}

export { Submodule03fb9c91Routes }
export default Submodule03fb9c91Workspace

