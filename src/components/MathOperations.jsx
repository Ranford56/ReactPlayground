import React from "react";
import Button from "./Button";
import PropTypes from "prop-types";

const MathOperations = ({ onClickOperation, onClikcEqual }) => {
  return (
    <section className="math-operations">
      <Button text="+" clickHandler={onClickOperation}></Button>
      <Button text="-" clickHandler={onClickOperation}></Button>
      <Button text="*" clickHandler={onClickOperation}></Button>
      <Button text="/" clickHandler={onClickOperation}></Button>
      <Button text="=" clickHandler={onClikcEqual}></Button>
    </section>
  );
};

MathOperations.propTypes = {
  onClickOperation: PropTypes.func.isRequired,
  onClikcEqual: PropTypes.func.isRequired,
};

export default MathOperations;
