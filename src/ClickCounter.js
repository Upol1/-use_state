// src/ClickCounter.js
import React from 'react';
import { CSSTransition } from 'react-transition-group';
import './ClickCounter.css';

const ClickCounter = ({ count }) => {
  return (
    <CSSTransition
      in={true}
      appear={true}
      timeout={300}
      classNames="fade"
      key={count}
    >
      <div>
        <h1>Количество кликов: {count}</h1>
      </div>
    </CSSTransition>
  );
};

export default ClickCounter;