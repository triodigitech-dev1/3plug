import React from "react";

export function EscalationSelector({ options = [], value, onChange }) {
  return (<select data-component="EscalationSelector" value={value ?? ""} onChange={(event) => onChange?.(event.target.value)} />);
}
