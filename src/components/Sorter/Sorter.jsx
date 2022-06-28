import React from "react";

export default function Sorter({ type, options, onSort }) {
  return (
    <section onChange={onSort}>
      <p>Sort by {type}:</p>
      <select defaultValue={options[0].value}>
        {options &&
          options.map(({ value, label }) => (
            <option key={value} value={value}>
              {label}
            </option>
          ))}
      </select>
    </section>
  );
}
