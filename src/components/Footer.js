import "../css/footer.css";
export default function Footer() {
  return (
    <footer class="footer">
      <div class="footer__addr">
        <h1 class="footer__logo">Landkit .</h1>

        <h2>A better way to build.</h2>
      </div>

      <ul class="footer__nav">
        <li class="nav__item">
          <h2 class="nav__title">PRODUCTS</h2>

          <ul class="nav__ul">
            <li>
              <a href="#">Page Builder</a>
            </li>

            <li>
              <a href="#">UI Kit</a>
            </li>

            <li>
              <a href="#">Styleguide</a>
            </li>
          </ul>
        </li>

        <li class="nav__item">
          <h2 class="nav__title">SERVICES</h2>

          <ul class="nav__ul">
            <li>
              <a href="#">Documentaion</a>
            </li>

            <li>
              <a href="#">Changelog</a>
            </li>

            <li>
              <a href="#">PageBuilder</a>
            </li>
            <li>
              <a href="#">UI Kit</a>
            </li>
          </ul>
        </li>

        <li class="nav__item">
          <h2 class="nav__title">CONNECT</h2>

          <ul class="nav__ul">
            <li>
              <a href="#">Hardware Design</a>
            </li>

            <li>
              <a href="#">Software Design</a>
            </li>

            <li>
              <a href="#">Digital Signage</a>
            </li>
          </ul>
        </li>

        <li class="nav__item">
          <h2 class="nav__title">LEGAL</h2>

          <ul class="nav__ul">
            <li>
              <a href="#">Privacy Policy</a>
            </li>

            <li>
              <a href="#">Terms of Use</a>
            </li>

            <li>
              <a href="#">Sitemap</a>
            </li>
          </ul>
        </li>
      </ul>
    </footer>
  );
}
