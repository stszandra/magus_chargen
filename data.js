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
};

export { data };
