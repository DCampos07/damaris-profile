import React from 'react';
import { CardHeader } from 'reactstrap';
import dcLogo from "../../assets/dc_logo.png"


const Header = (props) => {
  return (
    <div>
        <CardHeader>Damaris Campos</CardHeader>
        <img src={dcLogo} alt= "Damaris Campos personal logo" className="img-fluid"/>
    </div>
  );
};

export default Header;