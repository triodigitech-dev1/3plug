const Submodule09275f82Routes = {
  dashboard: 'category-management-strategy/dashboard',
  list: 'category-management-strategy/list',
  create: 'category-management-strategy/create',
  detail: 'category-management-strategy/detail/:id',
  edit: 'category-management-strategy/edit/:id',
  approvals: 'category-management-strategy/approvals',
  reports: 'category-management-strategy/reports',
  analytics: 'category-management-strategy/analytics',
}

function Submodule09275f82Workspace() {
  return (
    <section className="space-y-4">
      <header className="rounded-xl border border-slate-300/60 bg-white p-4">
        <h3 className="text-base font-bold text-slate-800">category-management-strategy</h3>
        <p className="text-sm text-slate-600">Scaffold workspace generated from deep-work component maps.</p>
      </header>

      <article className="rounded-xl border border-slate-300/60 bg-white p-4">
        <p className="text-sm font-semibold text-slate-700">Screen routes</p>
        <pre className="mt-2 overflow-auto text-xs text-slate-600">{JSON.stringify(Submodule09275f82Routes, null, 2)}</pre>
      </article>
    </section>
  )
}

export { Submodule09275f82Routes }
export default Submodule09275f82Workspace

