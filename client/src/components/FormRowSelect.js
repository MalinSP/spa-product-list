const FormRowSelect = ({ labelText, name, value, handleChange, list }) => {
  return (
    <div className='form-row'>
      <label htmlFor={name} className='form-row'>
        {labelText || name}
      </label>
      <select
        id='productType'
        name={name}
        value={value}
        onChange={handleChange}
        className='form-select'
      >
        {list.map((item, index) => {
          return (
            <option key={index} value={item || labelText}>
              {item}
            </option>
          );
        })}
      </select>
    </div>
  );
};

export default FormRowSelect;
