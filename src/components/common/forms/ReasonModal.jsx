import React from "react";

export function ReasonModal({ open = false, onClose, onSubmit }) {
  return open ? (<div data-component="ReasonModal" />) : null;
}
