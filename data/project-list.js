import bookstore from "../public/images/projects/bookstore.jpg"
import movieBrowser from "../public/images/projects/movie_browser.jpg"
import unsplashBrowser from "../public/images/projects/unsplash_browser.jpg"
import weatherApp from "../public/images/projects/weather_app.jpg"
import portfolioDog from "../public/images/projects/portfolio-dog.jpg"

export const projectList = [
  {
    name: "Movie Browser",
    description: `CRUD app built in Next.js 14. When you log in, you can rate movies / series you've watched, and add them to your favorites list. Originally built in React, but I've migrated it to Next.js 14, added Typescript and online functionalities.`,
    shortDescription: "Movie browser that enables rating and saving favorites.",
    image: movieBrowser,
    imageAlt: "Movie browser",
    githubURL: "https://github.com/bysiuxvx/react-movie-browser",
    liveDemo:
      "https://react-movie-browser-cmc09ghdv-bysiuxvxs-projects.vercel.app/",
    techStack: [
      "Next.js 14",
      "Typescript",
      "Jotai",
      "PostgreSQL",
      "SWR",
      "Clerk",
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
    techStack: ["React", "Redux", "Reactstrap", "Typescript"],
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
    githubURL: "https://github.com/bysiuxvx/nextjs-portfolio",
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
    name: "Weather app - my first ever project",
    description:
      "Very basic weather app. Not really much to say about it, it was the first app I've ever made. It runs the API of OpenWeatherMap.",
    image: weatherApp,
    imageAlt: "Weather app picture",
    githubURL: "https://github.com/bysiuxvx/weather-app",
    liveDemo: "https://bysiuxvx.github.io/weather-app/",
  },
]
