import React, { useState } from "react";
import './App.css';

function App() {
  const [formData, setFormData] = useState({
    email: '',
    fullName: '',
    address: '',
    address2: '',
    city: '',
    province: '',
    postalCode: '',
  });

  const [submittedData, setSubmittedData] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmittedData(formData);
  };

  return (
    <div className="container">
      <h2>Data Entry Form</h2>
      <form onSubmit={handleSubmit}>
        <div className="row">
          <div className="input-group">
            <label>Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Enter email"
              required
            />
          </div>
          <div className="input-group">
            <label>Full Name</label>
            <input
              type="text"
              name="fullName"
              value={formData.fullName}
              onChange={handleChange}
              placeholder="Full Name"
              required
            />
          </div>
        </div>
        <div className="input-group">
          <label>Address</label>
          <input
            type="text"
            name="address"
            value={formData.address}
            onChange={handleChange}
            placeholder="1234 Main St"
            required
          />
        </div>
        <div className="input-group">
          <label>Address 2</label>
          <input
            type="text"
            name="address2"
            value={formData.address2}
            onChange={handleChange}
            placeholder="Apartment, studio, or floor"
          />
        </div>
        <div className="row">
          <div className="input-group">
            <label>City</label>
            <input
              type="text"
              name="city"
              value={formData.city}
              onChange={handleChange}
              placeholder="City"
              required
            />
          </div>
          <div className="input-group">
            <label>Province</label>
            <select
              name="province"
              value={formData.province}
              onChange={handleChange}
              required
            >
              <option value="">Choose...</option>
              <option value="Alberta">Alberta</option>
              <option value="British Columbia">British Columbia</option>
              <option value="Manitoba">Manitoba</option>
              <option value="New Brunswick">New Brunswick</option>
              <option value="Newfoundland and Labrador">Newfoundland and Labrador</option>
              <option value="Nova Scotia">Nova Scotia</option>
              <option value="Ontario">Ontario</option>
              <option value="Prince Edward Island">Prince Edward Island</option>
              <option value="Quebec">Quebec</option>
              <option value="Saskatchewan">Saskatchewan</option>
            </select>
          </div>
          <div className="input-group">
            <label>Postal Code</label>
            <input
              type="text"
              name="postalCode"
              value={formData.postalCode}
              onChange={handleChange}
              placeholder="Postal Code"
              required
            />
          </div>
        </div>
        <div className="input-group2">
          <label>
            <input type="checkbox" required /> Agree to Terms & Conditions?
          </label>
        </div>
        <button type="submit" className="submit-button">Submit</button>
      </form>

      {submittedData && (
        <div className="output">
          <h3>Given Information:</h3>
          <p>Email: {submittedData.email}</p>
          <p>Full Name: {submittedData.fullName}</p>
          <p>Address: {submittedData.address}</p>
          <p>City: {submittedData.city}</p>
          <p>Province: {submittedData.province}</p>
          <p>Postal Code: {submittedData.postalCode}</p>
        </div>
      )}
    </div>
  );
}

export default App;

