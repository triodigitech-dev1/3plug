import React from "react";

export function OfflineSyncIndicator({ queueDepth = 0, lastSyncAt, conflicts = 0, onOpenSyncPanel, onRetrySync }) {
  return (<section data-component="OfflineSyncIndicator" className="offline-sync-indicator" />);
}
