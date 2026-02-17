import React from "react";

export function NavSection({ title, children }) {
  return (<section data-component="NavSection"><h3>{title}</h3>{children}</section>);
}
