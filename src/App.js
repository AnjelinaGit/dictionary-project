import logo from "./logo.png";
import "./App.css";
import Dictionary from "./Dictionary";

export default function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      <main>
        <Dictionary defaultKeyword="sunset" />
      </main>

      <footer className="App-footer">
        {" "}
        This project was coded by{" "}
        <a
          href="https://glowing-centaur-a1d5b1.netlify.app/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Anjelina Kabul
        </a>{" "}
        and is{" "}
        <a
          href="https://github.com/AnjelinaGit/dictionary-project"
          target="_blank"
          rel="noopener noreferrer"
        >
          {" "}
          open-sourced on GitHub
        </a>
      </footer>
    </div>
  );
}
