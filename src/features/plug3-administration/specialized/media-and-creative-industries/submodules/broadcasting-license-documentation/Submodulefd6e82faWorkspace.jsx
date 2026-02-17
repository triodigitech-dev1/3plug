const Submodulefd6e82faRoutes = {
  dashboard: 'broadcasting-license-documentation/dashboard',
  list: 'broadcasting-license-documentation/list',
  create: 'broadcasting-license-documentation/create',
  detail: 'broadcasting-license-documentation/detail/:id',
  edit: 'broadcasting-license-documentation/edit/:id',
  approvals: 'broadcasting-license-documentation/approvals',
  reports: 'broadcasting-license-documentation/reports',
  analytics: 'broadcasting-license-documentation/analytics',
}

function Submodulefd6e82faWorkspace() {
  return (
    <section className="space-y-4">
      <header className="rounded-xl border border-slate-300/60 bg-white p-4">
        <h3 className="text-base font-bold text-slate-800">broadcasting-license-documentation</h3>
        <p className="text-sm text-slate-600">Scaffold workspace generated from deep-work component maps.</p>
      </header>

      <article className="rounded-xl border border-slate-300/60 bg-white p-4">
        <p className="text-sm font-semibold text-slate-700">Screen routes</p>
        <pre className="mt-2 overflow-auto text-xs text-slate-600">{JSON.stringify(Submodulefd6e82faRoutes, null, 2)}</pre>
      </article>
    </section>
  )
}

export { Submodulefd6e82faRoutes }
export default Submodulefd6e82faWorkspace

