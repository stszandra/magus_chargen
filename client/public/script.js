import { data } from "/data.js";

const classSelectElement = document.getElementById("class-second");
const classInfoButton = document.getElementById("class-infoButton");
const raceSelectElement = document.getElementById("race-second");
const raceInfoButton = document.getElementById("race-infoButton");
const alignmentSelectElement = document.getElementById("alignment-second");
const alignmentInfoButton = document.getElementById("alignment-infoButton");

const loadEvent = function () {
  //Info buttons are hidden
  for (const element of document.getElementsByClassName("infoButton")) {
    element.style.visibility = "hidden";
  }

  classSelectElement.insertAdjacentHTML("beforeend", createClassOptions());
  classSelectElement.addEventListener("change", addInfoButtonToSelectedClass);
  classInfoButton.addEventListener("click", showInfoForSelectedClass);

  classSelectElement.addEventListener("change", createRaceOptions);

  raceSelectElement.addEventListener("change", createAlignmentOptions);
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
  if (classSelectElement.value !== "Choose your class") {
    classInfoButton.style.visibility = "visible";
  } else if (classSelectElement.value === "Choose your class") {
    classInfoButton.style.visibility = "hidden";
  }
}
function showInfoForSelectedClass() {}

//Race options:
function createRaceOptions() {
  raceSelectElement.innerHTML = "";
  const chosenClass = classSelectElement.value;
  let options = `<option>Choose your race</option>`;

  data.races.forEach((race) => {
    if (race.allowedByClasses.allowed.includes(chosenClass)) {
      options += `<option>${race.name}</option>`;
    }
    if (race.allowedByClasses.allowedByDM.includes(chosenClass)) {
      options += `<option>${race.name} *</option>`;
    }
  });

  raceSelectElement.insertAdjacentHTML("beforeend", options);
}

function createAlignmentOptions() {
  alignmentSelectElement.innerHTML = "";
  let chosenRace = raceSelectElement.value;
  if (chosenRace.charAt(chosenRace.length - 1) === "*") {
    chosenRace = chosenRace.slice(0, chosenRace.length - 2);
  }
  let options = `<option>Choose your alignment</option>`;

  data.alignments.forEach((alignment) => {
    if (alignment.allowedByRace.includes(chosenRace)) {
      options += `<option>${alignment.name}</option>`;
    }
  });

  alignmentSelectElement.insertAdjacentHTML("beforeend", options);
}
