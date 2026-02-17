const Submodule5ef1482fRoutes = {
  dashboard: 'in-store-promotion-setup/dashboard',
  list: 'in-store-promotion-setup/list',
  create: 'in-store-promotion-setup/create',
  detail: 'in-store-promotion-setup/detail/:id',
  edit: 'in-store-promotion-setup/edit/:id',
  approvals: 'in-store-promotion-setup/approvals',
  reports: 'in-store-promotion-setup/reports',
  analytics: 'in-store-promotion-setup/analytics',
}

function Submodule5ef1482fWorkspace() {
  return (
    <section className="space-y-4">
      <header className="rounded-xl border border-slate-300/60 bg-white p-4">
        <h3 className="text-base font-bold text-slate-800">in-store-promotion-setup</h3>
        <p className="text-sm text-slate-600">Scaffold workspace generated from deep-work component maps.</p>
      </header>

      <article className="rounded-xl border border-slate-300/60 bg-white p-4">
        <p className="text-sm font-semibold text-slate-700">Screen routes</p>
        <pre className="mt-2 overflow-auto text-xs text-slate-600">{JSON.stringify(Submodule5ef1482fRoutes, null, 2)}</pre>
      </article>
    </section>
  )
}

export { Submodule5ef1482fRoutes }
export default Submodule5ef1482fWorkspace

