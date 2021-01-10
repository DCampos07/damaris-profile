import React from 'react';
//import CarouselTab from './components/Carousel';
import profileImage from "../../assets/profile.png";
import { Media } from 'reactstrap';

function About() {
  return (
    
    <Media>
      <img
        width={200}
        height={200}
        className="mr-3"
        src={profileImage}
        alt="Damaris Campos profile image" 
        className="img-fluid" />
      <Media.Body>
        <h5>About ME</h5>
        <p>
          I am a newly graduated Full-Stack Web Developer.  I have over 10 years of experience in the luxury retail management 
          which make my strongest skills communication, organization, problem solving, team-work, and flexbility.  I rely on the use
          of all of those retail skills in my every day Developer life.
      </p>
      </Media.Body>
    </Media>
  )
}

export default About