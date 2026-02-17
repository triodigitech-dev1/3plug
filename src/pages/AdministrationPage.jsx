import PageMeta from '../components/common/PageMeta'
import KpiTile from '../components/dashboard/KpiTile'
import PanelCard from '../components/dashboard/PanelCard'

function AdministrationPage() {
  return (
    <>
      <PageMeta pageTitle="Administration" />
      <section className="space-y-6">
        <div>
          <h1 className="text-2xl font-bold text-blue-200">Administration Dashboard</h1>
          <p className="mt-1 text-slate-100">Control center for compliance, records, financial governance, and approvals.</p>
        </div>

        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          <KpiTile label="Approvals Pending" value="27" delta="5 above SLA" tone="amber" />
          <KpiTile label="Audit Events Today" value="1,426" delta="Hash chain status: healthy" tone="blue" />
          <KpiTile label="Policy Compliance" value="96.2%" delta="2 controls require attestation" tone="emerald" />
          <KpiTile label="Payroll Readiness" value="Ready" delta="Cutoff in 2 business days" tone="sky" />
        </div>

        <div className="grid gap-4 lg:grid-cols-3">
          <PanelCard title="Compliance Radar">
            <ul className="space-y-2 text-sm text-slate-200">
              <li>Licensing renewals due this month: 4</li>
              <li>Data retention policy checkpoints: 2</li>
              <li>Insurance document gap alerts: 1</li>
            </ul>
          </PanelCard>
          <PanelCard title="Finance & HR Controls">
            <ul className="space-y-2 text-sm text-slate-200">
              <li>Expense approvals blocked over threshold: 3</li>
              <li>New contract packets awaiting legal signoff: 6</li>
              <li>Payroll exception records flagged: 2</li>
            </ul>
          </PanelCard>
          <PanelCard title="Admin Action Board">
            <ul className="space-y-2 text-sm text-slate-200">
              <li>Run backup verification report</li>
              <li>Close monthly compliance checklist</li>
              <li>Export audit package for internal review</li>
            </ul>
          </PanelCard>
        </div>

        <PanelCard title="Shared Administration Coverage">
          <div className="grid gap-2 text-sm text-slate-200 md:grid-cols-2">
            <p>1. Financial Administration</p>
            <p>2. Human Resource Administration</p>
            <p>3. Legal & Compliance Administration</p>
            <p>4. Governance & Internal Control</p>
            <p>5. Procurement & Contract Administration</p>
            <p>6. Asset & Infrastructure Administration</p>
            <p>7. Data & Records Administration</p>
            <p>8. Risk & Insurance Administration</p>
          </div>
        </PanelCard>
      </section>
    </>
  )
}

export default AdministrationPage
