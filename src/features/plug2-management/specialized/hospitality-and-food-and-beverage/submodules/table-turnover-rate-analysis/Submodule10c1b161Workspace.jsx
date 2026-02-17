const Submodule10c1b161Routes = {
  dashboard: 'table-turnover-rate-analysis/dashboard',
  list: 'table-turnover-rate-analysis/list',
  create: 'table-turnover-rate-analysis/create',
  detail: 'table-turnover-rate-analysis/detail/:id',
  edit: 'table-turnover-rate-analysis/edit/:id',
  approvals: 'table-turnover-rate-analysis/approvals',
  reports: 'table-turnover-rate-analysis/reports',
  analytics: 'table-turnover-rate-analysis/analytics',
}

function Submodule10c1b161Workspace() {
  return (
    <section className="space-y-4">
      <header className="rounded-xl border border-slate-300/60 bg-white p-4">
        <h3 className="text-base font-bold text-slate-800">table-turnover-rate-analysis</h3>
        <p className="text-sm text-slate-600">Scaffold workspace generated from deep-work component maps.</p>
      </header>

      <article className="rounded-xl border border-slate-300/60 bg-white p-4">
        <p className="text-sm font-semibold text-slate-700">Screen routes</p>
        <pre className="mt-2 overflow-auto text-xs text-slate-600">{JSON.stringify(Submodule10c1b161Routes, null, 2)}</pre>
      </article>
    </section>
  )
}

export { Submodule10c1b161Routes }
export default Submodule10c1b161Workspace

