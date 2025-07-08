import React from 'react';
function InputName({ name, onChange }) {
  return (
    <div>
      <label>
        Name:
        <input type="text" placeholder='Enter Your Name Here' value={name} onChange={onChange} />
      </label>
    </div>
  );
}
export default InputName;