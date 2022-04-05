//NPM packages
import React from "react";

//Project files
import inputSetup from "../data/inputSetup.json";

export default function InputField({ setup }) {
  const { label, placeholder, required, type } = setup;

  return (
    <div>
      <label>
        {label}
        <input placholder={placeholder} required={required} type={type} />
      </label>
    </div>
  );
}
