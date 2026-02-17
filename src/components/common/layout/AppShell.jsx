import React from "react";

export function AppShell({ title, children, statusContext, onNavigate, onGlobalSearch }) {
  return (<div data-component="AppShell" className="app-shell">{children}</div>);
}
