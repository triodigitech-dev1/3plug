import { Link } from 'react-router-dom'
import PageMeta from '../components/common/PageMeta'
import Panel from '../components/ui/Panel'
import Sidebar from '../components/ui/Sidebar'
import { getPlugDefinition, industries } from '../core/plugCatalog'

function PlugHomePage({ plugKey, basePath }) {
  const plug = getPlugDefinition(plugKey)

  if (!plug) return null

  const sidebarItems = [
    ...plug.modules.map((module) => ({
      to: `/${basePath}/modules/${module.id}`,
      label: module.name,
      section: 'Shared Modules',
    })),
    ...industries.slice(0, 10).map((industry) => ({
      to: `/${basePath}/industries/${industry.id}`,
      label: industry.name,
      section: 'Industry Modules',
    })),
    ...industries.slice(10).map((industry) => ({
      to: `/${basePath}/industries/${industry.id}`,
      label: industry.name,
      section: 'Industry Modules II',
    })),
  ]

  return (
    <>
      <PageMeta pageTitle={`${plug.shortTitle} Workspace`} />
      <section className="grid h-full min-h-0 gap-4 lg:grid-cols-[320px_minmax(0,1fr)]">
        <Sidebar title={`${plug.shortTitle} Menu`} items={sidebarItems} />

        <div className="ui-scroll min-h-0 space-y-4 overflow-auto pr-1">
          <Panel title={`${plug.title} Workspace`} subtitle={plug.subtitle}>
            <div className="grid gap-3 md:grid-cols-3">
              <article className="rounded-xl border border-white/20 bg-white/10 p-3">
                <p className="text-xs uppercase tracking-wide text-sky-200">Shared Modules</p>
                <p className="mt-1 text-2xl font-bold text-white">{plug.modules.length}</p>
              </article>
              <article className="rounded-xl border border-white/20 bg-white/10 p-3">
                <p className="text-xs uppercase tracking-wide text-sky-200">Industry Modules</p>
                <p className="mt-1 text-2xl font-bold text-white">{industries.length}</p>
              </article>
              <article className="rounded-xl border border-white/20 bg-white/10 p-3">
                <p className="text-xs uppercase tracking-wide text-sky-200">Routing Pattern</p>
                <p className="mt-1 text-sm text-slate-100">Main page -> module page -> submodule workspaces</p>
              </article>
            </div>
          </Panel>

          <Panel title="Shared Modules" subtitle="Core capabilities common across industries.">
            <div className="grid gap-3 lg:grid-cols-2">
              {plug.modules.map((module) => (
                <Link
                  key={module.id}
                  to={`/${basePath}/modules/${module.id}`}
                  className="card-hover rounded-xl border border-white/20 bg-[#0d3a5f]/55 p-4"
                >
                  <p className="text-sm font-bold text-white">{module.name}</p>
                  <p className="mt-2 text-xs text-slate-200">{module.submodules.length} submodules ready for implementation.</p>
                </Link>
              ))}
            </div>
          </Panel>

          <Panel title="Industry Modules (20)" subtitle="Industry overlays that extend shared modules.">
            <div className="grid gap-2 sm:grid-cols-2 lg:grid-cols-3">
              {industries.map((industry) => (
                <Link
                  key={industry.id}
                  to={`/${basePath}/industries/${industry.id}`}
                  className="rounded-lg border border-white/20 bg-white/10 px-3 py-2 text-sm font-semibold text-slate-100 transition hover:bg-white/20"
                >
                  {industry.name}
                </Link>
              ))}
            </div>
          </Panel>
        </div>
      </section>
    </>
  )
}

export default PlugHomePage
