import React from "react";
import { MdOutlineMenuBook } from "react-icons/md";
import { TbCertificate } from "react-icons/tb";
import { GrUserExpert } from "react-icons/gr";
import portrait from "../assets/girl.jpg";
import styled from "styled-components";
import B2 from "./B2";
const Benefits = () => {
    return (
        <Wrapper>
            <div className="container px-4 py-5" id="icon-grid">
                <div className="head d-flex justify-content-between border-bottom border-black">
                    <h2 className="pb-2">Benefits About Online Learning Expertise</h2>
                    <p className="pt-4 fw-bold ">Learn Anything</p>
                </div>

                <div className="d-md-flex flex-md-equal w-100 my-md-3 ps-md-3">
                    <div className="d-flex justify-content-center align-items-center me-md-3  overflow-hidden">
                        <div className="p-2">
                            <img className="img-fluid" src={portrait} alt="" />
                        </div>
                    </div>
                    <div className=" me-md-3  overflow-hidden">
                        <div className="col d-flex align-items-start">
                            <MdOutlineMenuBook className="icon" />
                            <div>
                                <h3 className="fw-bold mb-0 fs-4">Online Courses</h3>
                                <p>
                                    Paragraph of text beneath the heading to explain the heading.
                                </p>
                            </div>
                        </div>
                        <div className="col d-flex align-items-start">
                            <TbCertificate className="icon" />
                            <div>
                                <h3 className="fw-bold mb-0 fs-4">Earn a Certificate</h3>
                                <p>
                                    Paragraph of text beneath the heading to explain the heading.
                                </p>
                            </div>
                        </div>
                        <div className="col d-flex align-items-start">
                            <GrUserExpert className="icon" />
                            <div>
                                <h3 className="fw-bold mb-0 fs-4">Learn with Expertise</h3>
                                <p>
                                    Paragraph of text beneath the heading to explain the heading.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <B2 />
        </Wrapper>
    );
};

const Wrapper = styled.div`
background-color: #d3c7bf68;
  .col {
    box-shadow: 0 0 4px rgba(0, 0, 0, 0.3);
    gap: 10px;
    margin: 1rem;
    padding: 0.5rem;
    cursor: pointer;
    background-color: #ffffff;
  }
  .col:hover {
    background-color: blue;
    color: #faf8f4;
  }
  .icon{
    font-size: 3rem;
  }
`;

export default Benefits;
