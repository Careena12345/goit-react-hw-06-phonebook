import React, { Component } from "react";
import { connect } from "react-redux";
import PhoneBook from "./components/PhoneBook";
import ContactList from "./components/ContactList";
import Filter from "./components/Filter";
import Layout from "./components/Layout";
import ThemeContext from "./context/ThemeContext";
import { themeConfig } from "./context/ThemeContext";

class App extends Component {
  state = {
    theme: "light",
  };

  changeTheme = () => {
    this.setState((state) => ({
      theme: state.theme === "light" ? "dark" : "light",
    }));
  };

  render() {
    return (
      <ThemeContext.Provider
        value={{
          theme: this.state.theme,
          config: themeConfig[this.state.theme],
          onThemeChange: this.changeTheme,
        }}
      >
        <Layout>
          <PhoneBook />
          {this.props.contacts.length > 0 && <Filter />}

          <ContactList />
        </Layout>
      </ThemeContext.Provider>
    );
  }
}

const mapStateToProps = (state) => ({
  contacts: state.contacts,
});

export default connect(mapStateToProps)(App);
