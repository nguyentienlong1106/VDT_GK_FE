import React, { useState } from "react";
import "./EditorBox.css";

// @ts-ignore
export const EditorBox = ({ closeBox, onSubmit, defaultValue }) => {
  const [formState, setFormState] = useState(
    defaultValue || {
      name: "",
      sex: "Nam",
      university: "",
    }
  );

  const validateForm = () => {
    if (formState.name && formState.sex && formState.university) {
      return true;
    } else {
      return false;
    }
  };

  const handleChange = (e: { target: { name: any; value: any } }) => {
    setFormState({
      ...formState,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: { preventDefault: () => void }) => {
    e.preventDefault();

    if (!validateForm()) return;

    console.log(formState);
    onSubmit(formState);
    closeBox();
  };

  return (
    <div
      className="box-container"
      onClick={(e) => {
        const target = e.target as HTMLTextAreaElement;
        if (target.className === "box-container") closeBox();
      }}
    >
      <div className="box">
        <form>
          <div className="form-group">
            <label htmlFor="name">Họ và tên</label>
            <input
              name={"name"}
              value={formState.name}
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="sex">Giới tính</label>
            <select name="sex" value={formState.sex} onChange={handleChange}>
              <option value="Nam">Nam</option>
              <option value="Nữ">Nữ</option>
            </select>
          </div>
          <div className="form-group">
            <label htmlFor="university">Trường đang theo học</label>
            <input
              name={"university"}
              value={formState.university}
              onChange={handleChange}
            />
          </div>
          <button type="submit" className="btn" onClick={handleSubmit}>
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};
