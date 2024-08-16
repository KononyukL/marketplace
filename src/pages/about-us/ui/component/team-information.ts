type IItems = { icon: string; link: string };

type ITeamKeys = {
  title: string;
  position: string;
  image?: string;
  items?: IItems[];
};

export const teamInformationKeys: ITeamKeys[] = [
  {
    title: "about-us.name.pm",
    position: "Project Manager",
    image: "/images/team/Tkhoruk.jpg",
    items: [
      {
        icon: "/images/linkedin.svg",
        link: "https://www.linkedin.com/in/serhii-tkhoruk-51a2a5b1/",
      },
    ],
  },
  {
    title: "about-us.name.qa.mentor",
    position: "Mentor, QA Engineer",
  },
  {
    title: "about-us.name.designer.mentor",
    position: "Mentor, UI/UX Designer",
    image: "/images/team/Kucher.jpg",
    items: [
      {
        icon: "/images/linkedin.svg",
        link: "https://www.linkedin.com/in/nataly-kucher-a2464250?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app",
      },
    ],
  },
  {
    title: "about-us.name.designer.designer-a",
    position: "UX/UI Designer",
    image: "/images/team/Pohranychna.jpg",
    items: [
      {
        icon: "/images/linkedin.svg",
        link: " https://www.linkedin.com/in/maria-pohranychna-uiuxdesigner/",
      },
      {
        icon: "/images/behance.svg",
        link: "https://www.behance.net/merrymerry6",
      },
    ],
  },
  {
    title: "about-us.name.designer.designer-b",
    position: "UX Designer",
    image: "/images/team/Lazebna.jpg",
    items: [
      {
        icon: "/images/linkedin.svg",
        link: " https://www.linkedin.com/in/sofiialazebna/",
      },
      {
        icon: "/images/behance.svg",
        link: " https://www.behance.net/05bec81f",
      },
    ],
  },
  {
    title: "about-us.name.designer.designer-c",
    position: "UX/UI Designer",
    image: "/images/team/Kiiashko.jpg",
    items: [
      {
        icon: "/images/linkedin.svg",
        link: "https://www.linkedin.com/in/polina-kiiashko-designer/",
      },
      {
        icon: "/images/notion.svg",
        link: " https://polinakiiashko.notion.site/Hey-I-m-Polina-c630594cf19a42e9b187bda57d71f436",
      },
    ],
  },
  {
    title: "about-us.name.developer.front-end-a",
    position: "Front-end Developer",
    image: "/images/team/Kononiuk.jpg",
    items: [
      {
        icon: "/images/linkedin.svg",
        link: "https://www.linkedin.com/in/liliia-kononiuk-91963a256/",
      },
      {
        icon: "/images/github.svg",
        link: "https://github.com/KononyukL",
      },
    ],
  },
  {
    title: "about-us.name.developer.front-end-b",
    position: "Front-end Developer",
    // image: "/images/team/Kononiuk.jpg",
    items: [
      {
        icon: "/images/linkedin.svg",
        link: "https://www.linkedin.com/in/alla-zubko-24b34290",
      },
      {
        icon: "/images/github.svg",
        link: "https://github.com/ZubkoA",
      },
    ],
  },
  {
    title: "about-us.name.developer.front-end-c",
    position: "Front-end Developer",
    image: "/images/team/Ponomarova.jpg",
    items: [
      {
        icon: "/images/linkedin.svg",
        link: "https://www.linkedin.com/in/olha-ponomarova/",
      },
      {
        icon: "/images/github.svg",
        link: "https://github.com/OlhaPo",
      },
    ],
  },
  {
    title: "about-us.name.qa.engineer-a",
    position: "QA Engineer",
    image: "/images/team/Zakharova.jpg",
    items: [
      {
        icon: "/images/linkedin.svg",
        link: "http://www.linkedin.com/in/tetiana-zakharova-5a284821a",
      },
    ],
  },
  {
    title: "about-us.name.developer.java-a",
    position: "Java Developer",
    image: "/images/team/Haponov.jpg",
    items: [
      {
        icon: "/images/linkedin.svg",
        link: "https://www.linkedin.com/in/andriy-gaponov/",
      },
      {
        icon: "/images/github.svg",
        link: "https://github.com/LionnoiL",
      },
    ],
  },
  {
    title: "about-us.name.developer.java-b",
    position: "Java Developer",
    image: "/images/team/Koval.jpg",
    items: [
      {
        icon: "/images/linkedin.svg",
        link: "http://www.linkedin.com/in/koval-bohdan",
      },
      {
        icon: "/images/github.svg",
        link: "https://github.com/KovalBohdan-0",
      },
    ],
  },
  {
    title: "about-us.name.qa.engineer-b",
    position: "Java Developer",
    image: "/images/team/Korniiets.jpg",
    items: [
      {
        icon: "/images/linkedin.svg",
        link: "https://www.linkedin.com/in/max-korniiets-69291325a/",
      },
    ],
  },
];
