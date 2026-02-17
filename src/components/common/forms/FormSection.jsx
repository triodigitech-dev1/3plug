import React from "react";

export function FormSection({ title, children }) {
  return (<section data-component="FormSection"><h3>{title}</h3>{children}</section>);
}
