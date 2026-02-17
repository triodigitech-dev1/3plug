const Submodule406423b9Routes = {
  dashboard: 'recipe-and-ingredient-tracking/dashboard',
  list: 'recipe-and-ingredient-tracking/list',
  create: 'recipe-and-ingredient-tracking/create',
  detail: 'recipe-and-ingredient-tracking/detail/:id',
  edit: 'recipe-and-ingredient-tracking/edit/:id',
  approvals: 'recipe-and-ingredient-tracking/approvals',
  reports: 'recipe-and-ingredient-tracking/reports',
  analytics: 'recipe-and-ingredient-tracking/analytics',
}

function Submodule406423b9Workspace() {
  return (
    <section className="space-y-4">
      <header className="rounded-xl border border-slate-300/60 bg-white p-4">
        <h3 className="text-base font-bold text-slate-800">recipe-and-ingredient-tracking</h3>
        <p className="text-sm text-slate-600">Scaffold workspace generated from deep-work component maps.</p>
      </header>

      <article className="rounded-xl border border-slate-300/60 bg-white p-4">
        <p className="text-sm font-semibold text-slate-700">Screen routes</p>
        <pre className="mt-2 overflow-auto text-xs text-slate-600">{JSON.stringify(Submodule406423b9Routes, null, 2)}</pre>
      </article>
    </section>
  )
}

export { Submodule406423b9Routes }
export default Submodule406423b9Workspace

