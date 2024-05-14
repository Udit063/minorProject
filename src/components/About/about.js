import React, { useState, useEffect } from "react";
import axios from "axios";
import img from "./icon.png";
import "./about.css";
import { Helmet } from "react-helmet";
import hiya from "../../assets/images/Hiya.jpeg";
import udit from "../../assets/images/udit.jpeg";
import aniket from "../../assets/images/aniket.jpeg";

const AboutUs = () => {
  const users = [
    { name: "Hiya Gupta", profile: hiya },
    { name: "Udit Kapoor", profile: udit },
    { name: "Aniket Kharkia", profile: aniket },
  ];

  return (
    <>
      <Helmet title="Project Zone | About Us" />
      <div className="about_container">
        <div className="title">
          <h1>ABOUT US</h1>
        </div>
        <div className="content">
          <div className="image_section">
            <img className="about-img" src={img} alt="project-logo" />
          </div>
          <div className="article">
            <p className="about-text">
              Project-Zone web-app suggests the user about the projects they can
              create based on their skills. Like if we learn some new tech, We
              always search for beginner level projects in node, intermediate
              level projects in ReactJs, and so on. For this, We have to explore
              a lot on Google and YouTube to get the projects. So, if we have
              all these projects in one place it will be very much easier for a
              beginner to find project ideas! We have the categories from
              beginner to startup level project ideas and we also have an option
              to add new projects. Our app is in its initial stage, We will
              improve it a lot. 🔥
            </p>
          </div>
        </div>
      </div>

      <div className="container">
        <div className="title">
          <h1>Meet the team behind Project Zone</h1>
        </div>
        <div className="contributors_list">
          {users?.map((user, idx) => {
            return (
              <div className="contributor" key={idx}>
                <div className="contributorImage">
                  {/* Using the imported hiya image directly */}
                  <img src={user.profile} alt="contributor-image" />
                </div>
                <div className="username">
                  {/* Linking to the name */}
                  <a href={user.name} target="_blank">
                    {/* Displaying the name */}
                    <h3>{user.name}</h3>
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default AboutUs;
