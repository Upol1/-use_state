import React from 'react';

const ClickButton = ({ onClick }) => {
  return (
    <button onClick={onClick}>
      Кликни меня
    </button>
  );
};

export default ClickButton;
