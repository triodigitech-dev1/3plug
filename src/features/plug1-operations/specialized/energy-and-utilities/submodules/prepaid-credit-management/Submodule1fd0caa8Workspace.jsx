const Submodule1fd0caa8Routes = {
  dashboard: 'prepaid-credit-management/dashboard',
  list: 'prepaid-credit-management/list',
  create: 'prepaid-credit-management/create',
  detail: 'prepaid-credit-management/detail/:id',
  edit: 'prepaid-credit-management/edit/:id',
  approvals: 'prepaid-credit-management/approvals',
  reports: 'prepaid-credit-management/reports',
  analytics: 'prepaid-credit-management/analytics',
}

function Submodule1fd0caa8Workspace() {
  return (
    <section className="space-y-4">
      <header className="rounded-xl border border-slate-300/60 bg-white p-4">
        <h3 className="text-base font-bold text-slate-800">prepaid-credit-management</h3>
        <p className="text-sm text-slate-600">Scaffold workspace generated from deep-work component maps.</p>
      </header>

      <article className="rounded-xl border border-slate-300/60 bg-white p-4">
        <p className="text-sm font-semibold text-slate-700">Screen routes</p>
        <pre className="mt-2 overflow-auto text-xs text-slate-600">{JSON.stringify(Submodule1fd0caa8Routes, null, 2)}</pre>
      </article>
    </section>
  )
}

export { Submodule1fd0caa8Routes }
export default Submodule1fd0caa8Workspace

