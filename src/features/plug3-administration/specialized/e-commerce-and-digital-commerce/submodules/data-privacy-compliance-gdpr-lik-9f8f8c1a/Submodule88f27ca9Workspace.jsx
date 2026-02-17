const Submodule88f27ca9Routes = {
  dashboard: 'data-privacy-compliance-gdpr-like-frameworks/dashboard',
  list: 'data-privacy-compliance-gdpr-like-frameworks/list',
  create: 'data-privacy-compliance-gdpr-like-frameworks/create',
  detail: 'data-privacy-compliance-gdpr-like-frameworks/detail/:id',
  edit: 'data-privacy-compliance-gdpr-like-frameworks/edit/:id',
  approvals: 'data-privacy-compliance-gdpr-like-frameworks/approvals',
  reports: 'data-privacy-compliance-gdpr-like-frameworks/reports',
  analytics: 'data-privacy-compliance-gdpr-like-frameworks/analytics',
}

function Submodule88f27ca9Workspace() {
  return (
    <section className="space-y-4">
      <header className="rounded-xl border border-slate-300/60 bg-white p-4">
        <h3 className="text-base font-bold text-slate-800">data-privacy-compliance-gdpr-like-frameworks</h3>
        <p className="text-sm text-slate-600">Scaffold workspace generated from deep-work component maps.</p>
      </header>

      <article className="rounded-xl border border-slate-300/60 bg-white p-4">
        <p className="text-sm font-semibold text-slate-700">Screen routes</p>
        <pre className="mt-2 overflow-auto text-xs text-slate-600">{JSON.stringify(Submodule88f27ca9Routes, null, 2)}</pre>
      </article>
    </section>
  )
}

export { Submodule88f27ca9Routes }
export default Submodule88f27ca9Workspace

