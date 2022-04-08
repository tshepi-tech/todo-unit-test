import { useState } from "react";

export default function InputField({ setup, getter, setter, validation }) {
  const { label, placeholder, required, type } = setup;

  //Local State

  const [errorText, setErrorText] = useState("");

  // Methods
  function onValidate(callback, setState, setError) {
    // Safeguard (prevent app from crashing if the validate(Name/Price function does not work))
    if (callback === undefined) return;

    const result = callback(getter);

    setState(result.data);
    setError(result.error);
  }

  return (
    <div>
      <label className="input-field">
        {label}
        <input
          onBlur={() => onValidate(validation, setter, setErrorText)}
          onChange={(event) => setter(event.target.value)}
          placeholder={placeholder}
          required={required}
          type={type}
          value={getter}
        />
      </label>
      <p>{errorText}</p>
    </div>
  );
}
