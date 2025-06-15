import React, { useState } from "react";

const initialState = {
  title: "",
  description: "",
  tags: "",
  visibility: "public",
  allowComments: true,
};

const DynamicForm = () => {
  const [form, setForm] = useState(initialState);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Form submitted!\n" + JSON.stringify(form, null, 2));
  };

  return (
    <form
      onSubmit={handleSubmit}
      style={{
        maxWidth: 500,
        margin: "2rem auto",
        padding: 24,
        borderRadius: 8,
        boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
        background: "#fff",
        fontFamily: "Roboto, Arial, sans-serif",
      }}
    >
      <h2 style={{ marginBottom: 24, color: "#cc0000" }}>Upload Video</h2>
      <div style={{ marginBottom: 16 }}>
        <label>
          <strong>Title</strong>
          <input
            type="text"
            name="title"
            value={form.title}
            onChange={handleChange}
            required
            style={{
              width: "100%",
              padding: 8,
              marginTop: 4,
              borderRadius: 4,
              border: "1px solid #ccc",
            }}
            placeholder="Add a title that describes your video"
          />
        </label>
      </div>
      <div style={{ marginBottom: 16 }}>
        <label>
          <strong>Description</strong>
          <textarea
            name="description"
            value={form.description}
            onChange={handleChange}
            rows={4}
            style={{
              width: "100%",
              padding: 8,
              marginTop: 4,
              borderRadius: 4,
              border: "1px solid #ccc",
              resize: "vertical",
            }}
            placeholder="Tell viewers about your video"
          />
        </label>
      </div>
      <div style={{ marginBottom: 16 }}>
        <label>
          <strong>Tags</strong>
          <input
            type="text"
            name="tags"
            value={form.tags}
            onChange={handleChange}
            style={{
              width: "100%",
              padding: 8,
              marginTop: 4,
              borderRadius: 4,
              border: "1px solid #ccc",
            }}
            placeholder="Add tags separated by commas"
          />
        </label>
      </div>
      <div style={{ marginBottom: 16 }}>
        <strong>Visibility</strong>
        <div>
          <label style={{ marginRight: 16 }}>
            <input
              type="radio"
              name="visibility"
              value="public"
              checked={form.visibility === "public"}
              onChange={handleChange}
            />{" "}
            Public
          </label>
          <label style={{ marginRight: 16 }}>
            <input
              type="radio"
              name="visibility"
              value="unlisted"
              checked={form.visibility === "unlisted"}
              onChange={handleChange}
            />{" "}
            Unlisted
          </label>
          <label>
            <input
              type="radio"
              name="visibility"
              value="private"
              checked={form.visibility === "private"}
              onChange={handleChange}
            />{" "}
            Private
          </label>
        </div>
      </div>
      <div style={{ marginBottom: 24 }}>
        <label>
          <input
            type="checkbox"
            name="allowComments"
            checked={form.allowComments}
            onChange={handleChange}
          />{" "}
          Allow comments
        </label>
      </div>
      <button
        type="submit"
        style={{
          background: "#cc0000",
          color: "#fff",
          padding: "10px 24px",
          border: "none",
          borderRadius: 4,
          fontWeight: "bold",
          cursor: "pointer",
        }}
      >
        Save
      </button>
    </form>
  );
};

export default DynamicForm;