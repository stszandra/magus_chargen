import { data } from "/data.js";

const loadEvent = function () {
  //Info buttons are hidden
  for (const element of document.getElementsByClassName("infoButton")) {
    element.style.visibility = "hidden";
  }
  //Class selection and info button
  createClassOptions();
  document.getElementById("class-second").addEventListener("change", addInfoButtonToSelectedClass);
  document.getElementById("class-infoButton").addEventListener("click", showInfoForSelectedClass);

  //Race selection and info button
  /*
  document.getElementById("class-second").addEventListener("change", createRaceOptions);
  $("class-second").on("input", function () {
    // set the value of the autocomplete field to an empty string

    setTimeout(function () {
      // set the value of the autocomplete field to an empty string
      $("input#race-second").val("");
    }, 100);
  });*/
  //Alignment selection and info button
  document.getElementById("alignment-second").insertAdjacentHTML("beforeend", createAlignmentOptions());
};

window.addEventListener("load", loadEvent);

function createClassOptions() {
  const classNames = [];
  data.classes.forEach((className) => {
    classNames.push(className);
  });
  //JQuery autocomplete field:
  $("input#class-second")
    .autocomplete({
      minLength: 0,
      source: classNames,
    })
    .focus(function () {
      $(this).autocomplete("search", $(this).val());
    });
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
  //document.getElementById("race-second").style.type = "reset";
  //document.getElementById("race-second").innerHTML = "";
  //$("input#race-second").attr("value", "");
  //$("input#race-second").val("");
  //$("input#race-second").autocomplete("close").val("");
  const className = document.getElementById("class-second").value;
  const raceNames = [];
  data.races.forEach((race) => {
    if (race.allowedByClasses.allowed.includes(className)) {
      raceNames.push(race.name);
    }
    if (race.allowedByClasses.allowedByDM.includes(className)) {
      raceNames.push(`${race.name} *`);
    }
  });

  $("input#race-second")
    .autocomplete({
      minLength: 0,
      source: raceNames,
    })
    .focus(function () {
      $(this).autocomplete("search", $(this).val());
    });
  document.getElementById("race-second").value = "";
  console.log(document.getElementById("race-second").value);
  $("input#race-second").focus();
}

/*function createRaceOptions() {
  document.getElementById("race-second").innerHTML = "";
  const className = document.getElementById("class-second").value;
  let options = `<option>Choose your race</option>`;
  data.races.forEach((race) => {
    if (race.allowedByClasses.allowed.includes(className)) {
      options += `<option>${race.name}</option>`;
    }
    if (race.allowedByClasses.allowedByDM.includes(className)) {
      options += `<option>${race.name} *</option>`;
    }
  });
  document.getElementById("race-second").insertAdjacentHTML("beforeend", options);
}*/

function createAlignmentOptions() {
  let options = `<option>Choose your alignment</option>`;
  data.alignments.forEach((alignment) => {
    options += `<option>${alignment.name}</option>`;
  });
  return options;
}
