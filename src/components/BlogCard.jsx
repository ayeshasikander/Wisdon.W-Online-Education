import React from "react";
import styled from "styled-components";

const BlogCard = ({ item }) => {
    return (
        <Wrapper>
            <div className="card-container">
                <div className="card">
                    <div className="img-content">
                        <img src={item.image} alt="" />
                    </div>
                    <div className="content">
                        <p className="heading">{item.title}</p>
                        <p>
                            {item.desc}
                        </p>
                    </div>
                </div>
            </div>
        </Wrapper>
    );
};

const Wrapper = styled.div`
.card-container {
    width: 300px;
    height: 300px;
    position: relative;
    border-radius: 10px;
  }
  
  .card-container::before {
    content: "";
    z-index: -1;
    position: absolute;
    inset: 0;
    background: linear-gradient(-45deg, #fc00ff 0%, #00dbde 100% );
    transform: translate3d(0, 0, 0) scale(0.95);
    filter: blur(20px);
  }
  
  .card {
    width: 100%;
    height: 100%;
    border-radius: inherit;
    overflow: hidden;
  }
  
  .card .img-content {
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    background: linear-gradient(-45deg, #fc00ff 0%, #00dbde 100% );
    transition: scale 0.6s, rotate 0.6s, filter 1s;
  }
  
  
  .card .content {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 10px;
    color:black;
    padding: 20px 24px;
    line-height: 1.5;
    border-radius: 5px;
    opacity: 0;
    pointer-events: none;
    transform: translateY(50px);
    transition: all 0.6s cubic-bezier(0.23, 1, 0.320, 1);
    p{
      font-size: 18px;
    }
  }
  
  .card .content .heading {
    font-size: 32px;
    font-weight: 700;
  }
  
  .card:hover .content {
    opacity: 1;
    transform: translateY(0);
  }
  
  .card:hover .img-content {
    scale: 2.5;
    rotate: 30deg;
    filter: blur(7px);
  }
  
  .card:hover .img-content svg {
    fill: transparent;
  }
  
`;

export default BlogCard;
