const Submodulecf0cf8b1Routes = {
  dashboard: 'digital-coupon-codes/dashboard',
  list: 'digital-coupon-codes/list',
  create: 'digital-coupon-codes/create',
  detail: 'digital-coupon-codes/detail/:id',
  edit: 'digital-coupon-codes/edit/:id',
  approvals: 'digital-coupon-codes/approvals',
  reports: 'digital-coupon-codes/reports',
  analytics: 'digital-coupon-codes/analytics',
}

function Submodulecf0cf8b1Workspace() {
  return (
    <section className="space-y-4">
      <header className="rounded-xl border border-slate-300/60 bg-white p-4">
        <h3 className="text-base font-bold text-slate-800">digital-coupon-codes</h3>
        <p className="text-sm text-slate-600">Scaffold workspace generated from deep-work component maps.</p>
      </header>

      <article className="rounded-xl border border-slate-300/60 bg-white p-4">
        <p className="text-sm font-semibold text-slate-700">Screen routes</p>
        <pre className="mt-2 overflow-auto text-xs text-slate-600">{JSON.stringify(Submodulecf0cf8b1Routes, null, 2)}</pre>
      </article>
    </section>
  )
}

export { Submodulecf0cf8b1Routes }
export default Submodulecf0cf8b1Workspace

