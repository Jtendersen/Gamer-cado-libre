"use strict";

const baseURL = "https://images.igdb.com/igdb/image/upload/t_720p/";

const unformated = [
  {
    id: 99723,
    age_ratings: [
      {
        id: 56841,
        content_descriptions: [
          {
            id: 58580,
            description: "Mild Violence",
          },
          {
            id: 58581,
            description: "Mild Blood",
          },
          {
            id: 58582,
            description: "Alcohol and Tobacco Reference",
          },
        ],
      },
    ],
    cover: {
      id: 201039,
      image_id: "co4b4f",
    },
    first_release_date: 1432944000,
    genres: [
      {
        id: 2,
      },
    ],
    name: "Haunted Hotel: Eternity",
    summary:
      "Outwit the masked mastermind running this hotel and uncover the dark secrets the professor has been hiding from the world.",
  },
  {
    id: 149117,
    age_ratings: [
      {
        id: 46035,
        content_descriptions: [
          {
            id: 50973,
            description: "Blood",
          },
          {
            id: 50974,
            description: "Use of Alcohol",
          },
          {
            id: 50975,
            description: "Violence",
          },
        ],
      },
      {
        id: 52481,
      },
    ],
    cover: {
      id: 168317,
      image_id: "co3lvh",
    },
    first_release_date: 1632787200,
    genres: [
      {
        id: 2,
      },
    ],
    name: "Warp Frontier",
    summary:
      "In the year 2215, orbiting humanity's newest extrasolar colony, Police Captain Vincent Cassini, becomes embroiled in an intersystem conspiracy to bury crimes that occurred during the war that devastated his planet.",
    total_rating: 60.0,
  },
  {
    id: 86657,
    age_ratings: [
      {
        id: 20967,
        content_descriptions: [
          {
            id: 20140,
            description: "Cartoon Violence",
          },
          {
            id: 20141,
            description: "Comic Mischief",
          },
        ],
      },
      {
        id: 20968,
      },
    ],
    cover: {
      id: 122051,
      image_id: "co2m6b",
    },
    first_release_date: 1640908800,
    genres: [
      {
        id: 2,
      },
    ],
    name: "3 Minutes to Midnight",
    summary:
      '3 Minutes to Midnight is Scarecrow Studio ’s first adventure game with its development led by Jan Serra It is a classic point-and-click adventure game telling the story of Betty Anderson. Do you love unexpected stories and puzzling twists, as well as the feeling of satisfaction that comes when you solve riddles – the harder they are the better? You can’t stop laughing at funny dialogues? You can’t get enough of the "give me more" feeling after you discover the last clue? Then you will love this game! Move around beautifully drawn 2D scenes full of details. Experience a very personal, complex, and interactive story driven by exploration and puzzle-solving. Meet the peculiar characters of this game, and find out about their background stories. Furthermore, there are multiple Easter eggs hidden in the game. Can you spot them all?',
  },
  {
    id: 13189,
    age_ratings: [
      {
        id: 7633,
        content_descriptions: [
          {
            id: 10309,
            description: "Alcohol Reference",
          },
          {
            id: 10310,
            description: "Strong Language",
          },
          {
            id: 10311,
            description: "Realistic Violence",
          },
        ],
      },
    ],
    cover: {
      id: 81889,
      image_id: "co1r6p",
    },
    first_release_date: 1444348800,
    genres: [
      {
        id: 2,
      },
    ],
    name: "Masochisia",
    summary:
      "A young man discovers through a series of hallucinations that he will grow up to become a violent psychopath. How will he respond to these revelations? Can he change his fate? Can you even... change fate...",
    total_rating: 52.9536308001321,
  },
  {
    id: 125020,
    age_ratings: [
      {
        id: 26120,
        content_descriptions: [
          {
            id: 25504,
            description: "Cartoon Violence",
          },
          {
            id: 25505,
            description: "Partial Nudity",
          },
          {
            id: 25506,
            description: "Simulated Gambling",
          },
        ],
      },
      {
        id: 26121,
        content_descriptions: [
          {
            id: 25507,
            description: "Bad Language",
          },
        ],
      },
    ],
    cover: {
      id: 83154,
      image_id: "co1s5u",
    },
    first_release_date: 1225756800,
    genres: [
      {
        id: 2,
      },
    ],
    name: "Dovadula's Burn",
    summary:
      "The story takes place in the imaginary town of Dovadula's, where Punkkommando is trying to destroy the town with his bass guitar. \nThe police stop Punkkommando's plan and he runs away. \nPunkkommando loses his bass guitar, and to escape the policeman he assumes the identity of the crazy green man Capitan Fortuna. \nThen he goes to his music master Matt Freeman to find a method to definitively destroy Dovadula's.",
  },
  {
    id: 57919,
    age_ratings: [
      {
        id: 14886,
      },
    ],
    cover: {
      id: 88183,
      image_id: "co1w1j",
    },
    first_release_date: 1135987200,
    genres: [
      {
        id: 2,
      },
    ],
    name: "Disney's Beauty and the Beast: Magical Ballroom",
    summary:
      "Disney's Beauty and the Beast is a collection of mini-games for children based around the characters of the Disney animated movie of the same name. After signing in the player starts the game in the great hallway of the Beasts' home. Bell is trying to arrange a surprise party for the Beast and this sets the background for the mini-games.",
  },
  {
    id: 20578,
    age_ratings: [
      {
        id: 70484,
        content_descriptions: [
          {
            id: 72386,
            description: "Comic Mischief",
          },
          {
            id: 72387,
            description: "Drug Reference",
          },
        ],
      },
    ],
    cover: {
      id: 162871,
      image_id: "co3ho7",
    },
    first_release_date: 1161648000,
    genres: [
      {
        id: 2,
      },
    ],
    name: "Touch Detective",
    summary:
      'In Touch Detective you will become Mackenzie, a fledgling detective, and solve various mysteries in a "Touch Adventure"!',
    total_rating: 58.5,
  },
  {
    id: 140878,
    age_ratings: [
      {
        id: 53753,
      },
      {
        id: 57872,
        content_descriptions: [
          {
            id: 59785,
            description: "Violence",
          },
          {
            id: 59786,
            description: "Blood",
          },
          {
            id: 59787,
            description: "Suggestive Themes",
          },
          {
            id: 59788,
            description: "Language",
          },
          {
            id: 59789,
            description: "Crude Humor",
          },
          {
            id: 59790,
            description: "Use of Alcohol",
          },
          {
            id: 59791,
            description: "Mild Language",
          },
          {
            id: 59792,
            description: "Cartoon Violence",
          },
        ],
      },
    ],
    cover: {
      id: 119520,
      image_id: "co2k80",
    },
    first_release_date: 1606867200,
    genres: [
      {
        id: 2,
      },
    ],
    name: "Sam & Max: Save the World",
    summary:
      "The Freelance Police are back in a remastered version of their first season of episodic adventure games, lovingly updated by a small group of the original developers with the blessing of Sam & Max creator Steve Purcell.",
    total_rating: 83.3333333333333,
  },
  {
    id: 62,
    age_ratings: [
      {
        id: 861,
        content_descriptions: [
          {
            id: 1512,
            description: "Comic Mischief",
          },
          {
            id: 1513,
            description: "Use of Alcohol and Tobacco",
          },
        ],
      },
      {
        id: 36581,
        content_descriptions: [
          {
            id: 37472,
            description: "Violence",
          },
          {
            id: 37473,
            description: "Bad Language",
          },
        ],
      },
    ],
    cover: {
      id: 141222,
      image_id: "co30yu",
    },
    first_release_date: 878256000,
    genres: [
      {
        id: 2,
      },
    ],
    name: "The Curse of Monkey Island",
    summary:
      "Select from a variety of buccaneer hairstyles at The Barbery Coast. Enjoy a warm reunion with an old flame. Piracy never looked so good!\n\nLearn a valuable trade in lighthouse and VCR repair. Loot, sack and pillage this quaint Caribbean hamlet. Third in the legendary Monkey Island series of graphic adventures.\n\nFilm quality animation, voice, sound and music- the undead come to life before your very eyes! Incredible high-resolution (640 x 480) graphics. A barrel of gameplay- estimated 30-plus hours.\n\nTwo difficulty settings: regular and Mega-Monkey (now with much more puzzley goodness)!\n\nNew and improved insults suitable for swordfights and other fun occasions!",
    total_rating: 85.31935969567391,
  },
  {
    id: 8250,
    age_ratings: [
      {
        id: 58245,
      },
      {
        id: 82450,
        content_descriptions: [
          {
            id: 84535,
            description: "Use of Alcohol",
          },
          {
            id: 84536,
            description: "Strong Language",
          },
          {
            id: 84537,
            description: "Sexual Themes",
          },
          {
            id: 84538,
            description: "Violence",
          },
          {
            id: 84539,
            description: "Blood",
          },
        ],
      },
    ],
    cover: {
      id: 90773,
      image_id: "co1y1h",
    },
    first_release_date: 1404950400,
    genres: [
      {
        id: 2,
      },
    ],
    name: "Quest for Infamy",
    summary:
      "Quest For Infamy is a classic point and click adventure game, in which you assume the identity of 'Mister Roehm' a man trying to start over after running away from a shady past. Welcome to the little town of Volksville only to discover there is so much more going on in the valley than meets the eye! Come along and take a walk on the wild side with Roehm and discover just how infamous you might be.",
    total_rating: 73.0,
  },
  {
    id: 4759,
    age_ratings: [
      {
        id: 2412,
        content_descriptions: [
          {
            id: 3878,
            category: 24,
            description: "Suggestive Themes",
            checksum: "8c6f098b-d2ba-2c8c-bbcb-49c60316c417",
          },
          {
            id: 3879,
            category: 26,
            description: "Use of Alcohol",
            checksum: "18c9a9d1-8035-8139-d6c9-edbc97bbf686",
          },
          {
            id: 3880,
            category: 28,
            description: "Use of Tobacco",
            checksum: "ae74e176-d9a7-87d1-eb4e-f897583bd300",
          },
          {
            id: 3881,
            category: 29,
            description: "Violence",
            checksum: "ff2b7ecc-75cd-33b5-fd5b-454d85c050f1",
          },
        ],
      },
      {
        id: 7178,
        content_descriptions: [
          {
            id: 9491,
            category: 50,
            description: "Violence",
            checksum: "5b461441-2fa6-8505-55f2-7ab9758e1eb8",
          },
          {
            id: 9492,
            category: 55,
            description: "Bad Language",
            checksum: "b5be2556-101c-3f54-08f3-80cf2f553978",
          },
          {
            id: 9493,
            category: 58,
            description: "Online Gameplay",
            checksum: "8de8a0d7-8b43-fd1d-e82a-301507a6c80e",
          },
        ],
      },
    ],
    cover: {
      id: 86445,
      image_id: "co1up9",
    },
    first_release_date: 1376956800,
    genres: [
      {
        id: 4,
      },
    ],
    name: "Divekick",
    summary:
      "Divekick is the world’s first two-button fighting game. It distills the essence of the fighting game genre into just two buttons with no d-pad directional movement. It is a comedic parody of fighting game motifs and contains many humorous references to games (especially those in the Street Fighter franchise) as well as inside jokes from within the competitive fighting game community. Unlike most fighting games which are played using many buttons for many different kinds of movement and attacks, Divekick is played using only two buttons, Dive and Kick.",
    total_rating: 63.87789522371125,
  },
  {
    id: 6016,
    age_ratings: [
      {
        id: 22200,
        content_descriptions: [
          {
            id: 21200,
            category: 3,
            description: "Blood",
            checksum: "0a71e9db-f50b-469e-8352-a3f9ac9ceb69",
          },
          {
            id: 21201,
            category: 29,
            description: "Violence",
            checksum: "65b8b19b-70fb-a9d2-1217-3931016c6b49",
          },
        ],
      },
      {
        id: 22201,
        content_descriptions: [
          {
            id: 21202,
            category: 50,
            description: "Violence",
            checksum: "7672cc5c-96d4-ad40-7f4b-f15b009c2976",
          },
        ],
      },
    ],
    cover: {
      id: 156948,
      image_id: "co3d3o",
    },
    first_release_date: 1096329600,
    genres: [
      {
        id: 4,
      },
    ],
    name: "Rocky Legends",
    summary:
      "Be Rocky, Apollo Creed, Clubber Lang, or Ivan Drago in this fighting game prequel to the movie series. Using classic Rocky characters, locations, and music, Rocky: Legends puts the player in the boxing, ring recreating or rewriting the careers of the boxing franchise's heroes and villains.\n\nPlay the career mode or jump into a 1-2 player slugfest. As you progress through the career mode, you must train to improve your skills just like a professional would, and use your fight purse to unlock more playable characters, arenas, movie trailers and more. Combinations of punches can be executed powerfully.",
    total_rating: 69.5984383714445,
  },
  {
    id: 117525,
    age_ratings: [
      {
        id: 28859,
        content_descriptions: [
          {
            id: 28234,
            category: 9,
            description: "Fantasy Violence",
            checksum: "fa4eeae8-c24d-632e-12bb-31cf7913f608",
          },
          {
            id: 28235,
            category: 32,
            description: "Mild Language",
            checksum: "c83f7593-c211-09b9-5d13-a0f6697299d6",
          },
        ],
      },
      {
        id: 28860,
        content_descriptions: [
          {
            id: 28236,
            category: 50,
            description: "Violence",
            checksum: "763a1f59-98c0-991e-27e4-ad8e6dd75766",
          },
        ],
      },
    ],
    cover: {
      id: 141570,
      image_id: "co318i",
    },
    first_release_date: 1484179200,
    genres: [
      {
        id: 4,
      },
    ],
    name: "Kingdom Hearts Dream Drop Distance HD",
    summary:
      "Kingdom Hearts Dream Drop Distance HD is a full HD remaster of Kingdom Hearts 3D: Dream Drop Distance designed for the PlayStation 4. It was released as part of a package of three games entitled Kingdom Hearts HD 2.8 Final Chapter Prologue.\n\nThe game is largely the same as its Nintendo 3DS counterpart, but includes some additional features as well as alterations designed to adapt the game to the PS4. The conversion from two screens to one is the most notable of the changes seen. Little has changed in terms of gameplay. However, three new Dream Eaters have been introduced and minor game features have been altered to adapt to the PS4.",
    total_rating: 71.380310500688,
  },
  {
    id: 44570,
    age_ratings: [
      {
        id: 29605,
        content_descriptions: [
          {
            id: 29090,
            category: 50,
            description: "Violence",
            checksum: "763a1f59-98c0-991e-27e4-ad8e6dd75766",
          },
          {
            id: 29091,
            category: 55,
            description: "Bad Language",
            checksum: "af3823d6-fe26-f413-ac56-cc40db88f587",
          },
        ],
      },
      {
        id: 72009,
        content_descriptions: [
          {
            id: 74421,
            category: 1,
            description: "Alcohol Reference",
            checksum: "cb7f4ada-a8eb-f65d-54ae-936b8bdbc860",
          },
          {
            id: 74422,
            category: 24,
            description: "Suggestive Themes",
            checksum: "9cb3d527-d896-48a1-82ce-9db7fc7bb67d",
          },
          {
            id: 74423,
            category: 29,
            description: "Violence",
            checksum: "440fee63-c3f3-dc9c-fe46-876904c227af",
          },
          {
            id: 74424,
            category: 36,
            description: "Mild Suggestive Themes",
            checksum: "8464ec57-3fbd-d0b9-15b7-cfee1c490bc7",
          },
        ],
      },
    ],
    cover: {
      id: 225073,
      image_id: "co4to1",
    },
    first_release_date: 1234828800,
    genres: [
      {
        id: 4,
      },
    ],
    name: "Street Fighter IV: Collector's Edition",
    summary:
      "The Collector's Edition of Street Fighter IV includes:\n- a bonus disc with a 65-minute full-length Anime movie and promotional trailers\n- a CD soundtrack (US Only)\n- a collectible Ryu figurine for the PS3 edition\n- a collectible C. Viper figurine for the Xbox 360 edition\n- a Udon/Prima Hint book\n- 5 downloadable outfits.",
  },
  {
    id: 31302,
    age_ratings: [
      {
        id: 51559,
        content_descriptions: [
          {
            id: 56794,
            category: 21,
            description: "Strong Language",
            checksum: "789e2498-cbfb-f087-068d-df57d1ff0260",
          },
          {
            id: 56795,
            category: 3,
            description: "Blood",
            checksum: "62b6bfb9-4e62-4338-8281-9a7b8d5a65f5",
          },
          {
            id: 56796,
            category: 29,
            description: "Violence",
            checksum: "440fee63-c3f3-dc9c-fe46-876904c227af",
          },
          {
            id: 56797,
            category: 45,
            description: "Use of Alcohol and Tobacco",
            checksum: "803a83a1-85d2-f47a-26f5-5b868bc0e0aa",
          },
        ],
      },
      {
        id: 56270,
        content_descriptions: [
          {
            id: 58085,
            category: 50,
            description: "Violence",
            checksum: "763a1f59-98c0-991e-27e4-ad8e6dd75766",
          },
          {
            id: 58086,
            category: 55,
            description: "Bad Language",
            checksum: "af3823d6-fe26-f413-ac56-cc40db88f587",
          },
          {
            id: 58087,
            category: 52,
            description: "Drugs",
            checksum: "78f910c6-40cf-3a56-dacf-64efa74698ca",
          },
        ],
      },
    ],
    cover: {
      id: 59521,
      image_id: "lftbpf9qt1b0mdodenag",
    },
    first_release_date: 1480291200,
    genres: [
      {
        id: 4,
      },
    ],
    name: "Drunkn Bar Fight",
    summary:
      "VR PARTY GAME\nThe more you drink, the stronger you feel. And you are going to need it because you will need to fight everyone at the bar.",
    total_rating: 80.0,
  },
  {
    id: 42929,
    age_ratings: [
      {
        id: 29911,
        content_descriptions: [
          {
            id: 29617,
            category: 3,
            description: "Blood",
            checksum: "62b6bfb9-4e62-4338-8281-9a7b8d5a65f5",
          },
          {
            id: 29618,
            category: 11,
            description: "Language",
            checksum: "8ca220e4-5e93-30fe-6bed-371e3487e227",
          },
          {
            id: 29619,
            category: 24,
            description: "Suggestive Themes",
            checksum: "9cb3d527-d896-48a1-82ce-9db7fc7bb67d",
          },
          {
            id: 29620,
            category: 29,
            description: "Violence",
            checksum: "440fee63-c3f3-dc9c-fe46-876904c227af",
          },
        ],
      },
      {
        id: 75183,
      },
    ],
    cover: {
      id: 185911,
      image_id: "co3zg7",
    },
    first_release_date: 1473033600,
    genres: [
      {
        id: 4,
      },
    ],
    name: "Batman: Arkham Knight - Game of the Year Edition",
    summary:
      "In the explosive finale to the Arkham series, Batman faces the ultimate threat against the city he is sworn to protect. Includes:\n- Catwoman’s Revenge DLC\n- The four-mission Season of Infamy: Most Wanted DLC\n- Batgirl’s Arkham Asylum prequel A Matter of Family DLC\n- Robin’s A Flip of a Coin DLC\n- And the brand new Batman v Superman Batmobile Pack!\n\nFor PlayStation owners, Batman Arkham Knight offers the exclusive Scarecrow Nightmare Pack, in which Gotham falls victim to Scarecrow's fear toxin, transforming the famous city into a twisted, hellish nightmare. Tear through the city in the all-new Batmobile and face off against a towering vision of Scarecrow and his undead army as they spread terror on the streets.",
    total_rating: 93.92241045110669,
  },
  {
    id: 46779,
    age_ratings: [
      {
        id: 18859,
      },
    ],
    cover: {
      id: 162240,
      image_id: "co3h6o",
    },
    first_release_date: 790992000,
    genres: [
      {
        id: 4,
      },
    ],
    name: "World Heroes Perfect",
    summary:
      "One year after both the conclusion of the World Heroes Battle Fest and the defeat of Zeus, invitations has been sent to the 16 fighters by Dr. Brown, informing them of a new World Heroes tournament that'll help finally settle the question of who's the strongest fighter in history. With the 16 fighters preparing themselves in order to finally determine on who's the strongest fighter in history, Zeus seeks to gain his revenge against those who had caused his downfall, but little does Zeus and the rest of the fighters know and realize that an old enemy from the past is also back and that he too has his own personal desire for revenge as well.",
    total_rating: 66.81179919113261,
  },
  {
    id: 84633,
    age_ratings: [
      {
        id: 40504,
      },
      {
        id: 62167,
      },
    ],
    cover: {
      id: 212872,
      image_id: "co4k94",
    },
    first_release_date: 1489017600,
    genres: [
      {
        id: 4,
      },
    ],
    name: "Mini Sports Collection",
    summary:
      "Mini Sports Collection focuses on the fun part of each sport throwing you straight into the heart of each one! Bat in Baseball, shoot clay targets in Skeet Shooting, take down opponents in Wrestling, smash the ball in Tennis! Quick reflexes, fast button presses and accurate controls are required to make the highest rankings and succeed in 24 different achievements. Compete in solo events or try multiple event tournaments! The following 12 sports are included: 100m Sprint Pro Wrestling Skeet Shooting Baseball Speed Skating Fencing Rugby Tennis Soccer Archery Hammer Throw Table Tennis",
  },
  {
    id: 7498,
    age_ratings: [
      {
        id: 12732,
        content_descriptions: [
          {
            id: 16660,
            category: 7,
            description: "Crude Humor",
            checksum: "f405bcee-9784-1292-3aeb-40794deeddc5",
          },
          {
            id: 16661,
            category: 24,
            description: "Suggestive Themes",
            checksum: "e244a413-a5c1-bb5a-371a-36ac4c35f8bc",
          },
          {
            id: 16662,
            category: 29,
            description: "Violence",
            checksum: "420e4b52-bf53-2fed-be8b-4956e293eba4",
          },
          {
            id: 16663,
            category: 32,
            description: "Mild Language",
            checksum: "791810db-14b2-b04b-1d55-b783626c250e",
          },
          {
            id: 16664,
            category: 38,
            description: "Mild Blood",
            checksum: "a8a909a7-c89f-4089-4711-905d46e271f7",
          },
        ],
      },
      {
        id: 47830,
        content_descriptions: [
          {
            id: 52612,
            category: 50,
            description: "Violence",
            checksum: "763a1f59-98c0-991e-27e4-ad8e6dd75766",
          },
          {
            id: 52613,
            category: 55,
            description: "Bad Language",
            checksum: "af3823d6-fe26-f413-ac56-cc40db88f587",
          },
        ],
      },
      {
        id: 67384,
        content_descriptions: [
          {
            id: 69195,
            category: 60,
            description: "Sexual Content",
            checksum: "0af28ec9-3b93-6ad8-87c0-e30d9a26f9b3",
          },
        ],
      },
    ],
    cover: {
      id: 88287,
      image_id: "co1w4f",
    },
    first_release_date: 1424217600,
    genres: [
      {
        id: 4,
      },
    ],
    name: "Tekken 7",
    summary:
      "Experience the epic conclusion of the Mishima clan and unravel the reasons behind each step of their ceaseless fight. Powered by Unreal Engine 4, Tekken 7 features stunning story-driven cinematic battles and intense duels that can be enjoyed with friends and rivals alike through innovative fight mechanics.",
    total_rating: 81.6586007599389,
  },
  {
    id: 8407,
    age_ratings: [
      {
        id: 81205,
        content_descriptions: [
          {
            id: 82834,
            category: 33,
            description: "Mild Violence",
            checksum: "0d876910-e0fc-5304-bfaa-ea284a46decc",
          },
        ],
      },
    ],
    cover: {
      id: 8863,
      image_id: "vb81k4m8keacynjlcrnx",
    },
    first_release_date: 504835200,
    genres: [
      {
        id: 4,
      },
    ],
    name: "International Karate",
    summary:
      "This is the game that put System 3 on the map. First unveiled at the PCW Show in 1985. Epyx licensed the game in the US as World Karate Championship and it became the first UK product to get a US billboard No.1. It even won a CES Showcase award.",
    total_rating: 84.09932699382381,
  },
  {
    id: 6939,
    age_ratings: [
      {
        id: 13940,
        content_descriptions: [
          {
            id: 17686,
            description: "Violence",
          },
          {
            id: 17687,
            description: "Bad Language",
          },
        ],
      },
      {
        id: 13941,
        content_descriptions: [
          {
            id: 17688,
            description: "Blood and Gore",
          },
          {
            id: 17689,
            description: "Intense Violence",
          },
          {
            id: 17690,
            description: "Sexual Themes",
          },
          {
            id: 17691,
            description: "Strong Language",
          },
        ],
      },
    ],
    cover: {
      id: 91080,
      image_id: "co1ya0",
    },
    first_release_date: 1193097600,
    genres: [
      {
        id: 5,
      },
    ],
    name: "Clive Barker's Jericho",
    summary:
      "Jericho is a horror-themed FPS from the mind of screen legend Clive Barker. In the game, a Jericho Team must fight through a lost city to destroy the evil at its heart.",
    total_rating: 71.2410908949051,
  },
  {
    id: 145191,
    age_ratings: [
      {
        id: 34168,
        content_descriptions: [
          {
            id: 34988,
            description: "Blood and Gore",
          },
          {
            id: 34989,
            description: "Intense Violence",
          },
          {
            id: 34990,
            description: "Language",
          },
        ],
      },
      {
        id: 34169,
        content_descriptions: [
          {
            id: 34991,
            description: "Violence",
          },
        ],
      },
      {
        id: 78317,
        content_descriptions: [
          {
            id: 80372,
            description: "Violence",
          },
          {
            id: 80373,
            description: "Fear, Horror, Threatening",
          },
        ],
      },
    ],
    cover: {
      id: 135522,
      image_id: "co2wki",
    },
    first_release_date: 1130198400,
    genres: [
      {
        id: 5,
      },
    ],
    name: "Resident Evil 4",
    summary:
      "Despite earlier rumors of a downgraded port due to the PlayStation 2's hardware limitations, this port of Resident Evil 4 have been generally favorable. Almost all the GameCube's real-time cut scenes were converted into movie files in order to maintain a better quality. Furthermore, voices and sound effects quality outside the cut-scenes had been reduced due to disc space being quickly used and audio RAM constraints. Capcom added new content made specifically for this port to compensate for the late release, such as minigames, documentaries and costumes.",
    total_rating: 85.11266920345261,
  },
  {
    id: 194444,
    age_ratings: [
      {
        id: 62466,
      },
      {
        id: 62467,
      },
      {
        id: 62468,
      },
      {
        id: 82789,
      },
    ],
    cover: {
      id: 213189,
      image_id: "co4khx",
    },
    first_release_date: 562550400,
    genres: [
      {
        id: 5,
      },
    ],
    name: "Bubble Bobble",
  },
  {
    id: 117106,
    age_ratings: [
      {
        id: 39043,
        content_descriptions: [
          {
            id: 41177,
            description: "Blood",
          },
          {
            id: 41178,
            description: "Violence",
          },
        ],
      },
      {
        id: 55189,
      },
      {
        id: 69631,
        content_descriptions: [
          {
            id: 71432,
            description: "Violence",
          },
        ],
      },
    ],
    cover: {
      id: 116649,
      image_id: "co2i09",
    },
    first_release_date: 1613433600,
    genres: [
      {
        id: 5,
      },
    ],
    name: "Speed Limit",
    summary:
      "Speed Limit is a non-stop genre-warping arcade experience that never slows down. No cuts, no lapses in the chaos, Speed Limit is an old-school action extravaganza boiled down to its core elements: Hard. Fast. Addictive.\n\nAs soon as you think you've learned how the game works, it changes to a completely different genre, taking you through the history of the golden arcade era.\n\nFight through a nail-biting side-scrolling shooter, race to the finish in an explosive top-down car chase, take flight in a thrilling fake-3D dogfight, and expect the unexpected. Speed Limit seamlessly changes styles, transforms the gameplay, and offers new challenges the moment you feel comfortable.\n\nRunning. Driving. Flying. Dying (many, many times!) - From the moment you click play to the moment you die, you are in control.\n\nAnd you will die. A lot.",
    total_rating: 70.0,
  },
  {
    id: 619,
    age_ratings: [
      {
        id: 57774,
        content_descriptions: [
          {
            id: 59606,
            description: "Intense Violence",
          },
          {
            id: 59607,
            description: "Blood and Gore",
          },
          {
            id: 59608,
            description: "Strong Language",
          },
        ],
      },
      {
        id: 57775,
        content_descriptions: [
          {
            id: 59609,
            description: "Bad Language",
          },
          {
            id: 59610,
            description: "Violence",
          },
        ],
      },
    ],
    cover: {
      id: 104231,
      image_id: "co28fb",
    },
    first_release_date: 1109635200,
    genres: [
      {
        id: 5,
      },
    ],
    name: "Brothers in Arms: Road to Hill 30",
    summary:
      "Based on a true story. Set during the famous airdrop before the invasion at Normandy, where Sgt. Matt Baker and his squad of 101st Airborne Paratroopers were scattered over the French countryside.\n\t\t\t\t\tAs the story unfolds, you must choose between the success of your mission and the lives of your men - your brothers in arms.\n\t\t\t\t\tBrothers In Arms: Road to Hill 30 will immerse players in the historic, eight-day invasion of Normandy - with unparalleled imagery, authenticity, sound, and gameplay.\n\t\t\t\t\tOne of a kind: Brothers In Arms Road to Hill 30 is the only first-person tactical shooter set in WWII.\n\t\t\t\t\tReal military tactics: Intuitive and easy-to-use squad controls appeal to both the hardcore and mainstream gaming audience.\n\t\t\t\t\tReal soldiers: Featuring a cast of more than 20 characters, each with a unique personality, appearance, and style.\n\t\t\t\t\tRevolutionary AI system: Allies and enemies use the standard operating procedures of fire and maneuver to flank and kill their foes.\n\t\t\t\t\tUnprecedented authenticity: Historically accurate and detailed battlefields, events, and equipment re-created from Army Signal Corps photos, aerial reconnaissance imagery, and eyewitness accounts.\n\t\t\t\t\tInnovative multiplayer: Players command three-man AI teams in a battle of wits and skill to accomplish exciting objectives.\n\t\t\t\t\tAward-winning team: Gearbox Software, creators of Half-Life Opposing Force and developers of James Bond: Nightfire, Counter-Strike, and Halo (PC).",
    total_rating: 81.7406815572118,
  },
  {
    id: 139958,
    age_ratings: [
      {
        id: 51046,
      },
      {
        id: 57318,
        content_descriptions: [
          {
            id: 58990,
            description: "Blood and Gore",
          },
          {
            id: 58991,
            description: "Intense Violence",
          },
          {
            id: 58992,
            description: "Partial Nudity",
          },
          {
            id: 58993,
            description: "Strong Language",
          },
          {
            id: 58994,
            description: "Strong Sexual Content",
          },
          {
            id: 58995,
            description: "Use of Drugs",
          },
        ],
      },
    ],
    cover: {
      id: 136420,
      image_id: "co2x9g",
    },
    first_release_date: 1593475200,
    genres: [
      {
        id: 5,
      },
    ],
    name: "Wolfenstein: Alt History Collection",
    summary:
      "The Wolfenstein: Alt History Collection takes players on an epic adventure through a grim alternate history where Nazis have achieved global domination. Shoot, stab, and kill your way through the Nazi ranks in four critically acclaimed games in the Wolfenstein franchise:\n\nWolfenstein: The New Order\nWolfenstein: The Old Blood\nWolfenstein II: The New Colossus\nWolfenstein: Youngblood",
  },
  {
    id: 66060,
    age_ratings: [
      {
        id: 47235,
      },
      {
        id: 69429,
        content_descriptions: [
          {
            id: 71147,
            description: "Mild Cartoon Violence",
          },
        ],
      },
    ],
    cover: {
      id: 108748,
      image_id: "co2bws",
    },
    first_release_date: 1301011200,
    genres: [
      {
        id: 5,
      },
    ],
    name: "Face Raiders",
    summary:
      "Face Raiders is an augmented reality game in which players must shoot down flying faces using the two outer cameras on the 3DS.",
    total_rating: 73.0,
  },
  {
    id: 100575,
    age_ratings: [
      {
        id: 33719,
        content_descriptions: [
          {
            id: 34468,
            description: "Blood",
          },
          {
            id: 34469,
            description: "Violence",
          },
        ],
      },
      {
        id: 52060,
      },
    ],
    cover: {
      id: 133755,
      image_id: "co2v7f",
    },
    first_release_date: 1525478400,
    genres: [
      {
        id: 5,
      },
    ],
    name: "The Last DeadEnd",
    summary:
      'The Last Dead End is an adventure game with the elements of FPS and horror.\n\nIn this game, we play the role of young scientist Farhad Novruzov, who returned to his homeland to help in filming a documentary movie for an international television channel. Here he faces strange events connected with the ancient religion of Zoroastrianism and the scientist has to find out the reason of these events.\nThe game takes place both from the first person and the third person. Most actions and active research take place in the first person view. The main action of the game takes place in Baku, Azerbaijan. It takes place in an actually existing inner city of Baku. This is the oldest district of the city with a thousand-year history, surrounded by a fortress wall, inside which along with the old streets, there are dozens of historical and archaeological sites.\nThere are several regular enemies in the game, as well as strong enemies (bosses), that were inspired by local legends. In the fight against some of them, there is its own tactic of winning them.\n\nThe game has an extensive encyclopedia and the possibility of research. Articles in a vast encyclopedia, containing articles about historical objects, characters, symbols, etc., are added along the course of the game. In the game there are various items that can be selected, viewed from all sides, learn information about them. With the help of technological glasses, which the main character has, you can read and decipher the inscriptions in the ancient languages that are on the walls of the old city.\n\nSome of the locations are built one-to-one with real city and historical buildings, the game has many objects that reflect the national flavor of the old city.\n\nMost of the game takes place in unusual locations for the genre - a flooded fortress, an ancient palace, ancient ruins, etc. This is one of the rare games in the genre, with elements of horror, where action takes place in a real city, enveloped in a mystical atmosphere.\n\nSurvival mode. Special mode where you can fight with different enemies in various maps. There are three types of survival: try to hold out "waves" of enemies, kill all enemies in a certain time and finally, to last as long as possible, remaining alive.',
  },
  {
    id: 129907,
    age_ratings: [
      {
        id: 27174,
      },
    ],
    cover: {
      id: 92308,
      image_id: "co1z84",
    },
    first_release_date: 1558051200,
    genres: [
      {
        id: 5,
      },
    ],
    name: "PUBG Mobile: Season 7",
    summary:
      "Be the King in Royal Pass Season 7. \nAlso, Godzilla has arrived!",
  },
  {
    id: 536,
    age_ratings: [
      {
        id: 1428,
        content_descriptions: [
          {
            id: 3037,
            description: "Blood and Gore",
          },
          {
            id: 3038,
            description: "Drug Reference",
          },
          {
            id: 3039,
            description: "Intense Violence",
          },
          {
            id: 3040,
            description: "Sexual Themes",
          },
          {
            id: 3041,
            description: "Strong Language",
          },
          {
            id: 3042,
            description: "Use of Alcohol",
          },
        ],
      },
      {
        id: 67948,
        content_descriptions: [
          {
            id: 69796,
            description: "Violence",
          },
        ],
      },
      {
        id: 83051,
        content_descriptions: [
          {
            id: 85213,
            description: "Violence",
          },
          {
            id: 85214,
            description: "Bad Language",
          },
        ],
      },
      {
        id: 83052,
        content_descriptions: [
          {
            id: 85215,
            description: "Sexuality",
          },
          {
            id: 85216,
            description: "Violence",
          },
          {
            id: 85217,
            description: "Language",
          },
          {
            id: 85218,
            description: "Alcohol, Tobacco, Drug",
          },
        ],
      },
      {
        id: 83053,
        content_descriptions: [
          {
            id: 85219,
            description: "Violência Extrema (Extreme Violence)",
          },
          {
            id: 85220,
            description: "Drogas Lícitas (Legal Drugs)",
          },
          {
            id: 85221,
            description: "Linguagem Imprópria (Inappropriate Language)",
          },
        ],
      },
      {
        id: 83054,
      },
    ],
    cover: {
      id: 168430,
      image_id: "co3lym",
    },
    first_release_date: 1315267200,
    genres: [
      {
        id: 5,
      },
    ],
    name: "Dead Island",
    summary:
      "Dead Island is a action role-playing survival horror video game developed by Polish developer Techland and it is centered on the challenge of surviving a zombie-infested open world island with a major emphasis on melee combat, and the making of weapons and weapon mods. You gain XP and level up, gaining skill points.\n\nDead Island takes place on the fictional (based off a true island near Papua New Guinea) island of Banoi. You play as one of four different characters with different skills and skill trees, and different intro videos. The worlds is half open, you can roam the world as you wish but you will have to go through the main story to progress to the next large open area\n\nThe combat is largely melee focused, but you also have firearms and throwing weapons, bullets and guns are scares in the start of the game, but towards the end of the game they are much easier to find. The zombies are mostly slow, but there is a wide range of different zombies throughout the game.\n\nDead Island: Riptide, was released in 2013. A spin-off, Escape Dead Island,\nDead Island 2, is set to be released in 2016.",
    total_rating: 70.34458993341434,
  },
  {
    id: 43385,
    age_ratings: [
      {
        id: 66157,
        content_descriptions: [
          {
            id: 67812,
            description: "Strong Lyrics",
          },
        ],
      },
    ],
    cover: {
      id: 53909,
      image_id: "suw5u6tjjsfxz4q92skh",
    },
    first_release_date: 1134604800,
    genres: [
      {
        id: 7,
      },
    ],
    name: "Flow: Urban Dance Uprising",
    summary:
      "Flow: Urban Dance Uprising is a breakdancing rhythm game that features a soundtrack of hip hop artists including 50 urban dance tracks by the likes of the Sugar Hill Gang, Kurtis Blow, and Eric B & Rakim. Gamers can compete against as many as seven other players and choose from a host of dancers that perform classic breakdance moves in one of 10 different urban settings. \n \nFlow was originally announced as a component to Eidos' Get On Da Mic (and was known as Get On Da Floor.) In 2005, it became a PS2 exclusive title, brought to market by publisher Ubisoft.",
  },
  {
    id: 3300,
    age_ratings: [
      {
        id: 48140,
        content_descriptions: [
          {
            id: 53109,
            description: "Mild Lyrics",
          },
          {
            id: 53110,
            description: "Lyrics",
          },
        ],
      },
    ],
    cover: {
      id: 90007,
      image_id: "co1xg7",
    },
    first_release_date: 1319500800,
    genres: [
      {
        id: 7,
      },
    ],
    name: "Just Dance Kids 2",
    summary:
      "The coolest dance experience for kids is back — Just Dance Kids 2, now for play with PlayStation Move!",
    total_rating: 66.25,
  },
  {
    id: 131832,
    age_ratings: [
      {
        id: 40038,
        content_descriptions: [
          {
            id: 42657,
            description: "Mild Fantasy Violence",
          },
        ],
      },
      {
        id: 54159,
      },
    ],
    cover: {
      id: 94172,
      image_id: "co20nw",
    },
    first_release_date: 1584835200,
    genres: [
      {
        id: 7,
      },
    ],
    name: "Rhythm of the Gods",
    summary:
      "Join the strongest mortal warrior, Lyrik, and slide, jump & slash to the beat to please the Gods of Rhythm! Solve the problems that the mortal realm faces in this auto-running, Greek-inspired rhythm game. Keep in time and reveal each gods' true tune with unique beatmaps.",
  },
  {
    id: 47301,
    age_ratings: [
      {
        id: 77034,
        content_descriptions: [
          {
            id: 79384,
            description: "Mild Lyrics",
          },
        ],
      },
    ],
    cover: {
      id: 27032,
      image_id: "lvkyx94bwi86agqqafbz",
    },
    first_release_date: 1071878400,
    genres: [
      {
        id: 7,
      },
    ],
    name: "Dance Dance Revolution: Ultramix",
    summary:
      'On November 18, 2004 Konami Digital Entertainment of America released Dance Dance Revolution ULTRAMIX 2 on the Xbox in the United States. To encourage sales, they released a limited edition music CD featuring songs from the game. \n \nThese "exclusive music samplers" are available only to those who reserve the game before its release, typically at a GameStop or EB Games retail outlet.[1] The CD contains tracks taken directly from the game as well as unique remixes done by Konami\'s in-house artists. Because of Dance Dance Revolution\'s musical nature the music found in the game and on the CD feature a broad range of musical styles. \n \nKnown to Konami as V-RARE SOUNDTRACK-4 USA, the V-RARE moniker had first been used by Konami to release similar albums in Japan to commemorate Bemani game releases there and still are to this date are. In Japan the music CDs are usually bundled with a given game upon release. To date Konami has released 13 V-RARE discs in the US to promote various Dance Dance Revolution game releases and has released them through various video game and non-video game vendors such as GameStop, EB Games, Toys "R" Us, and Burger King.',
  },
  {
    id: 115800,
    age_ratings: [
      {
        id: 33648,
      },
    ],
    cover: {
      id: 133445,
      image_id: "co2uyt",
    },
    first_release_date: 1552348800,
    genres: [
      {
        id: 7,
      },
    ],
    name: "Note: A Composer and a Note",
    summary:
      '"I\'VE DONE SOMETHING WONDERFUL" _ PLAY Mephistowaltz NOTE : a composer and a note is an indie minimalist 2d platformer for every artist in the world. Player is both a composer and a note. This is the journey for composition with a unique mechanic. Player plays like playing the piano. It offers a thrill, fresh and meaning.',
  },
  {
    id: 16063,
    age_ratings: [
      {
        id: 59809,
        content_descriptions: [
          {
            id: 61911,
            description: "Alcohol Reference",
          },
          {
            id: 61912,
            description: "Mild Language",
          },
        ],
      },
    ],
    cover: {
      id: 21151,
      image_id: "mszgv9jzhlbencqylevg",
    },
    first_release_date: 1262390400,
    genres: [
      {
        id: 7,
      },
    ],
    name: "Iron Roses",
    summary:
      'Help Alex navigate a bustling urban landscape as she frantically searches for her former Iron Roses™ band mates and tries to convince them to enter the upcoming "Battle of the Bands". Track down lost equipment, interact with intriguing characters, and use all of your problem solving skills as you make the long, hard climb to the top!',
  },
  {
    id: 47940,
    age_ratings: [
      {
        id: 67808,
      },
    ],
    cover: {
      id: 27202,
      image_id: "brga1cxylxcm26qwlptn",
    },
    first_release_date: 1320364800,
    genres: [
      {
        id: 7,
      },
    ],
    name: "Kids Learn Music A+ Edition",
  },
  {
    id: 3304,
    age_ratings: [
      {
        id: 8568,
        content_descriptions: [
          {
            id: 11326,
            description: "Mild Lyrics",
          },
        ],
      },
      {
        id: 8569,
      },
    ],
    cover: {
      id: 110111,
      image_id: "co2cyn",
    },
    first_release_date: 1311033600,
    genres: [
      {
        id: 7,
      },
    ],
    name: "The Smurfs Dance Party",
    summary:
      "The Smurfs are back in an all new dancing video game, based on the best-selling Just Dance & Just Dance 2. Kids and parents will dance to popular, top of the chart songs in this fun, high-energy game with their favorite Smurfs characters.",
  },
  {
    id: 19880,
    age_ratings: [
      {
        id: 58710,
        content_descriptions: [
          {
            id: 61211,
            description: "Blood and Gore",
          },
          {
            id: 61212,
            description: "Fantasy Violence",
          },
        ],
      },
      {
        id: 68837,
        content_descriptions: [
          {
            id: 70518,
            description: "Sexual Content",
          },
        ],
      },
    ],
    cover: {
      id: 97690,
      image_id: "co23dm",
    },
    first_release_date: 1475107200,
    genres: [
      {
        id: 7,
      },
    ],
    name: "The Metronomicon: Slay The Dance Floor",
    summary:
      "Packing in a fully-fledged story mode with a colourful cast of musically-empowered heroes and villains, The Metronomicon sees you take control a party of eight newly graduated masters of the \"rhythmic combat arts\" to wage musical warfare against a multitude of dance-mongering fiends. By switching between four concurrent hero-controlled tracks on-the-fly, you'll select and activate a wide array of abilities and spells, buffs and nukes, with your performance and timing all-important in ensuring the effectiveness of your moves.\nIn the RPG spirit, you'll need to improve your characters' stats, hunt down powerful equipment, and combine a multitude of newly-learned abilities - switching between tanking, healing, buffing, and damage-dealing classes as required in real time.",
    total_rating: 80.983498349835,
  },
  {
    id: 136522,
    age_ratings: [
      {
        id: 29281,
      },
    ],
    cover: {
      id: 112366,
      image_id: "co2epa",
    },
    first_release_date: 1567296000,
    genres: [
      {
        id: 7,
      },
    ],
    name: "Cook to the Beat",
    summary:
      "Cook to the Beat is a culinary-themed rhythm game where you tap to the music to create a variety of dishes each with it's own original soundtrack. Chop, season and tenderize to the rhythm to build up your combo and make the whole kitchen into a dance party! (Disco Ball Included) \n \nCollect and customize your very own animal chefs with wacky Aprons and Hats! \n \nMaster the dishes and rise through the chef ranks to become the very best Chef like no one ever was!",
  },
  {
    id: 19552,
    age_ratings: [
      {
        id: 8877,
      },
      {
        id: 9094,
      },
    ],
    cover: {
      id: 114278,
      image_id: "co2g6e",
    },
    first_release_date: 1471305600,
    genres: [
      {
        id: 8,
      },
    ],
    name: "Grow Up",
    summary:
      'BUD is back! Join this adorable wobbly robot on his fantastical acroBUDic adventure to the moon.\n\n"Grow Up is a joyful and ageless fantasy game. BUD, a clumsy and charming robot, is on a mission to find MOM, his parental spaceship. Leap, bounce, and float in a vast open world as BUD explores the new planet in this beautiful acrobatic adventure."',
    total_rating: 67.63970736193366,
  },
  {
    id: 4091,
    age_ratings: [
      {
        id: 2120,
      },
    ],
    cover: {
      id: 79029,
      image_id: "co1oz9",
    },
    first_release_date: 1107475200,
    genres: [
      {
        id: 8,
      },
    ],
    name: "Robots",
    summary:
      "Live the adventures of a genius inventor robot named Rodney Copperbottom as he moves to the big city to work for the company founded by his childhood hero. When Rodney uncovers a villain's plot to take over the city, the brave young bot, with the help of his new friends, overcomes all obstacles to realize his dreams -- and make the world a better place for all robots. Take wild rides in fast-paced robot vehicles, upgrade your gadgets with cooler, more useful parts, and team up with your trusty Wonderbot to solve challenging puzzles, battle evil bots, and explore a highly interactive 3D universe that brings the world of Robots the Movie to life.",
    total_rating: 54.56820648886495,
  },
  {
    id: 15487,
    age_ratings: [
      {
        id: 70573,
        content_descriptions: [
          {
            id: 72502,
            description: "Comic Mischief",
          },
        ],
      },
    ],
    cover: {
      id: 123642,
      image_id: "co2nei",
    },
    first_release_date: 972518400,
    genres: [
      {
        id: 8,
      },
    ],
    name: "The Grinch",
    summary:
      "First, it was a beloved book, then it was an animated special, next it was a movie, and now Dr. Seuss' HOW THE GRINCH STTOLE CHRISTMAS is a hand-held video game. You play both the Grinch and his faithful pooch, Max, in this creative adaptation. Much like the classic story, THE GRINCH takes place in the idyllic Whoville--where your aim is to cease the event called Christmas. You attempt to do so by wreaking havoc and solving challenging puzzles. The folks of Whoville will try to stop your efforts with love and happiness (blech!), so be on your toes if you hope to avoid them and effectively ruin the holiday. To make things a little easier, you can throw snowballs at the peacenik villagers to keep them at a distance. Each level will present new obstacles and challenges, and the Dr. Seuss world is faithfully translated to the video game format. Whether you're a genuine grouch or you're just in the mood for a great adventure, THE GRINCH is hilarious fun for everyone.",
    total_rating: 73.1491712707182,
  },
  {
    id: 185947,
    age_ratings: [
      {
        id: 50507,
      },
      {
        id: 50508,
      },
    ],
    cover: {
      id: 200901,
      image_id: "co4b0l",
    },
    first_release_date: 1639094400,
    genres: [
      {
        id: 8,
      },
    ],
    name: "Wukong",
    summary:
      'A small and colorful platformer, inspired by the "Journey to the West" novel. Every level contains a new mechanic that will explore new ways to use your skills.\nIn Wukong you play as the Monkey Key in a quest to retrieve the lost scrolls. Jump, spin, throw your staff, and step on the enemies that will try to put an end to your journey.',
    total_rating: 60.0,
  },
  {
    id: 125251,
    age_ratings: [
      {
        id: 37567,
      },
      {
        id: 53943,
      },
    ],
    cover: {
      id: 204324,
      image_id: "co4dno",
    },
    first_release_date: 1572566400,
    genres: [
      {
        id: 8,
      },
    ],
    name: "Twister Road",
    summary:
      "Random twisting roads every time you play so you'll never play the same game twice! Endless twisting roads for endless fun!",
  },
  {
    id: 27204,
    age_ratings: [
      {
        id: 72813,
        content_descriptions: [
          {
            id: 75278,
            description: "Animated Violence",
          },
        ],
      },
    ],
    cover: {
      id: 88645,
      image_id: "co1wed",
    },
    first_release_date: 846720000,
    genres: [
      {
        id: 8,
      },
    ],
    name: "Hunter Hunted",
    summary:
      "Hunter Hunted is a side-scrolling action computer game developed by Sierra Entertainment and published on October 31, 1996. The player controls a humanoid creature (either a muscular human called Jake or a minotaur-like creature named Garathe Den) who fights enemies, completes objectives, and tries to find the hidden exit in each level. Of the two, Garathe possesses superior strength and stamina, while Jake can take advantage of more sophisticated weaponry.",
  },
  {
    id: 1579,
    age_ratings: [
      {
        id: 49644,
        content_descriptions: [
          {
            id: 55395,
            description: "Mild Violence",
          },
        ],
      },
    ],
    cover: {
      id: 174365,
      image_id: "co3qjh",
    },
    first_release_date: 1036454400,
    genres: [
      {
        id: 8,
      },
    ],
    name: "Spyro: Enter the Dragonfly",
    summary:
      "Spyro: Enter the Dragonfly is the fourth game in the Spyro the Dragon series and the first Spyro game to be on the PlayStation 2 and Nintendo Gamecube. Gameplay is similar to the previous three console games. The only playable character is Spyro, however he can man several vehicles: Hunter's Manta Ray and the UFO's make a return appearance from Year of the Dragon, alongside two new vehicles, the tank and the Spitfire attack plane.\n\nThe game faced development issues that affected the final product, which resulted in being poorly made. Upon release, it was widely criticized for its numerous glitches, long loading times, and choppy framerate, with fans and critics calling it the worst entry in the franchise.",
    total_rating: 72.53915279620179,
  },
  {
    id: 2191,
    age_ratings: [
      {
        id: 13346,
        content_descriptions: [
          {
            id: 17519,
            description: "Comic Mischief",
          },
          {
            id: 17520,
            description: "Mild Cartoon Violence",
          },
        ],
      },
      {
        id: 47152,
      },
      {
        id: 47153,
      },
      {
        id: 62454,
      },
      {
        id: 62455,
      },
      {
        id: 62456,
      },
      {
        id: 62457,
      },
    ],
    cover: {
      id: 95605,
      image_id: "co21rp",
    },
    first_release_date: 1176076800,
    genres: [
      {
        id: 8,
      },
    ],
    name: "Super Paper Mario",
    summary:
      "Super Paper Mario is a platformer role-playing game released for the Wii. Unlike other Paper Mario games, Super Paper Mario is a platformer and does not use a turn-based battle system, but rather incorporates RPG elements with platforming. The game fuses elements of 2D and 3D gameplay together, shifting back and forth between dimensions. In addition to the regular Paper Mario aesthetics, the game also uses many novel character, enemy, and background designs, including a fully pixelated world and the use of sprites from the classic Super Mario Bros. for certain techniques.",
    total_rating: 77.64086791615465,
  },
  {
    id: 4820,
    age_ratings: [
      {
        id: 64936,
        content_descriptions: [
          {
            id: 66163,
            description: "Mild Cartoon Violence",
          },
        ],
      },
    ],
    cover: {
      id: 137239,
      image_id: "co2xw7",
    },
    first_release_date: 1254960000,
    genres: [
      {
        id: 8,
      },
    ],
    name: "Drawn to Life: The Next Chapter",
    summary:
      "Drawn to Life: The Next Chapter is the title of two sequels of the video game Drawn to Life, that were published by THQ. One of the games was developed by 5th Cell for the Nintendo DS, while the other was created by Planet Moon Studios for the Wii.[1][\n\nThe game begins with a surreal sequence, wherein an unknown party asks the player “What do you remember about that day?” The player is given several dialogue choices that build a cohesive description of \"that day\", though at this time, the player is not aware of the event's importance (or even occurrence). Before the game properly begins, the player is asked to draw an image depicting this mysterious scene, introducing them to the game's core \"draw\" functionality.\n\nFollowing this is an animation sequence wherein one of the characters from the previous game, Heather, recovers from a nightmare. She is shown to possess a red-colored jewel pendant. In the same sequence, Heather is abducted by a darkness which emanated from a scepter she discovered in a beached treasure chest in the middle of the night. The next morning, when the other characters realize she's missing, a search for her is dramatically cut short by Wilfre, who causes the majority of the Raposa villagers to vanish, reveals himself as Heather's captor, and ultimately drains the Village of color. The remaining characters flee to the back of a massive turtle delivered, upon request, by the Creator.\n\nTheir numbers sorely reduced and their home ruined, the game follows the Raposa's struggle to reunite with their fellows and, with the aid of the Creator's Hero of Creation, defeat Wilfre before he can realize his as-yet unknown goals. The remaining members of the Village travel to Watersong, Lavasteam, the Galactic Jungle, and Wilfre's Wasteland, a combination of all three villages. At Watersong, Mari and Jowee meet Sock, who is an important character later in the story.",
    total_rating: 84.17728721339594,
  },
  {
    id: 1094,
    age_ratings: [
      {
        id: 13544,
      },
      {
        id: 28099,
      },
      {
        id: 68372,
      },
    ],
    cover: {
      id: 94883,
      image_id: "co217n",
    },
    first_release_date: 848275200,
    genres: [
      {
        id: 8,
      },
    ],
    name: "Donkey Kong Country 3: Dixie Kong's Double Trouble!",
    summary:
      "Monkey Mayhem Lives On!\n\nKiddy Kong is a portly primate toddler with incredible power and agility! He teams up with Dixie Kong to stop the ever-present army of Kremlings. The game play and ACM graphics just keep getting better in this visually stunning installment in one of the most popular video game series of all time!\n\nCombining their unique abilities as they throw each other into action, Dixie Kong and Kiddy Kong set off to rescue Diddy Kong and Donkey Kong. Collect tons of treasure, grab billions of bananas and find more secret stuff than you've ever seen (or not seen) as you set off on the greatest DKC adventure yet! The final showdown with KAOS takes place in a cliff-top laboratory at the End of the World. It could get seriously ugly. Monkey mayhem lives on in this exotic island adventure!",
    total_rating: 74.6121357307916,
  },
  {
    id: 12266,
    age_ratings: [
      {
        id: 49043,
      },
      {
        id: 79827,
      },
    ],
    cover: {
      id: 12489,
      image_id: "lhc8cfr1izwzewr6vmrd",
    },
    first_release_date: 378604800,
    genres: [
      {
        id: 9,
      },
    ],
    name: "Qix",
    summary:
      'Draw boxes to claim as much screen as possible without getting in the path of the "Qix" and "Sparx". Draw slower for more points and hope that you have enough coins. Simple but very addicting!',
    total_rating: 69.6868516324727,
  },
  {
    id: 47646,
    age_ratings: [
      {
        id: 35563,
        content_descriptions: [
          {
            id: 36467,
            description: "Violence",
          },
          {
            id: 36468,
            description: "Partial Nudity",
          },
        ],
      },
      {
        id: 59383,
      },
    ],
    cover: {
      id: 27128,
      image_id: "gtttevq5f5xqjpemuqvg",
    },
    first_release_date: 1345593600,
    genres: [
      {
        id: 9,
      },
    ],
    name: "Picdun 2: Witch's Curse",
    summary:
      "Picdun 2: Witch's Curse is a 3D dungeon RPG set in the mysterious dungeon called \"Picdun.\" Choose your partner from three female adventurers--the Archer, the Whipper and the Spellcaster--and venture into the depths of the dungeon together. Sixty stages await you, filled with a wide variety of puzzles ranging from easy to mind-bendingly difficult! \n \nPlaces you go are mapped automatically, and once you cover all the tiles on a floor you will complete the picture hidden underneath. \n \nAs in the previous game, battles feature a large number of dynamic and powerful enemies. The hero is unable to attack due to the Witch's Curse, so he must protect his partner with a shield and guide her to attack by chopping down or slashing sideways. Also, you can trigger a power move by raising the shield at the same time as an enemy attack. \n \nExplore the depths of the dungeon to uncover the mystery of the Witch's Curse!",
  },
  {
    id: 15882,
    age_ratings: [
      {
        id: 9902,
      },
      {
        id: 9903,
      },
    ],
    cover: {
      id: 15514,
      image_id: "hbq34zplc4cs9wvhze5n",
    },
    first_release_date: 1025395200,
    genres: [
      {
        id: 9,
      },
    ],
    name: "Chessmaster 9000",
  },
  {
    id: 186554,
    age_ratings: [
      {
        id: 50935,
      },
    ],
    cover: {
      id: 202984,
      image_id: "co4cmg",
    },
    first_release_date: 1641168000,
    genres: [
      {
        id: 9,
      },
    ],
    name: "Minepull",
    summary:
      "More than just a puzzle game. Minepull highlights the fun part of puzzle-solving and brain teasers. Single Player Mode: Do you like solving puzzles while calculating your next move? Minepull gives you the perfect opportunity to taste that experience. Local Multiplayer Mode: Who does not like to challenge their friends and family on puzzle solving skills? With Local Multiplayer Mode you can challenge your friends and family with 2 different difficulty settings.",
  },
  {
    id: 170029,
    age_ratings: [
      {
        id: 46803,
      },
      {
        id: 51316,
      },
    ],
    cover: {
      id: 185787,
      image_id: "co3zcr",
    },
    first_release_date: 1638230400,
    genres: [
      {
        id: 9,
      },
    ],
    name: "Beyond A Steel Sky: Utopia Edition",
    summary:
      "The Utopia Edition includes:\n- Game: Beyond a Steel Sky\n- Steel book\n- Stickers\n- Original Digital Soundtrack\n- Exclusive Hologram Lamp\n- 50 Page Mini Artbook\n- Enamel Pin\n- Exchangeable Dog Tags (Keychain & Necklace)\n- 5 Holo-ad-Cards\n- 2 XXL Premium Stickers\n- Unique Collector's Box",
  },
  {
    id: 101595,
    age_ratings: [
      {
        id: 39927,
      },
    ],
    cover: {
      id: 200160,
      image_id: "co4ag0",
    },
    first_release_date: 1527379200,
    genres: [
      {
        id: 9,
      },
    ],
    name: "City Builder",
    summary:
      "You're a government worker who is building a city one building at a time. Place parts of your building to build the tallest building ever created in this fun filled endless stacker!",
  },
  {
    id: 107909,
    age_ratings: [
      {
        id: 50908,
        content_descriptions: [
          {
            id: 56370,
            description: "Fantasy Violence",
          },
          {
            id: 56371,
            description: "Mild Blood",
          },
        ],
      },
      {
        id: 51923,
      },
    ],
    cover: {
      id: 174812,
      image_id: "co3qvw",
    },
    first_release_date: 1613692800,
    genres: [
      {
        id: 9,
      },
    ],
    name: "Pawn of the Dead",
    summary:
      "A 3D game based on chess, in the style of Battle Chess. What makes it a unique game is its mechanic: When a Black (undead) piece captures a White piece, that White piece turns into a Black one!",
  },
  {
    id: 13104,
    age_ratings: [
      {
        id: 77730,
      },
    ],
    cover: {
      id: 77664,
      image_id: "co1nxc",
    },
    first_release_date: 1430697600,
    genres: [
      {
        id: 9,
      },
    ],
    name: "Snakebird",
    summary:
      "What is the longest possible length a bird can be? Obviously a question only all the fruit in the world can answer! But where could all this fruit be hiding? Follow Redbird, Greenbird and Bluebird on a quest for an amount of fruit beyond any birds wildest dreams.\n\nSnakebird is a very simple but deceptively challenging puzzle game about assuming the right shapes for the task at hand, be it pushing, lifting, teleporting or just defying the laws of physics.",
    total_rating: 77.22132850864445,
  },
  {
    id: 119522,
    age_ratings: [
      {
        id: 40720,
      },
      {
        id: 58404,
      },
    ],
    cover: {
      id: 94325,
      image_id: "co20s5",
    },
    first_release_date: 1509408000,
    genres: [
      {
        id: 9,
      },
    ],
    name: "Lines X",
    summary:
      "Lines X is a Numberlink-based puzzle game involving finding paths to connect colored tiles in a grid.",
  },
  {
    id: 111276,
    age_ratings: [
      {
        id: 37727,
        content_descriptions: [
          {
            id: 39031,
            description: "Blood",
          },
          {
            id: 39032,
            description: "Violence",
          },
        ],
      },
      {
        id: 55071,
      },
    ],
    cover: {
      id: 102819,
      image_id: "co27c3",
    },
    first_release_date: 1541116800,
    genres: [
      {
        id: 9,
      },
    ],
    name: "True Fear: Forsaken Souls Part 2",
    summary:
      "True Fear: Forsaken Souls Part 2 is the sequel to one of the best rated horror escape games, acclaimed for its story and the atmosphere of horror mystery.",
    total_rating: 87.09714726291439,
  },
  {
    id: 3073,
    age_ratings: [
      {
        id: 1103,
      },
    ],
    cover: {
      id: 152876,
      image_id: "co39yk",
    },
    first_release_date: 1083542400,
    genres: [
      {
        id: 10,
      },
    ],
    name: "Forza Motorsport",
    summary:
      "Racing sim from Microsoft, targeted at gamers who are passionate about cars and racing. Own, customize, and race your favorite cars in the most technologically advanced and realistic driving sim yet. Use race earnings to buy upgrades and aftermarket parts, so you can transform real production cars into high-performance racers. On the track, experience an impressively accurate simulation, while putting your performance-tuned creations to the test against the online gaming world on Xbox Live. Features car models from more than 60 top car manufacturers, customization via decals and team paint-schemes, and vehicle tuning that really affects performance.",
    total_rating: 85.96616355391595,
  },
  {
    id: 172591,
    age_ratings: [
      {
        id: 46850,
      },
      {
        id: 46851,
      },
    ],
    cover: {
      id: 186040,
      image_id: "co3zjs",
    },
    first_release_date: 1638230400,
    genres: [
      {
        id: 10,
      },
    ],
    name: "Gear.Club Unlimited 2: Ultimate Edition",
    summary:
      "Drive legendary vehicles in a huge environment with rich & diverse landscapes with remastered graphics for an enhanced experience! Manage your garage and make it your space! Admire your collection of racing cars acquired along your races. Gear Club Unlimited 2 offers more than 50 licensed vehicles from some of the world’s most prestigious manufacturers.",
  },
  {
    id: 19804,
    age_ratings: [
      {
        id: 84972,
      },
    ],
    cover: {
      id: 172647,
      image_id: "co3p7r",
    },
    first_release_date: 1465430400,
    genres: [
      {
        id: 10,
      },
    ],
    name: "Ducati: 90th Anniversary - The Official Videogame",
    summary:
      'Ducati - 90th Anniversary The Official Videogame comes from the creators of RIDE and Ducati passion itself, and is a true spin-off, entirely dedicated to the historic Ducati brand and presenting ninety years of motorcycle legends in a spectacular and exciting videogame.\n\nThe latest title from Milestone Studios boasts extensive content. The bikes themselves of course, with 39 different Ducati models included in the game, 29 of which have never before been seen in this context, divided into 7 eras, from the 1950\'s to the latest, high-performance Bologna-built bikes. You can race with the legendary 125 Desmo (1958) or with the 500 Pantah (1970), the beautiful 750 F1 (1980), but also with the first Monster 900 (1990) or the various evolutions of the "naked" par excellence, such as the high-performance Monster S4RS Tricolore. The Superbikes had to be incorporated of course and include the 848 (2000) and the highly exclusive 1199 Panigale Superleggera (2014), as well as the Desmosecidici GP15 ridden by Andrea Doviszioso and many Ducati production milestone models.',
    total_rating: 50.0,
  },
  {
    id: 31696,
    age_ratings: [
      {
        id: 16297,
      },
      {
        id: 16298,
      },
    ],
    cover: {
      id: 44878,
      image_id: "vggkb5js2dhciexvt5xz",
    },
    first_release_date: 1125532800,
    genres: [
      {
        id: 10,
      },
    ],
    name: "18 Wheels of Steel: Convoy",
    summary:
      "Take the wheel of a fast paced, high intensity trucking business. Start as a one man show, bidding on jobs, then build your fleet into an unstoppable convoy and deliver the goods. Grow your business and your fleet, but beware - your reputation is everything.",
    total_rating: 50.0,
  },
  {
    id: 1374,
    age_ratings: [
      {
        id: 4865,
      },
      {
        id: 48094,
        content_descriptions: [
          {
            id: 52988,
            description: "Mild Lyrics",
          },
        ],
      },
      {
        id: 67978,
      },
    ],
    cover: {
      id: 83763,
      image_id: "co1smr",
    },
    first_release_date: 1316476800,
    genres: [
      {
        id: 10,
      },
    ],
    name: "F1 2011",
    summary:
      "The official FORMULA ONE game returns with new circuits, split-screen and co-op Championship modes plus all the cars and stars from the 2011 season. Debut ahead of the drivers at India’s Buddh International Circuit, race the iconic Nürburgring circuit for the first time in High Definition and take on Abu Dhabi with a spectacular new day night transition. Use KERS and DRS to blast past rivals and race wheel-to-wheel against Lewis Hamilton, Fernando Alonso and Sebastian Vettel. \n \nGo from Rookie to 2011 FIA FORMULA ONE DRIVERS’ WORLD CHAMPION in career mode, set your best lap in Time Attack or test yourself online against 16 players plus 8 AI to simulate a full 24 car grid. Off track, become immersed in the world’s most glamorous sport with enhanced media interaction, expanded Paddock, new Parc Ferme area and celebration animations. F1 2011™ - be the driver, live the life – go compete!",
    total_rating: 75.63774503155435,
  },
  {
    id: 90688,
    age_ratings: [
      {
        id: 38517,
      },
      {
        id: 59278,
      },
      {
        id: 68181,
      },
    ],
    cover: {
      id: 86899,
      image_id: "co1v1v",
    },
    first_release_date: 1536192000,
    genres: [
      {
        id: 10,
      },
    ],
    name: "V-Rally 4",
    summary:
      "Get ready to take on the challenges of rallies, rallycross, drifts, buggies and hill climbs, and set off on a spectacular journey across continents. At the wheel of the most legendary off-road vehicles in each category, you’ll have to be prepared to take on the most difficult routes in astonishing surroundings.\nOver 50 car models will be featured, including the most famous in rallying and extreme motor sport. Ready for you to test drive, collect, upgrade, customize, and above all excel at!\nAs no trip is worth anything unless it is shared, V-Rally 4 will feature a career mode and an innovative online mode.",
    total_rating: 55.3997969966678,
  },
  {
    id: 38717,
    age_ratings: [
      {
        id: 21809,
      },
    ],
    cover: {
      id: 24915,
      image_id: "oyptppmrfuvot8er3kmd",
    },
    first_release_date: 1463529600,
    genres: [
      {
        id: 10,
      },
    ],
    name: "Rush Rally 2",
    summary:
      "Race the most authentic rally simulation on your mobile at an astounding 60fps. Console quality racing on your mobile! \n \n-- This app has NO in-app purchases and NO adverts ensure you are connected and online with google play when you first play it -- \n \nRACE IN ALL CONDITIONS OVER LOADS OF TRACKS! \nRace at night or day in rain or snow! Rally through 8 Countries, over 72 unique stages each with different surface types including snow, gravel, tarmac and dirt. \n \nWORLD RALLY CHAMPIONSHIP RACING! \nAuthentic Rally Championship and Rallycross game modes. Compete in a full championship on A-B stages or go metal-to-metal with other cars in Rallycross. \n \nCUSTOMISE YOUR RIDE! \nA garage full of cars waiting to be driven and tuned. The best car dynamics model to date on a mobile platform from over 10 years experience on games such as MotoGP, Formula1, Split-Second, Sonic and Sega All Stars Racing and many more! \n \nCOMPETE WITH FRIENDS, MULTIPLAYER AND OFFLINE! \nConnect to Facebook or Googleplay, race against your friends ghosts at any time you like! Even race against the best players ghosts across the world! \n \nEXPERIENCE THE THRILL OF OUR SKILL GAME MODES! \nFeel the rush by taking on a selection of our mini games, race through roadworks, dodge missiles and even pull trailers. \n \nOPTIMISED FOR TOUCH! \nA control system designed specifically for touch devices mean racing becomes more fun and consistent, with the ability to scale, move and swap buttons to suit your needs. \n \nTILT SUPPORT! \nDon't like touch, you can still use tilt or a controller! \n \nCONTROLLER SUPPORTED \nFull controller support for those who want to push their skills that little bit further! \n- Awaiting arrival of problematic controllers so I can fix this, will keep you posted! - \n \nANDROID TV SUPPORTED \nFull Android TV support, including NVIDIA Shield TV capable of maximum graphics at 60fps",
    total_rating: 44.86527,
  },
  {
    id: 4076,
    age_ratings: [
      {
        id: 65682,
        content_descriptions: [
          {
            id: 67153,
            description: "Mild Language",
          },
          {
            id: 67154,
            description: "Suggestive Themes",
          },
        ],
      },
    ],
    cover: {
      id: 79034,
      image_id: "co1oze",
    },
    first_release_date: 1069891200,
    genres: [
      {
        id: 10,
      },
    ],
    name: "R: Racing Evolution",
    summary:
      "R: Racing Evolution is a racing video game released across the GameCube, PlayStation 2 and Xbox by Namco. The Xbox version is not compatible with Xbox 360.",
    total_rating: 61.83333333333335,
  },
  {
    id: 55267,
    age_ratings: [
      {
        id: 19835,
      },
    ],
    cover: {
      id: 54892,
      image_id: "zbczkjjv7iogqoai4fvn",
    },
    first_release_date: 1504137600,
    genres: [
      {
        id: 10,
      },
    ],
    name: "Panda Run",
    summary:
      "In this game your character is cute panda. Help Panda collect coins jumping on branches in the jungle. Also there is some rules in this strange jungle, you need to collect as much golden coins as you can see to pass 3 start barier at the end of a forest.",
    total_rating: 50.0,
  },
  {
    id: 50712,
    age_ratings: [
      {
        id: 14758,
      },
      {
        id: 14759,
      },
    ],
    cover: {
      id: 27659,
      image_id: "myc7wge5dmb0czy02mfj",
    },
    first_release_date: 1277769600,
    genres: [
      {
        id: 10,
      },
    ],
    name: "Thomas & Friends Hero of the Rails",
    summary:
      "Play as your favourite engines, including: Thomas, Percy, Spencer, Gordon, Emily and Hiro! all in beautiful 3D \nRace engines, toot your whistle between stations and complete activities to find the parts that will repair Hiro. \nTake part in 'Racing', 'Shunting', 'Repairing', 'Painting' & many more activities!",
  },
  {
    id: 44074,
    age_ratings: [
      {
        id: 52259,
        content_descriptions: [
          {
            id: 57012,
            description: "Violence",
          },
          {
            id: 57013,
            description: "Bad Language",
          },
          {
            id: 57014,
            description: "In-Game Purchases",
          },
        ],
      },
      {
        id: 82390,
        content_descriptions: [
          {
            id: 84330,
            description: "Mild Language",
          },
          {
            id: 84331,
            description: "Fantasy Violence",
          },
        ],
      },
    ],
    cover: {
      id: 133192,
      image_id: "co2urs",
    },
    first_release_date: 1617062400,
    genres: [
      {
        id: 11,
      },
    ],
    name: "Evil Genius 2: World Domination",
    summary:
      "A satirical spy-fi lair builder where YOU are the criminal mastermind! Construct your base, train your minions, defend your operations from the Forces of Justice, and achieve global domination!",
    total_rating: 77.1428571428571,
  },
  {
    id: 141464,
    age_ratings: [
      {
        id: 31309,
      },
    ],
    cover: {
      id: 121730,
      image_id: "co2lxe",
    },
    first_release_date: 1603670400,
    genres: [
      {
        id: 11,
      },
    ],
    name: "Rush Royale",
    summary:
      "Rush Royale is a tower defense game where the towers are replaced by mighty warriors and wizards! Fight in either PvP or Co-op and climb your way to the top!",
  },
  {
    id: 24128,
    age_ratings: [
      {
        id: 67558,
        content_descriptions: [
          {
            id: 69358,
            description: "Animated Violence",
          },
        ],
      },
    ],
    cover: {
      id: 170876,
      image_id: "co3nuk",
    },
    first_release_date: 965001600,
    genres: [
      {
        id: 11,
      },
    ],
    name: "Metal Fatigue",
    summary:
      "Lead one of the three warring factions to victory as one of three brothers; Jonus, Stefan or Diego. Only one faction will stand above the rest in the end; Mil-Agro, Rimtech or Neuropa. The Hedoth technology will decide the course of the war, in particular the end.",
    total_rating: 70.0,
  },
  {
    id: 141336,
    age_ratings: [
      {
        id: 31237,
        content_descriptions: [
          {
            id: 31062,
            description: "Fantasy Violence",
          },
          {
            id: 31063,
            description: "Violence",
          },
        ],
      },
    ],
    cover: {
      id: 120908,
      image_id: "co2lak",
    },
    first_release_date: 1622505600,
    genres: [
      {
        id: 11,
      },
    ],
    name: "Royale Age: Battle of Kings",
    summary:
      "Royale Age is a game that combines Auto Chess & Battle Royale into a charming game about Kings, Queens and Bishops!",
  },
  {
    id: 9360,
    age_ratings: [
      {
        id: 6413,
        content_descriptions: [
          {
            id: 8335,
            description: "Mild Violence",
          },
        ],
      },
      {
        id: 11766,
        content_descriptions: [
          {
            id: 15500,
            description: "Violence",
          },
        ],
      },
    ],
    cover: {
      id: 81124,
      image_id: "co1qlg",
    },
    first_release_date: 1062115200,
    genres: [
      {
        id: 11,
      },
    ],
    name: "American Conquest: Fight Back",
    summary:
      "Three centuries of war continue with frantic combat and desperate power struggles raging across the American continent. The Spanish press the attack in the Yucatan against the fierce Maya and Aztec nations. The Germans put all their efforts into finding the legendary El Dorado. The Pontiac Uprising ends in a terrifying bloodbath between Native Americans and the British. And the Russians will do anything to conquer Alaska at the cost of the Haida. Lead armies of thousands of troops to victory in large-scale battles in 10 missions. \n \nBoth games are a real treat for any strategy fan. But this is not a standard RTS, there is no simple build-send-and-forget here because even the biggest army can be defeated by a well coordinated, but relatively small force. Just like the old proverb says: “An army of sheep led by a lion would defeat an army of lions led by a sheep.”",
    total_rating: 50.0,
  },
  {
    id: 16528,
    age_ratings: [
      {
        id: 8509,
        content_descriptions: [
          {
            id: 11256,
            description: "Language",
          },
          {
            id: 11257,
            description: "Mild Fantasy Violence",
          },
        ],
      },
      {
        id: 55717,
        content_descriptions: [
          {
            id: 57502,
            description: "Violence",
          },
        ],
      },
    ],
    cover: {
      id: 109814,
      image_id: "co2cqe",
    },
    first_release_date: 1170979200,
    genres: [
      {
        id: 11,
      },
    ],
    name: "UFO: Afterlight",
    summary:
      "UFO: Afterlight takes us to Mars, where a human colony has been built with the help of the Reticulans not long before the events of UFO: Aftershock took place.\nThe Martian base is self-sustainable and provides all the necessities for the survival of humans on a foreign planet, mainly breathable air, water and food. Although the people inhabiting this colony have the technologies and knowledge required for their further development, basic survival is their major concern. Their only activity is research of a nearby excavation site, which proves the existence of an ancient, intelligent and highly developed alien civilization.",
    total_rating: 71.42752408881441,
  },
  {
    id: 1904,
    age_ratings: [
      {
        id: 31857,
        content_descriptions: [
          {
            id: 31957,
            description: "Violence",
          },
          {
            id: 31958,
            description: "Bad Language",
          },
          {
            id: 31959,
            description: "Online Gameplay",
          },
        ],
      },
      {
        id: 31858,
        content_descriptions: [
          {
            id: 31960,
            description: "Drug Reference",
          },
          {
            id: 31961,
            description: "Mild Language",
          },
          {
            id: 31962,
            description: "Mild Violence",
          },
          {
            id: 31963,
            description: "Mild Sexual Themes",
          },
        ],
      },
    ],
    cover: {
      id: 82078,
      image_id: "co1rby",
    },
    first_release_date: 1376352000,
    genres: [
      {
        id: 11,
      },
    ],
    name: "Europa Universalis IV",
    summary:
      "Four centuries of detailed history come alive in Paradox’s classic grand strategy game. Lead any nation from Renaissance to Revolution in a complex simulation of the early modern world. Master the art of war, diplomacy and trade to shape and change your nation’s history!",
    total_rating: 86.55637477971015,
  },
  {
    id: 19425,
    age_ratings: [
      {
        id: 70192,
        content_descriptions: [
          {
            id: 72031,
            description: "Animated Violence",
          },
        ],
      },
    ],
    cover: {
      id: 111802,
      image_id: "co2e9m",
    },
    first_release_date: 968284800,
    genres: [
      {
        id: 11,
      },
    ],
    name: "Star Trek: New Worlds",
    summary: "New Worlds was a Star Trek RTS released in 2000.",
    total_rating: 50.0,
  },
  {
    id: 94316,
    age_ratings: [
      {
        id: 75371,
        content_descriptions: [
          {
            id: 77830,
            description: "Animated Violence",
          },
        ],
      },
    ],
    cover: {
      id: 136456,
      image_id: "co2xag",
    },
    first_release_date: 951696000,
    genres: [
      {
        id: 11,
      },
    ],
    name: "10SIX Online",
    summary:
      "10SIX is a massively multiplayer online strategy game developed by Segasoft and published by Sega for Windows PCs.\n\n10Six was Sega's first foray into MMO's, a persistent online RTS where players signed up for one of four mega-corporations aiming to conquer the rogue planet Visitor, which has entered the solar system and contains a treasure of valuable resources.\n\nPlayers construct and capture mining sites, construct defenses and NPC units to help defend and attack in a fairly traditional RTS mode, but much of the game also consists of player on player combat in first or third person modes, similar to Battlezone or Planetside.\n\nThe server infrastructure was designed to be able to handle a million simultaneous players and was hosted through SegaSoft's Heat.net (and later 10SIX.com), but never saw player counts that high. After failing to attract a sufficiently large audience Sega shut down the game in June 2002, offering refunds to anybody with subscription time left.\n\nIt was set to be ported to the Sega Dreamcast, originally for Autumn 2000 but was delayed and then cancelled in March 2001.\n\nA community effort to relaunch the game was started soon after the servers were taken down. Conundrum Studios was formed in late 2002, and the game was relaunched under the name Project Visitor in 2003.",
  },
  {
    id: 26,
    age_ratings: [
      {
        id: 70351,
        content_descriptions: [
          {
            id: 72213,
            description: "Animated Violence",
          },
        ],
      },
    ],
    cover: {
      id: 114318,
      image_id: "co2g7i",
    },
    first_release_date: 867628800,
    genres: [
      {
        id: 11,
      },
    ],
    name: "X-COM: Apocalypse",
    summary:
      "Your mission, as X-COM Commander, is to combat alien aggression and uncover their deadly intentions. But Beware! Alien infiltration into the city and its politics could see you under fire from criminal gangs, religious sects, and even the police! Alien fleets fill the skies, creatures terrorise the city, chaos reigns... Welcome to the war, welcome to the Apocalypse.",
    total_rating: 71.4861045022357,
  },
  {
    id: 22666,
    age_ratings: [
      {
        id: 11148,
      },
      {
        id: 11149,
      },
    ],
    cover: {
      id: 91921,
      image_id: "co1yxd",
    },
    first_release_date: 1413244800,
    genres: [
      {
        id: 12,
      },
    ],
    name: "Crusader Kings II: Charlemagne",
    summary:
      "Crusader Kings II: Charlemagne is the seventh expansion for the much praised strategy/RPG Crusader Kings II and introduces the gamer to an absorbing story of conquests of Charlemagne. \n \nThis expansion moves the game back almost a 100 years to 769 AD and will offer a unique new story driven narrative about the rise of Charlemagne and The Holy Roman Empire.",
  },
  {
    id: 159027,
    age_ratings: [
      {
        id: 46685,
        content_descriptions: [
          {
            id: 51848,
            description: "Fantasy Violence",
          },
          {
            id: 51849,
            description: "Language",
          },
          {
            id: 51850,
            description: "Suggestive Themes",
          },
        ],
      },
    ],
    cover: {
      id: 162329,
      image_id: "co3h95",
    },
    first_release_date: 1633564800,
    genres: [
      {
        id: 12,
      },
    ],
    name: "Astria Ascending: Special Edition",
    summary:
      "As one of the Fated Eight, explore the world of Orcanon where twelve ancient beasts dwell and fight against your destiny to save the world in this hand-drawn, turn-based JRPG.\n\nThe Special Edition includes:\n- Game: Astria Ascending\n- Artbook\n- Original Soundtrack\n- Map or Orcanon",
  },
  {
    id: 136189,
    age_ratings: [
      {
        id: 84483,
        content_descriptions: [
          {
            id: 86935,
            description: "Fantasy Violence",
          },
          {
            id: 86936,
            description: "Language",
          },
          {
            id: 86937,
            description: "Suggestive Themes",
          },
          {
            id: 86938,
            description: "Use of Tobacco",
          },
          {
            id: 86939,
            description: "Mild Blood",
          },
        ],
      },
    ],
    cover: {
      id: 132366,
      image_id: "co2u4u",
    },
    first_release_date: 1625788800,
    genres: [
      {
        id: 12,
      },
    ],
    name: "Ys IX: Monstrum Nox - Pact Edition",
    summary:
      "While imprisoned in Balduq, Adol is cursed and becomes a Monstrum. With his newfound powers, he must stop the Grimwald Nox from consuming the city.\n\nPact Edition details: the gift of extra items awaits you in the Ys ix: Monstrum nox pact Edition! Get a taste of the mysteries & battles ahead with the melodies of the macabre soundtrack Sampler, Monstrum memoirs mini art booklet, & reverse cover sheet",
  },
  {
    id: 26341,
    age_ratings: [
      {
        id: 25515,
        content_descriptions: [
          {
            id: 24842,
            description: "Fantasy Violence",
          },
          {
            id: 24843,
            description: "Mild Suggestive Themes",
          },
          {
            id: 24844,
            description: "Mild Blood",
          },
        ],
      },
      {
        id: 75093,
      },
    ],
    cover: {
      id: 85733,
      image_id: "co1u5h",
    },
    first_release_date: 1464307200,
    genres: [
      {
        id: 12,
      },
    ],
    name: "Dragon Quest Heroes II",
    summary:
      '"DRAGON QUEST HEROES II is a hack-and-slash, field-roaming Action RPG that sends players on a new adventure to restore order in a once peaceful world filled with hordes of monsters and battles of epic proportions. Up to 4 players can band together in cooperative multiplayer to conquer swarms of enemies and defeat challenging boss monsters.\n\nThere is also a cast of many playable characters each with unique moves and abilities – including a host of familiar faces from the DRAGON QUEST series and four brand new heroes that must team up to defeat an unknown threat looming over the Seven Realms!"',
    total_rating: 75.88245490414354,
  },
  {
    id: 3390,
    age_ratings: [
      {
        id: 21193,
        content_descriptions: [
          {
            id: 20468,
            description: "Alcohol Reference",
          },
        ],
      },
      {
        id: 21194,
      },
    ],
    cover: {
      id: 136801,
      image_id: "co2xk1",
    },
    first_release_date: 1225324800,
    genres: [
      {
        id: 12,
      },
    ],
    name: "Harvest Moon: Animal Parade",
    summary:
      "Harvest Moon: Animal Parade offers more traditional Harvest Moon gameplay for the Nintendo Wii, and features a range of exotic animals for you to interact with.",
    total_rating: 70.2369053468446,
  },
  {
    id: 143279,
    age_ratings: [
      {
        id: 37280,
        content_descriptions: [
          {
            id: 38256,
            description: "Fantasy Violence",
          },
          {
            id: 38257,
            description: "Mild Suggestive Themes",
          },
          {
            id: 38258,
            description: "Use of Alcohol",
          },
        ],
      },
      {
        id: 56173,
        content_descriptions: [
          {
            id: 57954,
            description: "Violence",
          },
        ],
      },
    ],
    cover: {
      id: 168142,
      image_id: "co3lqm",
    },
    first_release_date: 1618963200,
    genres: [
      {
        id: 12,
      },
    ],
    name: "Atelier Lydie & Suelle: The Alchemists and the Mysterious Paintings DX",
    summary:
      'The definitive edition of the Atelier "Mysterious" series at a new price, with brand new content and various DLCs! "Atelier Lydie & Suelle" is the 3rd instalment: after discovering a mysterious painting, Lydie & Suelle get closer to their dream of running the best atelier.',
  },
  {
    id: 3404,
    age_ratings: [
      {
        id: 1567,
      },
      {
        id: 9490,
      },
      {
        id: 62498,
      },
      {
        id: 62499,
      },
      {
        id: 62500,
      },
    ],
    cover: {
      id: 95908,
      image_id: "co2204",
    },
    first_release_date: 1082592000,
    genres: [
      {
        id: 12,
      },
    ],
    name: "Mario Golf: Advance Tour",
    summary:
      "Grab your clubs and start down the road to golfing perfection in this role-playing golf adventure! Chat up the locals at golf clinics, hone your skills in challenges like Club Slots and Go-Go Gates, and try to become the champ of all the country clubs! The Mushroom Kingdom residents take on only the very best.",
    total_rating: 75.60139009849385,
  },
  {
    id: 53359,
    age_ratings: [
      {
        id: 45536,
      },
    ],
    cover: {
      id: 170906,
      image_id: "co3nve",
    },
    first_release_date: 1507593600,
    genres: [
      {
        id: 12,
      },
    ],
    name: "Middle-earth: Shadow of War - Gold Edition",
    summary:
      "Middle-earth: Shadow of War - Gold Edition includes:\n- Slaughter Tribe Nemesis Expansion\n- Outlaw Tribe Nemesis Expansion\n- The Blade of Galadriel Story Expansion\n- The Desolation of Mordor Story Expansion\n- Gold War Chest\n\nNemesis Expansions include a new Orc Tribe featuring new enemies, followers, missions, abilities, weapons, Fortress and wilderness updates, and a Mythic Gear Set.\n\nStory Expansions introduce a new campaign, playable character & abilities, side missions, enemies, allies & more.",
    total_rating: 80.0,
  },
  {
    id: 152316,
    age_ratings: [
      {
        id: 41900,
        content_descriptions: [
          {
            id: 45553,
            description: "Crude Humor",
          },
          {
            id: 45554,
            description: "Sexual Themes",
          },
          {
            id: 45555,
            description: "Violence",
          },
        ],
      },
      {
        id: 56022,
        content_descriptions: [
          {
            id: 57791,
            description: "Violence",
          },
          {
            id: 57792,
            description: "Sex",
          },
        ],
      },
      {
        id: 83803,
      },
    ],
    cover: {
      id: 162114,
      image_id: "co3h36",
    },
    first_release_date: 1626912000,
    genres: [
      {
        id: 12,
      },
    ],
    name: "The Sims 4: Cottage Living",
    summary:
      "Delight in the quaint charm of The Sims 4: Cottage Living, an expansion pack for The Sims 4, with animal friends, garden-to-table meals, and a close-knit community. Explore the forest to befriend woodland creatures, or head to town to meet the locals. Whether Sims are hugging a cow, making friends (or enemies) with their chickens, or growing the biggest vegetables around, the countryside presents abundant new ways to reconnect with the world.",
  },
  {
    id: 46777,
    age_ratings: [
      {
        id: 85850,
        content_descriptions: [
          {
            id: 89284,
            description: "Blood and Gore",
          },
          {
            id: 89285,
            description: "Violence",
          },
        ],
      },
    ],
    cover: {
      id: 141771,
      image_id: "co31e3",
    },
    first_release_date: 1500940800,
    genres: [
      {
        id: 12,
      },
    ],
    name: "Nioh: Defiant Honor",
    summary:
      "Defiant Honor takes us to Osaka Castle, the largest and most impregnable castle of Sengoku era. This add-on features the legendary warrior Sanada Yukimura, serving Tokugawa Ieyasu’s archenemy Toyotomi clan, who values honor above all else. As tensions brew between the Tokugawa and Toyotomi clans, Sanada Yukimura prepares his men for imminent conflict against the Tokugawa’s forces by building a stronghold called the Sanada Maru on the outskirts of the Osaka Castle. With the castle fortified, Tokugawa's forces were faced with a difficult and bloody challenge.",
    total_rating: 85.0,
  },
  {
    id: 2,
    age_ratings: [
      {
        id: 5854,
        content_descriptions: [
          {
            id: 7585,
            description: "Animated Blood",
          },
          {
            id: 7586,
            description: "Animated Violence",
          },
        ],
      },
      {
        id: 30959,
      },
    ],
    cover: {
      id: 96746,
      image_id: "co22ne",
    },
    first_release_date: 912384000,
    genres: [
      {
        id: 13,
      },
    ],
    name: "Thief: The Dark Project",
    summary:
      "Thief is a first-person stealth game that likes the dark. You sneak through the ruins of haunted cathedrals, subterranean ruins, and forbidding prisons, in a dark and sinister city - heavily inspired by Steampunk and the Dark Ages. Garrett finds an ally in the shadows, as he steals for money and uncovers the hidden agendas of allies and enemies. The story that unravels is one of deception and revenge.",
    total_rating: 78.2693497695834,
  },
  {
    id: 121,
    age_ratings: [
      {
        id: 31660,
        content_descriptions: [
          {
            id: 31581,
            description: "Fantasy Violence",
          },
        ],
      },
      {
        id: 46780,
        content_descriptions: [
          {
            id: 51979,
            description: "Violence",
          },
          {
            id: 51980,
            description: "Fear",
          },
        ],
      },
      {
        id: 47365,
      },
      {
        id: 47366,
      },
      {
        id: 47367,
        content_descriptions: [
          {
            id: 52328,
            description: "Violence",
          },
        ],
      },
      {
        id: 47368,
      },
      {
        id: 47370,
      },
    ],
    cover: {
      id: 199481,
      image_id: "co49x5",
    },
    first_release_date: 1313366400,
    genres: [
      {
        id: 13,
      },
    ],
    name: "Minecraft",
    summary:
      "Minecraft focuses on allowing the player to explore, interact with, and modify a dynamically-generated map made of one-cubic-meter-sized blocks. In addition to blocks, the environment features plants, mobs, and items. Some activities in the game include mining for ore, fighting hostile mobs, and crafting new blocks and tools by gathering various resources found in the game. The game's open-ended model allows players to create structures, creations, and artwork on various multiplayer servers or their single-player maps. Other features include redstone circuits for logic computations and remote actions, minecarts and tracks, and a mysterious underworld called the Nether. A designated but completely optional goal of the game is to travel to a dimension called the End, and defeat the ender dragon.",
    total_rating: 84.28605043424474,
  },
  {
    id: 170,
    age_ratings: [
      {
        id: 15723,
        content_descriptions: [
          {
            id: 18636,
            description: "Animated Violence",
          },
        ],
      },
    ],
    cover: {
      id: 118840,
      image_id: "co2jp4",
    },
    first_release_date: 862358400,
    genres: [
      {
        id: 13,
      },
    ],
    name: "Star Wars: X-Wing vs. TIE Fighter",
    summary:
      "Star Wars: X-Wing vs. TIE Fighter is the third release of the X-Wing computer game series.\n\nThe player has the ability to choose for each mission which squadron he or she wants to fly in (e.g. either the Y-wings that disable a ship for capture or the X-wings that support them), his or her specific ship type, and the ship's armaments.",
    total_rating: 76.0409095433812,
  },
  {
    id: 172,
    age_ratings: [
      {
        id: 71035,
        content_descriptions: [
          {
            id: 73122,
            description: "Animated Violence",
          },
        ],
      },
    ],
    cover: {
      id: 95304,
      image_id: "co21jc",
    },
    first_release_date: 862358400,
    genres: [
      {
        id: 13,
      },
    ],
    name: "Star Wars: X-Wing vs. TIE Fighter - Balance of Power",
    summary:
      "Balance of Power features a Rebel and an Imperial campaign of 15 missions each. The campaigns supported 8-player cooperative play. Both campaigns revolve around the same series of events, but with alternate endings.",
    total_rating: 60.0,
  },
  {
    id: 175,
    age_ratings: [
      {
        id: 6473,
        content_descriptions: [
          {
            id: 8421,
            description: "Comic Mischief",
          },
          {
            id: 8422,
            description: "Suggestive Themes",
          },
        ],
      },
    ],
    cover: {
      id: 208130,
      image_id: "co4gle",
    },
    first_release_date: 851990400,
    genres: [
      {
        id: 13,
      },
    ],
    name: "Afterlife",
    summary:
      'Telling people where to go is just the beginning. Welcome to Afterlife, a world-building simulation that lets you create the hereafter in the here and now. Possessed of an unearthly sense of humor, it all begins in a god-knows-where galaxy. As a "regional spiritual director" your task, given to you by the Powers That Be, is to develop two prime planes of “unreal estate” - heaven and hell - simultaneously. Keep the billions of souls happy by giving them the rewards and punishments they deserve.\n\nThe wages of sin are plentiful. Open up your afterlife with the Pearly Gates of Heaven or the Fiery Gates of Hell, zone for the Seven Deadly Sins and/or their respective Virtues. Then lay down some roads. Soon, the dearly departed arrive in droves. Keep them in your afterlife and you flourish. Lose too many along the way and it may mean a visit from the Four Surfers of the Apocalypso (not a good time). Factor in a half-dozen or so supernatural disasters (not including total annihilation), money problems and headaches from the planet and you\'re in for infinite hours of gameplay.',
    total_rating: 69.97023962334521,
  },
  {
    id: 203,
    age_ratings: [
      {
        id: 302,
        content_descriptions: [
          {
            id: 754,
            description: "Violence",
          },
        ],
      },
    ],
    cover: {
      id: 195,
      image_id: "u2fpfrogipirpc0k2lt3",
    },
    first_release_date: 1069113600,
    genres: [
      {
        id: 13,
      },
    ],
    name: "Secret Weapons Over Normandy",
    summary:
      "Secret Weapons Over Normandy or SWON is a World War II-based arcade flight simulation video game released on November 18, 2003. Published by LucasArts and developed by Totally Games, the game is composed of 15 objective-based missions set in 1940s European, North African, and the Pacific theatres of war. The story was written by Derek Chester, who is also famous for his work in Star Trek: Deep Space Nine as well as work on Star Trek videogames. The music was composed by Michael Giacchino.",
    total_rating: 81.75,
  },
  {
    id: 237,
    age_ratings: [
      {
        id: 75742,
      },
    ],
    cover: {
      id: 77918,
      image_id: "co1o4e",
    },
    first_release_date: 917740800,
    genres: [
      {
        id: 13,
      },
    ],
    name: "SimCity 3000",
    summary:
      "SimCity 3000, released in 1999 as the third major installment in the SimCity series, continues its successful course as a city building simulation game. In SimCity 3000 new tools have been introduced to create and control the city build-ups. Recreate the world's greatest cities using predefined landscapes such as San Francisco or Berlin and landmark buildings like the Empire State Building or Big Ben. Negotiate and barter with neighbouring cities to strengthen your metropolis and seal contracts to import water or get rid of huge amounts of waste.",
    total_rating: 83.70622302766864,
  },
  {
    id: 254,
    age_ratings: [
      {
        id: 78968,
        content_descriptions: [
          {
            id: 80940,
            description: "Mild Violence",
          },
          {
            id: 80941,
            description: "Mild Animated Violence",
          },
        ],
      },
    ],
    cover: {
      id: 128546,
      image_id: "co2r6q",
    },
    first_release_date: 922838400,
    genres: [
      {
        id: 13,
      },
    ],
    name: "RollerCoaster Tycoon",
    summary:
      "The premise of the game is to complete a series of preset scenarios by successfully building and maintaining amusement parks through business ownership as a theme park entrepreneur. The key to any park is building a large amount and diverse range of rides for the visitors. Players can choose from dozens of roller coaster types and can also build log flumes, carousels, bumper cars, haunted houses, go karts, ferris wheels, and swinging ships, among other rides. The intensity and type of rides must be balanced, as visitors' preferences vary significantly from person to person. For example, some guests prefer exciting rides and have high nausea tolerance levels, while other guests are just the opposite.",
    total_rating: 82.57575803911055,
  },
  {
    id: 274,
    age_ratings: [
      {
        id: 1484,
        content_descriptions: [
          {
            id: 3133,
            description: "Suggestive Themes",
          },
          {
            id: 3134,
            description: "Violence",
          },
        ],
      },
      {
        id: 24865,
        content_descriptions: [
          {
            id: 24069,
            description: "Violence",
          },
          {
            id: 24070,
            description: "Bad Language",
          },
        ],
      },
    ],
    cover: {
      id: 116101,
      image_id: "co2hl1",
    },
    first_release_date: 987811200,
    genres: [
      {
        id: 13,
      },
    ],
    name: "Tropico",
    summary:
      "As the newly instated dictator of an obscure Caribbean Island, you will build a path of progress for your sapling nation, overcoming poverty, strife and other evils.\nCombining building-oriented gameplay with a healthy dose of Latin American political intrigue - Tropico bundles it all up in a fun, totally original and utterly addictive package.",
    total_rating: 82.0142775808919,
  },
  {
    id: 285,
    age_ratings: [
      {
        id: 68489,
      },
    ],
    cover: {
      id: 185611,
      image_id: "co3z7v",
    },
    first_release_date: 899164800,
    genres: [
      {
        id: 13,
      },
    ],
    name: "Railroad Tycoon II",
    summary:
      "Sid Meier's Railroad Tycoon is a business simulation game.\n\nRailroad Tycoon was written by game designer Sid Meier and published by MicroProse Railroad Tycoon 2 is the only game of the series that was released fr the PSX console.\n\nYou try to make it to the top of the transportation industry in Railroad Tycoon II, a simulation that takes you from a wannabe to a tycoon (if your lucky!).",
    total_rating: 85.4643283729075,
  },
  {
    id: 22311,
    age_ratings: [
      {
        id: 18264,
      },
      {
        id: 61648,
        content_descriptions: [
          {
            id: 63592,
            description: "Blood",
          },
          {
            id: 63593,
            description: "Crude Humor",
          },
          {
            id: 63594,
            description: "Language",
          },
          {
            id: 63595,
            description: "Suggestive Themes",
          },
          {
            id: 63596,
            description: "Use of Alcohol",
          },
          {
            id: 63597,
            description: "Violence",
          },
        ],
      },
    ],
    cover: {
      id: 110095,
      image_id: "co2cy7",
    },
    first_release_date: 1113782400,
    genres: [
      {
        id: 14,
      },
    ],
    name: "Tony Hawk's Underground 2 Remix",
    summary:
      "Tony Hawk's Underground 2 Remix takes players on an all new skating blitzkrieg where they embark on the ultimate road trip from Tony Hawk's Underground 2 in addition to wreaking havoc in four never-before-seen city-levels - Las Vegas, Atlanta, Kyoto and Santa Cruz -- that feature original goals, level changing events and unlockable characters. For the first time, players can live the Tony Hawk console gaming experience on a handheld device as they join either Tony Hawk or Bam Margera on a World Destruction Tour where they nail insane tricks with lightning speed or slow motion focus control, pull off mischievous pranks, and conquer sick terrain through 13 single-player levels, or face off against up to three friends in 10 wireless multiplayer games.",
    total_rating: 83.6666666666667,
  },
  {
    id: 20699,
    age_ratings: [
      {
        id: 16823,
      },
    ],
    cover: {
      id: 27671,
      image_id: "vyoxi57e7ik6tnyp8aje",
    },
    first_release_date: 1287100800,
    genres: [
      {
        id: 14,
      },
    ],
    name: "Deca Sports 3",
    summary:
      "DECA SPORTS, the hit sports compilation series, is returning to Wii™ with 10 COMPLETELY NEW sporting events in DECA SPORTS 3! Simple controls let your entire family play together, while advanced controls let you take advantage of Wii MotionPlus™. Swing, flip, and spike your way to the winner’s circle across all of the included events: Volleyball, Racquetball, Air Racing, Kayak Slalom, Lacrosse, Fencing, Halfpipe, Giant Slalom, Springboard Diving, and even Log Cutting! This time around, you can play online in 4 events (Volleyball, Lacrosse, Racquetball, & Fencing)!",
    total_rating: 60.0,
  },
  {
    id: 71110,
    age_ratings: [
      {
        id: 68463,
        content_descriptions: [
          {
            id: 70163,
            description: "Animated Blood",
          },
          {
            id: 70164,
            description: "Animated Violence",
          },
        ],
      },
    ],
    cover: {
      id: 54409,
      image_id: "qyvajcmypvuh3jjlrg20",
    },
    first_release_date: 915062400,
    genres: [
      {
        id: 14,
      },
    ],
    name: "Knockout Kings",
    summary:
      "Knockout Kings was EA's flagship boxing title prior to Fight Night.",
  },
  {
    id: 204439,
    age_ratings: [
      {
        id: 75063,
        content_descriptions: [
          {
            id: 77681,
            description: "Comic Mischief",
          },
          {
            id: 77682,
            description: "Mild Language",
          },
          {
            id: 77683,
            description: "Suggestive Themes",
          },
        ],
      },
    ],
    cover: {
      id: 226420,
      image_id: "co4upg",
    },
    first_release_date: 1092700800,
    genres: [
      {
        id: 14,
      },
    ],
    name: "Hot Shots Golf: Fore",
  },
  {
    id: 71046,
    age_ratings: [
      {
        id: 19753,
      },
    ],
    cover: {
      id: 214271,
      image_id: "co4lbz",
    },
    first_release_date: 862358400,
    genres: [
      {
        id: 14,
      },
    ],
    name: "Front Page Sports: Golf",
    summary:
      "Front Page Sports: Golf is the most in-depth and realistic golf simulator available. Vance Cook - lead designer of Links and Links 386 Pro - now brings his years of expertise to Front Page Sports: Golf. With a revolutionary game engine, Cook and his team have made this the golf sim to beat! It ushers in the next generation of simulations and sets a new standard by which all other golf sims will be judged...it may even shave a couple strokes off your handicap!",
  },
  {
    id: 73017,
    age_ratings: [
      {
        id: 66616,
      },
    ],
    cover: {
      id: 55945,
      image_id: "ozjq4vg49wtijoqnryfk",
    },
    first_release_date: 1249862400,
    genres: [
      {
        id: 14,
      },
    ],
    name: "Rock N' Roll Climber",
    summary:
      'Rock n\' Roll Climber is a rock climber "simulation" that uses both the Wii-remote and Wii Balance Board.',
  },
  {
    id: 78179,
    age_ratings: [
      {
        id: 48631,
        content_descriptions: [
          {
            id: 54323,
            description: "Mild Fantasy Violence",
          },
        ],
      },
    ],
    cover: {
      id: 56554,
      image_id: "z3thqusopgi9xwzx2hgl",
    },
    first_release_date: 1242777600,
    genres: [
      {
        id: 14,
      },
    ],
    name: "Blazing Birds",
    summary:
      "A 2D version of Badminton with robots and power-ups. Play against a friend or against the computer with over 20 different countries and 3 difficulty levels.",
  },
  {
    id: 4047,
    age_ratings: [
      {
        id: 70887,
        content_descriptions: [
          {
            id: 72934,
            description: "Violence",
          },
        ],
      },
    ],
    cover: {
      id: 94131,
      image_id: "co20mr",
    },
    first_release_date: 1032134400,
    genres: [
      {
        id: 14,
      },
    ],
    name: "NHL Hitz 2003",
    summary:
      "The NHL Hitz series has been on all next-generation consoles since the early days of the 32-bit era. With that said, its no surprise that Midway brings NHL Hitz 20-03 to GameCube, with Hitz' trademark 'On-Fire Mode', over-the-top animations, and fully 3D crowds. Like all NHL Hitz games, NHL Hitz 20-03 features gameplay modes for up to 6 players, in-game fights and hidden teams, players and stadiums. The game will also feature Create-A-Player modes and mini-games.",
    total_rating: 64.0,
  },
  {
    id: 50014,
    age_ratings: [
      {
        id: 88889,
      },
    ],
    cover: {
      id: 47843,
      image_id: "dzwus2ztaedt2hjkperj",
    },
    first_release_date: 996364800,
    genres: [
      {
        id: 14,
      },
    ],
    name: "The F.A. Premier League Stars 2001",
    summary:
      "Featuring the most exciting and challenging football league in the world, The F.A. Premier League Stars allows players to experience the fast paced action of the English Premier League right from the start of the 2000/2001 season. This GBC version based on the PC game features actual player names with all your favorite players from the F.A. Premier League (16 per team). The players exhibit differing levels of football skills as they do in real life. Controls allow for curling and chips with the help of aftertouch. Play quick matches or create and play in your own league of your favorite 2, 4, 6 or 8 teams for the EA Cup.",
  },
  {
    id: 5153,
    age_ratings: [
      {
        id: 2771,
        content_descriptions: [
          {
            id: 4173,
            description: "Comic Mischief",
          },
          {
            id: 4174,
            description: "Mild Lyrics",
          },
        ],
      },
      {
        id: 5217,
      },
    ],
    cover: {
      id: 5131,
      image_id: "ayuwlozlj0wgjnekb0yj",
    },
    first_release_date: 1257638400,
    genres: [
      {
        id: 14,
      },
    ],
    name: "Shaun White Snowboarding: World Stage",
    summary:
      "There are 13 playable characters, including Shaun White. There are mountains in 8 different countries: \n \nItaly \nCanada \nJapan \nChile \nFrance \nGreat Britain \nUSA \nSweden",
    total_rating: 72.75,
  },
  {
    id: 24,
    age_ratings: [
      {
        id: 7019,
        content_descriptions: [
          {
            id: 9220,
            description: "Violence",
          },
        ],
      },
      {
        id: 70354,
        content_descriptions: [
          {
            id: 72216,
            description: "Mild Animated Violence",
          },
        ],
      },
    ],
    cover: {
      id: 114679,
      image_id: "co2ghj",
    },
    first_release_date: 765072000,
    genres: [
      {
        id: 15,
      },
    ],
    name: "X-COM: UFO Defense",
    summary:
      "You are in control of X-COM: an organization formed by the world's governments to fight the ever-increasing alien menace.\n\nShooting down UFOs is just the beginning: you must then lead a squad of heavily-armed soldiers across different terrains as they investigate the UFO crash site. Tackle the aliens with automatic rifles, rocket launchers, and even tanks in the struggle to retrieve useful technology, weapons or life forms.\n\nSuccessful ground assault missions will allow X-COM scientists to analyze alien items. Each new breakthrough brings you a little closer to understanding the technology and culture of the alien races. Once you have sufficient research data on the UFO's superior weapons and crafts, you'll be able to manufacture weapons of equal capability.\n\nYou must make every crucial decision as you combat the powerful alien forces. But you'll also need to watch the world political situation: governments may be forced into secret pacts with the aliens and then begin to reduce X-COM funding.",
    total_rating: 86.7497266678148,
  },
  {
    id: 49,
    age_ratings: [
      {
        id: 77100,
        content_descriptions: [
          {
            id: 79462,
            description: "Animated Violence",
          },
        ],
      },
    ],
    cover: {
      id: 237461,
      image_id: "co5385",
    },
    first_release_date: 739324800,
    genres: [
      {
        id: 15,
      },
    ],
    name: "Syndicate",
    summary:
      "The aim of the game is to spread the dark stain of your syndicates colour across the entire surface of the globe. The world map is divided into various territories. From your home base in europe you invade adjacent territories and, through the violent subterfuge of your agents, wrestle them from rival syndicates. Having done so, raise taxes on the locals to increase your profits and punish them for serving the wrong syndicate.\n\nBut raising taxes can make you very unpopular.and furious natives leading popular rebellions can eat into syndicate profits. So keep an eye on foreign interests and pick off troublemakers with your teams of agents. And while you're busy expanding your syndicates empire abroad, rival agents are working in your own back yard to de-stabilise your syndicate. Ensure agents are briefed to weed out traitors whose actions might bring about your downfall.\n\nBy meeting all challenges, destroying all targets and gaining control of all the territories, your syndicate triumphs.",
    total_rating: 76.13544828086086,
  },
  {
    id: 50,
    age_ratings: [
      {
        id: 30346,
        content_descriptions: [
          {
            id: 30111,
            description: "Animated Violence",
          },
        ],
      },
    ],
    cover: {
      id: 196705,
      image_id: "co47s1",
    },
    first_release_date: 725846400,
    genres: [
      {
        id: 15,
      },
    ],
    name: "Syndicate: American Revolt",
    summary:
      "American Revolt is an add-on pack to Syndicate. It requires the original game and includes 3 new weapons, 21 new single player missions, and 10 multiplayer missions.",
    total_rating: 89.74990977675789,
  },
  {
    id: 51,
    age_ratings: [
      {
        id: 30347,
        content_descriptions: [
          {
            id: 30112,
            description: "Animated Blood",
          },
          {
            id: 30113,
            description: "Animated Violence",
          },
        ],
      },
    ],
    cover: {
      id: 238611,
      image_id: "co5443",
    },
    first_release_date: 851990400,
    genres: [
      {
        id: 15,
      },
    ],
    name: "Syndicate Wars",
    summary:
      "Welcome to an urban hell of ultra-violent mayhem. Welcome to Syndicate Wars where you’ll take control of a squad of cybernetically enhanced Agents and wreak havoc on the enemy. Funnel money towards research that will allow you to upgrade your team and make them into more efficient killing machines. Use the environment to assassinate, destroy, and eliminate your targets all from a classic isometric perspective. If you need cannon fodder, why not set your Agents loose armed with Persuadertrons to control huge crowds, or even enemy agents, and get them to do the dirty work for you? So whether you’re keeping EuroCorp in the black or burning infidels for the New Epoch, Syndicate Wars will have you giddily carving a path to victory. Welcome to the merciless future of violent squad-based real-time tactics!",
    total_rating: 58.44354178550245,
  },
  {
    id: 68,
    age_ratings: [
      {
        id: 71863,
        content_descriptions: [
          {
            id: 74228,
            description: "Mild Animated Violence",
          },
        ],
      },
    ],
    cover: {
      id: 113382,
      image_id: "co2fhi",
    },
    first_release_date: 846720000,
    genres: [
      {
        id: 15,
      },
    ],
    name: "Master of Orion II: Battle at Antares",
    summary:
      "Master of Orion 2 also known as MOO2 is considered the classic 4x turn based strategy game set in space. The game has a kind of cult status and even by to days standards is still only matched in game play by very few of its competitors.",
    total_rating: 90.47867156731041,
  },
  {
    id: 69,
    age_ratings: [
      {
        id: 69198,
        content_descriptions: [
          {
            id: 70902,
            description: "Blood and Gore",
          },
          {
            id: 70903,
            description: "Violence",
          },
        ],
      },
    ],
    cover: {
      id: 155725,
      image_id: "co3c5p",
    },
    first_release_date: 1046131200,
    genres: [
      {
        id: 15,
      },
    ],
    name: "Master of Orion III",
    summary:
      "Experience first-hand the challenges of leading one of 16 different races into unequalled galactic supremacy and face a universe of decisions. Set policies, explore, build, declare war, negotiate - put all these elements into motion to guarantee your place in the annals of space and time.",
    total_rating: 57.0446403659479,
  },
  {
    id: 109,
    age_ratings: [
      {
        id: 6033,
        content_descriptions: [
          {
            id: 7781,
            description: "Violence",
          },
          {
            id: 7782,
            description: "Bad Language",
          },
        ],
      },
      {
        id: 6034,
        content_descriptions: [
          {
            id: 7783,
            description: "Blood",
          },
          {
            id: 7784,
            description: "Blood and Gore",
          },
          {
            id: 7785,
            description: "Nudity",
          },
          {
            id: 7786,
            description: "Sexual Themes",
          },
          {
            id: 7787,
            description: "Strong Language",
          },
          {
            id: 7788,
            description: "Use of Drugs",
          },
          {
            id: 7789,
            description: "Violence",
          },
        ],
      },
    ],
    cover: {
      id: 121019,
      image_id: "co2ldn",
    },
    first_release_date: 1305590400,
    genres: [
      {
        id: 15,
      },
    ],
    name: "L.A. Noire",
    summary:
      "L.A. Noire is a neo-noir detective action-adventure video game developed by Team Bondi and published by Rockstar Games. It was initially released for the PlayStation 3 and Xbox 360 platforms on 17 May 2011; a Microsoft Windows port was later released on 8 November 2011. \n \nL.A. Noire is set in Los Angeles in 1947 and challenges the player, controlling a Los Angeles Police Department (LAPD) officer, to solve a range of cases across five divisions. Players must investigate crime scenes for clues, follow up leads, and interrogate suspects, and the player's success at these activities will impact how much of each case's story is revealed. \n \nThe game draws heavily from both the plot and aesthetic elements of film noir—stylistic films made popular in the 1940s and 1950s that share similar visual styles and themes, including crime and moral ambiguity—along with drawing inspiration from real-life crimes for its in-game cases, based upon what was reported by the Los Angeles media in 1947. \n \nThe game uses a distinctive colour palette, but in homage to film noir it includes the option to play the game in black and white. Various plot elements reference the major themes of detective and mobster stories such as The Naked City, Chinatown, The Untouchables, The Black Dahlia, and L.A. Confidential.",
    total_rating: 86.20266107864,
  },
  {
    id: 332,
    age_ratings: [
      {
        id: 31378,
      },
    ],
    cover: {
      id: 137461,
      image_id: "co2y2d",
    },
    first_release_date: 809913600,
    genres: [
      {
        id: 15,
      },
    ],
    name: "Monopoly",
    summary:
      "Monopoly is a 1995 video game based on the board game Monopoly. Developed by Westwood Studios, published by Hasbro Electronic Entertainment and distributed by Virgin Interactive Entertainment. This title was one of many inspired by the property. It was later reissued in 1998 with a different box art.",
    total_rating: 68.52871949845326,
  },
  {
    id: 447,
    age_ratings: [
      {
        id: 65240,
        content_descriptions: [
          {
            id: 66545,
            description: "Alcohol and Tobacco Reference",
          },
          {
            id: 66546,
            description: "Blood",
          },
          {
            id: 66547,
            description: "Mild Language",
          },
          {
            id: 66548,
            description: "Sexual Themes",
          },
          {
            id: 66549,
            description: "Violence",
          },
        ],
      },
    ],
    cover: {
      id: 58060,
      image_id: "d4e6jowub5v3qwbf693b",
    },
    first_release_date: 1188259200,
    genres: [
      {
        id: 15,
      },
    ],
    name: "Medieval II: Total War - Kingdoms",
    summary:
      "Medieval II: Total War Kingdoms is the official expansion to last year's award-winning Medieval II: Total War, presenting players with all-new territories to explore, troops to command, and enemies to conquer. \nKingdoms is the most content-rich expansion ever produced for a Total War game, with four new entire campaigns centered on expanded maps of the British Isles, Teutonic Northern Europe, the Middle East, and the Americas. In Medieval II, you were only given a tantalizing glimpse of South America, but in Kingdoms, vast tracts of land in both North and South America have been opened up for you to conquer. All-new factions from the New World are also now fully playable, including the Aztecs, Apaches, and Mayans. \nAlong with the new maps in the Britannia, Teutonic, Crusades, and New World Campaigns, there are 13 new factions to play, over 110 units to control, and 50 building types, adding up to 80 hours of new gameplay. Kingdoms also offers new multiplayer maps and hotseat multiplayer, a first for the Total War series, allowing you to play one-versus-one campaign games on the same computer.",
    total_rating: 79.46768644628975,
  },
  {
    id: 477,
    age_ratings: [
      {
        id: 6225,
        content_descriptions: [
          {
            id: 8046,
            description: "Blood",
          },
          {
            id: 8047,
            description: "Violence",
          },
        ],
      },
      {
        id: 11354,
        content_descriptions: [
          {
            id: 14965,
            description: "Violence",
          },
          {
            id: 14966,
            description: "Bad Language",
          },
        ],
      },
    ],
    cover: {
      id: 86845,
      image_id: "co1v0d",
    },
    first_release_date: 1066089600,
    genres: [
      {
        id: 15,
      },
    ],
    name: "Commandos 3: Destination Berlin",
    summary:
      "Third part of the legendary tactical strategic saga from Pyro Studios",
    total_rating: 72.5639183164671,
  },
  {
    id: 67150,
    age_ratings: [
      {
        id: 73636,
        content_descriptions: [
          {
            id: 76225,
            description: "Simulated Gambling",
          },
        ],
      },
    ],
    cover: {
      id: 48706,
      image_id: "tpbbwiqzrb6blqmphmqd",
    },
    first_release_date: 1264982400,
    genres: [
      {
        id: 16,
      },
    ],
    name: "Downtown Texas Hold'em Poker",
    summary: "A Texas Hold'em game for the DSiWare shop",
  },
  {
    id: 136007,
    age_ratings: [
      {
        id: 83686,
        content_descriptions: [
          {
            id: 85889,
            description: "Fantasy Violence",
          },
        ],
      },
    ],
    cover: {
      id: 209242,
      image_id: "co4hga",
    },
    first_release_date: 1635465600,
    genres: [
      {
        id: 16,
      },
    ],
    name: "Wargroove: Deluxe Edition",
    summary: "Sharpen your sword and take to the battlefield!",
  },
  {
    id: 47434,
    age_ratings: [
      {
        id: 48120,
        content_descriptions: [
          {
            id: 53060,
            description: "Mild Violence",
          },
        ],
      },
    ],
    cover: {
      id: 29772,
      image_id: "umcwibzofvapqveqkrbn",
    },
    first_release_date: 1288051200,
    genres: [
      {
        id: 16,
      },
    ],
    name: "Hasbro Family Game Night 3",
    summary:
      "The title was released on PlayStation 3, Xbox 360 and Wii, and features versions of The Game of Life, Clue, Twister, Mouse Trap, and Yahtzee Hands Down. The games is hosted by Mr. Potato Head, and players can use their Mii and Avatar on the Wii and Xbox",
    total_rating: 75.0,
  },
  {
    id: 53032,
    age_ratings: [
      {
        id: 57478,
        content_descriptions: [
          {
            id: 59321,
            description: "Cartoon Violence",
          },
          {
            id: 59322,
            description: "Comic Mischief",
          },
          {
            id: 59323,
            description: "Mild Language",
          },
        ],
      },
    ],
    cover: {
      id: 29166,
      image_id: "pdxmsssslpzjmozgijzh",
    },
    first_release_date: 1381190400,
    genres: [
      {
        id: 16,
      },
    ],
    name: "Worms: Revolution Extreme",
    summary:
      "Worms Revolution Extreme is the first game in the classic turn-based strategy series to come to the PlayStationVita, featuring exciting new features and beautiful 3D graphics whilst retaining the classic 2D gameplay that fans love.",
  },
  {
    id: 78905,
    age_ratings: [
      {
        id: 20547,
      },
      {
        id: 20548,
      },
    ],
    cover: {
      id: 58165,
      image_id: "aiievaalcws5lyqe5rwi",
    },
    first_release_date: 1156809600,
    genres: [
      {
        id: 16,
      },
    ],
    name: "Uno/Skip-Bo",
    summary: "Two Mattel-owned card games for Game Boy Advance.",
  },
  {
    id: 51219,
    age_ratings: [
      {
        id: 66351,
        content_descriptions: [
          {
            id: 68084,
            description: "Alcohol Reference",
          },
          {
            id: 68085,
            description: "Fantasy Violence",
          },
          {
            id: 68086,
            description: "Mild Blood",
          },
          {
            id: 68087,
            description: "Suggestive Themes",
          },
        ],
      },
    ],
    cover: {
      id: 27740,
      image_id: "nhvmnysbckmdsemhagib",
    },
    first_release_date: 1191542400,
    genres: [
      {
        id: 16,
      },
    ],
    name: "Legends of Norrath",
    summary:
      "Legends of Norrath is an online Collectible Card Game (CCG) developed by Sony Online Entertainment. It is based on the world of Norrath from EverQuest and EverQuest II.",
  },
  {
    id: 63073,
    age_ratings: [
      {
        id: 80297,
      },
      {
        id: 81185,
      },
    ],
    cover: {
      id: 89108,
      image_id: "co1wr8",
    },
    first_release_date: 978220800,
    genres: [
      {
        id: 16,
      },
    ],
    name: "Internet Backgammon",
    summary:
      "Internet Backgammon is a game shipped with some Windows systems that features online play.",
  },
  {
    id: 181185,
    age_ratings: [
      {
        id: 85975,
        content_descriptions: [
          {
            id: 89561,
            description: "Blood",
          },
          {
            id: 89562,
            description: "Language",
          },
          {
            id: 89563,
            description: "Suggestive Themes",
          },
          {
            id: 89564,
            description: "Use of Alcohol and Tobacco",
          },
        ],
      },
    ],
    cover: {
      id: 197503,
      image_id: "co48e7",
    },
    first_release_date: 1546214400,
    genres: [
      {
        id: 16,
      },
    ],
    name: "Valkyria Chronicles 4: A United Front with Squad 7",
    summary:
      "This story features an encounter with Squad 7, the heroes of the original Valkyria Chronicles. After playing through this extra story, you will get the characters Welkin (in the tank Edelweiss), Alicia, Isara, Largo, and Rosie for use in the main game.\n\nThis story can be played after unlocking the Headquarters in Chapter 2 of the main story.",
  },
  {
    id: 59506,
    age_ratings: [
      {
        id: 15210,
      },
    ],
    cover: {
      id: 38935,
      image_id: "wbtkmfq1rsnuoh2fituv",
    },
    first_release_date: 1447113600,
    genres: [
      {
        id: 16,
      },
    ],
    name: "Clarence: Thirty Days & Seven Seas",
    summary: "A board/card game based on the Cartoon Network show Clarence.",
  },
  {
    id: 83471,
    age_ratings: [
      {
        id: 22180,
      },
    ],
    cover: {
      id: 58650,
      image_id: "yekj76gorewi2k9cr4f2",
    },
    first_release_date: 1616371200,
    genres: [
      {
        id: 16,
      },
    ],
    name: "Skip-Bo",
    summary: "A version of Skip-Bo for mobile, developed by Magmic.",
    total_rating: 43.57996,
  },
  {
    id: 375,
    age_ratings: [
      {
        id: 21378,
        content_descriptions: [
          {
            id: 20715,
            description: "Violence",
          },
        ],
      },
      {
        id: 75059,
        content_descriptions: [
          {
            id: 77671,
            description: "Animated Blood and Gore",
          },
          {
            id: 77672,
            description: "Animated Violence",
          },
          {
            id: 77673,
            description: "Mature Sexual Themes",
          },
          {
            id: 77674,
            description: "Sexual Themes",
          },
          {
            id: 77675,
            description: "Suggestive Themes",
          },
          {
            id: 77676,
            description: "Blood and Gore",
          },
          {
            id: 77677,
            description: "Violence",
          },
        ],
      },
      {
        id: 78983,
        content_descriptions: [
          {
            id: 80961,
            description: "Violence",
          },
          {
            id: 80962,
            description: "Alcohol, Tobacco, Drug",
          },
        ],
      },
    ],
    cover: {
      id: 175368,
      image_id: "co3rbc",
    },
    first_release_date: 904780800,
    genres: [
      {
        id: 24,
      },
    ],
    name: "Metal Gear Solid",
    summary:
      "A third-person story-heavy stealth action title which follows Solid Snake, a special operations soldier, who infiltrates a nuclear weapons facility by the name of Shadow Moses Island to neutralize a renegade special forces unit named FOXHOUND. Throughout his journey, he uncovers various lies and military conspiracies, and his ideas of trust, violence and control are challenged.",
    total_rating: 85.2487619821541,
  },
  {
    id: 4513,
    age_ratings: [
      {
        id: 71895,
        content_descriptions: [
          {
            id: 74249,
            description: "Mild Animated Violence",
          },
        ],
      },
    ],
    cover: {
      id: 157265,
      image_id: "co3dch",
    },
    first_release_date: 788832000,
    genres: [
      {
        id: 24,
      },
    ],
    name: "Mega Bomberman",
    summary:
      "Mega Bomberman is a top-down action game. Control your Bomberman through various levels defeating multiple enemies and plenty of bosses. Each level consist of blocks for exploding and some blocks that don't explode. At times you will need the non-exploding blocks as shelter. The blocks that do explode reveal power-ups and eggs.",
  },
  {
    id: 5820,
    age_ratings: [
      {
        id: 61645,
        content_descriptions: [
          {
            id: 63585,
            description: "Use of Alcohol",
          },
          {
            id: 63586,
            description: "Violence",
          },
        ],
      },
    ],
    cover: {
      id: 123765,
      image_id: "co2nhx",
    },
    first_release_date: 1109203200,
    genres: [
      {
        id: 24,
      },
    ],
    name: "Dynasty Warriors 5",
    summary:
      "Dynasty Warriors 5 (真・三國無双4 Shin Sangokumusō 4?, Shin Sangokumusou 4 in Japan) is a hack and slash video game set in China and the fifth installment in the Dynasty Warriors series, developed by Omega Force and published by Koei. The game was released on the PlayStation 2 and Xbox. It is based on the Chinese novel Romance of the Three Kingdoms by Luo Guanzhong.",
    total_rating: 64.15170958831055,
  },
  {
    id: 11794,
    age_ratings: [
      {
        id: 61725,
        content_descriptions: [
          {
            id: 63705,
            description: "Animated Blood",
          },
          {
            id: 63706,
            description: "Animated Violence",
          },
        ],
      },
    ],
    cover: {
      id: 78110,
      image_id: "co1o9q",
    },
    first_release_date: 980294400,
    genres: [
      {
        id: 24,
      },
    ],
    name: "Sudden Strike",
    summary:
      'Sudden Strike is a real-time tactics (RTT) computer game set in World War II and the first game in the Sudden Strike series. The game was developed by Fireglow based in Russia and published by CDV software of Germany. The player selects a faction (e.g. Soviets, Germans, or Allied forces) and gains control of many varied units such as infantry, tanks and artillery. The games focus primarily on tactics, eschewing traditional real-time strategy resource gathering and base development.\n\n\nGAMEPLAY:\nThe main story features three campaigns (Soviets, Germans, and Allied forces). The battles are presented in an isometric perspective with line-of-sight occlusions and practical cover. Sudden Strike helped pioneer the real-time tactics genre, building upon concepts established by Counter Action for DOS, which was published by Mindscape in 1996.\n\nSudden Strike utilizes accurate in-game physics with houses and buildings obstructing units\' view, line-of-sight and firing range whereas clumps of trees can provide cover to reduce the damage of tank ordnance. The game allows units to garrison a building for a stronger firing position, especially valuable for anti-tank infantry. Units can also hold their fire, providing much-needed reconnaissance. Damage evaluation is also realistic; tanks or other vehicles that take too much damage are rendered immobile unless repairs are made.\n\n\nSUDDEN STRIKE FOREVER:\nSudden Strike Forever was an official add-on to Sudden Strike which introduces many more historically correct units and equipment, such as the upgraded Soviet T-34 tank (1944 version). New terrains are also provided: a desert terrain for the British missions in Tobruk and Tripoli and snow terrains for Soviet missions. The expansion also polished the game engine, balanced the damage of certain units, and added a map and scenario editor.\n\nThe add-on includes 4 inter-linked scenarios for each of the campaigns for the Germans, the American, the British and the Soviets. Other units which are added into the add-on includes, but not limited to the Universal Carrier for the British; the BR-5 artillery, 160mm grenade launcher for the Soviet forces and more. The supply system has also been tweaked with artillery crews automatically resupplying themselves with ammo crates nearby instead of relying on supply trucks to do the job. The supply trucks would still be needed to repair damages inflicted on these artillery units, however.\n\nThe German campaign puts the player into the winter setting of Russian hinterlands with limited troops and reinforcements available, thus relying on use of captured Soviet artillery as well as equipment. The British campaign deals with the defense of an unnamed seaport from German attacks, whereas the American campaign probably takes place in France during the autumn season as the foliage on the vegetation suggest. The Soviet campaign involves a large armored division counter-attack on Russian soil and the storming of the Wehrmacht-controlled airfields. As with the earlier Sudden Strike original campaigns, the briefings do not explain the historical setting of the campaign, thus only issuing standardized orders to the player to e.g. dispel enemy attacks or to simply take over a designated airfield in the east and so on. The add-on also includes 5 new single player individual scenarios.\n\n\nRECEPTION:\nAs indicated by the cover art the game was regarded as "The Best Real-time Strategy Game of the Year" and generally received positive reviews.Sudden Strike holds a 69 Metascore based on 16 critics and an 8.2 user score based on 15 ratings on Metacritic. Sudden Strike Forever holds a 70 Metascore from 5 critics and an 8.8 User Score based on 46 ratings.',
    total_rating: 80.8364639638045,
  },
  {
    id: 22308,
    age_ratings: [
      {
        id: 10244,
        content_descriptions: [
          {
            id: 13399,
            description: "Alcohol Reference",
          },
          {
            id: 13400,
            description: "Blood and Gore",
          },
          {
            id: 13401,
            description: "Strong Language",
          },
          {
            id: 13402,
            description: "Violence",
          },
        ],
      },
      {
        id: 10245,
        content_descriptions: [
          {
            id: 13403,
            description: "Violence",
          },
          {
            id: 13404,
            description: "Bad Language",
          },
        ],
      },
    ],
    cover: {
      id: 19255,
      image_id: "ryvzqvgeh73yqh74mas0",
    },
    first_release_date: 1148342400,
    genres: [
      {
        id: 24,
      },
    ],
    name: "Soldier Elite: Aurora Watching",
    summary:
      "Metropolis Software's Soldier Elite is like a low-budget, direct-to-video version of Metal Gear Solid. It doesn't have the big names, the peerless production values, or the engaging, intricate plot line. Instead, this Polish-developed third-person stealth action game is saddled with frustrating, half-realized sneaking mechanics, English-as-a-second-language voice acting, and very little inspiration or originality. In short, this is a bad facsimile of a much better game and has a hard time justifying its existence.",
    total_rating: 30.0,
  },
  {
    id: 26650,
    age_ratings: [
      {
        id: 10429,
        content_descriptions: [
          {
            id: 13649,
            description: "Alcohol Reference",
          },
          {
            id: 13650,
            description: "Blood",
          },
          {
            id: 13651,
            description: "Cartoon Violence",
          },
        ],
      },
      {
        id: 10430,
        content_descriptions: [
          {
            id: 13652,
            description: "Violence",
          },
        ],
      },
    ],
    cover: {
      id: 19799,
      image_id: "vteuzcat3b0nwcyecxxd",
    },
    first_release_date: 1482105600,
    genres: [
      {
        id: 24,
      },
    ],
    name: "Rock Defender",
    summary:
      "In Rock Defender you defend your stage from hordes of zombie monsters! Grab your magic guitar and start to spread death. Don't leave chicken with head! Your enemies have been summoned from hell to kill rock and roll, and will not stop never.",
  },
  {
    id: 27613,
    age_ratings: [
      {
        id: 78702,
        content_descriptions: [
          {
            id: 80666,
            description: "Blood",
          },
          {
            id: 80667,
            description: "Violence",
          },
        ],
      },
    ],
    cover: {
      id: 20795,
      image_id: "fgdtezkntxtcdvbzlebr",
    },
    first_release_date: 1040774400,
    genres: [
      {
        id: 24,
      },
    ],
    name: "Steel Tide",
    summary: "Dive... shoot... destroy!",
  },
  {
    id: 28582,
    age_ratings: [
      {
        id: 42148,
      },
      {
        id: 42149,
      },
    ],
    cover: {
      id: 170653,
      image_id: "co3nod",
    },
    first_release_date: 1447286400,
    genres: [
      {
        id: 24,
      },
    ],
    name: "Marble Duel",
    summary:
      "Magic duels are the way to solve any dispute in a kingdom conquered by the cruel witch. Every monster will challenge you, but magic will help you destroy the enemy. Master the destructive power of the spheres and become the most fearsome mage ever!",
    total_rating: 50.0,
  },
  {
    id: 37141,
    age_ratings: [
      {
        id: 72934,
        content_descriptions: [
          {
            id: 75423,
            description: "Drug Reference",
          },
          {
            id: 75424,
            description: "Language",
          },
          {
            id: 75425,
            description: "Mild Blood",
          },
          {
            id: 75426,
            description: "Partial Nudity",
          },
          {
            id: 75427,
            description: "Suggestive Themes",
          },
        ],
      },
    ],
    cover: {
      id: 96819,
      image_id: "co22pf",
    },
    first_release_date: 1499126400,
    genres: [
      {
        id: 24,
      },
    ],
    name: "That's You!",
    summary: "Which of your family members would survive longest in the wild?",
    total_rating: 74.55254574567016,
  },
  {
    id: 76252,
    age_ratings: [
      {
        id: 16078,
      },
      {
        id: 16079,
      },
    ],
    cover: {
      id: 102417,
      image_id: "co270x",
    },
    first_release_date: 1511740800,
    genres: [
      {
        id: 24,
      },
    ],
    name: "CarCollector",
    summary:
      '"Car Collector" is a Reaction-Time game that will test your reflexes, you must collect cars as they travel across the screen. Collecting cars gives you money to unlock new ones giving you access to new levels. Cars will be crossing the screen rapidly and you must collect them. You lose life if you click on cars that have not yet been activated OR by letting cars that you own escape.',
  },
  {
    id: 243,
    age_ratings: [
      {
        id: 67561,
      },
    ],
    cover: {
      id: 181633,
      image_id: "co3w5d",
    },
    first_release_date: 943315200,
    genres: [
      {
        id: 26,
      },
    ],
    name: "Who Wants to Be a Millionaire",
    summary:
      'The game is based on the hit TV quiz show Who Wants to be a Millionaire? PC and Console games players can now experience for themselves the excitement and tension of the TV show as they try and win one million virtual pounds. The UK version of the game features audio clips of the TV show\'s host Chris Tarrant, who will be asking the questions, giving the answers, and of course, uttering the famous line, "Is that your final answer?"; other localized versions have different hosts/voices, in addition to using questions suitable for each country.',
    total_rating: 68.94618979206875,
  },
  {
    id: 2337,
    age_ratings: [
      {
        id: 334,
      },
      {
        id: 49162,
      },
    ],
    cover: {
      id: 86969,
      image_id: "co1v3t",
    },
    first_release_date: 1105574400,
    genres: [
      {
        id: 26,
      },
    ],
    name: "Mario Party Advance",
    summary:
      "It's a portable party on your Game Boy Advance! Mario Party Advance takes all the fun of the home console game and puts it in your hands. All-new mini-games and a host of Professor E. Gadd's incredible Gaddgets -- unique trinkets, toys, detectors and tricks like the Lip Disguise-o-matic that let you play tricks on your friends, test your compatibility and much more. Discover the 60 mini-games as you play through the single-player game boards. Earn coins as you play the mini-games, and use those coins to unlock Gaddgets you can use with your friends. Use your Gaddgets to take the game into the real world. Place your finger on the Finger X-Ray to see what's hidden inside, or use the Compatibility Meter to see how well you and your friends match up.",
    total_rating: 34.56227379898345,
  },
  {
    id: 4806,
    age_ratings: [
      {
        id: 2467,
        content_descriptions: [
          {
            id: 3934,
            description: "Comic Mischief",
          },
        ],
      },
    ],
    cover: {
      id: 82954,
      image_id: "co1s0a",
    },
    first_release_date: 1288051200,
    genres: [
      {
        id: 26,
      },
    ],
    name: "Disney Channel: All Star Party",
    summary:
      "Designed exclusively for Nintendo Wii, Disney Channel All Star Party provides fans a truly immersive experience as Disney Channel worlds collide for the first time, allowing players to explore different locations and interact with characters from their favorite Disney Channel shows including Sonny With A Chance, Wizards of Waverly Place and JONAS L.A. like never before!",
  },
  {
    id: 4908,
    age_ratings: [
      {
        id: 72104,
        content_descriptions: [
          {
            id: 74548,
            description: "Comic Mischief",
          },
          {
            id: 74549,
            description: "Mild Cartoon Violence",
          },
        ],
      },
      {
        id: 79730,
      },
    ],
    cover: {
      id: 110635,
      image_id: "co2dd7",
    },
    first_release_date: 1226361600,
    genres: [
      {
        id: 26,
      },
    ],
    name: "Hasbro Family Game Night",
    summary:
      "Four classic titles in one bundle, providing hours of entertainment!",
    total_rating: 55.0,
  },
  {
    id: 5141,
    age_ratings: [
      {
        id: 2763,
        content_descriptions: [
          {
            id: 4161,
            description: "Drug Reference",
          },
          {
            id: 4162,
            description: "Sexual Themes",
          },
          {
            id: 4163,
            description: "Mild Language",
          },
          {
            id: 4164,
            description: "Mild Violence",
          },
          {
            id: 4165,
            description: "Mild Blood",
          },
        ],
      },
    ],
    cover: {
      id: 152884,
      image_id: "co39ys",
    },
    first_release_date: 1246147200,
    genres: [
      {
        id: 26,
      },
    ],
    name: "Scene It? Bright Lights! Big Screen!",
    summary:
      "Scene It? Bright Lights! Big Screen! is a trivia video game developed by Artificial Mind and Movement and published by Warner Bros. Interactive Entertainment (WBIE), and part of the Scene It? series of games. It was released for Xbox 360, PlayStation 3 and Wii on November 17, 2009 in North America, and in December 2009 in Europe and Australia. The game features puzzles from high-grossing films at the time and from films considered the best.",
    total_rating: 44.3333333333333,
  },
  {
    id: 5142,
    age_ratings: [
      {
        id: 2764,
        content_descriptions: [
          {
            id: 4166,
            description: "Drug Reference",
          },
          {
            id: 4167,
            description: "Mild Violence",
          },
          {
            id: 4168,
            description: "Mild Suggestive Themes",
          },
          {
            id: 4169,
            description: "Mild Blood",
          },
        ],
      },
      {
        id: 9699,
        content_descriptions: [
          {
            id: 12748,
            description: "Violence",
          },
        ],
      },
    ],
    cover: {
      id: 110191,
      image_id: "co2d0v",
    },
    first_release_date: 1255737600,
    genres: [
      {
        id: 26,
      },
    ],
    name: "Scene It? Twilight",
    summary:
      "Scene It? Twilight is an entry in the Scene It? series that focuses strictly on the Twilight universe.",
    total_rating: 55.0,
  },
  {
    id: 5248,
    age_ratings: [
      {
        id: 67815,
        content_descriptions: [
          {
            id: 69651,
            description: "Drug Reference",
          },
          {
            id: 69652,
            description: "Mild Suggestive Themes",
          },
          {
            id: 69653,
            description: "Violent References",
          },
        ],
      },
    ],
    cover: {
      id: 129291,
      image_id: "co2rrf",
    },
    first_release_date: 1225152000,
    genres: [
      {
        id: 26,
      },
    ],
    name: "TV Show King Party",
    summary:
      "Become King of a TV trivia show! Confront friends - see who is the smartest!\n\nLet your Mii try to answer fun and challenging trivia questions, from the classics to original stumpers, spanning across history, geography, literature, science, sports and entertainment! For an extra challenge, use your Wii Remote in original ways. Make it to the finals and see who can win the greatest amount of cash in one last, ultimate duel. TV Show King will challenge your brain! Now, get ready... get set... and go play TV Show King!",
  },
  {
    id: 5746,
    age_ratings: [
      {
        id: 3122,
      },
      {
        id: 55684,
      },
    ],
    cover: {
      id: 232321,
      image_id: "co4z9d",
    },
    first_release_date: 1130025600,
    genres: [
      {
        id: 26,
      },
    ],
    name: "The Bible Game",
    summary:
      "A trivia game to test gamers' biblical knowledge, The Bible Game for Game Boy Advance combines action/adventure play style with trivia challenges. In their quest to protect the Armor of God, players may choose to play as either Billy or Jenny across seven levels including forest, snowy tundra, desert, and tropical island environments. Along the way they must answer questions from both the Old and New Testaments. Either the New International Version or King James translation may be selected, and three levels of difficulty keep the game accessible for all ages.",
    total_rating: 50.0,
  },
  {
    id: 6521,
    age_ratings: [
      {
        id: 72512,
        content_descriptions: [
          {
            id: 74940,
            description: "Alcohol Reference",
          },
          {
            id: 74941,
            description: "Violent References",
          },
        ],
      },
    ],
    cover: {
      id: 6716,
      image_id: "t5ajtnmnenb0ixt3frre",
    },
    first_release_date: 1256515200,
    genres: [
      {
        id: 26,
      },
    ],
    name: "Are You Smarter Than a 5th Grader? Game Time",
    summary:
      "Find out if you are Smarter Than A 5th Grader! Face Jeff Foxworthy's jokes as you try to answer more than 5,000 Game Time questions. Become a whiz kid in over 25 categories. Play like the show or try your hand in brand new Game Time modes including Three & Out and Schoolroom Showdown. Try your hand at Extra Credit mini games to boost your GPA. And if you think you're the smartest in the room, play against your friends and family in four-player challenges.",
  },
  {
    id: 7181,
    age_ratings: [
      {
        id: 4146,
      },
      {
        id: 49583,
        content_descriptions: [
          {
            id: 55298,
            description: "Blood",
          },
          {
            id: 55299,
            description: "Crude Humor",
          },
          {
            id: 55300,
            description: "Sexual Themes",
          },
          {
            id: 55301,
            description: "Strong Language",
          },
          {
            id: 55302,
            description: "Use of Alcohol",
          },
          {
            id: 55303,
            description: "Use of Tobacco",
          },
          {
            id: 55304,
            description: "Violence",
          },
          {
            id: 55305,
            description: "Use of Alcohol and Tobacco",
          },
          {
            id: 55306,
            description: "Mild Language",
          },
        ],
      },
    ],
    cover: {
      id: 7358,
      image_id: "t8se812ygcmzzqgqo7r5",
    },
    first_release_date: 1225152000,
    genres: [
      {
        id: 26,
      },
    ],
    name: "Scene It? Box Office Smash",
    summary:
      "Scene It? Box Office Smash brings movie and trivia fans together for a game that provides hours of laughter as you challenge your friends and family to see whose movie knowledge reigns supreme reliving some of your favorite moments from the silver screen. Continuing the franchise's social and engaging trivia experience on the Xbox 360, Scene It? Box Office Smash features all-new questions, more high-definition (HD) movie clips and several new puzzle types, giving you a trivia game overflowing with images as well as audio and video clips from hundreds of films you know and love.",
    total_rating: 78.2682717050825,
  },
  {
    id: 2752,
    age_ratings: [
      {
        id: 705,
      },
    ],
    cover: {
      id: 2717,
      image_id: "qn09fo586f5trbmzjjls",
    },
    first_release_date: 283910400,
    genres: [
      {
        id: 30,
      },
    ],
    name: "Gee Bee",
    summary:
      "Namco's first independently designed video arcade game, Gee Bee combines gameplay elements of pinball and Breakout. There are two paddles, one at the bottom and one in the middle, that stay aligned when moving, so players must pay attention to both when bouncing the ball. There are blocks at the top, sides. and in two tiny compartments on the sides near the bottom. There is also a third, stationary, vertically-oriented paddle in the middle, as well as bumpers to give it a pinball feel. Scoring depends on what objects you hit.",
  },
  {
    id: 3024,
    age_ratings: [
      {
        id: 19187,
      },
      {
        id: 19188,
      },
      {
        id: 79431,
      },
    ],
    cover: {
      id: 114645,
      image_id: "co2ggl",
    },
    first_release_date: 700444800,
    genres: [
      {
        id: 30,
      },
    ],
    name: "Pinball Dreams",
    summary:
      "DICE’s first game was built by five friends from the Amiga demo group The Silents in their spare time. What started out as a demo idea soon became a full-fledged pinball simulation published by 21st Century Entertainment with the Amiga as the primary platform. Pinball Dreams captivated gamers and quickly became a cult hit.",
    total_rating: 80.77291116622989,
  },
  {
    id: 3715,
    age_ratings: [
      {
        id: 1793,
      },
      {
        id: 49031,
      },
      {
        id: 68353,
      },
    ],
    cover: {
      id: 221438,
      image_id: "co4qv2",
    },
    first_release_date: 754358400,
    genres: [
      {
        id: 30,
      },
    ],
    name: "Kirby's Pinball Land",
    summary:
      "Choose your world and take aim! Kirby will be launched into the fast-paced danger of uncharted worlds, but you can help him face his foes head on. It's a pinball race to check out each new world's surprise enemies and pitfalls. Flip Kirby in battles against lethal eyeballs, a shooting tree and mace-swinging maniacs. Take aim and leap to new worlds!",
    total_rating: 70.667929736752,
  },
  {
    id: 4067,
    age_ratings: [
      {
        id: 70964,
        content_descriptions: [
          {
            id: 73041,
            description: "Mild Suggestive Themes",
          },
        ],
      },
    ],
    cover: {
      id: 79926,
      image_id: "co1po6",
    },
    first_release_date: 1100563200,
    genres: [
      {
        id: 30,
      },
    ],
    name: "Pinball Hall of Fame: The Gottlieb Collection",
    summary:
      "Pinball Hall of Fame: The Gottlieb Collection is a pinball video game developed by FarSight Studios and published by Crave Entertainment. The tables in the game are recreations of real tables. The game was later released as Gottlieb Pinball Classics, published by System 3, in Europe and Australia. This expanded version featured additional tables and was released in North America on Wii and PSP under the original name, Pinball Hall of Fame: The Gottlieb Collection.",
    total_rating: 64.0,
  },
  {
    id: 4069,
    age_ratings: [
      {
        id: 2102,
      },
      {
        id: 5187,
      },
    ],
    cover: {
      id: 91954,
      image_id: "co1yya",
    },
    first_release_date: 1059696000,
    genres: [
      {
        id: 30,
      },
    ],
    name: "Pokémon Pinball: Ruby & Sapphire",
    summary:
      "Pokemon Pinball has all the features you'd demand of a pinball game, including bonus tables, lots of bumpers and ways to score massive points. As with your standard videogame pinball game, the left button on the D-pad and the A-button control the flippers with the R/L triggers used to shake the table. The catch here is that everything is themed in Pokemon. Instead of a ball, you make use of a Pokeball. Instead of standard bumpers, you're hitting the Pokeball against other Pokemon, and the ultimate goal is of course to \"catch 'em all\". The game features 200 Pokemon, two main tables, and link cable support.",
    total_rating: 77.4750029758051,
  },
  {
    id: 4333,
    age_ratings: [
      {
        id: 19219,
      },
    ],
    cover: {
      id: 4723,
      image_id: "keps7lropzwjqsff1edz",
    },
    first_release_date: 788832000,
    genres: [
      {
        id: 30,
      },
    ],
    name: "PaTaank",
    summary:
      "If you've ever thought of what it feels like to be the ball in a pinball machine, playing PaTaank might give you some idea. Instead of flapping the flippers, the player controls the ball, or in PaTaank, a UFO-shaped puck around the three different tables. The tables are named Surf Room, Luv Room, and Disaster Room and they are connected to each other via Nexus. Player can choose to play one room or in the MetaGame mode, all of them in sequence. Each room has an objective and in the MetaGame mode, player must reach that objective to advance into the next room via the Nexus.\n\nLike any pinball, there are targets, tunnels, blocks, and all sorts of flashing things that increase the score, light up letters, or grant bonus items. In addition to inertial control of the puck, player can apply thrust, which is limited, and activate magnetos, which are scattered around the room.",
  },
  {
    id: 4458,
    age_ratings: [
      {
        id: 19108,
      },
      {
        id: 19109,
      },
    ],
    cover: {
      id: 5693,
      image_id: "w2mb25ilx6vwugab9iqt",
    },
    first_release_date: 757296000,
    genres: [
      {
        id: 30,
      },
    ],
    name: "Virtual Pinball",
    summary:
      "One to four players can choose from either 29 pre-made games or design one using the in-game editor tools. Designing options include ten different backgrounds and six themes. You also get to choose where objects are placed, the style of music, and the ball speed. Up to ten personal games can be saved.",
  },
  {
    id: 4742,
    age_ratings: [
      {
        id: 70649,
        content_descriptions: [
          {
            id: 72603,
            description: "Violence",
          },
        ],
      },
    ],
    cover: {
      id: 135367,
      image_id: "co2wg7",
    },
    first_release_date: 1258588800,
    genres: [
      {
        id: 30,
      },
    ],
    name: "Calling",
    summary:
      'Rin Kagura, Shin Suzutani, Chiyo Kishibe and Makoto Shirae visit "The Black Page", a mysterious website with only a counter that is said to show the number of people who have died after visiting the site. Rin is drawn there because six years ago, she made a promise to a little girl in the hospital. Over an online chatroom, she promised the girl she would come visit her. When she got there, the girl wasn\'t anywhere to be found. Rin thought "The Black Page" might hold some answers. Shin loves anime and the supernatural and was drawn to "The Black Page". After Chiyo Kishibe\'s grandson bought her a laptop, she heard rumors of "The Black Page". She thought she might be able to meet her late husband. As for Makoto Shirae, an editor for a newspaper, his friend died under mysterious circumstances. When he took over the investigation, it led him to "The Black Page". After entering a chatroom on the site, Rin, Shin, Chiyo and Makoto are soon drawn into a strange void that lies between life and death which manifests the memories of the dead known as the Mnemonic Abyss. Using their cell phones, these people must try and escape from it.',
    total_rating: 72.33333333333334,
  },
  {
    id: 5099,
    age_ratings: [
      {
        id: 70965,
        content_descriptions: [
          {
            id: 73042,
            description: "Animated Blood",
          },
          {
            id: 73043,
            description: "Mild Violence",
          },
          {
            id: 73044,
            description: "Suggestive Themes",
          },
        ],
      },
    ],
    cover: {
      id: 128251,
      image_id: "co2qyj",
    },
    first_release_date: 1203984000,
    genres: [
      {
        id: 30,
      },
    ],
    name: "Pinball Hall of Fame: The Williams Collection",
    summary:
      'Pinball Hall of Fame: The Williams Collection faithfully recreates eight of the most memorable tables from the golden age of pinball in photorealistic 3D. Working closely with Williams to ensure authenticity of each of the games, the collection is highlighted by some of the most popular and innovative Williams pinball tables, including Gorgar, the first-ever talking pinball machine, Black Knight, which introduced "Magna-Save" and Bonus Ball, and Space Shuttle, which took the pinball industry by storm in 1984. Every table has been meticulously recreated to bring players the visuals, sound effects and gameplay that made these games legendary successes. Pinball Hall of Fame: The Williams Collection harkens back to the arcades of the 1980s. Players begin Pinball Hall of Fame: The Williams Collection with access to four pinball tables, and the remaining four tables are unlocked as the game progresses. Players can spend as little as two minutes on a quick pinball challenge, or delve deeper into the game, gaining rewards in a token-based system as they unlock each of the pinball tables. Single-player Arcade and Challenge modes provide hours of solo entertainment, and a Multiplayer mode lets players face each other head-on.',
    total_rating: 83.75,
  },
  {
    id: 5995,
    age_ratings: [
      {
        id: 3360,
        content_descriptions: [
          {
            id: 4942,
            description: "Suggestive Themes",
          },
        ],
      },
    ],
    cover: {
      id: 220338,
      image_id: "co4q0i",
    },
    first_release_date: 1054080000,
    genres: [
      {
        id: 30,
      },
    ],
    name: "Pure Pinball",
    summary:
      "Pure Pinball is a pinball simulation video game developed by Iridon Interactive (now Legendo Entertainment) and published in North America by Simon & Schuster for the Microsoft Windows and XS Games for the Xbox, released on May 28, 2003 and August 5, 2004, respectively. The game was published in Europe by Iridon Interactive and distributed by Koch Media in Germany.[1][2]",
    total_rating: 74.0,
  },
  {
    id: 47,
    age_ratings: [
      {
        id: 4633,
        content_descriptions: [
          {
            id: 6317,
            description: "Alcohol Reference",
          },
          {
            id: 6318,
            description: "Fantasy Violence",
          },
        ],
      },
    ],
    cover: {
      id: 105005,
      image_id: "co290t",
    },
    first_release_date: 1245715200,
    genres: [
      {
        id: 31,
      },
    ],
    name: "Overlord: Dark Legend",
    summary:
      "Dark Legend is a spinoff of the 2007 video game Overlord, and is set as a prequel. The gameplay is similar to Overlord, but presents some differences. While the game does not have several features of the original game or its sequel, Overlord II, it offers some new content and a new gameplay style taking advantage of the Wii controller. \n \nReviews of the game are mixed: praising the humour, story, and controls of the game, but finding problems with the animation, short game length, and lack of complexity or difficulty.",
    total_rating: 60.0,
  },
  {
    id: 79,
    age_ratings: [
      {
        id: 3435,
        content_descriptions: [
          {
            id: 5053,
            description: "Blood and Gore",
          },
          {
            id: 5054,
            description: "Crude Humor",
          },
          {
            id: 5055,
            description: "Intense Violence",
          },
          {
            id: 5056,
            description: "Sexual Themes",
          },
          {
            id: 5057,
            description: "Strong Language",
          },
        ],
      },
      {
        id: 56143,
        content_descriptions: [
          {
            id: 57923,
            description: "Violence",
          },
          {
            id: 57924,
            description: "Bad Language",
          },
        ],
      },
      {
        id: 68812,
        content_descriptions: [
          {
            id: 70491,
            description: "Violence",
          },
        ],
      },
      {
        id: 82150,
      },
    ],
    cover: {
      id: 125640,
      image_id: "co2oy0",
    },
    first_release_date: 1129593600,
    genres: [
      {
        id: 31,
      },
    ],
    name: "Stubbs the Zombie in Rebel Without a Pulse",
    summary:
      "The game is set in a fictional City of the Future in 1959. Stubbs, a zombie who'll tug at your heartstrings and tickle your funnybone even as he's tearing the living guts right out of your body. This former traveling salesman trades in his briefcase for your braincase as the leading man in Wideload's first game, Stubbs the Zombie in \"Rebel Without a Pulse\".\n\nIn this game, players take on the role of the rebel himself Stubbs, a wisecracking Zombie who takes on an ultra-modern city of the future using nothing but his own carcass and the weapons of his possessed enemies. The game's tongue-in-cheek humor, innovative combat and strong storyline keep Stubbs the Zombie's gameplay as bizarre and unpredictable as its namesake.\n\nOn his quest, Stubbs lurches his way through numerous large and visually captivating indoor/outdoor environments in and around the gleaming city of Punchbowl, PA, a city built during the Eisenhower administration to show off the ultra-futuristic technology of the 21st century. Stubbs' brain-eating adventure brings him through bustling shopping districts and verdant farmlands to battle mad scientists, rural militiamen and the world's deadliest barbershop quartet. His enemies have shotguns, tanks, and all manner of futuristic weaponry. All Stubbs has is his own rotting corpse, a distinct lack of pain or conscience, and the ability to turn foes into zombie allies.\n\nWhat begins as one zombie's search for revenge quickly escalates into an all-out war between the living and the dead - but this time it's the zombie fighting for truth, justice and the redemption of true love. Yes, it's a love story too.",
    total_rating: 67.90986125742465,
  },
  {
    id: 88,
    age_ratings: [
      {
        id: 7038,
        content_descriptions: [
          {
            id: 9247,
            description: "Violence",
          },
        ],
      },
    ],
    cover: {
      id: 98121,
      image_id: "co23pl",
    },
    first_release_date: 1008288000,
    genres: [
      {
        id: 31,
      },
    ],
    name: "Frank Herbert's Dune",
    summary:
      "In the year 10191, the Houses Atreides and Harkonnen are fighting a bloody battle for control of the sand planet Arrakis (Dune). It's only resource: Spice, giving those who possess it a very long life and greater powers. Two Atreides will survive the all-out massacre organised by Baron Harkonnen with the help of the Emperor: Jessica, the Duke's concubine and Paul, his son and heir to the throne. Dreamcatcher Games is putting you into the world of Frank Herbert's Dune.",
    total_rating: 50.0,
  },
  {
    id: 112,
    age_ratings: [
      {
        id: 313,
        content_descriptions: [
          {
            id: 791,
            description: "Blood",
          },
          {
            id: 792,
            description: "Language",
          },
          {
            id: 793,
            description: "Sexual Themes",
          },
          {
            id: 794,
            description: "Violence",
          },
        ],
      },
      {
        id: 8521,
        content_descriptions: [
          {
            id: 11264,
            description: "Violence",
          },
        ],
      },
      {
        id: 79636,
        content_descriptions: [
          {
            id: 81530,
            description: "Violence",
          },
        ],
      },
    ],
    cover: {
      id: 85775,
      image_id: "co1u6n",
    },
    first_release_date: 1201737600,
    genres: [
      {
        id: 31,
      },
    ],
    name: "Devil May Cry 4",
    summary:
      'Devil May Cry 4 is the second sequel to the original Devil May Cry game. It immerses the player in a gothic supernatural world, where a new protagonist clashes with a familiar hero. As the new leading man, Nero, players will unleash incredible attacks and non-stop combos using a unique new gameplay mechanic, his powerful "Devil Bringer" arm. With the advanced graphical capabilities of the PC, high definition visuals and intricate detail come to life as players explore new and exotic locales. Dynamic action and undeniable style combine with explosive fighting options and a gripping story to produce the incomparable experience that only a Devil May Cry game can deliver.',
    total_rating: 80.7021408644072,
  },
  {
    id: 113,
    age_ratings: [
      {
        id: 21384,
        content_descriptions: [
          {
            id: 20730,
            description: "Violence",
          },
          {
            id: 20731,
            description: "Bad Language",
          },
        ],
      },
      {
        id: 72416,
        content_descriptions: [
          {
            id: 74852,
            description: "Blood",
          },
          {
            id: 74853,
            description: "Strong Language",
          },
          {
            id: 74854,
            description: "Sexual Content",
          },
          {
            id: 74855,
            description: "Intense Violence",
          },
          {
            id: 74856,
            description: "Sexual Themes",
          },
          {
            id: 74857,
            description: "Violence",
          },
        ],
      },
      {
        id: 78254,
        content_descriptions: [
          {
            id: 80311,
            description: "Sexuality",
          },
          {
            id: 80312,
            description: "Violence",
          },
          {
            id: 80313,
            description: "Language",
          },
          {
            id: 80314,
            description: "Crime, Anti-Social",
          },
        ],
      },
    ],
    cover: {
      id: 76391,
      image_id: "co1mxz",
    },
    first_release_date: 1289865600,
    genres: [
      {
        id: 31,
      },
    ],
    name: "Assassin's Creed Brotherhood",
    summary:
      "Live and breathe as Ezio, a legendary Master Assassin, in his enduring struggle against the powerful Templar Order. He must journey into Italy’s greatest city, Rome, center of power, greed and corruption to strike at the heart of the enemy.\nDefeating the corrupt tyrants entrenched there will require not only strength, but leadership, as Ezio commands an entire Brotherhood who will rally to his side. Only by working together can the Assassins defeat their mortal enemies.\nAnd for the first time, introducing a never-before-seen multiplayer layer that allows you to choose from a wide range of unique characters, each with their own signature weapons and assassination techniques, and match your skills against other players from around the world.\nIt’s time to join the Brotherhood.",
    total_rating: 83.13432406466745,
  },
  {
    id: 135,
    age_ratings: [
      {
        id: 39284,
        content_descriptions: [
          {
            id: 41527,
            description: "Blood",
          },
          {
            id: 41528,
            description: "Violence",
          },
        ],
      },
      {
        id: 79629,
        content_descriptions: [
          {
            id: 81523,
            description: "Violence",
          },
        ],
      },
      {
        id: 79630,
        content_descriptions: [
          {
            id: 81524,
            description: "Violence",
          },
        ],
      },
    ],
    cover: {
      id: 157494,
      image_id: "co3diu",
    },
    first_release_date: 1043452800,
    genres: [
      {
        id: 31,
      },
    ],
    name: "Devil May Cry 2",
    summary:
      "Devil May Cry 2 is the sequel to Devil May Cry. From the start of the game, the player controls Dante or his new partner Lucia through various levels as they battle waves of demons. This game features an Amulet system, with different parts being acquired throughout the levels that can be equipped by accessing the pause menu. The different parts of the amulet can be equipped to change aspects of the characters Devil Triggers form like elemental moves, time stop abilities, faster movement, flight abilities, etc.",
    total_rating: 52.82968936482555,
  },
  {
    id: 158,
    age_ratings: [
      {
        id: 57021,
        content_descriptions: [
          {
            id: 58702,
            description: "Animated Violence",
          },
        ],
      },
    ],
    cover: {
      id: 128837,
      image_id: "co2ret",
    },
    first_release_date: 925430400,
    genres: [
      {
        id: 31,
      },
    ],
    name: "Star Wars Episode I: The Phantom Menace",
    summary:
      "Star Wars Episode I: The Phantom Menace is an adventure video game released by LucasArts in 1999. It is based on the film of the same title.",
    total_rating: 59.408193986942,
  },
  {
    id: 183,
    age_ratings: [
      {
        id: 68743,
        content_descriptions: [
          {
            id: 70427,
            description: "Animated Violence",
          },
        ],
      },
    ],
    cover: {
      id: 179,
      image_id: "jxtv9gt9ttw3pxguntyq",
    },
    first_release_date: 828316800,
    genres: [
      {
        id: 31,
      },
    ],
    name: "Indiana Jones and His Desktop Adventures",
    summary:
      "Indiana Jones and His Desktop Adventures is a overhead 2D-action adventure game released on the PC and Macintosh by Lucas Arts in 1996. Arguably it's most notable feature is that the plot, map size, and item locations are randomly generated at the beginning of the game.",
  },
  {
    id: 187,
    age_ratings: [
      {
        id: 49435,
        content_descriptions: [
          {
            id: 55025,
            description: "Violence",
          },
        ],
      },
    ],
    cover: {
      id: 141218,
      image_id: "co30yq",
    },
    first_release_date: 1046044800,
    genres: [
      {
        id: 31,
      },
    ],
    name: "Indiana Jones and the Emperor's Tomb",
    summary:
      "As Indiana Jones, you’ll travel to 1935 China to prevent a powerful artifact from falling into evil hands. This globe-spanning adventure pits you against evil Nazis and the Asian underworld. It’ll take more than just a trusty whip and pistol to avoid the perils of the Emperor’s Tomb.\n\nIndy's latest adventure plays out in dramatic fashion thanks to new gameplay features such as brawling combat. This time, in addition to using his trademark whip and pistol, Indy can engage in fierce hand-to-hand combat against foes, many of whom are well-versed in martial arts. Improvised weapons such as shovels, chairs and table legs also can be used to fend off adversaries. The result is a more immersive and more Indy-like gameplay experience, set amidst spine-tingling movie-like action sequences, such as a rickshaw chase in Hong Kong and a spectacular battle atop moving gondolas in the South China Sea area.",
    total_rating: 66.90423769307895,
  },
  {
    id: 376,
    age_ratings: [
      {
        id: 47731,
        content_descriptions: [
          {
            id: 52500,
            description: "Animated Blood",
          },
          {
            id: 52501,
            description: "Animated Violence",
          },
        ],
      },
      {
        id: 47732,
      },
      {
        id: 47733,
      },
      {
        id: 47734,
      },
    ],
    cover: {
      id: 105897,
      image_id: "co29pl",
    },
    first_release_date: 1005609600,
    genres: [
      {
        id: 31,
      },
    ],
    name: "Metal Gear Solid 2: Sons of Liberty",
    summary:
      "This third-person stealth action game, sequel to Metal Gear Solid (1998), follows Solid Snake and Otacon through various incidents as they strive to destroy nuclear terror threats around the world. When the president of the United States is captured inside the oil cleanup facility Big Shell, a rookie agent infiltrates the facility while the player is forced to doubt their perception of trust, knowledge and reality.",
    total_rating: 89.1886083535511,
  },
  {
    id: 84896,
    age_ratings: [
      {
        id: 37969,
      },
      {
        id: 62192,
      },
    ],
    cover: {
      id: 62283,
      image_id: "w9xz3pnrgqhhrlmod6ok",
    },
    first_release_date: 1461801600,
    genres: [
      {
        id: 33,
      },
    ],
    name: "Sssnakes",
    summary:
      "Sssnakes is a new twist on the classic snake video game. It is an upgrade for modern times without giving up its essence.",
  },
  {
    id: 135909,
    age_ratings: [
      {
        id: 66632,
      },
    ],
    cover: {
      id: 218166,
      image_id: "co4oc6",
    },
    first_release_date: 808012800,
    genres: [
      {
        id: 33,
      },
    ],
    name: "Bomberman GB",
    summary:
      "A Bomberman named Indy Bomber sets out on a long journey to uncover a legendary treasure called the Ring of Wishes. He discovers a scripture and begins reading it, but soon falls into a trap in the floor and ends up in a cave. Now he must find hs way out of the cave and find the Ring of Wishes!",
  },
  {
    id: 33165,
    age_ratings: [
      {
        id: 15267,
      },
      {
        id: 15268,
      },
    ],
    cover: {
      id: 39582,
      image_id: "c0w1fxhiae9g1xb3gaoa",
    },
    first_release_date: 1433808000,
    genres: [
      {
        id: 33,
      },
    ],
    name: "Angus Hates Aliens",
    summary:
      "Angus hates Aliens is all about reaction and tactical choices against a plethora of different enemies. Every enemy and every situation requires Angus to think about specific approaches making this game more tactical than your usual shooter. Keep your finger on the trigger, think first, then shoot and Angus might get out of this mess alive.",
    total_rating: 75.0,
  },
  {
    id: 1703,
    age_ratings: [
      {
        id: 3824,
        content_descriptions: [
          {
            id: 5365,
            description: "Comic Mischief",
          },
        ],
      },
      {
        id: 49138,
      },
    ],
    cover: {
      id: 89063,
      image_id: "co1wpz",
    },
    first_release_date: 1048204800,
    genres: [
      {
        id: 33,
      },
    ],
    name: "WarioWare, Inc.: Mega Microgames!",
    summary:
      "Frantic action! Prepare for lightning-quick game play as you blaze through over 200 bizarre microgames designed by a crazy crew of Wario's cronies! There are even two-player contests that can be played on a single Game Boy Advance! Pick up and play! Ultra-simple controls make each game easy to get into...until the games start coming faster... and faster...and FASTER!",
    total_rating: 87.89497779629741,
  },
  {
    id: 138957,
    age_ratings: [
      {
        id: 76268,
      },
    ],
    cover: {
      id: 114917,
      image_id: "co2go5",
    },
    first_release_date: 943747200,
    genres: [
      {
        id: 33,
      },
    ],
    name: "Bowling",
    summary:
      "A simulation of the classic game of the same name. As you can imagine from the name, this is a no-frills game, but it still comes with three modes, (normal, special, and quest) and multiplayer options. (1-4 players, with computer players as desired.)",
  },
  {
    id: 14145,
    age_ratings: [
      {
        id: 66066,
        content_descriptions: [
          {
            id: 67676,
            description: "Blood",
          },
          {
            id: 67677,
            description: "Language",
          },
          {
            id: 67678,
            description: "Violence",
          },
        ],
      },
    ],
    cover: {
      id: 156503,
      image_id: "co3crb",
    },
    first_release_date: 1167523200,
    genres: [
      {
        id: 33,
      },
    ],
    name: "Alien Shooter: Vengeance",
    summary:
      "Alien Shooter: Vengeance is a top down shooter with role playing elements. The game pits you against hordes of aliens as you battle for survival.",
    total_rating: 64.0,
  },
  {
    id: 143020,
    age_ratings: [
      {
        id: 32494,
        content_descriptions: [
          {
            id: 32891,
            description: "Mild Fantasy Violence",
          },
        ],
      },
    ],
    cover: {
      id: 128023,
      image_id: "co2qs7",
    },
    first_release_date: 1611187200,
    genres: [
      {
        id: 33,
      },
    ],
    name: "Outer Rat",
    summary:
      "Figure out who is the deserter with your friends or betray them. Use abilities as detective and as a deserter to defeat the other team. Point out a culprit and give proof of it. \n \n • Use abilities (“hack points”) inside the game as detective and deserter. Win more points depending on your role. \n • Point out a culprit and give proof of it. People can see the actual suspicious player. \n • Find more information about what happened by looking in previous found bodies, time of dead and more. \n • Complete unique and fun jobs to win as an innocent and detective by restoring the energy. \n • Use a secret room as deserter and inside, make life impossible for the other players. \n • More...",
  },
  {
    id: 186550,
    age_ratings: [
      {
        id: 50896,
        content_descriptions: [
          {
            id: 56347,
            description: "Mild Language",
          },
          {
            id: 56348,
            description: "Mild Fantasy Violence",
          },
        ],
      },
      {
        id: 57533,
      },
    ],
    cover: {
      id: 210668,
      image_id: "co4ijw",
    },
    first_release_date: 1639612800,
    genres: [
      {
        id: 33,
      },
    ],
    name: "Moonbound",
    summary:
      "Moonbound is a challenging 2D arcade action game that forces the player to make quick decisions under pressure. The player controls an astronaut who is returning to Earth after completing a geological survey mission in the Beta Iridian solar system. The astronaut's ship is suddenly damaged by an explosion! The energy crystals that are used as the ship's main power source are ejected out of the ship and land on six different moons. The player must return all of the remaining crystals to the ship to be able to return to Earth.",
  },
  {
    id: 84635,
    age_ratings: [
      {
        id: 39225,
      },
      {
        id: 60543,
      },
    ],
    cover: {
      id: 212500,
      image_id: "co4jys",
    },
    first_release_date: 1471478400,
    genres: [
      {
        id: 33,
      },
    ],
    name: "MikroGame: Rotator",
    summary:
      "Are you good at platform games? Because in MikroGame: Rotator awaits you a new arcade-style challenge!",
  },
  {
    id: 145128,
    age_ratings: [
      {
        id: 34119,
      },
      {
        id: 34120,
      },
    ],
    cover: {
      id: 135217,
      image_id: "co2wc1",
    },
    first_release_date: 1571356800,
    genres: [
      {
        id: 33,
      },
    ],
    name: "Pixelcalypse: pixel art game",
    summary:
      "Attention! The game help improve memory and reflexes!\n\nPixelcalypse is simple, but fascinating pixel art game for improving memory and reflexes for the whole family. Dodge enemies, avoid obstacles and complete missions. All missions are different from each other. You will have artifacts that will give you time and units or will take it.",
  },
  {
    id: 56549,
    age_ratings: [
      {
        id: 20320,
      },
    ],
    cover: {
      id: 95715,
      image_id: "co21ur",
    },
    first_release_date: 1369267200,
    genres: [
      {
        id: 34,
      },
    ],
    name: "0-ji no Kane to Cinderella: Halloween Wedding",
  },
  {
    id: 212712,
    age_ratings: [
      {
        id: 87146,
      },
    ],
    cover: {
      id: 236145,
      image_id: "co527l",
    },
    first_release_date: 1551312000,
    genres: [
      {
        id: 34,
      },
    ],
    name: "My Girlfriend is a Mermaid!?",
    summary:
      '"My Girlfriend is a Mermaid!?" is a heartwarming visual novel with multiple choices and endings as well as beautiful Live2D animation.',
  },
  {
    id: 206034,
    age_ratings: [
      {
        id: 75751,
      },
    ],
    cover: {
      id: 228624,
      image_id: "co4weo",
    },
    first_release_date: 1419206400,
    genres: [
      {
        id: 34,
      },
    ],
    name: "Eden of Ikemen: Love in a Lost World",
    summary:
      "A free to play otome game with the theme survival and romance on a desert island.",
  },
  {
    id: 79537,
    age_ratings: [
      {
        id: 76386,
        content_descriptions: [
          {
            id: 78699,
            description: "Animated Blood and Gore",
          },
        ],
      },
    ],
    cover: {
      id: 89472,
      image_id: "co1x1c",
    },
    first_release_date: 851990400,
    genres: [
      {
        id: 34,
      },
    ],
    name: "Buichi Terasawa's Takeru: Letter of the Law",
    summary:
      "Created by artist Buichi Terasawa, Takeru is a full-color computerized interactive manga. Follow the hero Takeru Ichimonji in his battle against an evil sorceress in the land of Yamato, sort of an amalgam of feudal and futuristic Japan. \n \nInteraction consists of scrolling the mouse to uncover voice-over and action events, making choices that affect the direction of the story arc, and a few object-based puzzle games. Three chapters of the comic span 2 CD-ROMs, with over 50,000 frames of digital animation. Features a fair amount of violence and, of course, scantily clad female characters.",
  },
  {
    id: 144553,
    age_ratings: [
      {
        id: 71855,
      },
    ],
    cover: {
      id: 133734,
      image_id: "co2v6u",
    },
    first_release_date: 820368000,
    genres: [
      {
        id: 34,
      },
    ],
    name: "Marty and the Trouble with Cheese",
    summary:
      "An interactive storybook for preschoolers in which players with the game by using voice commands rather than traditional inputs.",
  },
  {
    id: 11816,
    age_ratings: [
      {
        id: 38589,
        content_descriptions: [
          {
            id: 40465,
            description: "Blood",
          },
          {
            id: 40469,
            description: "Partial Nudity",
          },
          {
            id: 40472,
            description: "Sexual Content",
          },
          {
            id: 40473,
            description: "Strong Language",
          },
          {
            id: 40474,
            description: "Violence",
          },
        ],
      },
      {
        id: 51149,
      },
    ],
    cover: {
      id: 97366,
      image_id: "co234m",
    },
    first_release_date: 1489622400,
    genres: [
      {
        id: 34,
      },
    ],
    name: "Yu-No: A Girl Who Chants Love at the Bound of this World",
    summary:
      "YU-NO: A Girl Who Chants Love at the Bound of this World is a Japanese-style adventure game, also known as a visual novel, originally released in 1996 for the NEC PC-98, and later ported to the Sega Saturn and Windows. In 2017 a remake was produced for the Playstation 4 and Playstation Vita, with completely redrawn HD graphics and rearranged music, while maintaining the same story and game structure. The 2019 Nintendo Switch port included these new features as well.",
    total_rating: 70.0,
  },
  {
    id: 203203,
    age_ratings: [
      {
        id: 74062,
      },
    ],
    cover: {
      id: 224409,
      image_id: "co4t5l",
    },
    first_release_date: 1513555200,
    genres: [
      {
        id: 34,
      },
    ],
    name: "Liar! Scheming Socialites",
    summary:
      "Liar! Scheming Socialites is the second spin-off otome game of Liar! Uncover the Truth by Voltage Inc.",
  },
  {
    id: 106416,
    age_ratings: [
      {
        id: 88513,
        content_descriptions: [
          {
            id: 92701,
            description: "Language",
          },
          {
            id: 92702,
            description: "Partial Nudity",
          },
          {
            id: 92703,
            description: "Suggestive Themes",
          },
        ],
      },
    ],
    cover: {
      id: 173726,
      image_id: "co3q1q",
    },
    first_release_date: 1532649600,
    genres: [
      {
        id: 34,
      },
    ],
    name: "NEKOPARA Extra",
    summary:
      'About half a year before the opening of the patisserie, La Soleil where the catgirls work with Kashou.\nBack when Chocola and Vanilla were still kittens when they first arrived at the Minaduki household and before they opened up to the other catgirls.\nIt\'s then that they gradually began to call Kashou "master", experienced their first Christmas, and shared a promise with Kashou.\nThis is an extra episode as part of a stretch goal from the NEKOPARA OVA crowdfunding campaign!',
    total_rating: 80.0,
  },
  {
    id: 154325,
    age_ratings: [
      {
        id: 43570,
        content_descriptions: [
          {
            id: 47765,
            description: "Language",
          },
        ],
      },
      {
        id: 52693,
      },
    ],
    cover: {
      id: 166036,
      image_id: "co3k44",
    },
    first_release_date: 1501113600,
    genres: [
      {
        id: 34,
      },
    ],
    name: "Bai Qu: Hundreds of Melodies",
    summary:
      "While visiting his sick father, college student Wei Qiuwu accidentally encountered a girl playing a concertina. Though unlikely at first, Wei Qiuwu becomes a good friend of Li Jiayun, the musician. Both of them act as an indispensable tune in each other's life. Until one day someone unveils to Wei Qiuwu the cruel truth hidden under a fairy-tale cover…",
  },
  {
    id: 147935,
    age_ratings: [
      {
        id: 40511,
        content_descriptions: [
          {
            id: 43376,
            description: "Blood",
          },
          {
            id: 43378,
            description: "Drug Reference",
          },
          {
            id: 43379,
            description: "Strong Language",
          },
          {
            id: 43380,
            description: "Suggestive Themes",
          },
          {
            id: 43381,
            description: "Violence",
          },
        ],
      },
      {
        id: 55303,
      },
    ],
    cover: {
      id: 140891,
      image_id: "co30pn",
    },
    first_release_date: 1513814400,
    genres: [
      {
        id: 34,
      },
    ],
    name: "Grisaia Phantom Trigger 01&02",
    summary:
      "After Yuuji Kazami and the gang's battle to the death several years ago, new girls unite at Mihama Academy, which has been reinstated as a 'specialist training school'. The characters enter a new chapter in this renewed series that takes place in the same world as The Fruit of Grisaia! This thrilling story that unfolds at the reborn Mihama Academy will undoubtedly excite not only those who have played previous releases, but those who are new to the series as well! Text available in three languages! Text can be set to Japanese, English or Simplified Chinese (audio is Japanese only). This includes in-game text, options, and the digital manual. Language settings can be changed at any time. Play using only the touch screen! Play with one hand! Play in handheld mode with the Nintendo Switch Joy-Con controllers attached, or detach them and play with just the touch controls! While in tabletop mode or TV mode, everything can be controlled by one Joy-Con (R), allowing you to play with only one hand! Also available for the Nintendo Switch Lite. (A separate Joy-Con (R) is required to play with one hand.) Summary ・Volume 1 The goal of SORD is to train a new generation of operatives to defend the country against future threats. To that end, the organization has established a series of schools up and down the country. Mihama Academy, more-or-less left to rot after its abrupt closure, has been given new purpose as one such 'specialist training school'. Mihama now entrusts the misfit girls who attend…",
  },
  {
    id: 7518,
    age_ratings: [
      {
        id: 11646,
      },
      {
        id: 59990,
        content_descriptions: [
          {
            id: 62208,
            description: "Blood and Gore",
          },
          {
            id: 62209,
            description: "Sexual Themes",
          },
          {
            id: 62210,
            description: "Strong Language",
          },
          {
            id: 62211,
            description: "Violence",
          },
        ],
      },
    ],
    cover: {
      id: 100334,
      image_id: "co25f2",
    },
    first_release_date: 1282608000,
    genres: [
      {
        id: 32,
      },
    ],
    name: "Shank",
    summary:
      "Shank is the cult-classic revival of the sidescrolling beat-em-up. Play as Shank in an over-the-top grindhouse game, packed to the rim with enemies, bosses, combos, and more by the award-winning team at Klei Entertainment.",
    total_rating: 70.4559635254041,
  },
  {
    id: 7612,
    age_ratings: [
      {
        id: 63547,
        content_descriptions: [
          {
            id: 65377,
            description: "Blood",
          },
          {
            id: 65378,
            description: "Violence",
          },
        ],
      },
    ],
    cover: {
      id: 182149,
      image_id: "co3wjp",
    },
    first_release_date: 1408406400,
    genres: [
      {
        id: 32,
      },
    ],
    name: "CounterSpy",
    summary:
      "Combining the spy mythology and bold aesthetics of the 1950’s and 1960’s and set during the Cold War, CounterSpy focuses on the rogue third spy agency, C.O.U.N.T.E.R., that keeps the world’s super powers at bay. Just as each side of the ongoing conflict gets close to unleashing a blow of earthshaking proportions, C.O.U.N.T.E.R. jumps into action, stealthily sabotaging their dastardly plans and deceptively maintaining world peace.",
    total_rating: 69.20644302257341,
  },
  {
    id: 8586,
    age_ratings: [
      {
        id: 5937,
      },
      {
        id: 5938,
      },
    ],
    cover: {
      id: 9065,
      image_id: "mwmqbeaevieg35bo0jom",
    },
    first_release_date: 1419292800,
    genres: [
      {
        id: 32,
      },
    ],
    name: "Systems Nominal",
    summary:
      "Systems Nominal is the first proper game by YouTube gamer Nerd³. It is a simple reaction test that puts you in the control room of a space ship under attack, and you must keep all systems alive in order for everybody to escape.",
    total_rating: 71.8814229249012,
  },
  {
    id: 10535,
    age_ratings: [
      {
        id: 15364,
      },
    ],
    cover: {
      id: 40420,
      image_id: "k1mmsdvl3brdzidg1bag",
    },
    first_release_date: 1422576000,
    genres: [
      {
        id: 32,
      },
    ],
    name: "MagNets",
    summary:
      "MagNets: an intense arcade-style robot-recycling collect-em-up! Players must fight to restore order in Polarity City, one arena at a time. Do this by capturing malfunctioning Bloxbots in your Electromagnetic Nets (or 'MagNets'), and recycling them into tools to complete the level and power-ups to survive their attacks!",
  },
  {
    id: 10554,
    age_ratings: [
      {
        id: 39120,
        content_descriptions: [
          {
            id: 41300,
            description: "Blood",
          },
          {
            id: 41301,
            description: "Strong Language",
          },
          {
            id: 41302,
            description: "Violence",
          },
        ],
      },
      {
        id: 55918,
        content_descriptions: [
          {
            id: 57667,
            description: "Bad Language",
          },
        ],
      },
    ],
    cover: {
      id: 97914,
      image_id: "co23ju",
    },
    first_release_date: 1432080000,
    genres: [
      {
        id: 32,
      },
    ],
    name: "Monstrum",
    summary:
      "Monstrum takes the traditional survival horror formula and remixes it completely with procedurally generated levels, permadeath, and AI driven predators, ensuring that nowhere on its derelict cargo ship is ever truly safe.\n\nOffering up a challenge to even the hardiest of gamers, Monstrum will force you to use your wits and whatever tools you can find to outrun or outsmart your pursuer. Attempt to escape from an environment that is out to kill you while evading the lurking terror that could be around any corner. Can you survive Monstrum?",
    total_rating: 80.0,
  },
  {
    id: 11651,
    age_ratings: [
      {
        id: 7282,
        content_descriptions: [
          {
            id: 9731,
            description: "Fantasy Violence",
          },
        ],
      },
      {
        id: 7283,
        content_descriptions: [
          {
            id: 9732,
            description: "Violence",
          },
        ],
      },
    ],
    cover: {
      id: 83436,
      image_id: "co1sdo",
    },
    first_release_date: 1437091200,
    genres: [
      {
        id: 32,
      },
    ],
    name: "SlashDash",
    summary:
      "SlashDash is an adorable ninja party playground for up to 4 players. Shoot, teleport, slash, and of course dash your way to glory across beautiful play fields in 4 inventive game modes. Fast paced and surprisingly deep, SlashDash is rewarding for trainees and Jounin alike.",
    total_rating: 70.0,
  },
  {
    id: 12072,
    age_ratings: [
      {
        id: 85027,
      },
    ],
    cover: {
      id: 186327,
      image_id: "co3zrr",
    },
    first_release_date: 1440374400,
    genres: [
      {
        id: 32,
      },
    ],
    name: "Flywrench",
    summary:
      "Flywrench is a frenetic action game from the makers of Nidhogg about piloting an aerobatic ship through the depths of space.",
    total_rating: 79.5,
  },
  {
    id: 15055,
    age_ratings: [
      {
        id: 11705,
      },
      {
        id: 60343,
        content_descriptions: [
          {
            id: 62805,
            description: "Alcohol Reference",
          },
          {
            id: 62806,
            description: "Crude Humor",
          },
          {
            id: 62807,
            description: "Language",
          },
          {
            id: 62808,
            description: "Mild Cartoon Violence",
          },
        ],
      },
    ],
    cover: {
      id: 21386,
      image_id: "eb8s4kpzv2bjnvbqoxqf",
    },
    first_release_date: 1289865600,
    genres: [
      {
        id: 32,
      },
    ],
    name: "Who's That Flying?!",
    summary:
      'As the mysterious and powerful "Guardian of Earth" your steely eye and HYPER-POWERED LASER ARM have kept the citizens of Earth safe for generations (as well as proving a hit with the ladies).\n\nWith all your awesome TALENT and FLAIR, surely it would be IMPOSSIBLE for a devastating invasion of Doom Beasts to descend on your cities and cause havoc without your knowledge? (Even if you were MAYBE showboating for a magazine photo-shoot at the time...)\n\nNow, you must not only defend your cities from the ravenous hordes of Doom Beasts - you must defend yourself against accusations of gross incompetence from the Galactic Council of Justice! And this is all BEFORE you can even start to get to the bottom of just who OR what is really behind the attacks...',
    total_rating: 60.0,
  },
  {
    id: 15842,
    age_ratings: [
      {
        id: 85298,
        content_descriptions: [
          {
            id: 88154,
            description: "Fantasy Violence",
          },
        ],
      },
    ],
    cover: {
      id: 13755,
      image_id: "emxayrqcotn4oxbi4edt",
    },
    first_release_date: 1456444800,
    genres: [
      {
        id: 32,
      },
    ],
    name: "Perfect Universe",
    summary:
      "Perfect Universe is a collection of 9 gravity inspired games. Featuring 6 hilarious local multiplayer modes and over 70 eye-popping single player levels, this captivating universe has something for everyone.",
    total_rating: 70.66666666666666,
  },
  {
    id: 15991,
    age_ratings: [
      {
        id: 66100,
        content_descriptions: [
          {
            id: 67719,
            description: "Comic Mischief",
          },
          {
            id: 67720,
            description: "Crude Humor",
          },
        ],
      },
    ],
    cover: {
      id: 53435,
      image_id: "hukcqyvksso7hnfmmtt4",
    },
    first_release_date: 1187740800,
    genres: [
      {
        id: 32,
      },
    ],
    name: "Space Giraffe",
    summary:
      "Space Giraffe is an abstract action arcade style game that takes place in a succession of beautiful environments generated by an advanced graphics synthesizer. It presents itself as a shooter but the more you play the more you discover the hidden depths and strategies that make the gameplay satisfyingly rich and rewarding. This is the boldest evolution of the trance-shooter, created by the company that helped to define the genre with the groundbreaking Tempest 2000.",
    total_rating: 59.75,
  },
  {
    id: 8665,
    age_ratings: [
      {
        id: 5993,
      },
      {
        id: 64584,
      },
    ],
    cover: {
      id: 9152,
      image_id: "dfguepwfmwqyhejzkuao",
    },
    first_release_date: 1411516800,
    genres: [
      {
        id: 35,
      },
    ],
    name: "Best of Board Games",
    summary:
      "Chess, Mah-jong, Solitaire: rediscover 3 timeless classics in this scintillating compilation! Whether you're a beginner or a professional, you'll enjoy these classics, not only with their traditional rules but also with brand new game modes!",
  },
  {
    id: 21814,
    age_ratings: [
      {
        id: 48151,
      },
    ],
    cover: {
      id: 196489,
      image_id: "co47m1",
    },
    first_release_date: 1201651200,
    genres: [
      {
        id: 35,
      },
    ],
    name: "Chessmaster LIVE",
    summary:
      "Chessmaster Live is the Xbox Live version of the reference chess franchise. It features multiplayer and solo modes.",
    total_rating: 80.0,
  },
  {
    id: 21945,
    age_ratings: [
      {
        id: 69997,
        content_descriptions: [
          {
            id: 71812,
            description: "Mild Fantasy Violence",
          },
        ],
      },
    ],
    cover: {
      id: 129509,
      image_id: "co2rxh",
    },
    first_release_date: 1190073600,
    genres: [
      {
        id: 35,
      },
    ],
    name: "Yu-Gi-Oh! GX: Tag Force 2",
    summary:
      "Yu-Gi-Oh! GX Tag Force 2, known as Yu-Gi-Oh! Duel Monsters GX TAG FORCE 2 in Japan, is the second installment in the Yu-Gi-Oh! Tag Force series.",
    total_rating: 71.62558161746489,
  },
  {
    id: 23767,
    age_ratings: [
      {
        id: 17885,
      },
    ],
    cover: {
      id: 51028,
      image_id: "g2rsyfgo3z5ovfa8b3zj",
    },
    first_release_date: 1066608000,
    genres: [
      {
        id: 35,
      },
    ],
    name: "Monopoly 2003 Edition",
    summary:
      "The famous Monopoly board game comes to the current generation of consoles featuring a variety of new features, including mini-games.\n\nThe Monopoly video games promise a fresh take on the timeless classic with accessible gameplay for players of all ages and skill levels. The all-new digital gaming edition brings a party twist and features 4-player simultaneous play, ensuring that everyone is engaged and allowing the whole family to get involved in the fun and play together.\n\nFaster gameplay eliminates downtime freeing up players to wheel and deal their way through some of the most recognizable cities and landmarks from around the world. Families can fill up their passports as they try to unlock new and never-before-seen game boards or challenge each other to fun interactive mini-games like breaking out of the jail cell and running away with all the loot.\n\nPlay in offline single or multi-player mode and compete to own it all and win!",
  },
  {
    id: 28059,
    age_ratings: [
      {
        id: 25827,
      },
    ],
    cover: {
      id: 104498,
      image_id: "co28mq",
    },
    first_release_date: 1351209600,
    genres: [
      {
        id: 35,
      },
    ],
    name: "Microsoft Solitaire Collection",
    summary:
      "Microsoft Solitaire Collection is a video game included with Windows 10. It replaces Solitaire, FreeCell and Spider Solitaire included with the previous versions of Windows. It also adds Pyramid and TriPeaks to Windows for the first time and introduces new daily challenges and themes.",
    total_rating: 70.0467576447196,
  },
  {
    id: 28466,
    age_ratings: [
      {
        id: 12374,
      },
      {
        id: 12375,
      },
    ],
    cover: {
      id: 23445,
      image_id: "pvamzwgwuzct0xadcae9",
    },
    first_release_date: 1488499200,
    genres: [
      {
        id: 35,
      },
    ],
    name: "Othello",
    summary:
      'GAME DETAILS\nWherever, whenever, whoever! Classic boardgame "Othello"!\n\nThe well-acclaimed boardgame for all ages, "Othello" is now on Nintendo Switch!\n\nPlay in the comfort of your home or outside, and play in a style that suits you best!\n\nA total of 16 levels of computer AI difficulty are available for Single Player Modes!\n\nHints on where the stones can be placed, and displays to show which tiles will be flipped in this move are also available to help new players understand the game better!\n\nTwo-player mode is also available!\nBoth players can play together on 1 Nintendo Switch by simply sharing the Joy-con, or simply operate directly on the Touch Screen!\nDo play with your family and friends!',
    total_rating: 58.0,
  },
  {
    id: 42854,
    age_ratings: [
      {
        id: 73727,
        content_descriptions: [
          {
            id: 76344,
            description: "Mild Fantasy Violence",
          },
          {
            id: 76345,
            description: "Mild Suggestive Themes",
          },
        ],
      },
    ],
    cover: {
      id: 129507,
      image_id: "co2rxf",
    },
    first_release_date: 1285286400,
    genres: [
      {
        id: 35,
      },
    ],
    name: "Yu-Gi-Oh! 5D's Tag Force 5",
    summary:
      "Tagforce 5 is one of the most expansive Yu-Gi-Oh! games to date with over 4,500 cards and more than 300 hours of gameplay.",
    total_rating: 82.92502149532149,
  },
  {
    id: 44957,
    age_ratings: [
      {
        id: 76708,
      },
    ],
    cover: {
      id: 28409,
      image_id: "wf78ww2h2f7twzdcfw6i",
    },
    first_release_date: 1001635200,
    genres: [
      {
        id: 35,
      },
    ],
    name: "Card Games",
    summary:
      "Card Games is a value-priced PlayStation title containing six different card games tied together with a casino interface. Draw Poker, Blackjack, Baccarat and Seven-card Stud are the traditional entries, with the less-familiar Speed and President rounding out the package.\n\nCasino mode starts you out with a small amount of chips and the goal of winning enough cash to purchase items at the shop. Merchandise includes new background music, access to higher stakes tables, and most importantly, furnishings for your room. When the game begins, your room is empty, but as you earn money you are able to buy a variety of products such as wallpaper, carpet and TVs. Your winnings and all merchandise purchased are saved on the memory card at the end of each session.",
  },
  {
    id: 52577,
    age_ratings: [
      {
        id: 17336,
      },
      {
        id: 80274,
      },
    ],
    cover: {
      id: 164285,
      image_id: "co3irh",
    },
    first_release_date: 1230076800,
    genres: [
      {
        id: 35,
      },
    ],
    name: "Mahjong Tales: Ancient Wisdom",
    summary:
      "Playstation Network title, developed and published by TikGames / Creat Studios.",
  },
  {
    id: 58751,
    age_ratings: [
      {
        id: 42426,
      },
      {
        id: 42427,
      },
    ],
    cover: {
      id: 154809,
      image_id: "co3bg9",
    },
    first_release_date: 1462838400,
    genres: [
      {
        id: 35,
      },
    ],
    name: "Ludo Blitz",
  },
  {
    id: 115,
    age_ratings: [
      {
        id: 31270,
        content_descriptions: [
          {
            id: 31118,
            description: "Blood",
          },
          {
            id: 31119,
            description: "Fantasy Violence",
          },
          {
            id: 31120,
            description: "Mild Suggestive Themes",
          },
          {
            id: 31121,
            description: "Use of Alcohol and Tobacco",
          },
        ],
      },
      {
        id: 44234,
        content_descriptions: [
          {
            id: 48702,
            description: "Online Gameplay",
          },
        ],
      },
      {
        id: 47794,
      },
      {
        id: 47795,
        content_descriptions: [
          {
            id: 52571,
            description: "Violence",
          },
        ],
      },
      {
        id: 47796,
        content_descriptions: [
          {
            id: 52572,
            description: "Violência (Violence)",
          },
        ],
      },
      {
        id: 47797,
      },
    ],
    cover: {
      id: 199459,
      image_id: "co49wj",
    },
    first_release_date: 1256601600,
    genres: [
      {
        id: 36,
      },
    ],
    name: "League of Legends",
    summary:
      "League of Legends is a fast-paced, competitive online game that blends the speed and intensity of an RTS with RPG elements. Two teams of powerful champions, each with a unique design and playstyle, battle head-to-head across multiple battlefields and game modes. With an ever-expanding roster of champions, frequent updates and a thriving tournament scene, League of Legends offers endless replayability for players of every skill level.",
    total_rating: 80.40790213641935,
  },
  {
    id: 7004,
    age_ratings: [
      {
        id: 17817,
      },
      {
        id: 48747,
        content_descriptions: [
          {
            id: 54542,
            description: "Language",
          },
          {
            id: 54543,
            description: "Violence",
          },
        ],
      },
    ],
    cover: {
      id: 188582,
      image_id: "co41ie",
    },
    first_release_date: 1191715200,
    genres: [
      {
        id: 36,
      },
    ],
    name: "Guilty Gear 2: Overture",
    summary:
      "Two completely different game systems carried out in a fast paced real-time environment. Be the commander of your troops, and also be the frontline hero of your army, battling enemy forces head-on while giving out commands!",
    total_rating: 73.25,
  },
  {
    id: 7313,
    age_ratings: [
      {
        id: 10038,
        content_descriptions: [
          {
            id: 13152,
            description: "Crude Humor",
          },
          {
            id: 13153,
            description: "Fantasy Violence",
          },
          {
            id: 13154,
            description: "Mild Language",
          },
          {
            id: 13155,
            description: "Mild Suggestive Themes",
          },
          {
            id: 13156,
            description: "Mild Blood",
          },
        ],
      },
      {
        id: 44214,
        content_descriptions: [
          {
            id: 48681,
            description: "Violence",
          },
          {
            id: 48682,
            description: "Bad Language",
          },
          {
            id: 48683,
            description: "Online Gameplay",
          },
        ],
      },
    ],
    cover: {
      id: 197882,
      image_id: "co48oq",
    },
    first_release_date: 1433203200,
    genres: [
      {
        id: 36,
      },
    ],
    name: "Heroes of the Storm",
    summary:
      "Heroes of the Storm is a multiplayer online battle arena video game by Blizzard Entertainment. The game brings together characters (known in the game as heroes) from multiple Blizzard universes, such as Warcraft and StarCraft and puts them against each other in an arena in a 5 versus 5 battle. Heroes of the Storm features multiple game modes, such as co-op (PCs vs. NPCs) and versus (PCs vs. PCs).",
    total_rating: 76.05100085321254,
  },
  {
    id: 90661,
    age_ratings: [
      {
        id: 23028,
        content_descriptions: [
          {
            id: 21988,
            description: "Blood",
          },
          {
            id: 21989,
            description: "Language",
          },
          {
            id: 21990,
            description: "Suggestive Themes",
          },
          {
            id: 21991,
            description: "Use of Tobacco",
          },
          {
            id: 21992,
            description: "Violence",
          },
        ],
      },
    ],
    cover: {
      id: 124022,
      image_id: "co2np2",
    },
    first_release_date: 1546214400,
    genres: [
      {
        id: 36,
      },
    ],
    name: "Fully Loaded Pack - Awesomenauts Assemble! Game Bundle",
    summary:
      "This bundle was released after the game migrate to Free-To-Play and it contains: \n \n- Awesomenauts Assemble! \n- Character Ted McPain \n- Character Sentry X-58 \n- Character Skree \n- Character Penny Fox \n- Character Nibbs \n- Character Professor M. Yoolip \n- Character Chucho Krokk \n- Character Jimmy & the LUX5000 \n- Character Max Focus \n- Character Dizzy \n- Character Smiles \n- Character Commander Rocket \n- Character Qi'Tara",
    total_rating: 20.0,
  },
  {
    id: 90662,
    age_ratings: [
      {
        id: 23027,
        content_descriptions: [
          {
            id: 21983,
            description: "Blood",
          },
          {
            id: 21984,
            description: "Language",
          },
          {
            id: 21985,
            description: "Suggestive Themes",
          },
          {
            id: 21986,
            description: "Use of Tobacco",
          },
          {
            id: 21987,
            description: "Violence",
          },
        ],
      },
    ],
    cover: {
      id: 124023,
      image_id: "co2np3",
    },
    first_release_date: 1546214400,
    genres: [
      {
        id: 36,
      },
    ],
    name: "Fully Loaded Collector's Pack - Awesomenauts Assemble! Game Bundle",
    summary:
      "This bundle was released after the game migrates to Free-To-Play, contains: \n \n- Awesomenauts Assemble! \n- Fully Loaded Pack - Awesomenauts Assemble! Game Bundle \n- Costume Party Pack \n- Costume Party II Pack",
    total_rating: 70.0,
  },
  {
    id: 90983,
    age_ratings: [
      {
        id: 23032,
        content_descriptions: [
          {
            id: 22000,
            description: "Blood",
          },
          {
            id: 22001,
            description: "Language",
          },
          {
            id: 22002,
            description: "Suggestive Themes",
          },
          {
            id: 22003,
            description: "Use of Tobacco",
          },
          {
            id: 22004,
            description: "Violence",
          },
        ],
      },
    ],
    cover: {
      id: 124024,
      image_id: "co2np4",
    },
    first_release_date: 1546214400,
    genres: [
      {
        id: 36,
      },
    ],
    name: "Rocket's Renegades - Awesomenauts Assemble! Character Pack",
    summary:
      "This bundle was released after the game migrated to Free-To-Play, contains: \n \n- Character Dizzy \n- Character Smiles \n- Character Commander Rocket \n- Character Qi'Tara",
  },
  {
    id: 135381,
    age_ratings: [
      {
        id: 44029,
        content_descriptions: [
          {
            id: 48339,
            description: "Mild Fantasy Violence",
          },
        ],
      },
      {
        id: 46874,
      },
      {
        id: 68147,
      },
    ],
    cover: {
      id: 180989,
      image_id: "co3vnh",
    },
    first_release_date: 1626739200,
    genres: [
      {
        id: 36,
      },
    ],
    name: "Pokémon Unite",
    summary:
      "Team up and take down the opposition in Pokémon’s first 5-on-5 strategic team battle game!\n\nJoin Trainers from around the world as they head for Aeos Island to compete in Unite Battles! In Unite Battles, Trainers face off in 5-on-5 team battles to see who can score the most points within the allotted time. Teamwork is key as you and your teammates defeat wild Pokémon, level up, evolve your own Pokémon, and work to prevent the opposing team from scoring points. Put your teamwork to the test, and take home the win!",
    total_rating: 73.02564360343455,
  },
  {
    id: 146723,
    age_ratings: [
      {
        id: 36074,
      },
      {
        id: 36075,
      },
    ],
    cover: {
      id: 139084,
      image_id: "co2zbg",
    },
    first_release_date: 1619222400,
    genres: [
      {
        id: 36,
      },
    ],
    name: "Frayhem",
    summary:
      "Enjoy fun fast-paced battles in the arena of Frayhem!\n\nFrayhem is a multiplayer brawler combining MOBA (multiplayer online battle arena) and battle royale elements, and it's easy to learn. Brawl with opponents to achieve glory in the arena! This multiplayer brawler can be learned by anyone but mastered by only a few. Try it for yourself and see if you can take the crown in battle royale and team-based modes. Become the legend of the mobile multiplayer arena!",
  },
  {
    id: 210661,
    age_ratings: [
      {
        id: 84487,
      },
      {
        id: 84488,
      },
    ],
    cover: {
      id: 233879,
      image_id: "co50gn",
    },
    first_release_date: 1656633600,
    genres: [
      {
        id: 36,
      },
    ],
    name: "Revoland",
    summary:
      "Revoland is an e-sport game based on blockchain technology. Challenge yourselfwith various game modes. Play to earn has never been so easy!",
  },
];

let formateado = unformated.map((game) => {
  let result = {};
  result = {
    id: game.id,
    urlId: game.cover.image_id || "",
    genreId: game.genres[0].id,
    name: game.name,
    description: game.summary,
    valoration: 0,
    price: Math.floor(Math.random() * (10000 - 2000) + 2000),
    updatedAt: "2022-08-23T22:40:23.479Z",
    createdAt: "2022-08-23T22:40:23.479Z",
  };
  result["esrb"] = game.age_ratings[0].content_descriptions
    ?.map((group) => {
      let esrbUnformated = "";
      return (esrbUnformated += group.description);
    })
    .toString();

  return result;
});

module.exports = {
  up: (queryInterface, Sequelize) => {

    return queryInterface.bulkInsert("products", formateado);

  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("products", null, {});
  },
};
