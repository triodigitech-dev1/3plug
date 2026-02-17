const Submodule62c4ef04Routes = {
  dashboard: 'competitive-benchmarking/dashboard',
  list: 'competitive-benchmarking/list',
  create: 'competitive-benchmarking/create',
  detail: 'competitive-benchmarking/detail/:id',
  edit: 'competitive-benchmarking/edit/:id',
  approvals: 'competitive-benchmarking/approvals',
  reports: 'competitive-benchmarking/reports',
  analytics: 'competitive-benchmarking/analytics',
}

function Submodule62c4ef04Workspace() {
  return (
    <section className="space-y-4">
      <header className="rounded-xl border border-slate-300/60 bg-white p-4">
        <h3 className="text-base font-bold text-slate-800">competitive-benchmarking</h3>
        <p className="text-sm text-slate-600">Scaffold workspace generated from deep-work component maps.</p>
      </header>

      <article className="rounded-xl border border-slate-300/60 bg-white p-4">
        <p className="text-sm font-semibold text-slate-700">Screen routes</p>
        <pre className="mt-2 overflow-auto text-xs text-slate-600">{JSON.stringify(Submodule62c4ef04Routes, null, 2)}</pre>
      </article>
    </section>
  )
}

export { Submodule62c4ef04Routes }
export default Submodule62c4ef04Workspace

