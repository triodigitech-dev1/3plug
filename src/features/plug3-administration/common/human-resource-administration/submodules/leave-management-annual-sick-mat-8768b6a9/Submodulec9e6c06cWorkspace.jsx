const Submodulec9e6c06cRoutes = {
  dashboard: 'leave-management-annual-sick-maternity-etc/dashboard',
  list: 'leave-management-annual-sick-maternity-etc/list',
  create: 'leave-management-annual-sick-maternity-etc/create',
  detail: 'leave-management-annual-sick-maternity-etc/detail/:id',
  edit: 'leave-management-annual-sick-maternity-etc/edit/:id',
  approvals: 'leave-management-annual-sick-maternity-etc/approvals',
  reports: 'leave-management-annual-sick-maternity-etc/reports',
  analytics: 'leave-management-annual-sick-maternity-etc/analytics',
}

function Submodulec9e6c06cWorkspace() {
  return (
    <section className="space-y-4">
      <header className="rounded-xl border border-slate-300/60 bg-white p-4">
        <h3 className="text-base font-bold text-slate-800">leave-management-annual-sick-maternity-etc</h3>
        <p className="text-sm text-slate-600">Scaffold workspace generated from deep-work component maps.</p>
      </header>

      <article className="rounded-xl border border-slate-300/60 bg-white p-4">
        <p className="text-sm font-semibold text-slate-700">Screen routes</p>
        <pre className="mt-2 overflow-auto text-xs text-slate-600">{JSON.stringify(Submodulec9e6c06cRoutes, null, 2)}</pre>
      </article>
    </section>
  )
}

export { Submodulec9e6c06cRoutes }
export default Submodulec9e6c06cWorkspace

