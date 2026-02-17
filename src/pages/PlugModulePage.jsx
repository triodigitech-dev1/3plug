import { Link, useParams } from 'react-router-dom'
import PageMeta from '../components/common/PageMeta'
import Panel from '../components/ui/Panel'
import Sidebar from '../components/ui/Sidebar'
import { getPlugDefinition, industries } from '../core/plugCatalog'

function PlugModulePage({ plugKey, basePath }) {
  const { moduleId } = useParams()
  const plug = getPlugDefinition(plugKey)
  const module = plug?.modules.find((entry) => entry.id === moduleId)

  if (!plug || !module) return null

  const sidebarItems = [
    { to: `/${basePath}`, label: `${plug.shortTitle} Home`, section: 'Navigation' },
    ...plug.modules.map((entry) => ({
      to: `/${basePath}/modules/${entry.id}`,
      label: entry.name,
      section: 'Shared Modules',
    })),
    ...industries.slice(0, 6).map((industry) => ({
      to: `/${basePath}/industries/${industry.id}`,
      label: industry.name,
      section: 'Industry Modules',
    })),
  ]

  return (
    <>
      <PageMeta pageTitle={`${module.name}`} />
      <section className="grid h-full min-h-0 gap-4 lg:grid-cols-[320px_minmax(0,1fr)]">
        <Sidebar title={`${plug.shortTitle} Modules`} items={sidebarItems} />
        <div className="ui-scroll min-h-0 space-y-4 overflow-auto pr-1">
          <Panel title={module.name} subtitle={`Submodule map for ${plug.shortTitle}.`}>
            <div className="grid gap-3 sm:grid-cols-2">
              {module.submodules.map((submodule) => (
                <article key={submodule} className="rounded-xl border border-white/20 bg-white/10 p-3">
                  <p className="text-sm font-semibold text-white">{submodule}</p>
                  <p className="mt-1 text-xs text-slate-200">Ready for API contract, UI flow, and offline queue logic.</p>
                </article>
              ))}
            </div>
          </Panel>

          <Panel title="Build Sequence" subtitle="How this module should be delivered in development.">
            <ol className="space-y-2 text-sm text-slate-100">
              <li>1. Define API contracts and validation schema for each submodule.</li>
              <li>2. Build reusable table/form/actions from shared UI primitives.</li>
              <li>3. Wire RBAC + audit events on all write paths.</li>
              <li>4. Add local-first sync queue states and error recovery views.</li>
            </ol>
          </Panel>

          <Panel title="Next Modules" subtitle="Continue implementation in this plug.">
            <div className="flex flex-wrap gap-2">
              {plug.modules.map((entry) => (
                <Link
                  key={entry.id}
                  to={`/${basePath}/modules/${entry.id}`}
                  className="rounded-lg border border-white/20 bg-[#0d3a5f]/50 px-3 py-2 text-xs font-semibold text-slate-100 hover:bg-[#0d3a5f]/70"
                >
                  {entry.name}
                </Link>
              ))}
            </div>
          </Panel>
        </div>
      </section>
    </>
  )
}

export default PlugModulePage
