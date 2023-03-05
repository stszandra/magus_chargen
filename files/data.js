const data = {
  classes: [
    {
      name: "Fighter",
      info: `You are no mere soldier, even though you've never received the training gladiators and knights do. 
      Many fighters - like yourself - end up being adventurers, but there are those who prefer working as bodyguards 
      and it isn't unheard of that even a monarch started out as a simple fighter. Just think about Sullen Chei, 
      the legendary king of Yllinor, who is probably the fiercest warrior on Ynev. However it isn't only fighting 
      that you are adept at. Warriors are among the most versatile adventurers. You can do pretty much anything 
      you set your mind to.`,
      additionalInfo: ``,
      allowedReligions: [
        "Non-Religious",
        "Domvik",
        "Ranagol",
        "Adron",
        "Alborne",
        "Antoh",
        "Arel",
        "Darton",
        "Della",
        "Dreina",
        "Ellana",
        "Gilron",
        "Krad",
        "Kyel",
        "Noir",
        "Orwella",
        "Uwel",
        "Sogron",
        "Tharr",
      ],
    },
    {
      name: "Gladiator",
      info: `As a gladiator, you have been trained in one-on-one combat. You are a fierce fighter who isn't 
      afraid of pain and injury. Your special training prepared you for anything that can happen in a combat encounter.`,
      additionalInfo: ``,
      allowedReligions: [
        "Non-Religious",
        "Domvik",
        "Ranagol",
        "Adron",
        "Alborne",
        "Antoh",
        "Arel",
        "Darton",
        "Della",
        "Dreina",
        "Ellana",
        "Gilron",
        "Krad",
        "Kyel",
        "Noir",
        "Orwella",
        "Uwel",
        "Sogron",
        "Tharr",
      ],
    },
    {
      name: "Bounty Hunter",
      info: `You are the perfect assassin. Your whole training, no - even your whole life preapred you for this - 
      to be no mere murderer, but an artist. You are the perfect mix between a martial artist, a fighter and a thief. 
      You are agile, fast and hard to notice if you don't want to be. As part of your clan, you must live by strict rules. 
      If you accept a contract, you have to complete it, no matter what...`,
      additionalInfo: ``,
      allowedReligions: [
        "Non-Religious",
        "Domvik",
        "Ranagol",
        "Adron",
        "Alborne",
        "Antoh",
        "Arel",
        "Darton",
        "Della",
        "Dreina",
        "Ellana",
        "Gilron",
        "Krad",
        "Kyel",
        "Noir",
        "Orwella",
        "Uwel",
        "Sogron",
        "Tharr",
      ],
    },
    {
      name: "Knight",
      info: `Knights are the nobility among fighters. It's possible that someone among the commoners are knighted occasionnaly 
      but usually being a knight means that you are from noble blood. You have been trained and educated since childhood by 
      the best of tutors. You are well mannered, somewhat accomplished, professional in heavy combat and you always adhere to 
      your moral code. Honor and loyalty means everything to you.`,
      additionalInfo: ``,
      allowedReligions: [
        "Non-Religious",
        "Domvik",
        "Ranagol",
        "Adron",
        "Alborne",
        "Antoh",
        "Arel",
        "Darton",
        "Della",
        "Dreina",
        "Ellana",
        "Gilron",
        "Krad",
        "Kyel",
        "Noir",
        "Orwella",
        "Uwel",
        "Sogron",
        "Tharr",
      ],
    },
    {
      name: "Thief",
      info: `Morality and laws don't mean much to you. You live of what you can take from others. You are a well-practiced 
      robber, pickpocket, burglar, and con artist. Doesn't matter if you are a solo player or part of a clan, your skills 
      will always come in handy on an adventure.`,
      additionalInfo: ``,
      allowedReligions: [
        "Non-Religious",
        "Domvik",
        "Ranagol",
        "Adron",
        "Alborne",
        "Antoh",
        "Arel",
        "Darton",
        "Della",
        "Dreina",
        "Ellana",
        "Gilron",
        "Krad",
        "Kyel",
        "Noir",
        "Orwella",
        "Uwel",
        "Sogron",
        "Tharr",
      ],
    },
    {
      name: "Bard",
      info: `You are a professional con-artist and you have the perfect arsenal in your hand to get whatever you need. 
      You are a well trained combatant, but you are just as dangerous with your words. You can convince anyone of 
      pretty much anything. And we haven't even mentioned your magic... Members of the other sex would do well to avoid you 
      if they have riches they want to keep. But when you start singing, it can have the most diverse effect on your audience.`,
      additionalInfo: ``,
      allowedReligions: [
        "Non-Religious",
        "Domvik",
        "Ranagol",
        "Adron",
        "Alborne",
        "Antoh",
        "Arel",
        "Darton",
        "Della",
        "Dreina",
        "Ellana",
        "Gilron",
        "Krad",
        "Kyel",
        "Noir",
        "Orwella",
        "Uwel",
        "Sogron",
        "Tharr",
      ],
    },
    {
      name: "Priest",
      info: `Your whole life is defined by your religion. You serve your god and its high priests and 
      follow your religion's teachings. You are very pious, pray often, your own good comes only after the good of your 
      religion. Your faith is your maigc, and if it's strong, your rituals and litanies can be really powerful. 
      The only drawback is, that you can't cast spells without your holy symbol, so you must guard it with your life.`,
      additionalInfo: ``,
      allowedReligions: ["Domvik", "Ranagol", "Arel", "Kyel", "Tharr"],
    },
    {
      name: "Templar",
      info: `You are the protector of your faith. You are well educated both in wordly and religious disciples. 
      Even though you can use some of the magics that priests do, your main strength is in military combat. 
      You are just as good in heavy combat as knights are, the difference is that you've received a very religious upbringing.`,
      additionalInfo: ``,
      allowedReligions: ["Domvik", "Ranagol", "Darton", "Dreina", "Krad", "Uwel"],
    },
    {
      name: "Martial Artist",
      info: `Combat is art. It isn't a tool to be used wantonly, but the road on the way towards perfect harmony within 
      yourself. It might look similar to a dance. Every little movement is intentional and perfectly controlled. 
      But make no mistake, a martial artist can be the deadliest of all, simply with his bare hands. 
      To be able to reach your maximum potential, you need to meditate a lot and calm down your turbulent thoughts. 
      A Slan martial artist is adept at the Slan way of Psi techniques. That's what makes you exceptional and feared by others.`,
      additionalInfo: ``,
      allowedReligions: [
        "Non-Religious",
        "Domvik",
        "Ranagol",
        "Adron",
        "Alborne",
        "Antoh",
        "Arel",
        "Darton",
        "Della",
        "Dreina",
        "Ellana",
        "Gilron",
        "Krad",
        "Kyel",
        "Noir",
        "Orwella",
        "Uwel",
        "Sogron",
        "Tharr",
      ],
    },
    {
      name: "Samurai",
      info: `You are a Slan Martial artist. But contrary to other martial artist, you don't use your bare hands, instead 
      perfected your techniques using the Slan Sword and the Slan Dagger. These weapons are the result of hunders of years of 
      perfectionism by oriental blacksmiths. Both their material and shape are perfect. You couldn't find any other weapon 
      of higher quality. But what makes you an artist is your Chi. It's the combination of common meditational techniques 
      with Slan Psi. Every little movement you do is intentional and perfectly controlled and a sight to be seen.`,
      additionalInfo: ``,
      allowedReligions: [
        "Non-Religious",
        "Domvik",
        "Ranagol",
        "Adron",
        "Alborne",
        "Antoh",
        "Arel",
        "Darton",
        "Della",
        "Dreina",
        "Ellana",
        "Gilron",
        "Krad",
        "Kyel",
        "Noir",
        "Orwella",
        "Uwel",
        "Sogron",
        "Tharr",
      ],
    },
    {
      name: "Witch",
      info: `Your magic comes from the experiences of other magic practitioners who came before you. It's the collected 
      knowledge of thousands of years of practice. You are merely a user of these ancient formulas. Magic is merely a tool 
      you use to get what you need. You don't really care how it works, as long as it does. It isn't only magic you are 
      adept at, you are also an experienced posion maker and healer. Witches are usually the most beautiful of women 
      who have a special power. Your sexual magic is probably the most powerful kind over men. Many witches are 
      as dangerous as the best of assassins.`,
      additionalInfo: ``,
      allowedReligions: [
        "Non-Religious",
        "Domvik",
        "Ranagol",
        "Adron",
        "Alborne",
        "Antoh",
        "Arel",
        "Darton",
        "Della",
        "Dreina",
        "Ellana",
        "Gilron",
        "Krad",
        "Kyel",
        "Noir",
        "Orwella",
        "Uwel",
        "Sogron",
        "Tharr",
      ],
    },
    {
      name: "Warlock",
      info: `You are the most unscrupulous magic user. Your power is of the darkest and most evil kind which you use 
      without any remorse. You only use this ancient magic though and don't really care about how it works as long as 
      it helps you gain all the power you need. Curses, diseases and not even necromancy is beyond you. 
      You are also an adept assassin, and probably know how to brew any kind of poison.`,
      additionalInfo: ``,
      allowedReligions: ["Ranagol", "Darton", "Dreina", "Kyel", "Noir", "Orwella", "Uwel", "Tharr"],
    },
    {
      name: "Firemage",
      info: `Your magic is probably the most special kind, which originated from the ancient mages of Godon. 
      Even though you hardly understand at all how they work, you probably use the most sophisticated and 
      highest order spells a magic user can. On the other hand your magic is completely limited to 
      fire related spells. You are professional both in offensive and defensive combat magic, and 
      you are quite formidable with your sword too.`,
      additionalInfo: ``,
      allowedReligions: [
        "Non-Religious",
        "Domvik",
        "Ranagol",
        "Adron",
        "Alborne",
        "Antoh",
        "Arel",
        "Darton",
        "Della",
        "Dreina",
        "Ellana",
        "Gilron",
        "Krad",
        "Kyel",
        "Noir",
        "Orwella",
        "Uwel",
        "Sogron",
        "Tharr",
      ],
    },
    {
      name: "Wizard",
      info: `You are the most powerful of all the magic users and that is because you don't only use it, 
      but understand all its mystical rules. You understand each spell's structure and you are able to build 
      them up from their components. Magic is science which you've studied relentlessly all your life. 
      Thanks to this, you are the most versatile caster there can be. Only your resourcefulness is the limit 
      of how you can react to a situation.`,
      additionalInfo: ``,
      allowedReligions: [
        "Non-Religious",
        "Domvik",
        "Ranagol",
        "Adron",
        "Alborne",
        "Antoh",
        "Arel",
        "Darton",
        "Della",
        "Dreina",
        "Ellana",
        "Gilron",
        "Krad",
        "Kyel",
        "Noir",
        "Orwella",
        "Uwel",
        "Sogron",
        "Tharr",
      ],
    },
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
  religions: [
    {
      name: "Domvik",
      pantheon: null,
      info: ``,
      spheres: ["Life", "Soul", "Nature"],
    },
    {
      name: "Ranagol",
      pantheon: null,
      info: ``,
      spheres: ["Death", "Life", "Nature"],
    },
    {
      name: "Adron",
      pantheon: "Pyarron",
      info: ``,
      spheres: ["Life", "Soul"],
    },
    {
      name: "Alborne",
      pantheon: "Pyarron",
      info: ``,
      spheres: ["Life", "Soul"],
    },
    {
      name: "Antoh",
      pantheon: "Pyarron",
      info: ``,
      spheres: ["Life", "Nature"],
    },
    {
      name: "Arel",
      pantheon: "Pyarron",
      info: ``,
      spheres: ["Life", "Soul", "Nature"],
    },
    {
      name: "Darton",
      pantheon: "Pyarron",
      info: ``,
      spheres: ["Death", "Soul"],
    },
    {
      name: "Della",
      pantheon: "Pyarron",
      info: ``,
      spheres: ["Soul"],
    },
    {
      name: "Dreina",
      pantheon: "Pyarron",
      info: ``,
      spheres: ["Life", "Death"],
    },
    {
      name: "Ellana",
      pantheon: "Pyarron",
      info: ``,
      spheres: ["Life", "Soul"],
    },
    {
      name: "Gilron",
      pantheon: "Pyarron",
      info: ``,
      spheres: ["Life", "Nature"],
    },
    {
      name: "Krad",
      pantheon: "Pyarron",
      info: ``,
      spheres: ["Life", "Soul"],
    },
    {
      name: "Kyel",
      pantheon: "Pyarron",
      info: ``,
      spheres: ["Life", "Death", "Soul"],
    },
    {
      name: "Noir",
      pantheon: "Pyarron",
      info: ``,
      spheres: ["Life", "Death"],
    },
    {
      name: "Orwella",
      pantheon: "Pyarron",
      info: ``,
      spheres: ["Death"],
    },
    {
      name: "Uwel",
      pantheon: "Pyarron",
      info: ``,
      spheres: ["Life", "Death", "Soul"],
    },
    {
      name: "Sogron",
      pantheon: null,
      info: ``,
      spheres: ["Life", "Nature", "Soul"],
    },
    {
      name: "Tharr",
      pantheon: null,
      info: ``,
      spheres: ["Death", "Soul"],
    },
  ],
};
