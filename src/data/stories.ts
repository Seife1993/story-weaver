import ironAndIvy from "@/assets/iron-and-ivy.jpg";
import lastBeekeeper from "@/assets/last-beekeeper.jpg";
import saltAndStarlight from "@/assets/salt-and-starlight.jpg";
import glassArchive from "@/assets/glass-archive.jpg";
import cartographersWar from "@/assets/cartographers-war.jpg";
import chapterIllustration from "@/assets/chapter-illustration.jpg";

export interface Story {
  id: string;
  title: string;
  author: string;
  genre: string;
  genreLabel: string;
  description: string;
  image: string;
  likes: number;
  chapters: Chapter[];
  characters: Character[];
  settings: Setting[];
  totalWords: number;
  lastEdited: string;
  status: string;
  isOwned: boolean;
}

export interface Chapter {
  id: string;
  title: string;
  wordCount: number;
  lastEdited: string;
  content: string[];
  illustration?: string;
}

export interface Character {
  name: string;
  role: string;
  description: string;
}

export interface Setting {
  name: string;
  description: string;
}

export const stories: Story[] = [
  {
    id: "iron-and-ivy",
    title: "Iron & Ivy",
    author: "Julian Ashford",
    genre: "steampunk",
    genreLabel: "STEAMPUNK",
    description: "In the walled city of Verdun, where ivy consumes steel and steam powers prayer...",
    image: ironAndIvy,
    likes: 342,
    chapters: [
      {
        id: "ch1",
        title: "The Walled Garden",
        wordCount: 2100,
        lastEdited: "Jan 10, 2024",
        content: [
          "The morning the iron gates opened, the city exhaled. Steam rose from the vents lining Verdun's cobblestone streets, curling around the ankles of merchants and monks alike.",
          "Ivy had claimed half the cathedral by the time Elara arrived. She pressed her palm against the cool stone, feeling the pulse of the machinery buried beneath centuries of green.",
          '"The gears still turn," she whispered to no one. The ivy shivered in response, as if the city itself were listening.',
        ],
      },
    ],
    characters: [
      { name: "Elara Voss", role: "Protagonist", description: "A mechanist who hears the city's heartbeat" },
      { name: "Brother Caelum", role: "Mentor", description: "The last keeper of the steam prayers" },
    ],
    settings: [
      { name: "Verdun", description: "A walled city where nature and machine have fused over centuries" },
    ],
    totalWords: 2100,
    lastEdited: "Jan 10, 2024",
    status: "In Progress",
    isOwned: false,
  },
  {
    id: "last-beekeeper",
    title: "The Last Beekeeper",
    author: "Sylvia Okonkwo",
    genre: "science-fiction",
    genreLabel: "SCIENCE FICTION",
    description: "When the bees returned, they brought memories of a world that never was.",
    image: lastBeekeeper,
    likes: 518,
    chapters: [
      {
        id: "ch1",
        title: "The Return",
        wordCount: 1800,
        lastEdited: "Jan 8, 2024",
        content: [
          "The first bee appeared on a Tuesday. Not the synthetic pollinators that hummed through the agricultural domes, but a real bee—golden, fuzzy, impossibly alive.",
          "Amara caught it in a glass jar and held it up to the light. Its wings caught the sun filtering through the dome's panels, throwing tiny rainbows across her workstation.",
        ],
      },
    ],
    characters: [
      { name: "Amara", role: "Protagonist", description: "The last person who remembers real bees" },
    ],
    settings: [
      { name: "The Domes", description: "Agricultural biodomes that replaced natural farmland" },
    ],
    totalWords: 1800,
    lastEdited: "Jan 8, 2024",
    status: "Complete",
    isOwned: false,
  },
  {
    id: "salt-and-starlight",
    title: "Salt and Starlight",
    author: "Julian Ashford",
    genre: "romance",
    genreLabel: "ROMANCE",
    description: "A nautical romance between a lighthouse keeper and a sea witch.",
    image: saltAndStarlight,
    likes: 276,
    chapters: [
      {
        id: "ch1",
        title: "The Beacon",
        wordCount: 1950,
        lastEdited: "Jan 7, 2024",
        content: [
          "The lighthouse had been dark for seven years when Maren climbed its stairs for the first time. Salt had eaten through the railing, and the glass at the top was so thick with brine it looked like ice.",
          "She cleaned it anyway. Every night, she climbed. Every night, she lit the lamp. And every night, something in the water watched her back.",
        ],
      },
    ],
    characters: [
      { name: "Maren", role: "Protagonist", description: "A lighthouse keeper running from the mainland" },
      { name: "Ondine", role: "Love Interest", description: "A sea witch bound to the reef" },
    ],
    settings: [
      { name: "Thornlight Reef", description: "A treacherous stretch of coast with a single lighthouse" },
    ],
    totalWords: 1950,
    lastEdited: "Jan 7, 2024",
    status: "Draft",
    isOwned: true,
  },
  {
    id: "glass-archive",
    title: "The Glass Archive",
    author: "You",
    genre: "fantasy",
    genreLabel: "FANTASY",
    description: "Where memory is currency and truth is printed in crystal.",
    image: glassArchive,
    likes: 89,
    chapters: [
      {
        id: "the-forgetting",
        title: "The Forgetting",
        wordCount: 2450,
        lastEdited: "Jan 14, 2024",
        content: [
          "The morning the Archivist came for my grandmother's memories, the city held its breath. Frost etched the windows of every house in the merchant district, turning the glass into translucent lace that filtered the pale winter light.",
          '"In Caelum, we do not die. We are merely borrowed by the Archive."',
          "I watched from the balcony as his carriage crested the hill—black lacquer and silver filigree, drawn by six horses whose breath steamed in the cold air. The Archivist himself would not deign to visit a mere merchant's house, of course. He sent his Curators.",
          "Grandmother sat in her chair by the fire, hands folded in her lap. She had known they were coming. We all had. The tremor in her left hand had worsened over the past month, and twice she had called me by my mother's name—my mother who had been Transcribed five years ago.",
          '"Lirael," she said, not looking at me. "Fetch my blue shawl. The one with the silver threads."',
          "I did not correct her. I fetched the shawl.",
        ],
        illustration: chapterIllustration,
      },
      {
        id: "crystal-and-ink",
        title: "Crystal and Ink",
        wordCount: 1890,
        lastEdited: "Jan 12, 2024",
        content: [
          "The Crystal Hall stood at the heart of the Archive, a cathedral of glass and memory. Each pane held a lifetime—translucent sheets that hummed with the voices of the Transcribed.",
          "I pressed my fingers against the nearest crystal. A woman's laugh echoed through my bones, followed by the smell of bread baking and the warmth of a summer that existed only in someone else's past.",
        ],
      },
    ],
    characters: [
      { name: "Lirael", role: "Narrator", description: "A merchant's granddaughter caught between duty and rebellion" },
      { name: "The Archivist", role: "Antagonist", description: "Keeper of all memories in Caelum" },
    ],
    settings: [
      { name: "Caelum", description: "A city where memories are extracted and stored in crystal archives" },
      { name: "The Crystal Hall", description: "The central repository of all Transcribed memories" },
    ],
    totalWords: 4340,
    lastEdited: "Jan 9, 2024",
    status: "In Progress",
    isOwned: true,
  },
  {
    id: "cartographers-war",
    title: "The Cartographer's War",
    author: "You",
    genre: "adventure",
    genreLabel: "ADVENTURE",
    description: "When maps become weapons, the world redraws itself.",
    image: cartographersWar,
    likes: 45,
    chapters: [],
    characters: [],
    settings: [],
    totalWords: 0,
    lastEdited: "Dec 31, 2023",
    status: "Complete",
    isOwned: true,
  },
];

export const featuredCollection = {
  title: "Stories That Reimagine History",
  description: "Explore alternate timelines where small moments changed everything. From the fall of Rome to the space race, these writers ask: what if?",
};

export const genres = ["All", "Fantasy", "Science Fiction", "Romance", "Mystery", "Horror", "Adventure"];
