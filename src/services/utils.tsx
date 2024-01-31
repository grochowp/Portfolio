export interface Skill {
  path: string;
  alt: string;
  haveProjects: boolean;
}

export const SKILLS_KNOW: Skill[] = [
  {
    path: "html",
    alt: "html icon",
    haveProjects: true,
  },
  {
    path: "css",
    alt: "css icon",
    haveProjects: true,
  },
  {
    path: "js",
    alt: "js icon",
    haveProjects: true,
  },
  {
    path: "ts",
    alt: "ts icon",
    haveProjects: true,
  },
  {
    path: "react",
    alt: "react icon",
    haveProjects: true,
  },
  {
    path: "node",
    alt: "node icon",
    haveProjects: true,
  },
];

export const SKILLS_LEARN: Skill[] = [
  {
    path: "vue",
    alt: "vue icon",
    haveProjects: false,
  },
  {
    path: "csharp",
    alt: "c# icon",
    haveProjects: false,
  },
];

export interface Data {
  name: string;
  surname: string;
  education: string;
  email: string;
  employment: string;
  aboutMe: string;
  description: string;
  location: string;
}

export const MY_DATA: Data = {
  name: "Patryk",
  surname: "Grochowski",
  education: "WIT Academy in Warsaw",
  email: "grochowp2@gmail.com",
  employment: "None",
  aboutMe: `
  I'm a computer science student with a passion for coding, exploring the wonders of technology. Besides diving into programming, I'm often found watching football matches or delving into various music genres. I'm an ambitious learner, always eager to pick up new skills and knowledge. I particularly enjoy spending time with others, embracing the joy that shared moments bring.`,
  description: "aspiring front-end React Developer from Warsaw in Poland",
  location: "Warsaw, Rakowiska(Lubelskie)",
};

export interface Project {
  name: string;
  tech: string[];
  links: {
    github: string;
    live?: string;
  };
  description: string;
  image: {
    path: string;
    alt: string;
  };
}

export const PROJECTS: Project[] = [
  {
    name: "Kanban App",
    tech: ["html", "css", "js", "react", "node", "mysql"],
    links: {
      github: "https://github.com/grochowp/planner",
    },
    description: `An application for task management called the "Kanban App" was created using a Node.js backend and a React frontend. Users can access their customized task management area by safely logging in. Through the application's support for the Kanban methodology, users can group tasks into backlog, to-do, doing, and done categories. The ability to add, amend, and remove tasks gives users freedom and encourages collaboration by allowing other users to be added. Within the program, each user can oversee up to eight distinct tasks.`,
    image: {
      path: "/images/kanban.png",
      alt: "Kanban App example photos",
    },
  },

  {
    name: "Mapty App",
    tech: ["html", "css", "js"],
    links: {
      github: "https://github.com/grochowp/WeatherApp",
      live: "a",
    },
    description: `"Mapty App" is a location-based application that offers an easy-to-use interface by seamlessly fusing the capabilities of weather APIs with Leaflet maps. Users can use the search box to identify cities of interest or click on a specific area to interact with the map. To give users the most recent information, the program retrieves real-time weather data for the locations they have picked. The Mapty App provides a user-friendly platform to explore and discover weather facts in an engaging and interactive fashion, regardless of whether you're planning a trip or are just curious about the weather in other places.`,
    image: {
      path: "/images/mapty.png",
      alt: "Kanban App example photos",
    },
  },

  {
    name: "aaa(in progress)",
    tech: ["html", "css", "js"],
    links: {
      github: "",
      live: "",
    },
    description: "aaaa a a a aa a aa a a a  a",
    image: {
      path: "/images/kanban.png",
      alt: "Kanban App example photos",
    },
  },
];

export const SERVICE_ID = "service_l79js7a";
export const TEMPLATE_ID = "template_4tzdo67";
export const USER_KEY = "HVIXsAW5o3s8R64Wq";
