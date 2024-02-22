import React from 'react';
import Reviews from '../components/Reviews';
import styled from 'styled-components';
import feedback from './feedback';

const Testimonial = () => {
  return (
    <Wrapper>
      <div className="main">
        <div className="head">
          <h5>TESTIMONIAL</h5>
          <h1>Our Successful Students</h1>
        </div>
        <div className="section">
          {
            feedback.map((item) => (
              <Reviews key={item.id} item={item} />
            ))
          }
        </div>
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.div`
padding: 4rem;
width: 100%;
background-color: #ede8e5;
.head{
    text-align: center;
    h5{
      color: blue;
      font-weight: 700;
    }
}
.section{
  margin-top: 2rem;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
}
@media screen and (min-width: 320px) and (max-width: 1080px) {
    .section{
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}
}
`;

export default Testimonial
