import React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import phoneActions from "../redux/phonebook/phoneActions";

const container = {
  margin: "25px",
  boxShadow: "3px 2px 28px 6px rgba(0,0,0,0.75)",
  width: "370px",
};

const itemStyle = {
  listStyle: "none",
  padding: "5px",
};

const removeStyle = {
  display: "inline-block",
  cursor: "pointer",
  width: "20%",
  fontSize: "16px",
  fontWeight: "600",
  padding: "0",
  border: "none",
  outline: "none",
  borderRadius: "5px",
  color: "#d1d1d9",
  background:
    "linear-gradient(rgb(61, 148, 246) 5%, rgb(30, 98, 208) 100%) rgb(61, 148, 246)",
  textDecoration: "none",
  textShadow: "0 -1px 2px #00000033",
  boxShadow:
    "0 1px #ffffff33 inset, 0 3px 5px #00010680, 0 0 1px 1px #00010633",
  transition: "0.2s ease-in-out",
};

const ContactList = ({ contacts, onRemoveContact }) => (
  <>
    <div style={container}>
      <ul>
        {contacts.map((contact) => (
          <li key={contact.id} style={itemStyle}>
            <p>
              {contact.name} : {contact.number}
            </p>
            <button
              style={removeStyle}
              type="submit"
              onClick={() => onRemoveContact(contact.id)}
            >
              Remove
            </button>
          </li>
        ))}
      </ul>
    </div>
  </>
);

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ).isRequired,
  onRemoveContact: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => {
  const { contacts, filter } = state;
  const visibleContacts = contacts.filter((contact) =>
    contact.name.toLowerCase().includes(filter.toLocaleLowerCase())
  );

  return {
    contacts: visibleContacts,
  };
};

const mapDispatchToProps = {
  onRemoveContact: phoneActions.removePhone,
};

export default connect(mapStateToProps, mapDispatchToProps)(ContactList);
