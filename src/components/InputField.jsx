//NPM packages
import React from "react";

//Project files
import inputSetup from "../data/inputSetup.json";

export default function InputField({ setup, state }) {
  const { label, placeholder, required, type } = setup;
  const [setter, getter] = state;

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
