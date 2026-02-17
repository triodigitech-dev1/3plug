const Submoduleab6016b1Routes = {
  dashboard: 'insurance-reimbursement-performance/dashboard',
  list: 'insurance-reimbursement-performance/list',
  create: 'insurance-reimbursement-performance/create',
  detail: 'insurance-reimbursement-performance/detail/:id',
  edit: 'insurance-reimbursement-performance/edit/:id',
  approvals: 'insurance-reimbursement-performance/approvals',
  reports: 'insurance-reimbursement-performance/reports',
  analytics: 'insurance-reimbursement-performance/analytics',
}

function Submoduleab6016b1Workspace() {
  return (
    <section className="space-y-4">
      <header className="rounded-xl border border-slate-300/60 bg-white p-4">
        <h3 className="text-base font-bold text-slate-800">insurance-reimbursement-performance</h3>
        <p className="text-sm text-slate-600">Scaffold workspace generated from deep-work component maps.</p>
      </header>

      <article className="rounded-xl border border-slate-300/60 bg-white p-4">
        <p className="text-sm font-semibold text-slate-700">Screen routes</p>
        <pre className="mt-2 overflow-auto text-xs text-slate-600">{JSON.stringify(Submoduleab6016b1Routes, null, 2)}</pre>
      </article>
    </section>
  )
}

export { Submoduleab6016b1Routes }
export default Submoduleab6016b1Workspace

