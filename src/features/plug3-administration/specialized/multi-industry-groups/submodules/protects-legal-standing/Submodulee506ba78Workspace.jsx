const Submodulee506ba78Routes = {
  dashboard: 'protects-legal-standing/dashboard',
  list: 'protects-legal-standing/list',
  create: 'protects-legal-standing/create',
  detail: 'protects-legal-standing/detail/:id',
  edit: 'protects-legal-standing/edit/:id',
  approvals: 'protects-legal-standing/approvals',
  reports: 'protects-legal-standing/reports',
  analytics: 'protects-legal-standing/analytics',
}

function Submodulee506ba78Workspace() {
  return (
    <section className="space-y-4">
      <header className="rounded-xl border border-slate-300/60 bg-white p-4">
        <h3 className="text-base font-bold text-slate-800">protects-legal-standing</h3>
        <p className="text-sm text-slate-600">Scaffold workspace generated from deep-work component maps.</p>
      </header>

      <article className="rounded-xl border border-slate-300/60 bg-white p-4">
        <p className="text-sm font-semibold text-slate-700">Screen routes</p>
        <pre className="mt-2 overflow-auto text-xs text-slate-600">{JSON.stringify(Submodulee506ba78Routes, null, 2)}</pre>
      </article>
    </section>
  )
}

export { Submodulee506ba78Routes }
export default Submodulee506ba78Workspace

