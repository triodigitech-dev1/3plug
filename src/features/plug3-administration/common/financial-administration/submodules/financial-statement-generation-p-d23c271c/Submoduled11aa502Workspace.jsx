const Submoduled11aa502Routes = {
  dashboard: 'financial-statement-generation-p-and-l-balance-sheet-cash-flow/dashboard',
  list: 'financial-statement-generation-p-and-l-balance-sheet-cash-flow/list',
  create: 'financial-statement-generation-p-and-l-balance-sheet-cash-flow/create',
  detail: 'financial-statement-generation-p-and-l-balance-sheet-cash-flow/detail/:id',
  edit: 'financial-statement-generation-p-and-l-balance-sheet-cash-flow/edit/:id',
  approvals: 'financial-statement-generation-p-and-l-balance-sheet-cash-flow/approvals',
  reports: 'financial-statement-generation-p-and-l-balance-sheet-cash-flow/reports',
  analytics: 'financial-statement-generation-p-and-l-balance-sheet-cash-flow/analytics',
}

function Submoduled11aa502Workspace() {
  return (
    <section className="space-y-4">
      <header className="rounded-xl border border-slate-300/60 bg-white p-4">
        <h3 className="text-base font-bold text-slate-800">financial-statement-generation-p-and-l-balance-sheet-cash-flow</h3>
        <p className="text-sm text-slate-600">Scaffold workspace generated from deep-work component maps.</p>
      </header>

      <article className="rounded-xl border border-slate-300/60 bg-white p-4">
        <p className="text-sm font-semibold text-slate-700">Screen routes</p>
        <pre className="mt-2 overflow-auto text-xs text-slate-600">{JSON.stringify(Submoduled11aa502Routes, null, 2)}</pre>
      </article>
    </section>
  )
}

export { Submoduled11aa502Routes }
export default Submoduled11aa502Workspace

