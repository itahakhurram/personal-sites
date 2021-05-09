import React from "react";
import ReactTypingEffect from 'react-typing-effect';
import styled from "styled-components";

const MyTitleMessage = styled.h1`
  position: absolute;
  width: 100%;
  top: 22rem;
  z-index: 1;
  margin-top: -125px;
  text-align: center;
  strong {
    font-size: 1.25em;
  }
  div {
    color: white;
    text-shadow: 0px 2px 5px rgba(0, 0, 0, 0.4);
    font-weight: 100;
    letter-spacing: 7px;
    .main {
      font-size: 50px;
    }
    .sub {
      font-size: 27px;
      letter-spacing: 2px;
    }
  }
`;

const TitleMessage = () => (
  <MyTitleMessage>
    <div className="titleMessage">
      <div className="heading">
        <div className="main text-center mb-3">
          Hola, I am
          <br />
          <span>
            <strong>Taha Khurram</strong>
          </span>
        </div>
        <div className="sub">
        <ReactTypingEffect
        text={["Student", "Learner","Data-Analyst","Full-Stack Dev"]}
        cursorRenderer={cursor => <h1>{cursor}</h1>}
        displayTextRenderer={(text, i) => {
          return (
            <h1>
              {text.split('').map((char, i) => {
                const key = `${i}`;
                return (
                  <span
                    key={key}
                    style={i%2 === 0 ? { color: 'grey'} : {}}
                  >{char}</span>
                );
              })}
            </h1>
          );
        }}        
      />
        </div>
      </div>
    </div>
  </MyTitleMessage>
);

export default TitleMessage;