const Submoduleceb29a59Routes = {
  dashboard: 'member-kyc-documentation/dashboard',
  list: 'member-kyc-documentation/list',
  create: 'member-kyc-documentation/create',
  detail: 'member-kyc-documentation/detail/:id',
  edit: 'member-kyc-documentation/edit/:id',
  approvals: 'member-kyc-documentation/approvals',
  reports: 'member-kyc-documentation/reports',
  analytics: 'member-kyc-documentation/analytics',
}

function Submoduleceb29a59Workspace() {
  return (
    <section className="space-y-4">
      <header className="rounded-xl border border-slate-300/60 bg-white p-4">
        <h3 className="text-base font-bold text-slate-800">member-kyc-documentation</h3>
        <p className="text-sm text-slate-600">Scaffold workspace generated from deep-work component maps.</p>
      </header>

      <article className="rounded-xl border border-slate-300/60 bg-white p-4">
        <p className="text-sm font-semibold text-slate-700">Screen routes</p>
        <pre className="mt-2 overflow-auto text-xs text-slate-600">{JSON.stringify(Submoduleceb29a59Routes, null, 2)}</pre>
      </article>
    </section>
  )
}

export { Submoduleceb29a59Routes }
export default Submoduleceb29a59Workspace

