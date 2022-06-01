import bookstore from "../public/images/projects/bookstore.jpg"
import movieBrowser from "../public/images/projects/movie_browser.jpg"
import unsplashBrowser from "../public/images/projects/unsplash_browser.jpg"
import toDoApp from "../public/images/projects/todo_app.jpg"
import weatherApp from "../public/images/projects/weather_app.jpg"
import passwordGenerator from "../public/images/projects/password_generator.jpg"
import thisPic from "../public/images/projects/this.jpg"
// import portfolioDog from "/images/projects/portfolio-dog.jpg"
import portfolioDog from "../public/images/projects/portfolio-dog.jpg"

export const projectList = [
  {
    name: "Movie Browser",
    description: `Built in React Typescript, using Zustand for state management. 
    Interface made with Semantic UI. Includes favorite list and allows users to rate movies. Keeps the data even after reloading the page.`,
    shortDescription:
      "Movie browser that enables rating and saving favorites to local storage.",
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
    description: `A cool project I did as part of a recruitment process. 
    The app uses Redux, allows storing favorite pictures which are then accessible also after page reload.`,
    shortDescription:
      "App that runs the Unsplash API, allowing saving favorites to local storage.",
    image: unsplashBrowser,
    imageAlt: "Image browser",
    githubURL: "https://github.com/bysiuxvx/image-search-unsplash",
    liveDemo: "https://bysiuxvx.github.io/image-search-unsplash/",
    techStack: ["React", "Redux", "Reactstrap", "SASS", "Unslpash API"],
  },
  {
    name: "Next.js portfolio",
    description: `I wanted to update my previous portfolio I made around May 2021, but instead I chose to build a new one from scratch,
    while reusing some concepts of the previous one.
    First and foremost, I decided to build it in Next.js this time around, since I really got to like this framework recently. 
    Secondly, I decided to use a UI library instead of writing literally all the styling and media queries on my own as with the first one.
    This is a huge improvement already compared to the previous one, and the experience is much smoother.
    Also Chakra UI allowed me to effortlelsy use and switch between themes.`,
    shortDescription: "The page you have in front of you 🤓.",
    image: portfolioDog,
    imageAlt: "Dog model",
    githubURL: "https://github.com/bysiuxvx/nextjs-homepage",
    liveDemo: "https://pbyszek.com",
    techStack: [
      "Next.js",
      "Chakra UI",
      "React Three Fiber",
      "Emotion",
      "Express",
      "Nodemailer",
    ],
  },
  {
    name: "React Typescript Bookstore",
    description: `Part of a recruitment process. Redux State, form validation in the checkout. 
    Requirements were: Typescript, React, Redux, success confirmation from the backend (included in the source code). 
    This was a hard one as I had very limited time for it, 4 hours counting down upon entering link to get the task and source code. 
    But I also enjoyed it and feel that I learned something new too.`,
    shortDescription:
      "Quick bookstore app I did as homework in a recruitment process.",
    image: bookstore,
    imageAlt: "Bookstore image",
    githubURL: "https://github.com/bysiuxvx/Bookstore",
    liveDemo: "https://github.com/bysiuxvx/Bookstore",
    techStack: ["Typescript", "React", "Redux", "Reactstrap", "SCSS", "lodash"],
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
      "Very basic weather app. Not really much to say about it, it was one of my first apps where I started paying more attention to the visuals. It runs the API of OpenWeatherMap.",
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
  // {
  //   name: "This website!",
  //   description:
  //     "Even though using React for such a small website seems to be an overkill, I decided to do it anyway. This is the first time I designed a website mobile first. The projects section in landscape orientation could be better, but that's because I'm not that good at designing yet! I like the mobile / tablet version of the projects section though - I got the inspiration from the message clouds from popular messaging apps.",
  //   image: thisPic,
  //   imageAlt: "This website picture",
  //   githubURL: "https://github.com/bysiuxvx/portfolio",
  //   liveDemo: "https://portfolio-pb.herokuapp.com/#/",
  // },
]
