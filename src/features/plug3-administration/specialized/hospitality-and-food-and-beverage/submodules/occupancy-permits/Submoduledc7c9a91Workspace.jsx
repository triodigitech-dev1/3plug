const Submoduledc7c9a91Routes = {
  dashboard: 'occupancy-permits/dashboard',
  list: 'occupancy-permits/list',
  create: 'occupancy-permits/create',
  detail: 'occupancy-permits/detail/:id',
  edit: 'occupancy-permits/edit/:id',
  approvals: 'occupancy-permits/approvals',
  reports: 'occupancy-permits/reports',
  analytics: 'occupancy-permits/analytics',
}

function Submoduledc7c9a91Workspace() {
  return (
    <section className="space-y-4">
      <header className="rounded-xl border border-slate-300/60 bg-white p-4">
        <h3 className="text-base font-bold text-slate-800">occupancy-permits</h3>
        <p className="text-sm text-slate-600">Scaffold workspace generated from deep-work component maps.</p>
      </header>

      <article className="rounded-xl border border-slate-300/60 bg-white p-4">
        <p className="text-sm font-semibold text-slate-700">Screen routes</p>
        <pre className="mt-2 overflow-auto text-xs text-slate-600">{JSON.stringify(Submoduledc7c9a91Routes, null, 2)}</pre>
      </article>
    </section>
  )
}

export { Submoduledc7c9a91Routes }
export default Submoduledc7c9a91Workspace

