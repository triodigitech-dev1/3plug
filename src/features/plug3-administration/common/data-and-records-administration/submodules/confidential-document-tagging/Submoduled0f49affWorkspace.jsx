const Submoduled0f49affRoutes = {
  dashboard: 'confidential-document-tagging/dashboard',
  list: 'confidential-document-tagging/list',
  create: 'confidential-document-tagging/create',
  detail: 'confidential-document-tagging/detail/:id',
  edit: 'confidential-document-tagging/edit/:id',
  approvals: 'confidential-document-tagging/approvals',
  reports: 'confidential-document-tagging/reports',
  analytics: 'confidential-document-tagging/analytics',
}

function Submoduled0f49affWorkspace() {
  return (
    <section className="space-y-4">
      <header className="rounded-xl border border-slate-300/60 bg-white p-4">
        <h3 className="text-base font-bold text-slate-800">confidential-document-tagging</h3>
        <p className="text-sm text-slate-600">Scaffold workspace generated from deep-work component maps.</p>
      </header>

      <article className="rounded-xl border border-slate-300/60 bg-white p-4">
        <p className="text-sm font-semibold text-slate-700">Screen routes</p>
        <pre className="mt-2 overflow-auto text-xs text-slate-600">{JSON.stringify(Submoduled0f49affRoutes, null, 2)}</pre>
      </article>
    </section>
  )
}

export { Submoduled0f49affRoutes }
export default Submoduled0f49affWorkspace

