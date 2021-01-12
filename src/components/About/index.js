import React from 'react';
//import CarouselTab from './components/Carousel';
import profileImage from "../../assets/profile.png";
import { Media, Image } from 'react-bootstrap';



function About() {
  return (
    <Media>
      <Image
        id="photo"
        className="align-self-center mr-3"
        src={profileImage} fluid
        alt="Damaris Campos profile image" />

      <Media.Body>
        <h2 class="section-title">About Me</h2>
        <p>
          I am a newly graduated Full-Stack Web Developer.  I have over 10 years of experience in the luxury retail management industry
          which make my strongest skills communication, organization, problem solving, team-work, and flexbility.  I rely on the use
          of all of those retail skills in my every day developer life. </p>
      </Media.Body>
    </Media>
  );
}

export default About