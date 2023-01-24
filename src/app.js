/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
  document.getElementById("domain").innerHTML = domainGenerator();
};

function domainGenerator() {
  var pronoun = ["the", "our"];
  var adj = ["great", "big"];
  var noun = ["jogger", "racoon"];

  let i = Math.floor(Math.random() * pronoun.length);
  let j = Math.floor(Math.random() * adj.length);
  let k = Math.floor(Math.random() * noun.length);

  return pronoun[i] + adj[j] + noun[k] + ".com";
}

console.log(domainGenerator);
