import bookstore from "../images/projects/bookstore.jpg"
import movieBrowser from "../images/projects/movie_browser.jpg"
import unsplashBrowser from "../images/projects/unsplash_browser.jpg"
import toDoApp from "../images/projects/todoapp_fullsize.jpg"
import weatherApp from "../images/projects/weatherapp_fullsize.jpg"
import passwordGenerator from "../images/projects/passwordgenerator_fullsize.jpg"
import thisPic from "../images/projects/this.jpg"

export const projectList = [
  {
    name: "Movie Browser",
    description: `Built in React Typescript, using Zustand for state management. Interface made with Semantic UI. Includes favorite list and allows users to rate movies. Keeps the data even after reloading the page.`,
    image: movieBrowser,
    imageAlt: "Movie browser",
    githubURL: "https://github.com/bysiuxvx/react-movie-browser",
    liveDemo: "https://bysiuxvx.github.io/react-movie-browser/",
    techStack: [
      "Typescript",
      "React",
      "Zustand",
      "Semantic UI",
      "SASS",
      "OMDbAPI",
    ],
  },
  {
    name: "Unsplash image browser",
    description: `A cool project I did as part of a recruitment process. The app uses Redux, allows storing favorite pictures which are then accessible also after page reload.`,
    image: unsplashBrowser,
    imageAlt: "Image browser",
    githubURL: "https://github.com/bysiuxvx/image-search-unsplash",
    liveDemo: "https://bysiuxvx.github.io/image-search-unsplash/",
  },
  {
    name: "React Typescript Bookstore",
    description: `Part of a recruitment process. Redux State, form validation in the checkout. This was a hard one, but I also enjoyed it and feel that I learned something new too.`,
    image: bookstore,
    imageAlt: "Bookstore image",
    githubURL: "https://github.com/bysiuxvx/Bookstore",
    liveDemo: "https://github.com/bysiuxvx/Bookstore",
  },

  {
    name: "To Do List",
    description: `My first React project. I'm looking forward to replacing this one very soon. Treat it as a placeholder.`,
    image: toDoApp,
    imageAlt: "To Do list app picture",
    githubURL: "https://github.com/bysiuxvx/ToDoApp-react",
    liveDemo: "https://bysiuxvx.github.io/ToDoApp-react/",
  },
  {
    name: "Weather app",
    description:
      "Very basic weather app. Not much to say about it, it was one of my first apps where I paid at least a little bit of attention to the optics. It runs the API of OpenWeatherMap.",
    image: weatherApp,
    imageAlt: "Weather app picture",
    githubURL: "https://github.com/bysiuxvx/weather-app",
    liveDemo: "https://bysiuxvx.github.io/weather-app/",
  },
  {
    name: "Password generator",
    description:
      "Just a simple password generator. Perfect for simple and quick usage! No one is ever going to hack your account or decrypt your important files again with a password from this baby.",
    image: passwordGenerator,
    imageAlt: "Password generator app picture",
    githubURL: "https://github.com/bysiuxvx/password-generator",
    liveDemo: "https://bysiuxvx.github.io/password-generator/",
  },
  {
    name: "This website!",
    description:
      "Even though using React for such a small website seems to be an overkill, I decided to do it anyway. This is the first time I designed a website mobile first. The projects section in landscape orientation could be better, but that's because I'm not that good at designing yet! I like the mobile / tablet version of the projects section though - I got the inspiration from the message clouds from popular messaging apps.",
    image: thisPic,
    imageAlt: "This website picture",
    githubURL: "https://github.com/bysiuxvx/portfolio",
    liveDemo: "https://portfolio-pb.herokuapp.com/#/",
  },
]
