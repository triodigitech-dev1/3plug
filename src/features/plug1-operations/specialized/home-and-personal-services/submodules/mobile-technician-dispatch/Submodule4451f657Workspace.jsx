const Submodule4451f657Routes = {
  dashboard: 'mobile-technician-dispatch/dashboard',
  list: 'mobile-technician-dispatch/list',
  create: 'mobile-technician-dispatch/create',
  detail: 'mobile-technician-dispatch/detail/:id',
  edit: 'mobile-technician-dispatch/edit/:id',
  approvals: 'mobile-technician-dispatch/approvals',
  reports: 'mobile-technician-dispatch/reports',
  analytics: 'mobile-technician-dispatch/analytics',
}

function Submodule4451f657Workspace() {
  return (
    <section className="space-y-4">
      <header className="rounded-xl border border-slate-300/60 bg-white p-4">
        <h3 className="text-base font-bold text-slate-800">mobile-technician-dispatch</h3>
        <p className="text-sm text-slate-600">Scaffold workspace generated from deep-work component maps.</p>
      </header>

      <article className="rounded-xl border border-slate-300/60 bg-white p-4">
        <p className="text-sm font-semibold text-slate-700">Screen routes</p>
        <pre className="mt-2 overflow-auto text-xs text-slate-600">{JSON.stringify(Submodule4451f657Routes, null, 2)}</pre>
      </article>
    </section>
  )
}

export { Submodule4451f657Routes }
export default Submodule4451f657Workspace

