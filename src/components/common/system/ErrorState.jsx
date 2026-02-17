import React from "react";

export function ErrorState({ error, onRetry }) {
  return (<div data-component="ErrorState"><p>{String(error ?? "Unknown error")}</p><button onClick={() => onRetry?.()}>Retry</button></div>);
}
