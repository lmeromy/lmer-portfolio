import { nanoid } from 'nanoid';

// HEAD DATA
export const headData = {
  title: 'Leah Meromy', // e.g: 'Name | Developer'
  lang: '', // e.g: en, es, fr, jp
  description: 'What a G!', // e.g: Welcome to my website
};

// HERO DATA
export const heroData = {
  title: 'Hello, my name is', // Hello, my name is
  name: 'Leah Meromy:', // John
  subtitle: 'Scientist --> Software Engineer', // I'm the Unknown Developer.
  cta: 'Learn more', // Know more
};

// ABOUT DATA
export const aboutData = {
  img: 'CordesSurCiel.jpg',
  paragraphOne:
    'I have been building software for a few years now, but I started off my professional life as a hydrologist and environmental consultant. I enjoy digging through data and pulling out useful stories, untangling technical problems, and building software which makes the world a better place.',
  paragraphTwo:
    'When I am not working, I love to spend time hiking with my family and friends. I am quite accomplished at planning travel adventures (pre-pandemic)!',
  paragraphThree: '____________________________________________________________________',
  resume:
    'https://docs.google.com/document/d/1epp1nkebx-sDAKjHf8tb1uAUj5lJLPkQN96NJM9WMms/edit?usp=sharing', // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: 'hiitathome.png',
    title: 'HIIT at Home',
    info: 'An app to generate your own customizable, at-home workout! No equipment required.',
    info2: 'Built with: React, Javascript, Node.js, Express.js, PostGreSQL',
    url: 'https://hiitathome.herokuapp.com/',
    repo: 'https://github.com/lmeromy/hiitathome', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'warehouser.png',
    title: 'Warehouser',
    info:
      'Software for organizing store inventory. Example data are for a fictional outdoor gear shop.',
    info2: 'Built with: Ruby, Sinatra, PostGreSQL',
    url: 'http://warehouser-manage-stock.herokuapp.com/',
    repo: 'https://github.com/lmeromy/Project1-ShopInventorySoftware', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'watercycleapp.png',
    title: 'Water Cycle Learning App',
    info:
      'An educational app for elementary school-aged children to help them learn about the hydrologic cycle, and help them understand how they use water in their daily lives. Built as a paired project with my former colleague, Anna Henderson.',
    info2: 'Built with: Javascript, MongoDB, Express, Google Charts',
    url: 'url to proj',
    repo: 'https://github.com/lmeromy/water_cycle_javascript_project', // if no repo, the button will not show up
  },
  // {
  //   id: nanoid(),
  //   img: 'project.jpg',
  //   title: 'Epicurean Lmer',
  //   info: 'Some info about this project',
  //   info2: '',
  //   url: 'url to proj',
  //   repo: 'https://github.com/cobidev/react-simplefolio', // if no repo, the button will not show up
  // },
];

// ABOUT DATA
export const publicationsData = {
  img: 'CordesSurCiel.jpg',
  paragraphOne:
    'I have been building software for a few years now, but I started off my professional life as a hydrologist and environmental consultant. I enjoy digging through data and pulling out useful stories, untangling technical problems, and building software which makes the world a better place.',
  paragraphTwo:
    'When I am not working, I love to spend time hiking with my family and friends. I am quite accomplished at planning travel adventures (pre-pandemic)!',
  paragraphThree: '____________________________________________________________________',
  resume:
    'https://docs.google.com/document/d/1epp1nkebx-sDAKjHf8tb1uAUj5lJLPkQN96NJM9WMms/edit?usp=sharing', // if no resume, the button will not show up
};

// CONTACT DATA
export const contactData = {
  cta: 'Get in touch',
  btn: 'Email me',
  email: 'lmeromy@gmail.com',
};

// FOOTER DATA
export const footerData = {
  networks: [
    {
      id: nanoid(),
      name: 'devto',
      url: 'https://dev.to/lmeromy',
    },
    {
      id: nanoid(),
      name: 'linkedin',
      url: 'https://www.linkedin.com/in/leah-meromy/',
    },
    {
      id: nanoid(),
      name: 'github',
      url: 'https://github.com/lmeromy',
    },
  ],
};

// Github start/fork buttons
export const githubButtons = {
  isEnabled: false, // set to false to disable the GitHub stars/fork buttons
};
