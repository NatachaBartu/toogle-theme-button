import React from "react";
import { ThemeContext } from "./ThemeContext";

export class Placeholder extends React.Component {
  render() {
    const theme = this.context;
    return (
      <div
        className={`ui active placeholder ${
          theme === "light" ? "" : "inverted"
        }`}
      >
        <div className="image header">
          <div className="line" />
          <div className="line" />
          <div className="line" />
        </div>
      </div>
    );
  }
}
Placeholder.contextType = ThemeContext;
