const Submoduled40546d4Routes = {
  dashboard: 'customer-segmentation/dashboard',
  list: 'customer-segmentation/list',
  create: 'customer-segmentation/create',
  detail: 'customer-segmentation/detail/:id',
  edit: 'customer-segmentation/edit/:id',
  approvals: 'customer-segmentation/approvals',
  reports: 'customer-segmentation/reports',
  analytics: 'customer-segmentation/analytics',
}

function Submoduled40546d4Workspace() {
  return (
    <section className="space-y-4">
      <header className="rounded-xl border border-slate-300/60 bg-white p-4">
        <h3 className="text-base font-bold text-slate-800">customer-segmentation</h3>
        <p className="text-sm text-slate-600">Scaffold workspace generated from deep-work component maps.</p>
      </header>

      <article className="rounded-xl border border-slate-300/60 bg-white p-4">
        <p className="text-sm font-semibold text-slate-700">Screen routes</p>
        <pre className="mt-2 overflow-auto text-xs text-slate-600">{JSON.stringify(Submoduled40546d4Routes, null, 2)}</pre>
      </article>
    </section>
  )
}

export { Submoduled40546d4Routes }
export default Submoduled40546d4Workspace

