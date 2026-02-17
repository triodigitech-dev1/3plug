const Submoduleec52ed8eRoutes = {
  dashboard: 'goods-receipt-recording/dashboard',
  list: 'goods-receipt-recording/list',
  create: 'goods-receipt-recording/create',
  detail: 'goods-receipt-recording/detail/:id',
  edit: 'goods-receipt-recording/edit/:id',
  approvals: 'goods-receipt-recording/approvals',
  reports: 'goods-receipt-recording/reports',
  analytics: 'goods-receipt-recording/analytics',
}

function Submoduleec52ed8eWorkspace() {
  return (
    <section className="space-y-4">
      <header className="rounded-xl border border-slate-300/60 bg-white p-4">
        <h3 className="text-base font-bold text-slate-800">goods-receipt-recording</h3>
        <p className="text-sm text-slate-600">Scaffold workspace generated from deep-work component maps.</p>
      </header>

      <article className="rounded-xl border border-slate-300/60 bg-white p-4">
        <p className="text-sm font-semibold text-slate-700">Screen routes</p>
        <pre className="mt-2 overflow-auto text-xs text-slate-600">{JSON.stringify(Submoduleec52ed8eRoutes, null, 2)}</pre>
      </article>
    </section>
  )
}

export { Submoduleec52ed8eRoutes }
export default Submoduleec52ed8eWorkspace

