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
  name: 'Leah Meromy', // John
  subtitle: 'and I am a real big nerd', // I'm the Unknown Developer.
  cta: 'Learn more', // Know more
};

// ABOUT DATA
export const aboutData = {
  img: 'CordesSurCiel.jpg',
  paragraphOne: 'Some data about Leah',
  paragraphTwo: 'Leah is a boss',
  paragraphThree: 'She is so smart',
  resume: 'https://www.resumemaker.online/es.php', // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: 'hiitathome.png',
    title: 'HIIT at Home',
    info: 'Some info about this project',
    info2: 'Built with: React, Javascript, Node.js, Express.js, PostGreSQL',
    url: 'https://hiitathome.herokuapp.com/',
    repo: 'https://github.com/lmeromy/hiitathome', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'warehouser.png',
    title: 'Warehouser',
    info: 'Some info about this project',
    info2: 'Built with: Ruby, Sinatra, PostGreSQL',
    url: 'http://warehouser-manage-stock.herokuapp.com/',
    repo: 'https://github.com/lmeromy/Project1-ShopInventorySoftware', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'watercycleapp.png',
    title: 'Water Project with Anna',
    info: 'Some info about this project',
    info2: 'Built with: Javascript, HTML, CSS, MongoDB, Express, Google Charts',
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
  // {
  //   id: nanoid(),
  //   img: 'project.jpg',
  //   title: 'HIIT at Home',
  //   info: 'Some info about this project',
  //   info2: '',
  //   url: 'url to proj',
  //   repo: 'https://github.com/cobidev/react-simplefolio', // if no repo, the button will not show up
  // },
];

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
