import React from "react";
import { EmptyState } from "./EmptyState";
import { ErrorState } from "./ErrorState";
import { LoadingSkeleton } from "./LoadingSkeleton";

export function AsyncStateBoundary({ loading = false, error = null, empty = false, onRetry, children }) {
  if (loading) return <LoadingSkeleton />;
  if (error) return <ErrorState error={error} onRetry={onRetry} />;
  if (empty) return <EmptyState />;
  return <>{children}</>;
}
