import PageMeta from '../components/common/PageMeta'
import KpiTile from '../components/dashboard/KpiTile'
import PanelCard from '../components/dashboard/PanelCard'

function OperationsPage() {
  return (
    <>
      <PageMeta pageTitle="Operations" />
      <section className="space-y-6">
        <div>
          <h1 className="text-2xl font-bold text-sky-200">Operations Dashboard</h1>
          <p className="mt-1 text-slate-100">Daily execution view for sales, stock movement, and frontline activity.</p>
        </div>

        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          <KpiTile label="Sales Today" value="$12,840" delta="+8.2% vs yesterday" tone="sky" />
          <KpiTile label="Orders Processed" value="318" delta="14 pending confirmation" tone="emerald" />
          <KpiTile label="Inventory Alerts" value="23" delta="6 critical low-stock SKUs" tone="amber" />
          <KpiTile label="Returns Ratio" value="1.7%" delta="-0.4% this week" tone="blue" />
        </div>

        <div className="grid gap-4 lg:grid-cols-3">
          <PanelCard title="Realtime Queue">
            <ul className="space-y-2 text-sm text-slate-200">
              <li>POS checkout queue: 7 active terminals</li>
              <li>Invoice approvals waiting: 4</li>
              <li>Supplier deliveries expected today: 3</li>
            </ul>
          </PanelCard>
          <PanelCard title="Stock Watch">
            <ul className="space-y-2 text-sm text-slate-200">
              <li>Warehouse A: 4 SKUs below reorder</li>
              <li>Branch East: 2 batch expiry warnings</li>
              <li>Transfer requests in transit: 9</li>
            </ul>
          </PanelCard>
          <PanelCard title="Action Board">
            <ul className="space-y-2 text-sm text-slate-200">
              <li>Review voided receipt log before close</li>
              <li>Approve damaged stock write-off batch</li>
              <li>Run end-of-day reconciliation checklist</li>
            </ul>
          </PanelCard>
        </div>

        <PanelCard title="Shared Operations Coverage">
          <div className="grid gap-2 text-sm text-slate-200 md:grid-cols-2">
            <p>1. Sales & Revenue Operations</p>
            <p>2. Inventory & Stock Operations</p>
            <p>3. Procurement & Supplier Operations</p>
            <p>4. Customer Operations</p>
            <p>5. Workforce & Task Operations</p>
            <p>6. Financial Transaction Operations</p>
            <p>7. Reporting & Operational Analytics</p>
            <p>8. Compliance & Control Operations</p>
          </div>
        </PanelCard>
      </section>
    </>
  )
}

export default OperationsPage
