const Submoduled379020aRoutes = {
  dashboard: 'industry-specific-compliance-reporting/dashboard',
  list: 'industry-specific-compliance-reporting/list',
  create: 'industry-specific-compliance-reporting/create',
  detail: 'industry-specific-compliance-reporting/detail/:id',
  edit: 'industry-specific-compliance-reporting/edit/:id',
  approvals: 'industry-specific-compliance-reporting/approvals',
  reports: 'industry-specific-compliance-reporting/reports',
  analytics: 'industry-specific-compliance-reporting/analytics',
}

function Submoduled379020aWorkspace() {
  return (
    <section className="space-y-4">
      <header className="rounded-xl border border-slate-300/60 bg-white p-4">
        <h3 className="text-base font-bold text-slate-800">industry-specific-compliance-reporting</h3>
        <p className="text-sm text-slate-600">Scaffold workspace generated from deep-work component maps.</p>
      </header>

      <article className="rounded-xl border border-slate-300/60 bg-white p-4">
        <p className="text-sm font-semibold text-slate-700">Screen routes</p>
        <pre className="mt-2 overflow-auto text-xs text-slate-600">{JSON.stringify(Submoduled379020aRoutes, null, 2)}</pre>
      </article>
    </section>
  )
}

export { Submoduled379020aRoutes }
export default Submoduled379020aWorkspace

