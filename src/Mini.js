import PropTypes from "prop-types";
import React from "react";
function Mini({ name, color, age, children }) {
  console.log(children);
  console.log(name);
  console.log(color);
  return (
    <div style={{ color: color }}>
      안녕하세요 {name} {age}
    </div>
  );
}

Mini.defaultProps = {
  name: "없음",
  color: "black",
};

Mini.propTypes = {
  age: PropTypes.number.isRequired,
};

export default React.memo(Mini);
