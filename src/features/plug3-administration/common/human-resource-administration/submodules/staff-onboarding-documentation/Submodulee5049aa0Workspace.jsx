const Submodulee5049aa0Routes = {
  dashboard: 'staff-onboarding-documentation/dashboard',
  list: 'staff-onboarding-documentation/list',
  create: 'staff-onboarding-documentation/create',
  detail: 'staff-onboarding-documentation/detail/:id',
  edit: 'staff-onboarding-documentation/edit/:id',
  approvals: 'staff-onboarding-documentation/approvals',
  reports: 'staff-onboarding-documentation/reports',
  analytics: 'staff-onboarding-documentation/analytics',
}

function Submodulee5049aa0Workspace() {
  return (
    <section className="space-y-4">
      <header className="rounded-xl border border-slate-300/60 bg-white p-4">
        <h3 className="text-base font-bold text-slate-800">staff-onboarding-documentation</h3>
        <p className="text-sm text-slate-600">Scaffold workspace generated from deep-work component maps.</p>
      </header>

      <article className="rounded-xl border border-slate-300/60 bg-white p-4">
        <p className="text-sm font-semibold text-slate-700">Screen routes</p>
        <pre className="mt-2 overflow-auto text-xs text-slate-600">{JSON.stringify(Submodulee5049aa0Routes, null, 2)}</pre>
      </article>
    </section>
  )
}

export { Submodulee5049aa0Routes }
export default Submodulee5049aa0Workspace

