//Create a react app from scratch.
import React from "react";
import Reactdom from "react-dom";
//It should display 2 paragraph HTML elements.

const name = "titus";
const currentDate = new Date();
const year = currentDate.getFullYear();
Reactdom.render(
  <div>
    <p>Created By {name}</p>
    <p>Copyright &copy;{year}</p>
  </div>,
  document.getElementById("root")
);
//The paragraphs should say:
//Created by YOURNAME.
//Copyright CURRENTYEAR.
//E.g.
//Created by Angela Yu.
//Copyright 2019.
