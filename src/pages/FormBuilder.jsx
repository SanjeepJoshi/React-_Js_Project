import React, { useState } from "react";

const FormBuilder = () => {
  const [formFields, setFormFields] = useState([]);
  const [previewMode, setPreviewMode] = useState(false);

  const addField = (type) => {
    const newField =
      type === "radio"
        ? {
            id: Date.now(),
            type: "radio",
            label: `Radio Field ${formFields.length + 1}`,
            options: [
              { id: "option1", label: "Option 1", value: "option1" },
              { id: "option2", label: "Option 2", value: "option2" },
            ],
            value: "",
          }
        : {
            id: Date.now(),
            type: "text",
            label: `Text Field ${formFields.length + 1}`,
          };

    setFormFields((prevFields) => [...prevFields, newField]);
  };

  const removeField = (id) => {
    setFormFields((prevFields) =>
      prevFields.filter((field) => field.id !== id)
    );
  };

  const renderFields = () =>
    formFields.map((field) => (
      <div key={field.id} className="form-field">
        <label>{field.label}</label>

        {field.type === "text" && (
          <input type="text" placeholder={field.label} />
        )}

        {field.type === "radio" && (
          <div>
            {field.options.map((option) => (
              <div key={option.id}>
                <input
                  type="radio"
                  name={`radio-${field.id}`}
                  value={option.value}
                />
                <label>{option.label}</label>
              </div>
            ))}
          </div>
        )}

        {!previewMode && (
          <button onClick={() => removeField(field.id)}>Remove</button>
        )}
      </div>
    ));

  return (
    <div className="form-builder">
      <h1>Simple Form Builder</h1>

      {!previewMode && (
        <>
          <button onClick={() => addField("text")}>Add Text Field</button>
          <button onClick={() => addField("radio")}>Add Radio Field</button>
        </>
      )}

      <button onClick={() => setPreviewMode(!previewMode)}>
        {previewMode ? "Edit Mode" : "Preview Mode"}
      </button>

      <div className="form-container">{renderFields()}</div>
    </div>
  );
};

export default FormBuilder;
