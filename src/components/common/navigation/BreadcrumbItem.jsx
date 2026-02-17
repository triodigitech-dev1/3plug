import React from "react";

export function BreadcrumbItem({ label, path, onNavigate }) {
  return (<button data-component="BreadcrumbItem" onClick={() => onNavigate?.(path)}>{label}</button>);
}
