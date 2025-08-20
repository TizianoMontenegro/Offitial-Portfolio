import { projectsDataType } from "@/types";

export const projectsData: projectsDataType[] = [
  {
    id: 1,
    title: "Contacts",
    description: "This is my first Full-Stack web app. Built in Flask for the backend, SQLAlchemy with SQLite for the connection with the database, and React.js for the frontend.",
    imageUrl: "/show-page1.png",
    imageUrls: ["/show-page1.png", "/show-page2.png", "/show-page3.png"],
    techs: ["Python","Flask","TypeScript","SQLite","React","HTML","CSS"],
    githubUrl: "https://github.com/TizianoMontenegro/Contacts",
    webUrl: "https://contacts-t13mhr3e2-tiziano-montenegros-projects.vercel.app"
  },
  {
    id: 2,
    title: "MovieSearch",
    description: "Nice app for search movies. Use Next.js and make requests to an API to get the movies and content",
    imageUrl: "/show-page2.png",
    imageUrls: ["/show-page2.png", "/show-page1.png", "/show-page3.png"],
    techs: ["JavaScript", "NextJS", "React","HTML","CSS"],
    githubUrl: "https://github.com/TizianoMontenegro/MovieSearch",
    webUrl: "https://movie-search-7suchbven-tiziano-montenegros-projects.vercel.app"
  },
  {
    id: 3,
    title: "DotDager",
    description: "Static website for a contest. I didn't have much time because I found out late. So I make it in two days.",
    imageUrl: "/show-page3.png",
    imageUrls: ["/show-page3.png", "/show-page2.png", "/show-page1.png"],
    techs: ["TypeScript","React","HTML","CSS"],
    githubUrl: "https://github.com/TizianoMontenegro/DotDager",
    webUrl: "https://dot-dager-zeta.vercel.app"
  },
  {
    id: 4,
    title: "Minesweeper-AI",
    description: "The game of Minesweeper using an Inference Algorithm called Model-Checking.",
    imageUrl: "",
    imageUrls: [],
    techs: ["Python"],
    githubUrl: "https://github.com/TizianoMontenegro/Minesweeper-AI",
    webUrl: "https://github.com/TizianoMontenegro/Minesweeper-AI"
  },
  // {
  //   id: 6,
  //   title: "-AI",
  //   description: "",
  //   imageUrl: "",
  //   imageUrls: [""],
  //   techs: ["Python"],
  //   githubUrl: "https://github.com/TizianoMontenegro/Minesweeper-AI",
  //   webUrl: "https://github.com/TizianoMontenegro/Minesweeper-AI"
  // },
  {
    id: 5,
    title: "Crossword-AI",
    description: "AI to generate crossword puzzles, problem formulated as a contraint satisfaction problem, using ac3 and backtrack algorithms in order to solve the problem.",
    imageUrl: "",
    imageUrls: [],
    techs: ["Python"],
    githubUrl: "https://github.com/TizianoMontenegro/Crossword-AI",
    webUrl: "https://github.com/TizianoMontenegro/Crossword-AI"
  },
  {
    id: 6,
    title: "Tic-Tac-Toe-AI",
    description: "The game of Tic-Tac-Toe using an adversarial search algorithm called Minimax.",
    imageUrl: "",
    imageUrls: [],
    techs: ["Python"],
    githubUrl: "https://github.com/TizianoMontenegro/Tic-Tac-Toe-AI",
    webUrl: "https://github.com/TizianoMontenegro/Tic-Tac-Toe-AI"
  },
]