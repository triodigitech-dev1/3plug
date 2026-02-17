const Submodulef23527e9Routes = {
  dashboard: 'shared-services-governance/dashboard',
  list: 'shared-services-governance/list',
  create: 'shared-services-governance/create',
  detail: 'shared-services-governance/detail/:id',
  edit: 'shared-services-governance/edit/:id',
  approvals: 'shared-services-governance/approvals',
  reports: 'shared-services-governance/reports',
  analytics: 'shared-services-governance/analytics',
}

function Submodulef23527e9Workspace() {
  return (
    <section className="space-y-4">
      <header className="rounded-xl border border-slate-300/60 bg-white p-4">
        <h3 className="text-base font-bold text-slate-800">shared-services-governance</h3>
        <p className="text-sm text-slate-600">Scaffold workspace generated from deep-work component maps.</p>
      </header>

      <article className="rounded-xl border border-slate-300/60 bg-white p-4">
        <p className="text-sm font-semibold text-slate-700">Screen routes</p>
        <pre className="mt-2 overflow-auto text-xs text-slate-600">{JSON.stringify(Submodulef23527e9Routes, null, 2)}</pre>
      </article>
    </section>
  )
}

export { Submodulef23527e9Routes }
export default Submodulef23527e9Workspace

