const Submodulefd2a0fadRoutes = {
  dashboard: 'automated-shipping-label-generation/dashboard',
  list: 'automated-shipping-label-generation/list',
  create: 'automated-shipping-label-generation/create',
  detail: 'automated-shipping-label-generation/detail/:id',
  edit: 'automated-shipping-label-generation/edit/:id',
  approvals: 'automated-shipping-label-generation/approvals',
  reports: 'automated-shipping-label-generation/reports',
  analytics: 'automated-shipping-label-generation/analytics',
}

function Submodulefd2a0fadWorkspace() {
  return (
    <section className="space-y-4">
      <header className="rounded-xl border border-slate-300/60 bg-white p-4">
        <h3 className="text-base font-bold text-slate-800">automated-shipping-label-generation</h3>
        <p className="text-sm text-slate-600">Scaffold workspace generated from deep-work component maps.</p>
      </header>

      <article className="rounded-xl border border-slate-300/60 bg-white p-4">
        <p className="text-sm font-semibold text-slate-700">Screen routes</p>
        <pre className="mt-2 overflow-auto text-xs text-slate-600">{JSON.stringify(Submodulefd2a0fadRoutes, null, 2)}</pre>
      </article>
    </section>
  )
}

export { Submodulefd2a0fadRoutes }
export default Submodulefd2a0fadWorkspace

