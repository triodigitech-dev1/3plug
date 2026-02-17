import React from "react";

export function NavItem({ label, path, active = false, onSelect }) {
  return (<button data-component="NavItem" data-active={active} onClick={() => onSelect?.(path)}>{label}</button>);
}
