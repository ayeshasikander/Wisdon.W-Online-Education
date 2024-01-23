import React from "react";
import { FaLongArrowAltRight, FaLongArrowAltLeft } from "react-icons/fa";
import styled from "styled-components";

const Intro = () => {
    return (
        <Wrapper>
            <main className="cover-container px-3">
                <h3>WELCOME TO WISDOM.W</h3>
                <h1>Best Online Education Expertise</h1>
                <p className="lead">
                    Cultivate students' global collaboration skills for effective cross-cultural communication in diverse environments.
                </p>
                <div className="buttons">
                    <button className="btn lead1">
                        Get Started Now  <FaLongArrowAltRight />
                    </button>
                    <button className="btn lead2">
                        Get Courses  <FaLongArrowAltRight />
                    </button>
                </div>
            </main>
        </Wrapper>
    );
};

const Wrapper = styled.div`
  position: absolute;
  top: 35%;
  left: 10%;
  display: grid;
  place-items: center;
  color: #faf8f4;
  .cover-container {
    max-width: 35em;
    padding: 1rem;
  }

.btn {
  color: black;
  text-transform: uppercase;
  text-decoration: none;
  margin: 0.4rem;
  padding: 10px 20px;
  font-size: 17px;
  font-weight: bold;
  overflow: hidden;
}
.lead1{
    background-color: blue;
    color: #faf8f4;
}
.lead1:hover{
    background-color: #faf8f4;
    color: blue;
}
.lead2{
    background-color: #faf8f4;
    color: blue;
}

.lead2:hover{
    background-color: #faf8f4;
    color: blue;
}  
`;

export default Intro;
