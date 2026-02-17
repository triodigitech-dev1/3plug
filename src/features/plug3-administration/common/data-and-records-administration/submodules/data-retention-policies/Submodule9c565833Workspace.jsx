const Submodule9c565833Routes = {
  dashboard: 'data-retention-policies/dashboard',
  list: 'data-retention-policies/list',
  create: 'data-retention-policies/create',
  detail: 'data-retention-policies/detail/:id',
  edit: 'data-retention-policies/edit/:id',
  approvals: 'data-retention-policies/approvals',
  reports: 'data-retention-policies/reports',
  analytics: 'data-retention-policies/analytics',
}

function Submodule9c565833Workspace() {
  return (
    <section className="space-y-4">
      <header className="rounded-xl border border-slate-300/60 bg-white p-4">
        <h3 className="text-base font-bold text-slate-800">data-retention-policies</h3>
        <p className="text-sm text-slate-600">Scaffold workspace generated from deep-work component maps.</p>
      </header>

      <article className="rounded-xl border border-slate-300/60 bg-white p-4">
        <p className="text-sm font-semibold text-slate-700">Screen routes</p>
        <pre className="mt-2 overflow-auto text-xs text-slate-600">{JSON.stringify(Submodule9c565833Routes, null, 2)}</pre>
      </article>
    </section>
  )
}

export { Submodule9c565833Routes }
export default Submodule9c565833Workspace

