import React from "react";
import p1 from '../assets/profile.jpg';
import coma from '../assets/coma.png';
import styled from "styled-components";

const Reviews = ({item}) => {
    return (
        <Wrapper>
            <div className="plan">
                <div className="inner">
                    <div className="profile">
                        <img className="set img-fluid" src={item.profileImage} alt="" />
                        <img className="mark" src={coma} alt="" />
                    </div>
                    <div className="name">
                        <h4>{item.name}</h4>
                        <p>{item.passion}</p>
                    </div>
                </div>
                <div className="content">
                    {item.content}
                </div>

            </div>
        </Wrapper>
    );
};

const Wrapper = styled.div`
  .plan {
    padding: 1rem;
    background-color: #ffffff;
    max-width: 350px;
    margin: 1rem;
    box-shadow: 0 0 4px rgba(0, 0, 0, 0.521);
  }
  .plan:hover{
    background-color: #1414fcb9;
    color: #ffffff;
  }
  .inner{
    display: flex;
    gap: 20px;
  }
  .profile{
    position: relative;
  }
  .inner .set{
    height: 70px;
    width: 70px;
    border-radius: 50%;
  }
  .inner .mark{
    height: 30px;
    width: 30px;
    border-radius: 50%;
    position: absolute;
    top: 60%;
    left: 70%;
    
  }
  .name{
    h4{
        text-transform: uppercase;
        font-size: 22px;
        font-weight: 700;
    }
    p{
        text-transform: uppercase;
        color: blue;
        font-weight: 600;
    }
  }
`;
export default Reviews;
