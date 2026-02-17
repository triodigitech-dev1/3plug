export const fallbackPosDashboard = {
  quickMenu: [
    { to: '/operations/modules/sales-revenue', label: 'Sales' },
    { to: '/operations/modules/inventory-stock', label: 'Inventory' },
    { to: '/operations/modules/customer-operations', label: 'Customers' },
    { to: '/operations/modules/financial-transactions', label: 'Cash Desk' },
    { to: '/management/modules/performance-management', label: 'Performance' },
    { to: '/administration/modules/financial-administration', label: 'Compliance' },
  ],
  catalog: [
    { id: 'P-1001', name: 'Premium Coffee Beans 1kg', price: 18.0, stock: 52, category: 'Beverages' },
    { id: 'P-1002', name: 'Milk 1L', price: 2.4, stock: 88, category: 'Dairy' },
    { id: 'P-1003', name: 'Insulated Cup 450ml', price: 12.5, stock: 34, category: 'Accessories' },
    { id: 'P-1004', name: 'Organic Sugar Pack', price: 3.3, stock: 61, category: 'Baking' },
    { id: 'P-1005', name: 'Sparkling Water 500ml', price: 1.9, stock: 104, category: 'Beverages' },
    { id: 'P-1006', name: 'Multigrain Bread', price: 2.8, stock: 29, category: 'Bakery' },
  ],
  cartRows: [
    { id: 'P-1001', item: 'Premium Coffee Beans 1kg', qty: 2, price: 18.0 },
    { id: 'P-1003', item: 'Insulated Cup 450ml', qty: 1, price: 12.5 },
    { id: 'DISC', item: 'Loyalty Promo Discount', qty: 1, price: -4.0 },
  ],
}
