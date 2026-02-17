const Submodule9c6bd5a1Routes = {
  dashboard: 'commission-payout-tracking/dashboard',
  list: 'commission-payout-tracking/list',
  create: 'commission-payout-tracking/create',
  detail: 'commission-payout-tracking/detail/:id',
  edit: 'commission-payout-tracking/edit/:id',
  approvals: 'commission-payout-tracking/approvals',
  reports: 'commission-payout-tracking/reports',
  analytics: 'commission-payout-tracking/analytics',
}

function Submodule9c6bd5a1Workspace() {
  return (
    <section className="space-y-4">
      <header className="rounded-xl border border-slate-300/60 bg-white p-4">
        <h3 className="text-base font-bold text-slate-800">commission-payout-tracking</h3>
        <p className="text-sm text-slate-600">Scaffold workspace generated from deep-work component maps.</p>
      </header>

      <article className="rounded-xl border border-slate-300/60 bg-white p-4">
        <p className="text-sm font-semibold text-slate-700">Screen routes</p>
        <pre className="mt-2 overflow-auto text-xs text-slate-600">{JSON.stringify(Submodule9c6bd5a1Routes, null, 2)}</pre>
      </article>
    </section>
  )
}

export { Submodule9c6bd5a1Routes }
export default Submodule9c6bd5a1Workspace

