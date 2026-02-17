const Submodule6d9c2122Routes = {
  dashboard: 'pos-terminal-synchronization/dashboard',
  list: 'pos-terminal-synchronization/list',
  create: 'pos-terminal-synchronization/create',
  detail: 'pos-terminal-synchronization/detail/:id',
  edit: 'pos-terminal-synchronization/edit/:id',
  approvals: 'pos-terminal-synchronization/approvals',
  reports: 'pos-terminal-synchronization/reports',
  analytics: 'pos-terminal-synchronization/analytics',
}

function Submodule6d9c2122Workspace() {
  return (
    <section className="space-y-4">
      <header className="rounded-xl border border-slate-300/60 bg-white p-4">
        <h3 className="text-base font-bold text-slate-800">pos-terminal-synchronization</h3>
        <p className="text-sm text-slate-600">Scaffold workspace generated from deep-work component maps.</p>
      </header>

      <article className="rounded-xl border border-slate-300/60 bg-white p-4">
        <p className="text-sm font-semibold text-slate-700">Screen routes</p>
        <pre className="mt-2 overflow-auto text-xs text-slate-600">{JSON.stringify(Submodule6d9c2122Routes, null, 2)}</pre>
      </article>
    </section>
  )
}

export { Submodule6d9c2122Routes }
export default Submodule6d9c2122Workspace

