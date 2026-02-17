const Submodulec3c163ecRoutes = {
  dashboard: 'content-licensing-documentation/dashboard',
  list: 'content-licensing-documentation/list',
  create: 'content-licensing-documentation/create',
  detail: 'content-licensing-documentation/detail/:id',
  edit: 'content-licensing-documentation/edit/:id',
  approvals: 'content-licensing-documentation/approvals',
  reports: 'content-licensing-documentation/reports',
  analytics: 'content-licensing-documentation/analytics',
}

function Submodulec3c163ecWorkspace() {
  return (
    <section className="space-y-4">
      <header className="rounded-xl border border-slate-300/60 bg-white p-4">
        <h3 className="text-base font-bold text-slate-800">content-licensing-documentation</h3>
        <p className="text-sm text-slate-600">Scaffold workspace generated from deep-work component maps.</p>
      </header>

      <article className="rounded-xl border border-slate-300/60 bg-white p-4">
        <p className="text-sm font-semibold text-slate-700">Screen routes</p>
        <pre className="mt-2 overflow-auto text-xs text-slate-600">{JSON.stringify(Submodulec3c163ecRoutes, null, 2)}</pre>
      </article>
    </section>
  )
}

export { Submodulec3c163ecRoutes }
export default Submodulec3c163ecWorkspace

