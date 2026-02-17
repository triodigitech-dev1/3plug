const Submodule374a4890Routes = {
  dashboard: 'insurance-certificate-tracking/dashboard',
  list: 'insurance-certificate-tracking/list',
  create: 'insurance-certificate-tracking/create',
  detail: 'insurance-certificate-tracking/detail/:id',
  edit: 'insurance-certificate-tracking/edit/:id',
  approvals: 'insurance-certificate-tracking/approvals',
  reports: 'insurance-certificate-tracking/reports',
  analytics: 'insurance-certificate-tracking/analytics',
}

function Submodule374a4890Workspace() {
  return (
    <section className="space-y-4">
      <header className="rounded-xl border border-slate-300/60 bg-white p-4">
        <h3 className="text-base font-bold text-slate-800">insurance-certificate-tracking</h3>
        <p className="text-sm text-slate-600">Scaffold workspace generated from deep-work component maps.</p>
      </header>

      <article className="rounded-xl border border-slate-300/60 bg-white p-4">
        <p className="text-sm font-semibold text-slate-700">Screen routes</p>
        <pre className="mt-2 overflow-auto text-xs text-slate-600">{JSON.stringify(Submodule374a4890Routes, null, 2)}</pre>
      </article>
    </section>
  )
}

export { Submodule374a4890Routes }
export default Submodule374a4890Workspace

