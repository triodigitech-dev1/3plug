const Submodulef1e85d19Routes = {
  dashboard: 'table-management/dashboard',
  list: 'table-management/list',
  create: 'table-management/create',
  detail: 'table-management/detail/:id',
  edit: 'table-management/edit/:id',
  approvals: 'table-management/approvals',
  reports: 'table-management/reports',
  analytics: 'table-management/analytics',
}

function Submodulef1e85d19Workspace() {
  return (
    <section className="space-y-4">
      <header className="rounded-xl border border-slate-300/60 bg-white p-4">
        <h3 className="text-base font-bold text-slate-800">table-management</h3>
        <p className="text-sm text-slate-600">Scaffold workspace generated from deep-work component maps.</p>
      </header>

      <article className="rounded-xl border border-slate-300/60 bg-white p-4">
        <p className="text-sm font-semibold text-slate-700">Screen routes</p>
        <pre className="mt-2 overflow-auto text-xs text-slate-600">{JSON.stringify(Submodulef1e85d19Routes, null, 2)}</pre>
      </article>
    </section>
  )
}

export { Submodulef1e85d19Routes }
export default Submodulef1e85d19Workspace

