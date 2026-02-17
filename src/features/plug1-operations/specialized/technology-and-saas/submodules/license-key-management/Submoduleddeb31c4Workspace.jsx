const Submoduleddeb31c4Routes = {
  dashboard: 'license-key-management/dashboard',
  list: 'license-key-management/list',
  create: 'license-key-management/create',
  detail: 'license-key-management/detail/:id',
  edit: 'license-key-management/edit/:id',
  approvals: 'license-key-management/approvals',
  reports: 'license-key-management/reports',
  analytics: 'license-key-management/analytics',
}

function Submoduleddeb31c4Workspace() {
  return (
    <section className="space-y-4">
      <header className="rounded-xl border border-slate-300/60 bg-white p-4">
        <h3 className="text-base font-bold text-slate-800">license-key-management</h3>
        <p className="text-sm text-slate-600">Scaffold workspace generated from deep-work component maps.</p>
      </header>

      <article className="rounded-xl border border-slate-300/60 bg-white p-4">
        <p className="text-sm font-semibold text-slate-700">Screen routes</p>
        <pre className="mt-2 overflow-auto text-xs text-slate-600">{JSON.stringify(Submoduleddeb31c4Routes, null, 2)}</pre>
      </article>
    </section>
  )
}

export { Submoduleddeb31c4Routes }
export default Submoduleddeb31c4Workspace

