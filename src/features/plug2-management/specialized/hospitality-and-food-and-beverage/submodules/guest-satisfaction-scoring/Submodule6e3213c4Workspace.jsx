const Submodule6e3213c4Routes = {
  dashboard: 'guest-satisfaction-scoring/dashboard',
  list: 'guest-satisfaction-scoring/list',
  create: 'guest-satisfaction-scoring/create',
  detail: 'guest-satisfaction-scoring/detail/:id',
  edit: 'guest-satisfaction-scoring/edit/:id',
  approvals: 'guest-satisfaction-scoring/approvals',
  reports: 'guest-satisfaction-scoring/reports',
  analytics: 'guest-satisfaction-scoring/analytics',
}

function Submodule6e3213c4Workspace() {
  return (
    <section className="space-y-4">
      <header className="rounded-xl border border-slate-300/60 bg-white p-4">
        <h3 className="text-base font-bold text-slate-800">guest-satisfaction-scoring</h3>
        <p className="text-sm text-slate-600">Scaffold workspace generated from deep-work component maps.</p>
      </header>

      <article className="rounded-xl border border-slate-300/60 bg-white p-4">
        <p className="text-sm font-semibold text-slate-700">Screen routes</p>
        <pre className="mt-2 overflow-auto text-xs text-slate-600">{JSON.stringify(Submodule6e3213c4Routes, null, 2)}</pre>
      </article>
    </section>
  )
}

export { Submodule6e3213c4Routes }
export default Submodule6e3213c4Workspace

