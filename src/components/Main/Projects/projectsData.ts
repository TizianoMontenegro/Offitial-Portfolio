import { projectsDataType } from "@/types";

export const projectsData: projectsDataType[] = [
  {
    id: 1,
    title: "Contacts",
    description: "This is my first Full-Stack web app. Built in Flask for the backend, SQLAlchemy with SQLite for the connection with the database, and React.js for the frontend.",
    imageUrl: "/public/show-page1.png",
    imageUrls: ["/public/show-page1.png", "/public/show-page2.png", "/public/show-page3.png"],
    techs: ["Python","Flask","TypeScript","SQLite","SQL","React","HTML","CSS"],
    githubUrl: "https://github.com/TizianoMontenegro/Contacts",
    webUrl: "https://contacts-t13mhr3e2-tiziano-montenegros-projects.vercel.app"
  },
  {
    id: 2,
    title: "MovieSearch",
    description: "Nice app for search movies. Use Next.js and make requests to an API to get the movies and content",
    imageUrl: "/public/show-page2.png",
    imageUrls: ["/public/show-page2.png", "/public/show-page1.png", "/public/show-page3.png"],
    techs: ["JavaScript", "NextJS", "React","HTML","CSS"],
    githubUrl: "https://github.com/TizianoMontenegro/MovieSearch",
    webUrl: "https://movie-search-7suchbven-tiziano-montenegros-projects.vercel.app"
  },
  {
    id: 3,
    title: "DotDager",
    description: "Static website for a contest. I didn't have much time because I found out late. So I make it in two days.",
    imageUrl: "/public/show-page3.png",
    imageUrls: ["/public/show-page3.png", "/public/show-page2.png", "/public/show-page1.png"],
    techs: ["TypeScript","React","HTML","CSS"],
    githubUrl: "https://github.com/TizianoMontenegro/DotDager",
    webUrl: "https://dot-dager-zeta.vercel.app"
  },
  {
    id: 4,
    title: "Tic-Tac-Toe-AI",
    description: "The game of Tic-Tac-Toe using an adversarial search algorithm called Minimax.",
    imageUrl: "https://imgs.search.brave.com/biH0Bo1Bb9ExOrge7GUnatYnGFuiM8xPjf-HWZahVo4/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly90NC5m/dGNkbi5uZXQvanBn/LzAwLzAwLzE2LzIx/LzM2MF9GXzE2MjE0/MF81QzVrWFR2RTFw/OEhFV1RQTWV4dENV/d0ZnbTVGQlUuanBn",
    imageUrls: ["https://imgs.search.brave.com/biH0Bo1Bb9ExOrge7GUnatYnGFuiM8xPjf-HWZahVo4/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly90NC5m/dGNkbi5uZXQvanBn/LzAwLzAwLzE2LzIx/LzM2MF9GXzE2MjE0/MF81QzVrWFR2RTFw/OEhFV1RQTWV4dENV/d0ZnbTVGQlUuanBn","https://imgs.search.brave.com/i9-2wlUhqExpaITC9Yf9--g1Esjadu9JcuXXdf5DpcA/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvMTg0/MzQ1NjAxL3Bob3Rv/L3RpYy10YWMtdG9l/LXBsYXkuanBnP3M9/NjEyeDYxMiZ3PTAm/az0yMCZjPXd3V3pZ/elVmd0UzM1FZOHEw/TnhGMnJpNUp5X0Fl/QWxhZGpJcDVpcFdF/Uk09"],
    techs: ["Python"],
    githubUrl: "https://github.com/TizianoMontenegro/Tic-Tac-Toe-AI",
    webUrl: "https://github.com/TizianoMontenegro/Tic-Tac-Toe-AI"
  },
  {
    id: 5,
    title: "Minesweeper-AI",
    description: "The game of Minesweeper using an Inference Algorithm called Model-Checking.",
    imageUrl: "https://imgs.search.brave.com/RxYTl2JNaiNlTs3xJo-NtWyAXGSSTyLTTaTuLUlf74E/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly91cGxv/YWQud2lraW1lZGlh/Lm9yZy93aWtpcGVk/aWEvY29tbW9ucy8x/LzFiL0ttaW5lc19F/eHBlcnRfR2FtZV93/aXRoX051bWJlcnNf/MS04LnBuZw",
    imageUrls: ["https://imgs.search.brave.com/RxYTl2JNaiNlTs3xJo-NtWyAXGSSTyLTTaTuLUlf74E/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly91cGxv/YWQud2lraW1lZGlh/Lm9yZy93aWtpcGVk/aWEvY29tbW9ucy8x/LzFiL0ttaW5lc19F/eHBlcnRfR2FtZV93/aXRoX051bWJlcnNf/MS04LnBuZw","https://imgs.search.brave.com/5K0mkWgc2IkOaL_rYzAPXQ4q1eApwnytmYSNXiYrSMg/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly90My5m/dGNkbi5uZXQvanBn/LzA2LzUyLzk4LzEw/LzM2MF9GXzY1Mjk4/MTA0NF9sbENLNXk0/RDgwNkdrWFpoTk04/Um5xY1ZxWlhXMDJu/Qy5qcGc"],
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
    id: 6,
    title: "Crossword-AI",
    description: "AI to generate crossword puzzles, problem formulated as a contraint satisfaction problem, using ac3 and backtrack algorithms in order to solve the problem.",
    imageUrl: "https://imgs.search.brave.com/aeT3KetXN_CoBS646cdDdrcswPTbJ7nm6ktcIYP2QOI/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93d3cu/Ym9zdG9uZ2xvYmUu/Y29tL3Jlc2l6ZXIv/WlBvWEpOdzVxUkRf/ZGVLSTRONGVtWXd5/YkpVPS9hcmMtYW5n/bGVyZmlzaC1hcmMy/LXByb2QtYm9zdG9u/Z2xvYmUvcHVibGlj/L1NYNVZDWUJDQkJB/S1hHR1VQV0wyR1pH/VlQ0LmpwZw",
    imageUrls: ["https://imgs.search.brave.com/aeT3KetXN_CoBS646cdDdrcswPTbJ7nm6ktcIYP2QOI/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93d3cu/Ym9zdG9uZ2xvYmUu/Y29tL3Jlc2l6ZXIv/WlBvWEpOdzVxUkRf/ZGVLSTRONGVtWXd5/YkpVPS9hcmMtYW5n/bGVyZmlzaC1hcmMy/LXByb2QtYm9zdG9u/Z2xvYmUvcHVibGlj/L1NYNVZDWUJDQkJB/S1hHR1VQV0wyR1pH/VlQ0LmpwZw","https://imgs.search.brave.com/h_grQ3BNLId9yaHam-XKD8AQcNhIAy8gITk1zKNujww/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly93d3cu/Ym9zdG9uZ2xvYmUu/Y29tL3Jlc2l6ZXIv/SlQwQzB2YkV0STJh/NWxmeU1kdkJNZEFs/VDg4PS9hcmMtYW5n/bGVyZmlzaC1hcmMy/LXByb2QtYm9zdG9u/Z2xvYmUvcHVibGlj/L0pCWVZRT0hHS0ZI/UlJKTUJYN0Y1T0ZL/VkRZLmpwZw"],
    techs: ["Python"],
    githubUrl: "https://github.com/TizianoMontenegro/Crossword-AI",
    webUrl: "https://github.com/TizianoMontenegro/Crossword-AI"
  },
]