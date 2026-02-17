const Submoduled0474ad6Routes = {
  dashboard: 'chart-of-accounts-structuring/dashboard',
  list: 'chart-of-accounts-structuring/list',
  create: 'chart-of-accounts-structuring/create',
  detail: 'chart-of-accounts-structuring/detail/:id',
  edit: 'chart-of-accounts-structuring/edit/:id',
  approvals: 'chart-of-accounts-structuring/approvals',
  reports: 'chart-of-accounts-structuring/reports',
  analytics: 'chart-of-accounts-structuring/analytics',
}

function Submoduled0474ad6Workspace() {
  return (
    <section className="space-y-4">
      <header className="rounded-xl border border-slate-300/60 bg-white p-4">
        <h3 className="text-base font-bold text-slate-800">chart-of-accounts-structuring</h3>
        <p className="text-sm text-slate-600">Scaffold workspace generated from deep-work component maps.</p>
      </header>

      <article className="rounded-xl border border-slate-300/60 bg-white p-4">
        <p className="text-sm font-semibold text-slate-700">Screen routes</p>
        <pre className="mt-2 overflow-auto text-xs text-slate-600">{JSON.stringify(Submoduled0474ad6Routes, null, 2)}</pre>
      </article>
    </section>
  )
}

export { Submoduled0474ad6Routes }
export default Submoduled0474ad6Workspace

