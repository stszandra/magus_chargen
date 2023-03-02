import { data } from "/data.js";

const loadEvent = function () {
  document.getElementById("class-second").insertAdjacentHTML("beforeend", createClassOptions());
  document.getElementById("class-second").addEventListener("change", createRaceOptions);
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

function createRaceOptions() {
  document.getElementById("race-second").innerHTML = "";
  let className = document.getElementById("class-second").value;
  let options = `<option>Choose your race</option>`;
  data.races.forEach((byClass) => {
    if (className === byClass.byClassName) {
      byClass.allowedRaces.forEach((race) => {
        options += `<option>${race}`;
      });
      byClass.allowedRacesByDM.forEach((race) => {
        options += `<option>${race} *</option>`;
      });
    }
  });
  console.log(options);
  document.getElementById("race-second").insertAdjacentHTML("beforeend", options);
}
