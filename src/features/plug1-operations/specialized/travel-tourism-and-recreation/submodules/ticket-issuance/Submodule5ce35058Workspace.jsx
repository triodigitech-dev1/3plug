const Submodule5ce35058Routes = {
  dashboard: 'ticket-issuance/dashboard',
  list: 'ticket-issuance/list',
  create: 'ticket-issuance/create',
  detail: 'ticket-issuance/detail/:id',
  edit: 'ticket-issuance/edit/:id',
  approvals: 'ticket-issuance/approvals',
  reports: 'ticket-issuance/reports',
  analytics: 'ticket-issuance/analytics',
}

function Submodule5ce35058Workspace() {
  return (
    <section className="space-y-4">
      <header className="rounded-xl border border-slate-300/60 bg-white p-4">
        <h3 className="text-base font-bold text-slate-800">ticket-issuance</h3>
        <p className="text-sm text-slate-600">Scaffold workspace generated from deep-work component maps.</p>
      </header>

      <article className="rounded-xl border border-slate-300/60 bg-white p-4">
        <p className="text-sm font-semibold text-slate-700">Screen routes</p>
        <pre className="mt-2 overflow-auto text-xs text-slate-600">{JSON.stringify(Submodule5ce35058Routes, null, 2)}</pre>
      </article>
    </section>
  )
}

export { Submodule5ce35058Routes }
export default Submodule5ce35058Workspace

