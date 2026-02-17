const Submoduled1c68d21Routes = {
  dashboard: 'stock-in-stock-out-recording/dashboard',
  list: 'stock-in-stock-out-recording/list',
  create: 'stock-in-stock-out-recording/create',
  detail: 'stock-in-stock-out-recording/detail/:id',
  edit: 'stock-in-stock-out-recording/edit/:id',
  approvals: 'stock-in-stock-out-recording/approvals',
  reports: 'stock-in-stock-out-recording/reports',
  analytics: 'stock-in-stock-out-recording/analytics',
}

function Submoduled1c68d21Workspace() {
  return (
    <section className="space-y-4">
      <header className="rounded-xl border border-slate-300/60 bg-white p-4">
        <h3 className="text-base font-bold text-slate-800">stock-in-stock-out-recording</h3>
        <p className="text-sm text-slate-600">Scaffold workspace generated from deep-work component maps.</p>
      </header>

      <article className="rounded-xl border border-slate-300/60 bg-white p-4">
        <p className="text-sm font-semibold text-slate-700">Screen routes</p>
        <pre className="mt-2 overflow-auto text-xs text-slate-600">{JSON.stringify(Submoduled1c68d21Routes, null, 2)}</pre>
      </article>
    </section>
  )
}

export { Submoduled1c68d21Routes }
export default Submoduled1c68d21Workspace

