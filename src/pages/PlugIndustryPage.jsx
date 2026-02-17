import { Link, useParams } from 'react-router-dom'
import PageMeta from '../components/common/PageMeta'
import Panel from '../components/ui/Panel'
import Sidebar from '../components/ui/Sidebar'
import { getPlugDefinition, industries } from '../core/plugCatalog'

function PlugIndustryPage({ plugKey, basePath }) {
  const { industryId } = useParams()
  const plug = getPlugDefinition(plugKey)
  const industry = industries.find((entry) => entry.id === industryId)

  if (!plug || !industry) return null

  const sidebarItems = [
    { to: `/${basePath}`, label: `${plug.shortTitle} Home`, section: 'Navigation' },
    ...industries.map((entry) => ({
      to: `/${basePath}/industries/${entry.id}`,
      label: entry.name,
      section: 'Industry Modules',
    })),
  ]

  return (
    <>
      <PageMeta pageTitle={`${industry.name} - ${plug.shortTitle}`} />
      <section className="grid h-full min-h-0 gap-4 lg:grid-cols-[320px_minmax(0,1fr)]">
        <Sidebar title={`${plug.shortTitle} Industries`} items={sidebarItems} />

        <div className="ui-scroll min-h-0 space-y-4 overflow-auto pr-1">
          <Panel title={`${industry.name} Overlay`} subtitle={`Industry-specific extension for ${plug.shortTitle}.`}>
            <p className="text-sm text-slate-100">
              This page is the industry workspace root. Next step is adding dedicated workflows for this industry under the shared modules below.
            </p>
            <div className="mt-3 grid gap-2 sm:grid-cols-2">
              {plug.modules.map((module) => (
                <article key={module.id} className="rounded-lg border border-white/20 bg-white/10 p-3">
                  <p className="text-sm font-semibold text-white">{module.name}</p>
                  <p className="mt-1 text-xs text-slate-200">Industry adaptation checklist starts from this module.</p>
                </article>
              ))}
            </div>
          </Panel>

          <Panel title="Subpage Pattern" subtitle="Main page -> industry page -> module-specific industry workflows.">
            <ol className="space-y-2 text-sm text-slate-100">
              <li>1. Keep shared module behavior intact.</li>
              <li>2. Add industry-specific fields, rules, and reports.</li>
              <li>3. Preserve audit + approval flows for all overrides.</li>
            </ol>
            <div className="mt-3">
              <Link
                to={`/${basePath}`}
                className="rounded-lg border border-white/20 bg-[#0d3a5f]/55 px-3 py-2 text-xs font-semibold text-slate-100 hover:bg-[#0d3a5f]/75"
              >
                Back to {plug.shortTitle} Home
              </Link>
            </div>
          </Panel>
        </div>
      </section>
    </>
  )
}

export default PlugIndustryPage
