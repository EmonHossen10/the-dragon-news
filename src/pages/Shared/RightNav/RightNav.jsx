import React from "react";
import { Button, ListGroup } from "react-bootstrap";
import { FaGoogle, FaGithub,FaFacebookF,FaTwitter,FaInstagram } from "react-icons/fa";
import QZone from "../QZone/QZone";
import bg from '../../../assets/bg.png'
import './RightNav.css'

const RightNav = () => {
  return (
    <div>
      <div className="mt-5">
        <h4 className="mb-3  fw-bold">Login with </h4>
        <Button className="mb-2" variant="outline-primary">
          {" "}
          <FaGoogle /> Login Witg Google
        </Button>
        <Button variant="outline-secondary">
          <FaGithub /> Login With Github
        </Button>
      </div>
      {/* FIND US ON */}
      <div className="mt-5">
        <h4 className="fw-bold">Find Us On</h4>

        <ListGroup>
          <ListGroup.Item> <FaFacebookF /> Facebook</ListGroup.Item>
          <ListGroup.Item> <FaTwitter/> Twitter</ListGroup.Item>
          <ListGroup.Item><FaInstagram/> Instragram </ListGroup.Item>
          
        </ListGroup>
      </div>

      <QZone></QZone>
      <div className="bg-container">
        <img src={bg} alt="" />
        <div className="text-block">
        <h2 className="text-heading">Create an Amazing Newspaper</h2>
        <p className="text-des">Discover thousands of options, easy to customize layouts, one-click to import demo and much more.</p>
       <p className="ps-3"> <button className="btn-1">Learn More</button></p>
        </div>
        
      </div>

    </div>
  );
};

export default RightNav;
