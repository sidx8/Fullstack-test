import illu1 from "../images/dashboard.jpg";
import illu from "../images/Screenshot_3.png";
export default function Sections() {
  return (
    <>
    <div class="section-color">
      <section class="hero">
        <div class="container">
          <img src={illu} class="hero-img-2" alt="Illustration"></img>
          <div class="left-col">
            <h1>
            We have lots of experience<br/> 
            <span>building Bootstrap themes.</span>
            </h1>
            <p class="subhead">
              Using Landkit to build your site means never worrying about
              designing another page or cross browser compatibility. Our
              ever-growing library of components and pre-designed layouts will
              make your life easier.
            </p>
            <div class="hero-cta"></div>
          </div>
        </div>
      </section>
      <section class="hero">
        <div class="container">
          <div class="left-col space-col">
            <h1>
              Stay focused on your business
              <span> Let us handle the design.</span>
            </h1>
            <p class="subhead">
            We've built well over a dozen Bootstrap themes and sold tens of thousands of copies.
            </p>
            <div class="hero-cta"></div>
          </div>
          <img src={illu1} class="hero-img-trans" alt="Illustration"></img>
        </div>
      </section>
      </div>
    </>
  );
}
