const Submodule26f000b7Routes = {
  dashboard: 'infrastructure-inspection-logs/dashboard',
  list: 'infrastructure-inspection-logs/list',
  create: 'infrastructure-inspection-logs/create',
  detail: 'infrastructure-inspection-logs/detail/:id',
  edit: 'infrastructure-inspection-logs/edit/:id',
  approvals: 'infrastructure-inspection-logs/approvals',
  reports: 'infrastructure-inspection-logs/reports',
  analytics: 'infrastructure-inspection-logs/analytics',
}

function Submodule26f000b7Workspace() {
  return (
    <section className="space-y-4">
      <header className="rounded-xl border border-slate-300/60 bg-white p-4">
        <h3 className="text-base font-bold text-slate-800">infrastructure-inspection-logs</h3>
        <p className="text-sm text-slate-600">Scaffold workspace generated from deep-work component maps.</p>
      </header>

      <article className="rounded-xl border border-slate-300/60 bg-white p-4">
        <p className="text-sm font-semibold text-slate-700">Screen routes</p>
        <pre className="mt-2 overflow-auto text-xs text-slate-600">{JSON.stringify(Submodule26f000b7Routes, null, 2)}</pre>
      </article>
    </section>
  )
}

export { Submodule26f000b7Routes }
export default Submodule26f000b7Workspace

