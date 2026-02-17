const Submodulea4b65e63Routes = {
  dashboard: 'digital-transaction-tax-compliance/dashboard',
  list: 'digital-transaction-tax-compliance/list',
  create: 'digital-transaction-tax-compliance/create',
  detail: 'digital-transaction-tax-compliance/detail/:id',
  edit: 'digital-transaction-tax-compliance/edit/:id',
  approvals: 'digital-transaction-tax-compliance/approvals',
  reports: 'digital-transaction-tax-compliance/reports',
  analytics: 'digital-transaction-tax-compliance/analytics',
}

function Submodulea4b65e63Workspace() {
  return (
    <section className="space-y-4">
      <header className="rounded-xl border border-slate-300/60 bg-white p-4">
        <h3 className="text-base font-bold text-slate-800">digital-transaction-tax-compliance</h3>
        <p className="text-sm text-slate-600">Scaffold workspace generated from deep-work component maps.</p>
      </header>

      <article className="rounded-xl border border-slate-300/60 bg-white p-4">
        <p className="text-sm font-semibold text-slate-700">Screen routes</p>
        <pre className="mt-2 overflow-auto text-xs text-slate-600">{JSON.stringify(Submodulea4b65e63Routes, null, 2)}</pre>
      </article>
    </section>
  )
}

export { Submodulea4b65e63Routes }
export default Submodulea4b65e63Workspace

