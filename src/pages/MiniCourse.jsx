import React from 'react';
import MiniCard from '../components/MiniCard';
import styled from 'styled-components';
import miniData from './onlineCourse';
const MiniCourse = () => {
  return (
    <Wrapper className='Courses'>
      <h5>COURSES</h5>
      <h1>Browse Our Online Courses</h1>
      <div className="section">
        {
          miniData.map((item) => (
            <MiniCard item={item} key={item.id}/>
          ))
        }
        
      </div>

    </Wrapper>
  )
}
const Wrapper = styled.div`
background-color: #ede8e5;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
width: 100%;
padding: 1rem;
h5{
  color: blue;
  font-weight: 700;
}
.section{
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    padding: 2rem;
}
`;
export default MiniCourse
