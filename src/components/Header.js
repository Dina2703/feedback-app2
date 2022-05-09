import React from "react";

function Header({ text }) {
  return <div> {text}</div>;
}

Header.defaultProps = {
  text: "Default Text",
};
export default Header;
