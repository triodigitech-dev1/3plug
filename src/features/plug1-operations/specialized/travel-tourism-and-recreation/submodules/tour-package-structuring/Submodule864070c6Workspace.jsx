const Submodule864070c6Routes = {
  dashboard: 'tour-package-structuring/dashboard',
  list: 'tour-package-structuring/list',
  create: 'tour-package-structuring/create',
  detail: 'tour-package-structuring/detail/:id',
  edit: 'tour-package-structuring/edit/:id',
  approvals: 'tour-package-structuring/approvals',
  reports: 'tour-package-structuring/reports',
  analytics: 'tour-package-structuring/analytics',
}

function Submodule864070c6Workspace() {
  return (
    <section className="space-y-4">
      <header className="rounded-xl border border-slate-300/60 bg-white p-4">
        <h3 className="text-base font-bold text-slate-800">tour-package-structuring</h3>
        <p className="text-sm text-slate-600">Scaffold workspace generated from deep-work component maps.</p>
      </header>

      <article className="rounded-xl border border-slate-300/60 bg-white p-4">
        <p className="text-sm font-semibold text-slate-700">Screen routes</p>
        <pre className="mt-2 overflow-auto text-xs text-slate-600">{JSON.stringify(Submodule864070c6Routes, null, 2)}</pre>
      </article>
    </section>
  )
}

export { Submodule864070c6Routes }
export default Submodule864070c6Workspace

