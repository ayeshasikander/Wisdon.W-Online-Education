import React from 'react';
import { IoIosMail } from "react-icons/io";
import { FaPhoneVolume } from "react-icons/fa6";
import { MdLocationPin } from "react-icons/md";
import { IoIosTime } from "react-icons/io";
import styled from 'styled-components';
const ContactInfo = () => {
    return (
        <Container>
            <h3>Contact Info</h3>
            <p>Feel free to contact us</p>
            <div className="detail">
                <div className="info">
                    <IoIosMail />
                    <span>2Nn9f@example.com</span>
                </div>
                <div className="info">
                    <FaPhoneVolume />
                    <span>+00 000000000</span>
                </div>
                <div className="info">
                    <MdLocationPin />
                    <span>Chittagong, Bangladesh</span>
                </div>
                <div className="info">
                    <IoIosTime />
                    <span>Mon - Fri: 9:00 - 17:00</span>
                </div>

            </div>
        </Container>
    )
}
const Container = styled.div`
width: 350px;
height: 400px;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
h3{
    margin:1rem;
}
p{
    color:blue;
    font-weight:500;
}
.detail{
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    gap: 12px;
    .info{
        font-size: 16px;
        span{
            margin-left: 10px;    
        }
    }
}
`

export default ContactInfo
