import React from "react";
import { FaFacebookF, FaTwitter, FaYoutube } from "react-icons/fa";
import { BsInstagram } from "react-icons/bs";
import styled from "styled-components";

const Header = () => {
    return (
        <HeaderContainer className="container">
            <header className="d-flex flex-wrap justify-content-center pt-3">
                <a
                    href="/"
                    className=" align-items-center  me-md-auto text-dark text-decoration-none"
                >
                    <span className="logo fs-4">Wisdom .W</span>
                    <p className="para">online education & learning</p>
                </a>

                <ul className="nav nav-pills">
                    <li className="nav-item">
                        <a href="/" className="nav-link">
                            <FaFacebookF />
                        </a>
                    </li>
                    <li className="nav-item">
                        <a href="/" className="nav-link">
                            <BsInstagram />
                        </a>
                    </li>
                    <li className="nav-item">
                        <a href="/" className="nav-link">
                            <FaTwitter />
                        </a>
                    </li>
                    <li className="nav-item">
                        <a href="/" className="nav-link">
                            <FaYoutube />
                        </a>
                    </li>
                </ul>
            </header>
        </HeaderContainer>
    );
};

const HeaderContainer = styled.div`
position: absolute;
top: 0;
left: 8%;
@media screen and (min-width: 320px) and (max-width: 1080px) {
    top: 0;
    left: 0;
}
  .nav-link {
    font-size: 1rem;
    background-color: #e2be85;
    color: blue;
    border-radius: 50%;
    margin: 5px;
    padding: 10px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .nav-link:hover {
    background-color: #faf8f4;
  }

  .logo {
    color: blue;
    font-size: 20px;
    font-weight: 400;
    font-family: "Climate Crisis", sans-serif;
  }
  .para {
    text-transform: uppercase;
    color: #faf8f4;
    font-weight: 600;
  }
`;

export default Header;
