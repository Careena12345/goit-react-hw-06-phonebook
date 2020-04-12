import React, { Component } from "react";
import { connect } from "react-redux";
import phoneActions from "../redux/phonebook/phoneActions";

const container = {
  margin: "25px",
};
const formStyle = {
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-around",
  width: "350px",
  border: "2px solid grey",
  padding: "10px",
  boxShadow: "3px 2px 28px 6px rgba(0,0,0,0.75)",
  fontfamily: "Arial",
};

const labelStyle = {
  fontfamily: "'Open Sans', sans-serif",
};

const inputStyle = {
  border: "1px solid black",
  display: "inline-block",
  height: "34px",
  width: "220px",
  boxSizing: "border-box",
  padding: "0 18px",
  marginBottom: "10px",
};

const buttonStyle = {
  background: "linear-gradient(to bottom, #3d94f6 5%, #1e62d0 100%)",
  backgroundColor: "#3d94f6",
  borderRadius: "6px",
  border: "1px solid #337fed",
  cursor: "pointer",
  color: "#ffffff",
  fontFamily: "Arial",
  fontSize: "16px",
  fontWeight: "bold",
  padding: "9px 76px",
  textDecoration: "none",
  marginTop: "10px",
};

class PhoneBook extends Component {
  state = {
    name: "",
    number: "",
  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.onAddContact(this.state.name, this.state.number);
    this.setState({ name: "", number: "" });
  };

  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState({
      [name]: value,
    });
  };

  render() {
    return (
      <>
        <div style={container}>
          <h1>Phonebook</h1>
          <form onSubmit={this.handleSubmit} style={formStyle}>
            <label style={labelStyle}>
              Name <br />
              <input
                type="text"
                value={this.state.name}
                onChange={this.handleChange}
                name="name"
                style={inputStyle}
              />
            </label>

            <label>
              Phone Number
              <br />
              <input
                type="number"
                value={this.state.number}
                onChange={this.handleChange}
                name="number"
                style={inputStyle}
              />
            </label>
            <button type="submit" style={buttonStyle}>
              {" "}
              Add contact
            </button>
          </form>
        </div>
      </>
    );
  }
}

const mapDispatchToProps = {
  onAddContact: phoneActions.addPhone,
};

export default connect(null, mapDispatchToProps)(PhoneBook);
