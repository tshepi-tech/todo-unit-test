//NPM packages
import React from "react";

export default function InputField({ setup, setter, getter }) {
  const { label, placeholder, required, type } = setup;
  //const [setter, getter] = state;

  return (
    <div>
      <label>
        {label}
        <input
          onChange={(event) => getter(event.target.value)}
          placeholder={placeholder}
          required={required}
          type={type}
          value={setter}
        />
      </label>
    </div>
  );
}
