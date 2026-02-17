const Submodule997f5334Routes = {
  dashboard: 'contract-storage-and-renewal-alerts/dashboard',
  list: 'contract-storage-and-renewal-alerts/list',
  create: 'contract-storage-and-renewal-alerts/create',
  detail: 'contract-storage-and-renewal-alerts/detail/:id',
  edit: 'contract-storage-and-renewal-alerts/edit/:id',
  approvals: 'contract-storage-and-renewal-alerts/approvals',
  reports: 'contract-storage-and-renewal-alerts/reports',
  analytics: 'contract-storage-and-renewal-alerts/analytics',
}

function Submodule997f5334Workspace() {
  return (
    <section className="space-y-4">
      <header className="rounded-xl border border-slate-300/60 bg-white p-4">
        <h3 className="text-base font-bold text-slate-800">contract-storage-and-renewal-alerts</h3>
        <p className="text-sm text-slate-600">Scaffold workspace generated from deep-work component maps.</p>
      </header>

      <article className="rounded-xl border border-slate-300/60 bg-white p-4">
        <p className="text-sm font-semibold text-slate-700">Screen routes</p>
        <pre className="mt-2 overflow-auto text-xs text-slate-600">{JSON.stringify(Submodule997f5334Routes, null, 2)}</pre>
      </article>
    </section>
  )
}

export { Submodule997f5334Routes }
export default Submodule997f5334Workspace

