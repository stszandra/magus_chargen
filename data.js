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
      info: "Humans are the most numerous race on Ynev, thus you don't have to worry about racism. You find it hard to trust people from other races though. They usually have their own ideologies and agenda which you might find alien compared to your own.",
    },
    {
      name: "Elf",
      info: "Your ancestors originated from South-Ynev, but nowadays you can find your fellows pretty much anywhere on the continent. You prefer living in seclusion. And since you can expect to live for thousands of years, compared to you, humans are mere children.",
    },
    {
      name: "Half-elf",
      info: "",
    },
    {
      name: "Dwarf",
      info: "",
    },
    {
      name: "Orc",
      info: "",
    },
  ],
  racesByClass: [
    {
      byClassName: "Fighter",
      allowedRaces: ["Human", "Elf", "Half-elf", "Dwarf", "Orc"],
      allowedRacesByDM: [],
    },
    {
      byClassName: "Gladiator",
      allowedRaces: ["Human", "Elf", "Dwarf", "Orc"],
      allowedRacesByDM: ["Half-elf"],
    },
    {
      byClassName: "Bounty Hunter",
      allowedRaces: ["Human"],
      allowedRacesByDM: ["Elf", "Half-elf", "Orc"],
    },
    {
      byClassName: "Knight",
      allowedRaces: ["Human"],
      allowedRacesByDM: ["Half-elf"],
    },
    {
      byClassName: "Thief",
      allowedRaces: ["Human", "Half-elf", "Dwarf", "Orc"],
      allowedRacesByDM: [],
    },
    {
      byClassName: "Bard",
      allowedRaces: ["Human", "Half-elf"],
      allowedRacesByDM: ["Elf"],
    },
    {
      byClassName: "Priest",
      allowedRaces: ["Human", "Dwarf"],
      allowedRacesByDM: [],
    },
    {
      byClassName: "Templar",
      allowedRaces: ["Human"],
      allowedRacesByDM: [],
    },
    {
      byClassName: "Martial Artist",
      allowedRaces: ["Human", "Half-elf"],
      allowedRacesByDM: [],
    },
    {
      byClassName: "Samurai",
      allowedRaces: ["Human", "Half-elf"],
      allowedRacesByDM: [],
    },
    {
      byClassName: "Witch",
      allowedRaces: ["Human"],
      allowedRacesByDM: ["Half-elf"],
    },
    {
      byClassName: "Warlock",
      allowedRaces: ["Human", "Orc"],
      allowedRacesByDM: ["Half-elf"],
    },
    {
      byClassName: "Firemage",
      allowedRaces: ["Human"],
      allowedRacesByDM: [],
    },
    {
      byClassName: "Wizard",
      allowedRaces: ["Human", "Elf", "Half-elf"],
      allowedRacesByDM: ["Dwarf"],
    },
  ],
  alignments: [
    {
      name: "Life",
      info: "You protect life whenever you can. You do not take away the freedom of others, and you are repulsed by anything agressive. But if someone's life is in danger, you grab your weapon and jump into action.",
    },
    {
      name: "Death",
      info: "The life of others means nothing to you. You destroy anyone without remorse if they get in your way.",
    },
    {
      name: "Order",
      info: "You hold order above anything else. You might think that laws are to be kept at all cost or maybe you are searching for perfect harmony with nature. The good of the community comes before your own.",
    },
    {
      name: "Chaos",
      info: "Your own personal freedom comes first. Nothing and noone can restrain you. You don't particulary enjoy destruction, but you might do it just to spite someone else who tried to control you.",
    },
    {
      name: "Life, Order",
      info: "You hold life above all else. If you must, you even break laws to protect others, even though otherwise you would never do it. If you can solve a situation without bloodshed, you will.",
    },
    {
      name: "Life, Chaos",
      info: "You hold life above all else. You will protect others whenever you can, but you don't care about breaking any rules. The only thing you care about is to not hurt anyone else in the process.",
    },
    {
      name: "Death, Order",
      info: "You don't really care about the life of others. You kill without remorse. You are a cold blooded murderer, usually led by an ideology or an organisation.",
    },
    {
      name: "Death, Chaos",
      info: "Life means nothing to you. You hate law and order. You aren't picky about your methods whenever you want to get something.",
    },
    {
      name: "Order, Life",
      info: "Order rules your life. Let it be your own moral code or the local laws. This order in your life forbids murder, but whenever someone is in danger, you feel obligated to save them. Even if it means you have to kill someone.",
    },
    {
      name: "Order, Death",
      info: "You serve and kill. If someone orders you to do it (let it be your superior or your god), you can be the most ruthless murderer. You don't actually enjoy taking away someone else's life though. You would never do it just for fun.",
    },
    {
      name: "Chaos, Life",
      info: "You make your own rules. Even if you serve someone else, it's only because it's in your own interest. You hate restrictions, but whatever you do, at least you try not to kill others to reach your goals.",
    },
    {
      name: "Chaos, Death",
      info: "There isn't much humanity left in you. You are led without restrictions by your own incoherent thought processes. You don't care about anyone's life. You know nothing about respect, only fear is familiar to you. Only someone much more powerful can control you.",
    },
  ],
};

export { data };
