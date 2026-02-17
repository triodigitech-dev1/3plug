import React from "react";

export function EmptyState({ message = "No data" }) {
  return (<div data-component="EmptyState">{message}</div>);
}
