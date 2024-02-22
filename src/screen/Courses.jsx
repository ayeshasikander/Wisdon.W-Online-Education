import React from "react";
import Cards from "../components/Cards";
import data from "./cardData";
import styled from "styled-components";
const Courses = () => {
  return (
    <Wrapper>
      <h5>OUR COURSES</h5>
      <h1>Explore Our Popular Online Courses</h1>
      <div className="course">
        {
          data.map((item) => (
            <div key={item.id}>
              <Cards item={item} />
            </div>
          ))
        }
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  padding: 2rem;
  background-color: #ede8e5;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  h5 {
    color: blue;
    font-weight: 700;
  }
  h1 {
    margin-bottom: 3.5rem;
  }
  .course {
    display: flex;
    flex-wrap: nowrap;
  }
  @media screen and (min-width: 320px) and (max-width: 1080px) {
    .course {
    display: flex;
    flex-direction: column;
  }
    h1 {
      font-size: 20px;
    }
  }
`;

export default Courses;
