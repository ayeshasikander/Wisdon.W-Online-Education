import React from 'react';
import styled from 'styled-components';
const Navbar = () => {
    return (
        <Wrapper>
            <nav
                className="navbar navbar-expand-sm"
                aria-label="Third navbar example"
            >
                <div className="container-fluid">
                    {/* <a className="navbar-brand" href="/">Home</a> */}
                    <button
                        className="navbar-toggler"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#navbarsExample03"
                        aria-controls="navbarsExample03"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse" id="navbarsExample03">
                        <ul className="navbar-nav me-auto mb-2 mb-sm-0">
                            <li className="nav-item">
                                <a className="nav-link" aria-current="page" href="/">Home</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/">All Courses</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/">About</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/">Team</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/">Pricing</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/">Journal</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href='/'>Contact</a>
                            </li>

                        </ul>


                        <a className="shape nav-link1" href='/'>Get Certificate</a>

                    </div>
                </div>
            </nav>

        </Wrapper>
    )
};

const Wrapper = styled.div`
position: absolute;
top: 13%;
width: 100%;
@media screen and (max-width: 450px){
    top: 18%;
}
.navbar{
    background-color: #f5f5f53d;
    margin: 0 3rem 0 3rem;
    
}
.nav-link{
    color: #faf8f4;
    font-size: 18px;
    font-weight: 500;
}
.nav-link1{
    color: #faf8f4;
    font-size: 18px;
    font-weight: 500;
    text-decoration: none;
}
.nav-link:hover{
    color: blue;
}
.shape{
    background-color: blue;
    padding: 10px 60px;
    clip-path: polygon(10% 0,100% 0,100% 100%,0 100%);

}



`;
export default Navbar
