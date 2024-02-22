import React from 'react';
import styled from 'styled-components';
import logo from '../../favicon_io/favicon-32x32.png';
const Footer = () => {
    return (
        <Wrapper>
            <div className="main">
                <div className="footer">
                    <img src={logo} alt="" />
                </div>
            </div>
            <p>Copyright © 2024 - WISDOM. All Rights Reserved.</p>
        </Wrapper>
    )
}

const Wrapper = styled.div`
background-color: blue;
width: 100%;
border-top: 1px solid #000000;
display:flex;
flex-direction: column;
justify-content: center;
align-items: center;
.footer{
    display:flex;
    justify-content: space-evenly;
    margin: 2rem;
}
p{
    width: 90%;
    border-top:1px solid #EDE8E5;
    color:#EDE8E5;
    text-align: center;
    font-size: 14px;
    padding-top: 1rem;
}

`

export default Footer
