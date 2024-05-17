import logo from "./logo.svg";
// import "./App.css";
import { Menu } from "./components/Menu";
import { Landing } from "./components/Landing";
import { CardComponent } from "./components/CardComponent";
import { Testomonial } from "./components/Testomonial";
import { Project } from "./components/Project";
import { FAQ } from "./components/FAQ";
import { TypingEffect } from "./components/TypingEffect";
import { Download } from "./components/Download";
import { ScrollSpy } from "bootstrap";
import { ScrollToTop } from "./components/ScrollToTop";

function App() {
  return (
    <div>
      <Landing />
      {/* <FAQ /> */}
      {/* <Testomonial /> */}
      {/* <Download /> */}
      {/* <ScrollToTop /> */}
    </div>
  );
}

export default App;
