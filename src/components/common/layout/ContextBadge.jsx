import React from "react";

export function ContextBadge({ label, value }) {
  return (<span data-component="ContextBadge" className="context-badge">{label}: {value}</span>);
}
