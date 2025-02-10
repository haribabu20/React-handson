import { useState } from "react";

const FormValidation = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    gender: "",
    skills: [],
    country: "",
    bio: "",
    dob: "",
    profilePic: null,
  });

  const [errors, setErrors] = useState({});
  const [successMessage, setSuccessMessage] = useState("");

  const validateForm = () => {
    let newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = "Name is required!";
    }
    if (!formData.email.trim()) {
      newErrors.email = "Email is required!";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Enter a valid email!";
    }
    if (formData.password.length < 6) {
      newErrors.password = "Password must be at least 6 characters!";
    }
    if (!formData.gender) {
      newErrors.gender = "Please select your gender!";
    }
    if (formData.skills.length === 0) {
      newErrors.skills = "Select at least one skill!";
    }
    if (!formData.country) {
      newErrors.country = "Select a country!";
    }
    if (!formData.dob) {
      newErrors.dob = "Please enter your date of birth!";
    }
    if (!formData.profilePic) {
      newErrors.profilePic = "Please upload a profile picture!";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    if (type === "checkbox") {
      setFormData((prev) => ({
        ...prev,
        skills: checked
          ? [...prev.skills, value]
          : prev.skills.filter((skill) => skill !== value),
      }));
    } else if (type === "file") {
      setFormData((prev) => ({
        ...prev,
        profilePic: e.target.files[0],
      }));
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
    }

    setErrors((prev) => ({ ...prev, [name]: "" })); // Clear error when user types
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSuccessMessage("");

    if (validateForm()) {
      setSuccessMessage("Form submitted successfully! 🎉");
      console.log("Form Data:", formData);
      setFormData({
        name: "",
        email: "",
        password: "",
        gender: "",
        skills: [],
        country: "",
        bio: "",
        dob: "",
        profilePic: null,
      });
    }
  };

  return (
    <div>
      <h2>Complete Registration Form</h2>
      {successMessage && <p style={{ color: "green" }}>{successMessage}</p>}
      
      <form onSubmit={handleSubmit}>
        <div>
          <label>Name:</label>
          <input type="text" name="name" value={formData.name} onChange={handleChange} />
          {errors.name && <p style={{ color: "red" }}>{errors.name}</p>}
        </div>

        <div>
          <label>Email:</label>
          <input type="email" name="email" value={formData.email} onChange={handleChange} />
          {errors.email && <p style={{ color: "red" }}>{errors.email}</p>}
        </div>

        <div>
          <label>Password:</label>
          <input type="password" name="password" value={formData.password} onChange={handleChange} />
          {errors.password && <p style={{ color: "red" }}>{errors.password}</p>}
        </div>

        <div>
          <label>Gender:</label>
          <input type="radio" name="gender" value="Male" checked={formData.gender === "Male"} onChange={handleChange} /> Male
          <input type="radio" name="gender" value="Female" checked={formData.gender === "Female"} onChange={handleChange} /> Female
          {errors.gender && <p style={{ color: "red" }}>{errors.gender}</p>}
        </div>

        <div>
          <label>Skills:</label>
          <input type="checkbox" name="skills" value="React" onChange={handleChange} checked={formData.skills.includes("React")} /> React
          <input type="checkbox" name="skills" value="Node.js" onChange={handleChange} checked={formData.skills.includes("Node.js")} /> Node.js
          <input type="checkbox" name="skills" value="JavaScript" onChange={handleChange} checked={formData.skills.includes("JavaScript")} /> JavaScript
          {errors.skills && <p style={{ color: "red" }}>{errors.skills}</p>}
        </div>

        <div>
          <label>Country:</label>
          <select name="country" value={formData.country} onChange={handleChange}>
            <option value="">Select Country</option>
            <option value="India">India</option>
            <option value="USA">USA</option>
            <option value="UK">UK</option>
          </select>
          {errors.country && <p style={{ color: "red" }}>{errors.country}</p>}
        </div>

        <div>
          <label>Bio:</label>
          <textarea name="bio" value={formData.bio} onChange={handleChange}></textarea>
        </div>

        <div>
          <label>Date of Birth:</label>
          <input type="date" name="dob" value={formData.dob} onChange={handleChange} />
          {errors.dob && <p style={{ color: "red" }}>{errors.dob}</p>}
        </div>

        <div>
          <label>Profile Picture:</label>
          <input type="file" name="profilePic" onChange={handleChange} />
          {errors.profilePic && <p style={{ color: "red" }}>{errors.profilePic}</p>}
        </div>

        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default FormValidation;
