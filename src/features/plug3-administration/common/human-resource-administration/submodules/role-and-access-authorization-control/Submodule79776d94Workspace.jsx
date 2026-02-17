const Submodule79776d94Routes = {
  dashboard: 'role-and-access-authorization-control/dashboard',
  list: 'role-and-access-authorization-control/list',
  create: 'role-and-access-authorization-control/create',
  detail: 'role-and-access-authorization-control/detail/:id',
  edit: 'role-and-access-authorization-control/edit/:id',
  approvals: 'role-and-access-authorization-control/approvals',
  reports: 'role-and-access-authorization-control/reports',
  analytics: 'role-and-access-authorization-control/analytics',
}

function Submodule79776d94Workspace() {
  return (
    <section className="space-y-4">
      <header className="rounded-xl border border-slate-300/60 bg-white p-4">
        <h3 className="text-base font-bold text-slate-800">role-and-access-authorization-control</h3>
        <p className="text-sm text-slate-600">Scaffold workspace generated from deep-work component maps.</p>
      </header>

      <article className="rounded-xl border border-slate-300/60 bg-white p-4">
        <p className="text-sm font-semibold text-slate-700">Screen routes</p>
        <pre className="mt-2 overflow-auto text-xs text-slate-600">{JSON.stringify(Submodule79776d94Routes, null, 2)}</pre>
      </article>
    </section>
  )
}

export { Submodule79776d94Routes }
export default Submodule79776d94Workspace

