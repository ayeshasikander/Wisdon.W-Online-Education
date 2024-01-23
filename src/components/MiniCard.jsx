import React from "react";
import styled from "styled-components";
const MiniCard = ({item}) => {
  return (
    <Wrapper>
      <div className="main">
        <div className="icon">
          <img src={item.iconImage} alt="" />
        </div>
        <div className="detail">
          <h5>{item.title}</h5>
          <p>{item.total}</p>
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  margin: 0.2rem;
  text-align: center;
  .main {
    padding: 1rem;
    box-shadow: 0 0 4px rgba(0, 0, 0, 0.3);
    background-color: #f0f8ff;
    max-width: 200px;
    height: 36vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border: 1px solid blue;
    .icon {
      img {
        margin: 0.2rem;
        width: 100%;
        height: 100%;
        filter: invert(10%) sepia(76%) saturate(7374%) hue-rotate(238deg)
          brightness(87%) contrast(118%);
      }
    }
    .detail {
      h5 {
        margin: 1rem;
      }
      p {
        color: blue;
        border: 1px solid #f0f8ff;
        background-color: #f0f8ff;
        padding: 0.2rem;
      }
    }
  }
  .main:hover {
    background-color: blue;
    color: #f0f8ff;
    .icon {
      img {
        filter: invert(100%) sepia(47%) saturate(6268%) hue-rotate(178deg)
          brightness(109%) contrast(107%);
      }
    }
  }
  @media screen and (min-width: 320px) and (max-width: 1080px) {
    .main {
      max-width: 150px;
      height: 28vh;
    }
  }
`;
export default MiniCard;
