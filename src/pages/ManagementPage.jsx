import PageMeta from '../components/common/PageMeta'
import KpiTile from '../components/dashboard/KpiTile'
import PanelCard from '../components/dashboard/PanelCard'

function ManagementPage() {
  return (
    <>
      <PageMeta pageTitle="Management" />
      <section className="space-y-6">
        <div>
          <h1 className="text-2xl font-bold text-emerald-200">Management Dashboard</h1>
          <p className="mt-1 text-slate-100">Strategic intelligence view for growth, efficiency, and risk posture.</p>
        </div>

        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          <KpiTile label="Revenue Run Rate" value="$386K" delta="+12.1% month over month" tone="emerald" />
          <KpiTile label="Gross Margin" value="34.8%" delta="+1.6% vs last quarter" tone="sky" />
          <KpiTile label="Branch Performance Index" value="82.4" delta="2 branches below target" tone="blue" />
          <KpiTile label="Risk Score" value="Low-Moderate" delta="3 controls due this week" tone="amber" />
        </div>

        <div className="grid gap-4 lg:grid-cols-3">
          <PanelCard title="Executive Watchlist">
            <ul className="space-y-2 text-sm text-slate-200">
              <li>Margin compression in electronics category</li>
              <li>Q4 staffing utilization under target</li>
              <li>Late supplier cycle affecting top SKUs</li>
            </ul>
          </PanelCard>
          <PanelCard title="Growth Signals">
            <ul className="space-y-2 text-sm text-slate-200">
              <li>Top branch demand growth: +17%</li>
              <li>Cross-sell conversion improving weekly</li>
              <li>Promotion ROI above forecast by 9%</li>
            </ul>
          </PanelCard>
          <PanelCard title="Decision Queue">
            <ul className="space-y-2 text-sm text-slate-200">
              <li>Approve expansion budget proposal</li>
              <li>Review dynamic discount threshold model</li>
              <li>Finalize workforce reallocation plan</li>
            </ul>
          </PanelCard>
        </div>

        <PanelCard title="Shared Management Coverage">
          <div className="grid gap-2 text-sm text-slate-200 md:grid-cols-2">
            <p>1. Strategic Planning & Direction</p>
            <p>2. Performance Management</p>
            <p>3. Financial Oversight</p>
            <p>4. Sales & Revenue Management</p>
            <p>5. Operations Oversight</p>
            <p>6. Workforce & Org Management</p>
            <p>7. Risk & Compliance Management</p>
            <p>8. Customer & Market Management</p>
            <p>9. Innovation & Growth Management</p>
            <p>10. Reporting & Executive Intelligence</p>
          </div>
        </PanelCard>
      </section>
    </>
  )
}

export default ManagementPage
