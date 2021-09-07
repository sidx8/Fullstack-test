import "./css/main.css";
import Navbar from "./components/Navbar";
import logo from "./sharespace.svg";
import illu from "./images/illustration-2.png";
import illu2 from "./images/001-web.png";
import illu3 from "./images/002-statistics.png";
import illu4 from "./images/003-code.png";
import Footer from "./components/Footer";
import { Link } from "react-router-dom";
function Home() {
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
            <Link to="/">
              <a href="#" class="primary-cta">
                Go Back →
              </a>
              </Link>
            </div>
          </div>

          <img src={illu} class="hero-img" alt="Illustration"></img>
        </div>
      </section>
      <Footer />
    </body>
  );
}

export default Home;
