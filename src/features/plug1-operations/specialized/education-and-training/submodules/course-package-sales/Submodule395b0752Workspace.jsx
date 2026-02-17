const Submodule395b0752Routes = {
  dashboard: 'course-package-sales/dashboard',
  list: 'course-package-sales/list',
  create: 'course-package-sales/create',
  detail: 'course-package-sales/detail/:id',
  edit: 'course-package-sales/edit/:id',
  approvals: 'course-package-sales/approvals',
  reports: 'course-package-sales/reports',
  analytics: 'course-package-sales/analytics',
}

function Submodule395b0752Workspace() {
  return (
    <section className="space-y-4">
      <header className="rounded-xl border border-slate-300/60 bg-white p-4">
        <h3 className="text-base font-bold text-slate-800">course-package-sales</h3>
        <p className="text-sm text-slate-600">Scaffold workspace generated from deep-work component maps.</p>
      </header>

      <article className="rounded-xl border border-slate-300/60 bg-white p-4">
        <p className="text-sm font-semibold text-slate-700">Screen routes</p>
        <pre className="mt-2 overflow-auto text-xs text-slate-600">{JSON.stringify(Submodule395b0752Routes, null, 2)}</pre>
      </article>
    </section>
  )
}

export { Submodule395b0752Routes }
export default Submodule395b0752Workspace

