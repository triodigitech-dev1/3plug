import React from "react";

export function SmartDataTable({ columns = [], rows = [], pagination, sort, filters, selection, onFilterChange, onSortChange, onPageChange, onRowAction }) {
  return (<div data-component="SmartDataTable" className="smart-data-table" />);
}
