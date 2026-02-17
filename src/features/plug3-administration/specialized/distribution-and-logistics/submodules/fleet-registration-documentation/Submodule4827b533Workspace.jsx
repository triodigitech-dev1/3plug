const Submodule4827b533Routes = {
  dashboard: 'fleet-registration-documentation/dashboard',
  list: 'fleet-registration-documentation/list',
  create: 'fleet-registration-documentation/create',
  detail: 'fleet-registration-documentation/detail/:id',
  edit: 'fleet-registration-documentation/edit/:id',
  approvals: 'fleet-registration-documentation/approvals',
  reports: 'fleet-registration-documentation/reports',
  analytics: 'fleet-registration-documentation/analytics',
}

function Submodule4827b533Workspace() {
  return (
    <section className="space-y-4">
      <header className="rounded-xl border border-slate-300/60 bg-white p-4">
        <h3 className="text-base font-bold text-slate-800">fleet-registration-documentation</h3>
        <p className="text-sm text-slate-600">Scaffold workspace generated from deep-work component maps.</p>
      </header>

      <article className="rounded-xl border border-slate-300/60 bg-white p-4">
        <p className="text-sm font-semibold text-slate-700">Screen routes</p>
        <pre className="mt-2 overflow-auto text-xs text-slate-600">{JSON.stringify(Submodule4827b533Routes, null, 2)}</pre>
      </article>
    </section>
  )
}

export { Submodule4827b533Routes }
export default Submodule4827b533Workspace

