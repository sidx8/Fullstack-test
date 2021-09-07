import "./css/main.css";
import Navbar from "./components/Navbar";
import logo from "./sharespace.svg";
import illu from "./images/illustration-2.png";
import illu2 from "./images/001-web.png";
import illu3 from "./images/002-statistics.png";
import illu4 from "./images/003-code.png";
import Footer from "./components/Footer";
import PricingComponent from "./components/pricing";
import Sections from "./components/Sections";
import { Link } from "react-router-dom";
function App() {
  return (
    <body>
      <Navbar />
      <section class="hero">
        <div class="container">
          <div class="left-col">
            <h1>
              Welcome to <span> Landkit.</span> Develop anything.
            </h1>
            <p class="subhead">
              Build a beautiful, modern website with flexible Bootstrap
              components built from scratch.
            </p>
            <div class="hero-cta">
            <Link to="/home">
              <a href="#" class="primary-cta">
                Test Routeing →
              </a>
              </Link>
              <a href="#" class="bta">
                Documentaion
              </a>
            </div>
          </div>

          <img src={illu} class="hero-img" alt="Illustration"></img>
        </div>
      </section>
      <section class="testimonials-section">
        <div class="container">
          <ul>
            <li>
              <img src={illu2} alt="Person" />
              <br />
              <h1 class="smallhead">Built for developers</h1>
              Landkit is built to make your life easier. Variables, build
              tooling, documentation, and reusable components.
            </li>
            <li>
              <img src={illu3} alt="Person" />
              <br />
              <h1 class="smallhead">Designed to be modern</h1>
              Designed with the latest design trends in mind. Landkit feels
              modern, minimal, and beautiful.
            </li>
            <li>
              <img src={illu4} alt="Person" />
              <br />
              <h1 class="smallhead">Documentation for everything</h1>
              Landkit is built to make your life easier. Variables, build
              tooling, documentation, and reusable components.
            </li>
          </ul>
        </div>
      </section>
      <Sections />
      {/* <PricingComponent /> */}
      <Footer />
    </body>
  );
}

export default App;
