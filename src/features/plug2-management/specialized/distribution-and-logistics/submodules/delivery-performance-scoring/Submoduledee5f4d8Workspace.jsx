const Submoduledee5f4d8Routes = {
  dashboard: 'delivery-performance-scoring/dashboard',
  list: 'delivery-performance-scoring/list',
  create: 'delivery-performance-scoring/create',
  detail: 'delivery-performance-scoring/detail/:id',
  edit: 'delivery-performance-scoring/edit/:id',
  approvals: 'delivery-performance-scoring/approvals',
  reports: 'delivery-performance-scoring/reports',
  analytics: 'delivery-performance-scoring/analytics',
}

function Submoduledee5f4d8Workspace() {
  return (
    <section className="space-y-4">
      <header className="rounded-xl border border-slate-300/60 bg-white p-4">
        <h3 className="text-base font-bold text-slate-800">delivery-performance-scoring</h3>
        <p className="text-sm text-slate-600">Scaffold workspace generated from deep-work component maps.</p>
      </header>

      <article className="rounded-xl border border-slate-300/60 bg-white p-4">
        <p className="text-sm font-semibold text-slate-700">Screen routes</p>
        <pre className="mt-2 overflow-auto text-xs text-slate-600">{JSON.stringify(Submoduledee5f4d8Routes, null, 2)}</pre>
      </article>
    </section>
  )
}

export { Submoduledee5f4d8Routes }
export default Submoduledee5f4d8Workspace

