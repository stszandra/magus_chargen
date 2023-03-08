let classSelectElement;
let classInfoButton;
let raceSelectElement;
let raceInfoButton;
let alignmentSelectElement;
let alignmentInfoButton;
let religionSelectElement;
let religionInfoButton;
let ageSelectElement;
let minAge;
let maxAge;

window.addEventListener("load", loadEvent);

function loadEvent() {
  classSelectElement = document.getElementById("class-second");
  classInfoButton = document.getElementById("class-infoButton");
  raceSelectElement = document.getElementById("race-second");
  raceInfoButton = document.getElementById("race-infoButton");
  alignmentSelectElement = document.getElementById("alignment-second");
  alignmentInfoButton = document.getElementById("alignment-infoButton");
  religionSelectElement = document.getElementById("religion-second");
  religionInfoButton = document.getElementById("religion-infoButton");
  ageSelectElement = document.getElementById("#realAge-second");

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
  //Race
  classSelectElement.addEventListener("change", createRaceOptions);
  classSelectElement.addEventListener("change", function (event) {
    toggleInfoButton(event, raceInfoButton);
  });
  raceSelectElement.addEventListener("change", function (event) {
    toggleInfoButton(event, raceInfoButton);
  });
  showInfoForSelectedRace();
  //Alignment
  raceSelectElement.addEventListener("change", createAlignmentOptions);
  raceSelectElement.addEventListener("change", function (event) {
    toggleInfoButton(event, alignmentInfoButton);
  });
  alignmentSelectElement.addEventListener("change", function (event) {
    toggleInfoButton(event, alignmentInfoButton);
  });
  showInfoForSelectedAlignment();
  //Religion
  alignmentSelectElement.addEventListener("change", createReligionOptions);
  alignmentSelectElement.addEventListener("change", function (event) {
    toggleInfoButton(event, religionInfoButton);
  });
  religionSelectElement.addEventListener("change", function (event) {
    toggleInfoButton(event, religionInfoButton);
  });
  showInfoForSelectedReligion();
  //Age
  insertSpinnerForAge();
  raceSelectElement.addEventListener("change", setValuesOfAgeSpinner);
  validateRealAge();
}

//Class options:
function createClassOptions() {
  let options = `<option>Choose your class</option>`;
  let classObjects = data.classes;
  classObjects.forEach((classObject) => {
    options += `<option>${classObject.name}</option>`;
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

  $("#class-infoButton").click(function () {
    data.classes.forEach((className) => {
      if (className.name === classSelectElement.value) {
        infoMessage = `<p class="info-box-message">${className.info}</p>`;
      }
    });
    $(infoMessage).dialog({
      modal: true,
      width: 500,
      title: `${classSelectElement.value}`,
      buttons: {
        OK: function () {
          $(this).dialog("close");
        },
      },
    });
  });
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

function showInfoForSelectedRace() {
  let infoMessage = `<p>No info</p>`;

  $("#race-infoButton").click(function () {
    let chosenRace = raceSelectElement.value;
    if (chosenRace.charAt(chosenRace.length - 1) === "*") {
      chosenRace = chosenRace.slice(0, chosenRace.length - 2);
    }
    data.races.forEach((raceName) => {
      if (raceName.name === chosenRace) {
        infoMessage = `<p class="info-box-message">${raceName.info}</p>`;
      }
    });
    $(infoMessage).dialog({
      modal: true,
      width: 500,
      title: `${chosenRace}`,
      buttons: {
        OK: function () {
          $(this).dialog("close");
        },
      },
    });
  });
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

function showInfoForSelectedAlignment() {
  let infoMessage = `<p>No info</p>`;

  $("#alignment-infoButton").click(function () {
    data.alignments.forEach((alignmentName) => {
      if (alignmentName.name === alignmentSelectElement.value) {
        infoMessage = `<p class="info-box-message">${alignmentName.info}</p>`;
      }
    });
    $(infoMessage).dialog({
      modal: true,
      width: 500,
      title: `${alignmentSelectElement.value}`,
      buttons: {
        OK: function () {
          $(this).dialog("close");
        },
      },
    });
  });
}

//Religion options:
function createReligionOptions() {
  religionSelectElement.innerHTML = "";
  let chosenClass = classSelectElement.value;
  let chosenAlignment = alignmentSelectElement.value;
  let isItCompatibleWithAlignment = false;
  let religionOptions = [];

  data.classes.forEach((className) => {
    if (className.name === chosenClass) {
      className.allowedReligions.forEach((allowedReligion) => {
        if (allowedReligion === "Non-Religious") {
          religionOptions.push(allowedReligion);
        } else if (chosenAlignment === "Order" || chosenAlignment === "Chaos") {
          religionOptions.push(allowedReligion);
        } else {
          data.religions.forEach((religion) => {
            if (religion.name === allowedReligion) {
              religion.spheres.forEach((sphere) => {
                if (chosenAlignment.includes(sphere)) {
                  isItCompatibleWithAlignment = true;
                }
              });
            }
            if (isItCompatibleWithAlignment === true) {
              religionOptions.push(allowedReligion);
              isItCompatibleWithAlignment = false;
            }
          });
        }
      });
    }
  });

  let options = `<option>Choose your religion</option>`;

  religionOptions.forEach((religionOption) => {
    options += `<option>${religionOption}</option>`;
  });
  religionSelectElement.insertAdjacentHTML("beforeend", options);
}

function showInfoForSelectedReligion() {
  let infoMessage = `<p>No info</p>`;

  $("#religion-infoButton").click(function () {
    let chosenReligion = religionSelectElement.value;

    data.religions.forEach((religion) => {
      if (religion.name === chosenReligion) {
        infoMessage = `<p class="info-box-message">${religion.info}</p>`;
      }
    });
    $(infoMessage).dialog({
      modal: true,
      width: 500,
      title: `${chosenReligion}`,
      buttons: {
        OK: function () {
          $(this).dialog("close");
        },
      },
    });
  });
}

//Age selection:
function insertSpinnerForAge() {
  $("#realAge-second").spinner({ step: 1 });
}

function setValuesOfAgeSpinner() {
  let chosenRace = raceSelectElement.value;
  data.races.forEach((race) => {
    if (race.name === chosenRace) {
      minAge = race.age.category1[0];
      maxAge = race.age.category6[0];
    }
  });
  $("#realAge-second").spinner("value", minAge);
  $("#realAge-second").spinner("option", "min", minAge);
  $("#realAge-second").spinner("option", "max", maxAge);
}

function validateRealAge() {
  let chosenAge;
  $("#realAge-second")
    .spinner({
      spin: function (event, ui) {
        // Update the input value and trigger the events
        $(this).val(ui.value).trigger("change").trigger("spinchange");
      },
    })
    .on("spinchange", function () {
      chosenAge = $(this).spinner("value");
      if (chosenAge < minAge) {
        $("#realAge-second").spinner("value", minAge);
        const infoMessage = `<p>You can't be younger than ${minAge} if you want to survive your first real combat encounter.</p>`;
        //const infoMessage = "You can't be that young!";
        $(infoMessage).dialog({
          modal: true,
          width: 400,
          title: "Invalid age!",
          buttons: {
            OK: function () {
              $(this).dialog("close");
            },
          },
        });
      }
      if (chosenAge > maxAge) {
        $("#realAge-second").spinner("value", maxAge);
        const infoMessage = `<p>You can't be older than ${maxAge} if you still want to actively partake in combat encounters.</p>`;
        //const infoMessage = "You can't be that old!";
        $(infoMessage).dialog({
          modal: true,
          width: 400,
          title: "Invalid age!",
          buttons: {
            OK: function () {
              $(this).dialog("close");
            },
          },
        });
      }
    });
  /*.on("input", function () {
      // Trigger the events when the user types into the input field
      $(this).trigger("change").trigger("spinchange");
    });*/
  //No good, because when I type 14, the value is at first 1, then its 14, so it will be useless for validation.
}
