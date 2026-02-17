const Submodule6b2440bfRoutes = {
  dashboard: 'payroll-tax-deductions/dashboard',
  list: 'payroll-tax-deductions/list',
  create: 'payroll-tax-deductions/create',
  detail: 'payroll-tax-deductions/detail/:id',
  edit: 'payroll-tax-deductions/edit/:id',
  approvals: 'payroll-tax-deductions/approvals',
  reports: 'payroll-tax-deductions/reports',
  analytics: 'payroll-tax-deductions/analytics',
}

function Submodule6b2440bfWorkspace() {
  return (
    <section className="space-y-4">
      <header className="rounded-xl border border-slate-300/60 bg-white p-4">
        <h3 className="text-base font-bold text-slate-800">payroll-tax-deductions</h3>
        <p className="text-sm text-slate-600">Scaffold workspace generated from deep-work component maps.</p>
      </header>

      <article className="rounded-xl border border-slate-300/60 bg-white p-4">
        <p className="text-sm font-semibold text-slate-700">Screen routes</p>
        <pre className="mt-2 overflow-auto text-xs text-slate-600">{JSON.stringify(Submodule6b2440bfRoutes, null, 2)}</pre>
      </article>
    </section>
  )
}

export { Submodule6b2440bfRoutes }
export default Submodule6b2440bfWorkspace

