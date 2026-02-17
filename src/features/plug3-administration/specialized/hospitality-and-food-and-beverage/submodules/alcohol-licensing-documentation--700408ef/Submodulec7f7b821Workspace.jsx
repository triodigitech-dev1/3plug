const Submodulec7f7b821Routes = {
  dashboard: 'alcohol-licensing-documentation-where-legal/dashboard',
  list: 'alcohol-licensing-documentation-where-legal/list',
  create: 'alcohol-licensing-documentation-where-legal/create',
  detail: 'alcohol-licensing-documentation-where-legal/detail/:id',
  edit: 'alcohol-licensing-documentation-where-legal/edit/:id',
  approvals: 'alcohol-licensing-documentation-where-legal/approvals',
  reports: 'alcohol-licensing-documentation-where-legal/reports',
  analytics: 'alcohol-licensing-documentation-where-legal/analytics',
}

function Submodulec7f7b821Workspace() {
  return (
    <section className="space-y-4">
      <header className="rounded-xl border border-slate-300/60 bg-white p-4">
        <h3 className="text-base font-bold text-slate-800">alcohol-licensing-documentation-where-legal</h3>
        <p className="text-sm text-slate-600">Scaffold workspace generated from deep-work component maps.</p>
      </header>

      <article className="rounded-xl border border-slate-300/60 bg-white p-4">
        <p className="text-sm font-semibold text-slate-700">Screen routes</p>
        <pre className="mt-2 overflow-auto text-xs text-slate-600">{JSON.stringify(Submodulec7f7b821Routes, null, 2)}</pre>
      </article>
    </section>
  )
}

export { Submodulec7f7b821Routes }
export default Submodulec7f7b821Workspace

