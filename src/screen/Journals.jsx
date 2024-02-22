import React from 'react';
import BlogCard from '../components/BlogCard';
import styled from 'styled-components';
import blogData from './blogData';
const Journals = () => {
  return (
    <Wrapper className='journals'>
      <h5>OUR JOURNALS</h5>
      <div className="blog">
        {
          blogData.map((item) => (
            <BlogCard item={item} key={item.id} />
          ))
        }
      </div>
      <button><a href="/">View All</a></button>
      
      
    </Wrapper>
  )
}
const Wrapper = styled.div`
width:100%;
background-color: #ede8e5;
display:flex;
flex-direction:column;
justify-content:center;
align-items:center;

h5 {
  color: blue;
  font-weight: 700;
}
.blog{
  margin:2rem;
  display:flex;
  gap:2rem;

}
button{
  margin:2rem;
  padding:0.5rem;
  width:12vw;
  background-color:blue;
  border:2px solid #FFC313;
  a{
    color:white;
    text-decoration:none;
  }
}
@media screen and (max-width: 786px) {
  .blog{
    flex-direction:column;
  }
  button{
    width:20vw;
  }
}
`

export default Journals
