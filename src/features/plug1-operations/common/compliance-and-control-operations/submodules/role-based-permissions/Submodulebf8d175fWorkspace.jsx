const Submodulebf8d175fRoutes = {
  dashboard: 'role-based-permissions/dashboard',
  list: 'role-based-permissions/list',
  create: 'role-based-permissions/create',
  detail: 'role-based-permissions/detail/:id',
  edit: 'role-based-permissions/edit/:id',
  approvals: 'role-based-permissions/approvals',
  reports: 'role-based-permissions/reports',
  analytics: 'role-based-permissions/analytics',
}

function Submodulebf8d175fWorkspace() {
  return (
    <section className="space-y-4">
      <header className="rounded-xl border border-slate-300/60 bg-white p-4">
        <h3 className="text-base font-bold text-slate-800">role-based-permissions</h3>
        <p className="text-sm text-slate-600">Scaffold workspace generated from deep-work component maps.</p>
      </header>

      <article className="rounded-xl border border-slate-300/60 bg-white p-4">
        <p className="text-sm font-semibold text-slate-700">Screen routes</p>
        <pre className="mt-2 overflow-auto text-xs text-slate-600">{JSON.stringify(Submodulebf8d175fRoutes, null, 2)}</pre>
      </article>
    </section>
  )
}

export { Submodulebf8d175fRoutes }
export default Submodulebf8d175fWorkspace

