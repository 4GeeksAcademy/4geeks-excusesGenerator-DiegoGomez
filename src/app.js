/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
  let crearExcusa = function() {
    //Sentencias
    let who = ["The dog ", "My grandma ", "His turtle ", "My bird "];
    let action = ["ate ", "peed ", "crushed ", "broke "];
    let what = ["my homework ", "the keys ", "the car "];
    let when = [
      "before the class",
      "right on time",
      "when I finished",
      "during my lunch",
      "while I was praying"
    ];

    //Recorrer con math.floor y randomizar las sentencias según las palabras que tenga cada array (length).
    let IWho = Math.floor(Math.random() * who.length);
    let IAction = Math.floor(Math.random() * action.length);
    let IWhat = Math.floor(Math.random() * what.length);
    let IWhen = Math.floor(Math.random() * when.length);

    //Concatenar sentencias junto a su randomizador
    return (
      who[IWho] + "" + action[IAction] + "" + what[IWhat] + "" + when[IWhen]
    );
  };

  //Llamar a la función
  document.querySelector("#ejecutar").addEventListener("click", () => {
    //Excusa random
    document.querySelector("#excuse").innerHTML = crearExcusa();
  });
};
