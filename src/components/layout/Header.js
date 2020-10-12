import React from "react";
import { Link } from "react-router-dom";
import AuthOptions from "../auth/AuthOptions";

export default function Header() {
  return (
    <header id="header">
      <Link style={{textDecoration: "none"}} to="/">
          <img style={{paddingLeft:"10px",width:"220px"}} src="https://meltwater-apps-production.s3.eu-west-1.amazonaws.com/uploads/images/57303a640aa4ad579f365861/MW%20vector_1601535064323.png" alt="Logo"/>
          <br style={{height: "10px", backgroundColor:"red"}} />
      </Link>
      <AuthOptions />
    </header>
  );
}