export default function InputField({ setup, getter, setter }) {
  const { label, placeholder, required, type } = setup;

  return (
    <div>
      <label>
        {label}
        <input
          onChange={(event) => setter(event.target.value)}
          placeholder={placeholder}
          required={required}
          type={type}
          value={getter}
        />
      </label>
    </div>
  );
}
