const Submoduleb7c4272fRoutes = {
  dashboard: 'tax-calculation-and-reporting/dashboard',
  list: 'tax-calculation-and-reporting/list',
  create: 'tax-calculation-and-reporting/create',
  detail: 'tax-calculation-and-reporting/detail/:id',
  edit: 'tax-calculation-and-reporting/edit/:id',
  approvals: 'tax-calculation-and-reporting/approvals',
  reports: 'tax-calculation-and-reporting/reports',
  analytics: 'tax-calculation-and-reporting/analytics',
}

function Submoduleb7c4272fWorkspace() {
  return (
    <section className="space-y-4">
      <header className="rounded-xl border border-slate-300/60 bg-white p-4">
        <h3 className="text-base font-bold text-slate-800">tax-calculation-and-reporting</h3>
        <p className="text-sm text-slate-600">Scaffold workspace generated from deep-work component maps.</p>
      </header>

      <article className="rounded-xl border border-slate-300/60 bg-white p-4">
        <p className="text-sm font-semibold text-slate-700">Screen routes</p>
        <pre className="mt-2 overflow-auto text-xs text-slate-600">{JSON.stringify(Submoduleb7c4272fRoutes, null, 2)}</pre>
      </article>
    </section>
  )
}

export { Submoduleb7c4272fRoutes }
export default Submoduleb7c4272fWorkspace

