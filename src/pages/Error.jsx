import React from 'react'
import { Link,useRouteError } from 'react-router-dom'
import img from "../assets/404.svg"
import Wrapper from '../assets/wrappers/PageError';
const Error = () => {
    const error=useRouteError();
    if(error.status===404){
        return (
            <Wrapper>
             <div>
             <img src={img} alt="" />
             <h3>Ohh!</h3>
            <p>We can't seem to find page your looking for</p>
           <Link to="/">Back Home</Link>
        </div>
        </Wrapper>)
    }
  return (
    <Wrapper>
    <div>
        <h3>Error !some thing went wrong</h3>
    </div>
    </Wrapper>
  )
}

export default Error