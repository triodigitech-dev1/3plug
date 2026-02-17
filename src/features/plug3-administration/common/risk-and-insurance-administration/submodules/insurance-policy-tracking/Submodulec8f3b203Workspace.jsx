const Submodulec8f3b203Routes = {
  dashboard: 'insurance-policy-tracking/dashboard',
  list: 'insurance-policy-tracking/list',
  create: 'insurance-policy-tracking/create',
  detail: 'insurance-policy-tracking/detail/:id',
  edit: 'insurance-policy-tracking/edit/:id',
  approvals: 'insurance-policy-tracking/approvals',
  reports: 'insurance-policy-tracking/reports',
  analytics: 'insurance-policy-tracking/analytics',
}

function Submodulec8f3b203Workspace() {
  return (
    <section className="space-y-4">
      <header className="rounded-xl border border-slate-300/60 bg-white p-4">
        <h3 className="text-base font-bold text-slate-800">insurance-policy-tracking</h3>
        <p className="text-sm text-slate-600">Scaffold workspace generated from deep-work component maps.</p>
      </header>

      <article className="rounded-xl border border-slate-300/60 bg-white p-4">
        <p className="text-sm font-semibold text-slate-700">Screen routes</p>
        <pre className="mt-2 overflow-auto text-xs text-slate-600">{JSON.stringify(Submodulec8f3b203Routes, null, 2)}</pre>
      </article>
    </section>
  )
}

export { Submodulec8f3b203Routes }
export default Submodulec8f3b203Workspace

