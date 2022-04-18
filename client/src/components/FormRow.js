const FormRow = ({ type, name, value, handleChange }) => {
  return (
    <div className='form-row'>
      <label htmlFor={name} className='form-label'>
        {name === "sku"
          ? name.toUpperCase()
          : name === "price"
          ? name + " ($)"
          : name === "size"
          ? name + " (MB)"
          : name === "weight"
          ? name + " (KG)"
          : name === "height" || name === "width" || name === "length"
          ? name + " (СМ)"
          : name}
      </label>

      <input
        id={name}
        type={type}
        value={value}
        name={name}
        onChange={handleChange}
        className='form-input'
        autoComplete='off'
        placeholder={`#${name}`}
      />
    </div>
  );
};

export default FormRow;
