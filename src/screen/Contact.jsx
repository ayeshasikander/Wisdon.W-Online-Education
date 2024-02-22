import React from 'react';
import Map from '../components/Map';
import styled from 'styled-components';
import ContactCard from '../components/ContactCard';
import ContactInfo from '../components/ContactInfo';

const Contact = () => {
  return (
    <Wrapper>
      <h5>CONTACT US</h5>
      <div className='container'>
        <Map />
      </div>
      <div className="main">
        <div className="contact-card">
          <ContactCard />
        </div>
        <div className="contact-info">
          <ContactInfo />
        </div>
      </div>

    </Wrapper>
  )
};

const Wrapper = styled.div`
background-color: #ede8e5;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
h5{
  color: blue;
  font-weight: 700;
}
.container{
  margin:2rem;
  background-color: #FEC513;
  height: 50vh;
  width: 80%;
}
.main{
  margin: 2rem;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #ffffff;
  @media screen and (max-width: 786px) {
    flex-direction: column;
  }
}
`

export default Contact
