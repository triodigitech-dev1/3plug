const Submoduleb17cc2acRoutes = {
  dashboard: 'equipment-registration/dashboard',
  list: 'equipment-registration/list',
  create: 'equipment-registration/create',
  detail: 'equipment-registration/detail/:id',
  edit: 'equipment-registration/edit/:id',
  approvals: 'equipment-registration/approvals',
  reports: 'equipment-registration/reports',
  analytics: 'equipment-registration/analytics',
}

function Submoduleb17cc2acWorkspace() {
  return (
    <section className="space-y-4">
      <header className="rounded-xl border border-slate-300/60 bg-white p-4">
        <h3 className="text-base font-bold text-slate-800">equipment-registration</h3>
        <p className="text-sm text-slate-600">Scaffold workspace generated from deep-work component maps.</p>
      </header>

      <article className="rounded-xl border border-slate-300/60 bg-white p-4">
        <p className="text-sm font-semibold text-slate-700">Screen routes</p>
        <pre className="mt-2 overflow-auto text-xs text-slate-600">{JSON.stringify(Submoduleb17cc2acRoutes, null, 2)}</pre>
      </article>
    </section>
  )
}

export { Submoduleb17cc2acRoutes }
export default Submoduleb17cc2acWorkspace

