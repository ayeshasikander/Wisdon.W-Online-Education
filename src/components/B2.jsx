import React from "react";
import { FaUserGraduate } from "react-icons/fa";
import { VscWorkspaceTrusted } from "react-icons/vsc";
import { GrSchedules } from "react-icons/gr";
import { FaLaptopCode } from "react-icons/fa6";
import student from "../assets/student.jpg";
import styled from "styled-components";
const B2 = () => {
  return (
    <B2Container>
      <img className="img-fluid" src="https://media.istockphoto.com/id/1213666628/photo/blue-web-banner-with-paint-jars.jpg?s=612x612&w=0&k=20&c=kjOgMXvVui8LTeCj1pamgor3s2V4KJKiLToLFj_34u4=" alt="working" />
      <div className="service">
        <div className="B2set d-flex flex-wrap">
          <div className="col-lg-3 d-flex gap-3">
            <FaUserGraduate className="icon" />
            <div className="detail">
              <h2 className="fw-normal">3,000</h2>
              <h4 className="fw-normal">SUCCESS STORIES</h4>
            </div>
          </div>
          <div className="col-lg-3 d-flex gap-3">
            <VscWorkspaceTrusted className="icon" />
            <div className="detail">
              <h2 className="fw-normal">320</h2>
              <h4 className="fw-normal">TRUSTED TUTORS</h4>
            </div>
          </div>
          <div className="col-lg-3 d-flex gap-3">
            <GrSchedules className="icon" />
            <div className="detail">
              <h2 className="fw-normal">1,000</h2>
              <h4 className="fw-normal">SCHEDULE</h4>
            </div>
          </div>
          <div className="col-lg-3 d-flex gap-3">
            <FaLaptopCode className="icon" />
            <div className="detail">
              <h2 className="fw-normal">587</h2>
              <h4 className="fw-normal">COURSES</h4>
            </div>
          </div>
        </div>
      </div>
    </B2Container>
  );
};

const B2Container = styled.div`
  position: relative;
  height: 100%;
  width: 100%;
  img {
    height: 35vh;
    width: 100%;
  }
  @media screen and (min-width: 320px) and (max-width: 1080px) {
    img {
      height: 60vh;
      width: 100%;
    }
    .service {
      gap: 5px;
      padding: 3rem;
      width: 100%;
      position: absolute;
      top: 0;
      left: 0;
    }
    .B2set{
    width: 100%;
    .col-lg-3{
      margin: .5rem;
      .detail {
        color: white;
        h2 {
          font-size: 1.5rem;
          font-weight: 500;
          font-family: "Climate Crisis", sans-serif;
        }
        h4 {
          font-size: 1rem;
        }
      }
    }
    }
  }

  .B2set{
    width: 100%;
    padding: 2rem;
  }

  .service {
    padding: 3rem;
    width: 100%;
    position: absolute;
    top: 0;
    left: 0;
  }

  .icon {
    color: white;
    font-size: 4rem;
  }

  .detail {
    color: white;
    h2 {
      font-size: 2rem;
      font-weight: 500;
      font-family: "Climate Crisis", sans-serif;
    }
    h4 {
      font-size: 1.5rem;
      font-weight: 600;
    }
  }
`;
export default B2;
