import React from "react";
import styled from "styled-components";
import Intro from '../components/Intro';
const BackgroundVed = () => {
  return (
      <Back className="background">
        <img
          src="https://img.freepik.com/premium-photo/portrait-happy-young-bearded-man-casual-holding-laptop-computer-while-sitting-floor-isolated-yellow-background_255757-7818.jpg"
          alt=""
        />
        <Intro />
      </Back>

  );
};


const Back = styled.div`
  width: 100%;
  height: 100vh;
 
  img {
    position: absolute;
    top: 0;
    z-index: -1;
    width: 100%;
    height: 100vh;
    transform: scaleX(-1);
  }
`;

export default BackgroundVed;
