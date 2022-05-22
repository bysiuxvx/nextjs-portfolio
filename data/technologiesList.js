import Emoji from "../components/Emoji"

import SvgNextjs2 from "../SVG/Nextjs2"
import SvgTypescript from "../SVG/Typescript"
import SvgRedux from "../SVG/Redux"
import SvgSass1 from "../SVG/Sass1"
import SvgDocker from "../SVG/Docker"
import SvgBootstrap4 from "../SVG/Bootstrap4"

export const technologiesList = [
  //   {
  //     name: "React",
  //     image: SvgReact2,
  //     imageAlt: "React logo",
  //     comment: "To be honest? Pure love! 🥰",
  //   },
  {
    name: "TypeScript",
    image: SvgTypescript,
    imageAlt: "TypeScript logo",
    comment: `It was a bit frustrating to use in the beginning due to all the errors and interface setups, but that's actually the point ot if. And I noticed - I don't repeat those mistakes too often afterwards 🤓. The key lies in knowing when and where to use it. Using TS for a landing page that has no logic behind it is a complete overkill imho.`,
  },

  {
    name: "Next.js",
    image: SvgNextjs2,
    imageAlt: "Next.js logo",
    comment: `I love React, most of the things I do are in React. And this is basically React, but better. I like how some things have been improved and even simplified, like f.e the routing. SSR is also going to become a standard soon, which is the main point of this framework.`,
  },
  {
    name: "Redux",
    image: SvgRedux,
    imageAlt: "Redux logo",
    comment: `Love / hate relationship. I wish every Redux project was at least based on Redux Toolkit, it would be so much clearer. Things can become confusing with Redux reaaaally fast 😵‍💫.`,
  },
  {
    name: "Sass",
    image: SvgSass1,
    imageAlt: "Sass logo",
    comment:
      "I rarely use preprocessors these days, but if I had to use one it would definitely be SCSS!",
  },
  {
    name: "Docker",
    image: SvgDocker,
    imageAlt: "Docker logo",
    comment:
      "I've had some experience with Docker during my internship, couldn't call my self efficient in that matter - but I see the advantages of containerization it in a project.",
  },
  {
    name: "Bootstrap",
    image: SvgBootstrap4,
    imageAlt: "Bootstrap logo",
    comment: `Not a big fan of bootstrap, personally I prefer other UI libraries like semantic UI or Chakra UI(🥰), which in my opinion is both prettier and more modern, but also easier to use.`,
  },
]
