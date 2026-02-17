const Submodulef6480615Routes = {
  dashboard: 'shareholder-registry-where-applicable/dashboard',
  list: 'shareholder-registry-where-applicable/list',
  create: 'shareholder-registry-where-applicable/create',
  detail: 'shareholder-registry-where-applicable/detail/:id',
  edit: 'shareholder-registry-where-applicable/edit/:id',
  approvals: 'shareholder-registry-where-applicable/approvals',
  reports: 'shareholder-registry-where-applicable/reports',
  analytics: 'shareholder-registry-where-applicable/analytics',
}

function Submodulef6480615Workspace() {
  return (
    <section className="space-y-4">
      <header className="rounded-xl border border-slate-300/60 bg-white p-4">
        <h3 className="text-base font-bold text-slate-800">shareholder-registry-where-applicable</h3>
        <p className="text-sm text-slate-600">Scaffold workspace generated from deep-work component maps.</p>
      </header>

      <article className="rounded-xl border border-slate-300/60 bg-white p-4">
        <p className="text-sm font-semibold text-slate-700">Screen routes</p>
        <pre className="mt-2 overflow-auto text-xs text-slate-600">{JSON.stringify(Submodulef6480615Routes, null, 2)}</pre>
      </article>
    </section>
  )
}

export { Submodulef6480615Routes }
export default Submodulef6480615Workspace

