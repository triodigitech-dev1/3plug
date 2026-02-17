const Submoduledfd77f74Routes = {
  dashboard: 'quotation-creation/dashboard',
  list: 'quotation-creation/list',
  create: 'quotation-creation/create',
  detail: 'quotation-creation/detail/:id',
  edit: 'quotation-creation/edit/:id',
  approvals: 'quotation-creation/approvals',
  reports: 'quotation-creation/reports',
  analytics: 'quotation-creation/analytics',
}

function Submoduledfd77f74Workspace() {
  return (
    <section className="space-y-4">
      <header className="rounded-xl border border-slate-300/60 bg-white p-4">
        <h3 className="text-base font-bold text-slate-800">quotation-creation</h3>
        <p className="text-sm text-slate-600">Scaffold workspace generated from deep-work component maps.</p>
      </header>

      <article className="rounded-xl border border-slate-300/60 bg-white p-4">
        <p className="text-sm font-semibold text-slate-700">Screen routes</p>
        <pre className="mt-2 overflow-auto text-xs text-slate-600">{JSON.stringify(Submoduledfd77f74Routes, null, 2)}</pre>
      </article>
    </section>
  )
}

export { Submoduledfd77f74Routes }
export default Submoduledfd77f74Workspace

