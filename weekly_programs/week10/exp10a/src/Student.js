import React, { Component } from "react";
import Course from "./Course";
import "./Student.css";

class Student extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "Pradeep",
      course: "MERN Stack",
      count: 0,
      isLoggedIn: false, // conditional rendering
      courses: ["React", "Node", "MongoDB"], // list rendering
      form: { name: "", gender: "", subscribe: false } // forms
    };
  }

  // Change course (existing)
  changeCourse = () => {
    this.setState({ course: "React Development" });
  };

  // Counter (existing)
  increase = () => {
    this.setState({ count: this.state.count + 1 });
  };

  // Toggle user login status
  handleLoginToggle = () => {
    this.setState({ isLoggedIn: !this.state.isLoggedIn });
  };

  // Track form input changes dynamically
  handleInputChange = (event) => {
    const { name, value, type, checked } = event.target;
    this.setState((prevState) => ({
      form: {
        ...prevState.form,
        [name]: type === "checkbox" ? checked : value
      }
    }));
  };

  // Handle Form Submission
  handleSubmit = (event) => {
    event.preventDefault();
    console.log("Form Submitted Data:", this.state.form);
    alert(`Submitted Form Name: ${this.state.form.name}`);
  };

  render() {
    return (
      <div className="student">
        <h2>Student: {this.state.name}</h2>

        {/* Passing state as props */}
        <Course courseName={this.state.course} />

        {/* Event buttons */}
        <div style={{ marginBottom: "15px" }}>
          <button onClick={this.changeCourse}>Change Course</button>
          <button onClick={this.increase} style={{ marginLeft: "10px" }}>
            Click Count: {this.state.count}
          </button>
        </div>

        <hr />

        {/* ==================== 1. CONDITIONAL RENDERING ==================== */}
        <div style={{ margin: "15px 0" }}>
          {this.state.isLoggedIn ? (
            <div>
              <h3>Welcome back, User! ✅</h3>
              <button onClick={this.handleLoginToggle}>Logout</button>
            </div>
          ) : (
            <div>
              <h3>Please Log In to see premium data 🔒</h3>
              <button onClick={this.handleLoginToggle}>Login</button>
            </div>
          )}
        </div>

        <hr />

        {/* ==================== 2. LIST RENDERING ==================== */}
        <div style={{ margin: "15px 0" }}>
          <h3>Available Tech Tracks:</h3>
          <ul>
            {this.state.courses.map((c, index) => (
              <li key={index}>{c}</li>
            ))}
          </ul>
        </div>

        <hr />

        {/* ==================== 3. FORM SUBMISSION ==================== */}
        <div style={{ margin: "15px 0" }}>
          <h3>Registration Form</h3>
          <form onSubmit={this.handleSubmit}>
            <div>
              <label>Name: </label>
              <input
                type="text"
                name="name"
                value={this.state.form.name}
                onChange={this.handleInputChange}
              />
            </div>

            <div style={{ marginTop: "10px" }}>
              <label>Gender: </label>
              <input
                type="radio"
                name="gender"
                value="Male"
                checked={this.state.form.gender === "Male"}
                onChange={this.handleInputChange}
              /> Male
              <input
                type="radio"
                name="gender"
                value="Female"
                checked={this.state.form.gender === "Female"}
                onChange={this.handleInputChange}
                style={{ marginLeft: "10px" }}
              /> Female
            </div>

            <div style={{ marginTop: "10px" }}>
              <label>
                <input
                  type="checkbox"
                  name="subscribe"
                  checked={this.state.form.subscribe}
                  onChange={this.handleInputChange}
                /> Subscribe to Updates
              </label>
            </div>

            <button type="submit" style={{ marginTop: "15px" }}>
              Submit Data
            </button>
          </form>
        </div>
      </div>
    );
  }
}

export default Student;