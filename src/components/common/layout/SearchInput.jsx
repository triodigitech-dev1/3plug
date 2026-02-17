import React from "react";

export function SearchInput({ value, onChange, placeholder = "Search" }) {
  return (<input data-component="SearchInput" value={value ?? ""} onChange={(event) => onChange?.(event.target.value)} placeholder={placeholder} />);
}
