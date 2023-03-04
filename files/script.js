const data = {
  classes: [
    "Fighter",
    "Gladiator",
    "Bounty Hunter",
    "Knight",
    "Thief",
    "Bard",
    "Priest",
    "Templar",
    "Martial Artist",
    "Samurai",
    "Witch",
    "Warlock",
    "Firemage",
    "Wizard",
  ],
  races: [
    {
      name: "Human",
      info: `Humans are the most numerous race on Ynev, thus you don't have to worry about racism. 
      You find it hard to trust people from other races though. They usually have their own ideologies 
      and agenda which you might find alien compared to your own.`,
      allowedByClasses: {
        allowed: [
          "Fighter",
          "Gladiator",
          "Bounty Hunter",
          "Knight",
          "Thief",
          "Bard",
          "Priest",
          "Templar",
          "Martial Artist",
          "Samurai",
          "Witch",
          "Warlock",
          "Firemage",
          "Wizard",
        ],
        allowedByDM: [],
      },
    },
    {
      name: "Elf",
      info: `Your ancestors originated from South-Ynev, but nowadays you can find your fellows pretty much 
        anywhere on the continent. You prefer living in seclusion. And since you can expect to live 
        for thousands of years, compared to you, humans are mere children. You prefer spending time in nature, 
        and you aren't fond of human cities. You especially distaste structures made of solid stone. 
        Humans are usually awed by your beauty and grace which makes your life easier than some other minorities'.`,
      allowedByClasses: {
        allowed: ["Fighter", "Wizard"],
        allowedByDM: ["Gladiator", "Bounty Hunter", "Bard"],
      },
    },
    {
      name: "Half-elf",
      info: `As a half-elf, your life will never be easy. You are too elf to be considered a human, 
      but you are too human to be accepted as an elf. Even though your way of thinking is much closer 
      to humans', your looks are very elf-like. You'll probably spend your whole life looking 
      for your place in the world. That's probably partly the reason why you became an adventurer.`,
      allowedByClasses: {
        allowed: ["Fighter", "Gladiator", "Thief", "Bard", "Martial Artist", "Samurai", "Wizard"],
        allowedByDM: ["Bounty Hunter", "Knight", "Witch", "Warlock"],
      },
    },
    {
      name: "Dwarf",
      info: `Your ancestors came from Beriquel, but you can find your kind anywhere on Ynev these days. 
      Though probably less in the southern countries - they are way too human centric for your tastes. 
      Dwarves are know for their mastery in architecture. Castles and bridges built by your fellow dwarves 
      will probably still be standing after thousands of years. Armor and weapons crafted by dwarven blacksmiths 
      is also of the highest quality. You have every right to be proud of being a dwarf. Most dwarven adventurers 
      are led by the vision of quickly gaining riches and you probably aren't too different from them.`,
      allowedByClasses: {
        allowed: ["Fighter", "Gladiator", "Thief", "Priest"],
        allowedByDM: ["Wizard"],
      },
    },
    {
      name: "Court-Orc",
      info: `Your race is usually called court-orc. You have been bred and magically transformed by men for their own use. 
      Your kind first appeared in the military service of a northern human lord and it quickly became fashionable 
      to keep orcs at court. Your intelligence is quite high especially among other animals. 
      Sadly no matter how many marvelous ideas you come up with, you aren't able to awe any humans. 
      Humans probably came up with those ideas thousands of years before. That's probably why you can't help 
      feeling inferior all the time. It doesn't help either that your whole body is hairy, even your face isn't 
      completely hairless. Sometimes you feel like a monstrosity and that makes you hate real orcs even more. 
      They make you remember everything that's wrong with you, everything that makes it difficult to be part 
      of the human society. The only place you can really be yourself is among adventurers and apparently 
      many of your kind are amazing military strategists.`,
      allowedByClasses: {
        allowed: ["Fighter", "Gladiator", "Thief", "Warlock"],
        allowedByDM: ["Bounty Hunter", "Priest"],
      },
    },
  ],
  alignments: [
    {
      name: "Life",
      info: `You protect life whenever you can. You do not take away the freedom of others, 
      and you are repulsed by anything agressive. But if someone's life is in danger, 
      you grab your weapon and jump into action.`,
      allowedByRace: ["Human", "Elf", "Half-elf", "Dwarf", "Court-Orc"],
    },
    {
      name: "Death",
      info: `The life of others means nothing to you. You destroy anyone without remorse 
      if they get in your way.`,
      allowedByRace: ["Human", "Half-elf", "Dwarf", "Court-Orc"],
    },
    {
      name: "Order",
      info: `You hold order above anything else. You might think that laws are to be kept 
      at all cost or maybe you are searching for perfect harmony with nature. 
      But the good of the community always comes before your own.`,
      allowedByRace: ["Human", "Half-elf", "Dwarf", "Court-Orc"],
    },
    {
      name: "Chaos",
      info: `Your own personal freedom comes first. Nothing and noone can restrain you. 
      You don't particulary enjoy destruction, but you might do it just to spite 
      someone else who tried to control you.`,
      allowedByRace: ["Human", "Half-elf", "Dwarf", "Court-Orc"],
    },
    {
      name: "Life, Order",
      info: `You hold life above all else. If you must, you even break laws to protect others, 
      even though otherwise you would never do it. If you can solve a situation without bloodshed, you will.`,
      allowedByRace: ["Human", "Elf", "Half-elf", "Dwarf", "Court-Orc"],
    },
    {
      name: "Life, Chaos",
      info: `You hold life above all else. You will protect others whenever you can, 
      but you don't care about breaking any rules. The only thing you care about is 
      not to hurt anyone else in the process.`,
      allowedByRace: ["Human", "Elf", "Half-elf", "Dwarf", "Court-Orc"],
    },
    {
      name: "Death, Order",
      info: `You don't really care about the life of others. You kill without remorse. 
      You are a cold blooded murderer, usually led by an ideology or an organisation.`,
      allowedByRace: ["Human", "Half-elf", "Dwarf", "Court-Orc"],
    },
    {
      name: "Death, Chaos",
      info: `Life means nothing to you. You hate law and order and you aren't picky 
      about your methods whenever you want to get something.`,
      allowedByRace: ["Human", "Half-elf", "Dwarf", "Court-Orc"],
    },
    {
      name: "Order, Life",
      info: `Order rules your life. Let it be your own moral code or the local laws. 
      This order in your life forbids murder, but whenever someone is in danger, 
      you feel obligated to save them. Even if it means you have to kill someone.`,
      allowedByRace: ["Human", "Elf", "Half-elf", "Dwarf", "Court-Orc"],
    },
    {
      name: "Order, Death",
      info: `You serve and kill. If someone orders you to do it (let it be your superior or your god), 
      you can be the most ruthless murderer. You don't actually enjoy taking away 
      someone else's life though. You would never do it just for fun.`,
      allowedByRace: ["Human", "Half-elf", "Dwarf", "Court-Orc"],
    },
    {
      name: "Chaos, Life",
      info: `You make your own rules. Even if you serve someone else, 
      it's only because it's in your own interest. You hate restrictions, but whatever you do, 
      at least you try not to kill others to reach your goals.`,
      allowedByRace: ["Human", "Elf", "Half-elf", "Dwarf", "Court-Orc"],
    },
    {
      name: "Chaos, Death",
      info: `There isn't much humanity left in you. You are led without restrictions by your own 
      incoherent thought processes. You don't care about anyone's life. 
      You know nothing about respect, only fear is familiar to you. 
      Thus only someone who is much more powerful than you, can keep you under control.`,
      allowedByRace: ["Human", "Half-elf", "Dwarf", "Court-Orc"],
    },
  ],
};
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
  classSelectElement.addEventListener("change", toggleClassInfoButton);
  classInfoButton.addEventListener("click", showInfoForSelectedClass);
  //Race
  classSelectElement.addEventListener("change", createRaceOptions);
  //Alignment
  raceSelectElement.addEventListener("change", createAlignmentOptions);
  alignmentSelectElement.addEventListener("change", addInfoButtonToSelectedAlignment);
}

//Class options:
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

function toggleClassInfoButton() {
  if (classSelectElement.value !== "Choose your class") {
    classInfoButton.disabled = false;
    console.log(classInfoButton.disabled);
  } else if (classSelectElement.value === "Choose your class") {
    classInfoButton.disabled = true;
    console.log(classInfoButton.disabled);
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
