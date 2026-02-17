const Submodule305aa419Routes = {
  dashboard: 'payment-gateway-integration/dashboard',
  list: 'payment-gateway-integration/list',
  create: 'payment-gateway-integration/create',
  detail: 'payment-gateway-integration/detail/:id',
  edit: 'payment-gateway-integration/edit/:id',
  approvals: 'payment-gateway-integration/approvals',
  reports: 'payment-gateway-integration/reports',
  analytics: 'payment-gateway-integration/analytics',
}

function Submodule305aa419Workspace() {
  return (
    <section className="space-y-4">
      <header className="rounded-xl border border-slate-300/60 bg-white p-4">
        <h3 className="text-base font-bold text-slate-800">payment-gateway-integration</h3>
        <p className="text-sm text-slate-600">Scaffold workspace generated from deep-work component maps.</p>
      </header>

      <article className="rounded-xl border border-slate-300/60 bg-white p-4">
        <p className="text-sm font-semibold text-slate-700">Screen routes</p>
        <pre className="mt-2 overflow-auto text-xs text-slate-600">{JSON.stringify(Submodule305aa419Routes, null, 2)}</pre>
      </article>
    </section>
  )
}

export { Submodule305aa419Routes }
export default Submodule305aa419Workspace

