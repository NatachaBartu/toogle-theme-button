import React from "react";
import { Content } from "./Content";
import { ThemeContext } from "./ThemeContext";

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.toogleTheme = this.toogleTheme.bind(this);
    this.state = { theme: "light" };
  }

  toogleTheme() {
    if (this.state.theme === "light") {
      this.setState({ theme: "dark" });
    } else {
      this.setState({ theme: "light" });
    }
  }

  render() {
    return (
      <ThemeContext.Provider value={this.state.theme}>
        <div className="ui container">
          <button onClick={this.toogleTheme}>Toogle Theme</button>
          <Content />
        </div>
      </ThemeContext.Provider>
    );
  }
}
