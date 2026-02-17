import React from "react";

export function CollapseToggle({ collapsed = false, onToggle }) {
  return (<button data-component="CollapseToggle" onClick={() => onToggle?.(!collapsed)}>{collapsed ? ">" : "<"}</button>);
}
