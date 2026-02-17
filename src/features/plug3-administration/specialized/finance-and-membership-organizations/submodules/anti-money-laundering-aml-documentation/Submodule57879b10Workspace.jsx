const Submodule57879b10Routes = {
  dashboard: 'anti-money-laundering-aml-documentation/dashboard',
  list: 'anti-money-laundering-aml-documentation/list',
  create: 'anti-money-laundering-aml-documentation/create',
  detail: 'anti-money-laundering-aml-documentation/detail/:id',
  edit: 'anti-money-laundering-aml-documentation/edit/:id',
  approvals: 'anti-money-laundering-aml-documentation/approvals',
  reports: 'anti-money-laundering-aml-documentation/reports',
  analytics: 'anti-money-laundering-aml-documentation/analytics',
}

function Submodule57879b10Workspace() {
  return (
    <section className="space-y-4">
      <header className="rounded-xl border border-slate-300/60 bg-white p-4">
        <h3 className="text-base font-bold text-slate-800">anti-money-laundering-aml-documentation</h3>
        <p className="text-sm text-slate-600">Scaffold workspace generated from deep-work component maps.</p>
      </header>

      <article className="rounded-xl border border-slate-300/60 bg-white p-4">
        <p className="text-sm font-semibold text-slate-700">Screen routes</p>
        <pre className="mt-2 overflow-auto text-xs text-slate-600">{JSON.stringify(Submodule57879b10Routes, null, 2)}</pre>
      </article>
    </section>
  )
}

export { Submodule57879b10Routes }
export default Submodule57879b10Workspace

