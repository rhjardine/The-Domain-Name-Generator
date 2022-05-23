/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./img/rigo-baby.jpg";
import "./img/4geeks.ico";

window.onload = function() {
  
  let pronouns = ["the", "our"];
  let adjectives = ["great", "big"];
  let nouns = ["jogger", "racoon"];
  let extensions = [".com", ".net", ".us", ".io"];
  for (let adjective of adjectives) {
    for (let pronoun of pronouns) {
      for (let noun of nouns) {
        for (let extension of extensions) {
          console.log(pronoun + adjective + noun + extension);
        }
      }
    }
  }
};