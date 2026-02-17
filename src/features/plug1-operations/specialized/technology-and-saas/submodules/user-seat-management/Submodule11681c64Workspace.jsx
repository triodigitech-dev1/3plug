const Submodule11681c64Routes = {
  dashboard: 'user-seat-management/dashboard',
  list: 'user-seat-management/list',
  create: 'user-seat-management/create',
  detail: 'user-seat-management/detail/:id',
  edit: 'user-seat-management/edit/:id',
  approvals: 'user-seat-management/approvals',
  reports: 'user-seat-management/reports',
  analytics: 'user-seat-management/analytics',
}

function Submodule11681c64Workspace() {
  return (
    <section className="space-y-4">
      <header className="rounded-xl border border-slate-300/60 bg-white p-4">
        <h3 className="text-base font-bold text-slate-800">user-seat-management</h3>
        <p className="text-sm text-slate-600">Scaffold workspace generated from deep-work component maps.</p>
      </header>

      <article className="rounded-xl border border-slate-300/60 bg-white p-4">
        <p className="text-sm font-semibold text-slate-700">Screen routes</p>
        <pre className="mt-2 overflow-auto text-xs text-slate-600">{JSON.stringify(Submodule11681c64Routes, null, 2)}</pre>
      </article>
    </section>
  )
}

export { Submodule11681c64Routes }
export default Submodule11681c64Workspace

