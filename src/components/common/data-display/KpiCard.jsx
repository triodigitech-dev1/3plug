import React from "react";

export function KpiCard({ label, value, trend, status, onDrilldown }) {
  return (<article data-component="KpiCard" onClick={() => onDrilldown?.(label)}><h4>{label}</h4><p>{value}</p></article>);
}
