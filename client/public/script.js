import { data } from "/data.js";

const loadEvent = function () {
  //Info buttons are hidden
  for (const element of document.getElementsByClassName("infoButton")) {
    element.style.visibility = "hidden";
  }
  //Class selection and info button
  document.getElementById("class-second").insertAdjacentHTML("beforeend", createClassOptions());
  document.getElementById("class-second").addEventListener("change", addInfoButtonToSelectedClass);
  document.getElementById("class-infoButton").addEventListener("click", showInfoForSelectedClass);

  //Race selection and info button
  document.getElementById("class-second").addEventListener("change", createRaceOptions);

  //Alignment selection and info button
  document.getElementById("race-second").addEventListener("change", createAlignmentOptions);
};

window.addEventListener("load", loadEvent);

function createClassOptions() {
  let options = `<option>Choose your class</option>`;
  let classNames = data.classes;
  classNames.forEach((className) => {
    options += `
    <option>${className}</option>
    `;
  });
  return options;
}

//Class options:
function addInfoButtonToSelectedClass() {
  if (document.getElementById("class-second").value !== "Choose your class") {
    document.getElementById("class-infoButton").style.visibility = "visible";
  } else if (document.getElementById("class-second").value === "Choose your class") {
    document.getElementById("class-infoButton").style.visibility = "hidden";
  }
}
function showInfoForSelectedClass() {}

//Race options:
function createRaceOptions() {
  document.getElementById("race-second").innerHTML = "";
  const chosenClass = document.getElementById("class-second").value;
  let options = `<option>Choose your race</option>`;

  data.races.forEach((race) => {
    if (race.allowedByClasses.allowed.includes(chosenClass)) {
      options += `<option>${race.name}</option>`;
    }
    if (race.allowedByClasses.allowedByDM.includes(chosenClass)) {
      options += `<option>${race.name} *</option>`;
    }
  });

  document.getElementById("race-second").insertAdjacentHTML("beforeend", options);
}

function createAlignmentOptions() {
  document.getElementById("alignment-second").innerHTML = "";
  let chosenRace = document.getElementById("race-second").value;
  if (chosenRace.charAt(chosenRace.length - 1) === "*") {
    chosenRace = chosenRace.slice(0, chosenRace.length - 2);
  }
  let options = `<option>Choose your alignment</option>`;

  data.alignments.forEach((alignment) => {
    if (alignment.allowedByRace.includes(chosenRace)) {
      options += `<option>${alignment.name}</option>`;
    }
  });

  document.getElementById("alignment-second").insertAdjacentHTML("beforeend", options);
}
