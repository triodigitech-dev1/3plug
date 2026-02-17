import React from "react";

export function SyncBadge({ queueDepth = 0, conflicts = 0 }) {
  return (<span data-component="SyncBadge">Q:{queueDepth} C:{conflicts}</span>);
}
