import React, { useState } from "react";

const inputStyle = {
  width: "100%",
  padding: "12px",
  margin: "8px 0",
  boxSizing: "border-box",
  border: "1px solid #ccc",
  borderRadius: "20px",
  fontSize: "16px",
  outline: "none",
  background: "#222",
  color: "#fff"
};

const buttonStyle = {
  background: "#3ea6ff",
  color: "#fff",
  border: "none",
  borderRadius: "20px",
  padding: "8px 20px",
  margin: "8px 4px",
  cursor: "pointer",
  fontWeight: "bold"
};

const removeButtonStyle = {
  ...buttonStyle,
  background: "#222",
  color: "#aaa",
  border: "1px solid #444"
};

const formStyle = {
  background: "#181818",
  padding: "24px",
  borderRadius: "16px",
  maxWidth: "500px",
  margin: "40px auto",
  boxShadow: "0 2px 8px rgba(0,0,0,0.2)"
};

function DynamicYouTubeForm() {
  const [fields, setFields] = useState([{ value: "" }]);

  const handleChange = (i, event) => {
    const newFields = [...fields];
    newFields[i].value = event.target.value;
    setFields(newFields);
  };

  const handleAdd = () => {
    setFields([...fields, { value: "" }]);
  };

  const handleRemove = (i) => {
    const newFields = [...fields];
    newFields.splice(i, 1);
    setFields(newFields);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Submitted: " + fields.map(f => f.value).join(", "));
  };

  return (
    <form style={formStyle} onSubmit={handleSubmit}>
      <h2 style={{color: "#fff", marginBottom: "16px"}}>Add Comments</h2>
      {fields.map((field, idx) => (
        <div key={idx} style={{display: "flex", alignItems: "center"}}>
          <input
            style={inputStyle}
            type="text"
            value={field.value}
            onChange={e => handleChange(idx, e)}
            placeholder="Add a public comment..."
          />
          {fields.length > 1 && (
            <button
              type="button"
              style={removeButtonStyle}
              onClick={() => handleRemove(idx)}>
            
              ✕
            </button>
          )}
        </div>
      ))}
      <div style={{textAlign: "right"}}>
        <button type="button" style={buttonStyle} onClick={handleAdd}>
          Add Field
        </button>
        <button type="submit" style={buttonStyle}>
          Comment
        </button>
      </div>
    </form>
  );
}

export default DynamicYouTubeForm;
