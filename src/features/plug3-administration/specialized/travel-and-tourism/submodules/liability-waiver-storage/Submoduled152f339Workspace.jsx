const Submoduled152f339Routes = {
  dashboard: 'liability-waiver-storage/dashboard',
  list: 'liability-waiver-storage/list',
  create: 'liability-waiver-storage/create',
  detail: 'liability-waiver-storage/detail/:id',
  edit: 'liability-waiver-storage/edit/:id',
  approvals: 'liability-waiver-storage/approvals',
  reports: 'liability-waiver-storage/reports',
  analytics: 'liability-waiver-storage/analytics',
}

function Submoduled152f339Workspace() {
  return (
    <section className="space-y-4">
      <header className="rounded-xl border border-slate-300/60 bg-white p-4">
        <h3 className="text-base font-bold text-slate-800">liability-waiver-storage</h3>
        <p className="text-sm text-slate-600">Scaffold workspace generated from deep-work component maps.</p>
      </header>

      <article className="rounded-xl border border-slate-300/60 bg-white p-4">
        <p className="text-sm font-semibold text-slate-700">Screen routes</p>
        <pre className="mt-2 overflow-auto text-xs text-slate-600">{JSON.stringify(Submoduled152f339Routes, null, 2)}</pre>
      </article>
    </section>
  )
}

export { Submoduled152f339Routes }
export default Submoduled152f339Workspace

