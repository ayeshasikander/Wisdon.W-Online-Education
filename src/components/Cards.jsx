import React from "react";
import { IoMdStar } from "react-icons/io";
import { TbLetterW } from "react-icons/tb";
import styled from "styled-components";

const Cards = ({item}) => {
    return (
        <Wrapper>
            <div className="plan" key={item.id}>
                <div className="inner">
                    <TbLetterW className="mark" />
                    <p className="title">{item.title}</p>
                    <p className="info">
                        {item.info}
                    </p>
                    <ul className="features">
                        <li>
                            <span className="icon">
                                <svg
                                    height="24"
                                    width="24"
                                    viewBox="0 0 24 24"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path d="M0 0h24v24H0z" fill="none"></path>
                                    <path
                                        fill="currentColor"
                                        d="M10 15.172l9.192-9.193 1.415 1.414L10 18l-6.364-6.364 1.414-1.414z"
                                    ></path>
                                </svg>
                            </span>
                            <span>
                                <strong>{item.teamMembers}</strong> team members
                            </span>
                        </li>
                        <li>
                            <span className="icon">
                                <svg
                                    height="24"
                                    width="24"
                                    viewBox="0 0 24 24"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path d="M0 0h24v24H0z" fill="none"></path>
                                    <path
                                        fill="currentColor"
                                        d="M10 15.172l9.192-9.193 1.415 1.414L10 18l-6.364-6.364 1.414-1.414z"
                                    ></path>
                                </svg>
                            </span>
                            <span>
                                Plan <strong>team meetings</strong>
                            </span>
                        </li>
                        <li>
                            <span className="icon">
                                <svg
                                    height="24"
                                    width="24"
                                    viewBox="0 0 24 24"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path d="M0 0h24v24H0z" fill="none"></path>
                                    <path
                                        fill="currentColor"
                                        d="M10 15.172l9.192-9.193 1.415 1.414L10 18l-6.364-6.364 1.414-1.414z"
                                    ></path>
                                </svg>
                            </span>
                            <span>{item.hourLecture}</span>
                        </li>
                        <li className="stars">
                            <IoMdStar />
                            <IoMdStar />
                            <IoMdStar />
                            <IoMdStar />
                            <IoMdStar />
                            <span>(5.0)</span>
                        </li>
                    </ul>
                    <div className="action">
                        <a className="button" href="/">
                            ENROLL NOW!
                        </a>
                    </div>
                </div>
            </div>
        </Wrapper>
    );
};

const Wrapper = styled.div`
  .plan {
    border-radius: 2px;
    box-shadow: 0 30px 30px -25px rgba(0, 38, 255, 0.205);
    padding: 5px;
    background-color: #fec62b86;
    max-width: 350px;
    margin: 1rem;
  }
  .mark {
    color: #fec62b;
    position: absolute;
    top: 9%;
    left: 40%;
    font-size: 2rem;
  }
  .mark:hover {
    color: blue;
  }
  @media screen and (min-width: 320px) and (max-width: 1080px) {
    .mark {
      color: #fec62b;
      position: absolute;
      top: 9%;
      left: 50%;
      font-size: 2rem;
    }
  }
  .plan strong {
    font-weight: 600;
    color: #1546b1;
  }

  .plan .inner {
    align-items: center;
    padding: 20px;
    padding-top: 40px;
    background-color: #ffffff;
    position: relative;
    box-shadow: 0 0 0 1px rgba(0, 0, 0, 0.651);
  }
  .inner:hover {
    background-color: #dbd5d2ef;
  }

  .stars {
    color: #fec62b;
    font-size: 1.5rem;
  }
  .plan .pricing small {
    color: #707a91;
    font-size: 0.75em;
    margin-left: 0.25em;
  }

  .plan .title {
    font-weight: 600;
    font-size: 1.25rem;
    color: #033e97;
  }

  .plan .info {
    color: #000000;
    font-size: 20px;
  }
  .plan .features {
    display: flex;
    flex-direction: column;
  }

  .plan .features li {
    display: flex;
    align-items: center;
    gap: 0.5rem;
  }

  .plan .features li + * {
    margin-top: 0.75rem;
  }

  .plan .features .icon {
    background-color: #fec62b;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    color: #fff;
    border-radius: 50%;
    width: 20px;
    height: 20px;
  }

  .plan .features .icon svg {
    width: 14px;
    height: 14px;
  }

  .plan .features + * {
    margin-top: 1.25rem;
  }

  .plan .action {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: end;
    border: 2px solid blue;
  }
  .action:hover {
    border: none;
  }
  .plan .button {
    background-color: transparent;
    color: blue;
    font-weight: 500;
    font-size: 1.125rem;
    text-align: center;
    border: 0;
    outline: 0;
    width: 100%;
    padding: 0.625em 0.75em;
    text-decoration: none;
  }

  .plan .button:hover,
  .plan .button:focus {
    background-color: blue;
    color: #fff;
  }
`;

export default Cards;
