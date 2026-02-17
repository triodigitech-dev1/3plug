const Submodule24f05795Routes = {
  dashboard: 'fixed-asset-register-management/dashboard',
  list: 'fixed-asset-register-management/list',
  create: 'fixed-asset-register-management/create',
  detail: 'fixed-asset-register-management/detail/:id',
  edit: 'fixed-asset-register-management/edit/:id',
  approvals: 'fixed-asset-register-management/approvals',
  reports: 'fixed-asset-register-management/reports',
  analytics: 'fixed-asset-register-management/analytics',
}

function Submodule24f05795Workspace() {
  return (
    <section className="space-y-4">
      <header className="rounded-xl border border-slate-300/60 bg-white p-4">
        <h3 className="text-base font-bold text-slate-800">fixed-asset-register-management</h3>
        <p className="text-sm text-slate-600">Scaffold workspace generated from deep-work component maps.</p>
      </header>

      <article className="rounded-xl border border-slate-300/60 bg-white p-4">
        <p className="text-sm font-semibold text-slate-700">Screen routes</p>
        <pre className="mt-2 overflow-auto text-xs text-slate-600">{JSON.stringify(Submodule24f05795Routes, null, 2)}</pre>
      </article>
    </section>
  )
}

export { Submodule24f05795Routes }
export default Submodule24f05795Workspace

