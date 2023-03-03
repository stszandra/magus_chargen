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
  document.getElementById("alignment-second").insertAdjacentHTML("beforeend", createAlignmentOptions());
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

function addInfoButtonToSelectedClass() {
  if (document.getElementById("class-second").value !== "Choose your class") {
    document.getElementById("class-infoButton").style.visibility = "visible";
  } else if (document.getElementById("class-second").value === "Choose your class") {
    document.getElementById("class-infoButton").style.visibility = "hidden";
  }
}

function showInfoForSelectedClass() {}

function createRaceOptions() {
  document.getElementById("race-second").innerHTML = "";
  let className = document.getElementById("class-second").value;
  let options = `<option>Choose your race</option>`;
  data.racesByClass.forEach((byClass) => {
    if (className === byClass.byClassName) {
      byClass.allowedRaces.forEach((race) => {
        options += `<option>${race}</option>`;
      });
      byClass.allowedRacesByDM.forEach((race) => {
        options += `<option>${race} *</option>`;
      });
    }
  });
  document.getElementById("race-second").insertAdjacentHTML("beforeend", options);
}

function createAlignmentOptions() {
  let options = `<option>Choose your alignment</option>`;
  data.alignments.forEach((alignment) => {
    options += `<option>${alignment.name}</option>`;
  });
  return options;
}
