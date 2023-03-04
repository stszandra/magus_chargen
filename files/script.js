let classSelectElement;
let classInfoButton;
let raceSelectElement;
let raceInfoButton;
let alignmentSelectElement;
let alignmentInfoButton;

window.addEventListener("load", loadEvent);

function loadEvent() {
  classSelectElement = document.getElementById("class-second");
  classInfoButton = document.getElementById("class-infoButton");
  raceSelectElement = document.getElementById("race-second");
  raceInfoButton = document.getElementById("race-infoButton");
  alignmentSelectElement = document.getElementById("alignment-second");
  alignmentInfoButton = document.getElementById("alignment-infoButton");

  //All info buttons are disabled
  for (const element of document.getElementsByClassName("infoButton")) {
    element.disabled = true;
  }
  //Class
  classSelectElement.insertAdjacentHTML("beforeend", createClassOptions());
  classSelectElement.addEventListener("change", function (event) {
    toggleInfoButton(event, classInfoButton);
  });
  showInfoForSelectedClass();
  //$(document).ready(showInfoForSelectedClass);
  //classInfoButton.addEventListener("click", showInfoForSelectedClass);
  //Race
  classSelectElement.addEventListener("change", createRaceOptions);
  classSelectElement.addEventListener("change", function (event) {
    toggleInfoButton(event, raceInfoButton);
  });
  raceSelectElement.addEventListener("change", function (event) {
    toggleInfoButton(event, raceInfoButton);
  });
  //Alignment
  raceSelectElement.addEventListener("change", createAlignmentOptions);
  raceSelectElement.addEventListener("change", function (event) {
    toggleInfoButton(event, alignmentInfoButton);
  });
  alignmentSelectElement.addEventListener("change", function (event) {
    toggleInfoButton(event, alignmentInfoButton);
  });
}

//Class options:
function createClassOptions() {
  let options = `<option>Choose your class</option>`;
  let classObjects = data.classes;
  classObjects.forEach((classObject) => {
    options += `
    <option>${classObject.name}</option>
    `;
  });
  return options;
}

function toggleInfoButton(event, buttonElement) {
  if (event.target.parentNode.id === buttonElement.parentNode.id) {
    if (event.target.selectedIndex !== 0) {
      buttonElement.disabled = false;
    } else {
      buttonElement.disabled = true;
    }
  } else {
    buttonElement.disabled = true;
  }
}

function showInfoForSelectedClass() {
  let infoMessage = `<p>No info</p>`;

  $(document).ready(function () {
    $("#class-infoButton").click(function () {
      data.classes.forEach((className) => {
        if (className.name === classSelectElement.value) {
          infoMessage = `<p>${className.info}</p>`;
        }
      });
      $(infoMessage).dialog({
        modal: true,
        title: `${classSelectElement.value}`,
        buttons: {
          OK: function () {
            $(this).dialog("close");
          },
        },
      });
    });
  });
  //console.log(infoMessage);
}

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

//Alignment options:
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

function addInfoButtonToSelectedAlignment() {}
