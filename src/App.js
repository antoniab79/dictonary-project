import "./App.css";
import Dictionary from './Dictionary';

export default function App() {
  return (
    <div className="App">
      <div className="container">
      <header className="App-header">
        <h1>Dictonary App </h1>
      </header>
      <main>
        <Dictionary defaultKeyword="sunrise" />
      </main>
      <footer>This project was coded by Antonia, it's open-sourced on { " " }
        <a href="https://github.com/antoniab79/dictonary-project">Github</a>, and hosted on { " " }
        <a href="https://react-word-lookup.netlify.app/">Netlify</a>
      </footer>
    </div>
    </div>
  );
}
