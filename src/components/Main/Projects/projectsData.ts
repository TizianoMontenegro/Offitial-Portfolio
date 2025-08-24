import { projectsDataType } from "@/types";

export const projectsData: projectsDataType[] = [
  {
    id: 1,
    title: "DRecognizer",
    description: "DRecognizer project integrates a trained CNN model into an interactive web app. The user can draw digits in a browser, and the backend (using Python, Flask, and TensorFlow) processes the image to predict which digit was drawn.",
    imageUrl: "https://i.postimg.cc/MGkwdc3q/Digit-Recognizer-Brave-19-7-2025-00-27-20-min.png",
    imageUrls: ["https://i.postimg.cc/MGkwdc3q/Digit-Recognizer-Brave-19-7-2025-00-27-20-min.png", "https://i.postimg.cc/W1qjGmn5/Digit-Recognizer-Brave-16-7-2025-19-56-54-min.png", "https://i.postimg.cc/rsYXWzt6/Digit-Recognizer-Brave-19-7-2025-00-28-06-min.png"],
    techs: ["Python","TensorFlow","Keras","Flask","JavaScript","HTML","CSS"],
    githubUrl: "https://github.com/TizianoMontenegro/Hand-Written-Numbers-AI",
    webUrl: ""
  },
  {
    id: 2,
    title: "Sudoku Online with AI integrated",
    description: "Sudoku web app game AI using Depth First Search for solve the game. Made Flask(Python) and React(TypeScript).",
    imageUrl: "https://i.postimg.cc/JzjTbt9f/Sudoku-Solver-AI-08-20-2025-08-22-PM-min.png",
    imageUrls: ["https://i.postimg.cc/JzjTbt9f/Sudoku-Solver-AI-08-20-2025-08-22-PM-min.png", "https://i.postimg.cc/ZqZwj4mC/Sudoku-Solver-AI-08-20-2025-08-36-PM-min.png", "https://i.postimg.cc/nLk0PgVT/Sudoku-Solver-AI-08-20-2025-08-38-PM-min.png"],
    techs: ["Python","Flask","TypeScript","JavaScript","React","TailwindCSS","HTML","CSS"],
    githubUrl: "https://github.com/TizianoMontenegro/Sudoku-AI",
    webUrl: ""
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
    id: 3,
    title: "Crossword-AI",
    description: "AI to generate crossword puzzles, problem formulated as a contraint satisfaction problem, using ac3 and backtrack algorithms in order to solve the problem.",
    imageUrl: "",
    imageUrls: [],
    techs: ["Python"],
    githubUrl: "https://github.com/TizianoMontenegro/Crossword-AI",
    webUrl: "https://github.com/TizianoMontenegro/Crossword-AI"
  },
  {
    id: 4,
    title: "Sentiment-AI",
    description: "Sentiment AI is a Python-based sentiment analysis tool that uses natural language processing to determine the emotional tone of text input. Powered by NLTK's Naive Bayes classifier, this tool can predict whether a given sentence expresses positive or negative sentiment with probability scores.",
    imageUrl: "",
    imageUrls: [],
    techs: ["Python"],
    githubUrl: "https://github.com/TizianoMontenegro/Sentiment-AI",
    webUrl: ""
  },
  {
    id: 5,
    title: "MovieSearch",
    description: "Nice app for search movies. Use Next.js and make requests to an API to get the movies and content",
    imageUrl: "https://i.postimg.cc/15213nQw/show-page2-min-1.png",
    imageUrls: ["https://i.postimg.cc/prdMpKrY/Search-The-Best-Movies-Brave-12-7-2025-22-39-52-min.png", "https://i.postimg.cc/rFKLTGvq/Search-The-Best-Movies-Brave-12-7-2025-22-40-06-min.png", "https://i.postimg.cc/L8PKY997/Search-The-Best-Movies-Brave-12-7-2025-22-40-19-min.png"],
    techs: ["JavaScript","NextJS","React","HTML","CSS"],
    githubUrl: "https://github.com/TizianoMontenegro/MovieSearch",
    webUrl: "https://movie-search-7suchbven-tiziano-montenegros-projects.vercel.app"
  },
  {
    id: 6,
    title: "Contacts",
    description: "This is my first Full-Stack web app. Built in Flask for the backend, SQLAlchemy with SQLite for the connection with the database, and React.js for the frontend.",
    imageUrl: "https://i.postimg.cc/gcMP1ttM/show-page1-min.png",
    imageUrls: ["https://i.postimg.cc/gcMP1ttM/show-page1-min.png"],
    techs: ["Python","Flask","TypeScript","JavaScript","SQLite","React","HTML","CSS"],
    githubUrl: "https://github.com/TizianoMontenegro/Contacts",
    webUrl: "https://contacts-t13mhr3e2-tiziano-montenegros-projects.vercel.app"
  },
  {
    id: 7,
    title: "Minesweeper-AI",
    description: "The game of Minesweeper using an Inference Algorithm called Model-Checking.",
    imageUrl: "",
    imageUrls: [],
    techs: ["Python"],
    githubUrl: "https://github.com/TizianoMontenegro/Minesweeper-AI",
    webUrl: "https://github.com/TizianoMontenegro/Minesweeper-AI"
  },
  {
    id: 8,
    title: "Tic-Tac-Toe-AI",
    description: "The game of Tic-Tac-Toe using an adversarial search algorithm called Minimax.",
    imageUrl: "",
    imageUrls: [],
    techs: ["Python"],
    githubUrl: "https://github.com/TizianoMontenegro/Tic-Tac-Toe-AI",
    webUrl: "https://github.com/TizianoMontenegro/Tic-Tac-Toe-AI"
  },
]