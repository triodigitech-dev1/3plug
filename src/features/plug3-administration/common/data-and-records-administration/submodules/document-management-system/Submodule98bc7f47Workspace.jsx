const Submodule98bc7f47Routes = {
  dashboard: 'document-management-system/dashboard',
  list: 'document-management-system/list',
  create: 'document-management-system/create',
  detail: 'document-management-system/detail/:id',
  edit: 'document-management-system/edit/:id',
  approvals: 'document-management-system/approvals',
  reports: 'document-management-system/reports',
  analytics: 'document-management-system/analytics',
}

function Submodule98bc7f47Workspace() {
  return (
    <section className="space-y-4">
      <header className="rounded-xl border border-slate-300/60 bg-white p-4">
        <h3 className="text-base font-bold text-slate-800">document-management-system</h3>
        <p className="text-sm text-slate-600">Scaffold workspace generated from deep-work component maps.</p>
      </header>

      <article className="rounded-xl border border-slate-300/60 bg-white p-4">
        <p className="text-sm font-semibold text-slate-700">Screen routes</p>
        <pre className="mt-2 overflow-auto text-xs text-slate-600">{JSON.stringify(Submodule98bc7f47Routes, null, 2)}</pre>
      </article>
    </section>
  )
}

export { Submodule98bc7f47Routes }
export default Submodule98bc7f47Workspace

