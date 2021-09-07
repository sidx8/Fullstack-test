import "../css/pricing.css";

export default function PricingComponent() {
  return (
    <div class="p-table section-color">
      <div class="container-pricing">
        <div class="panel pricing-table">
          <div class="pricing-plan">
            <div class="">
              <span class="pricing-price">$29</span>/mo
            </div>
            <h2 class="pricing-header">Per Seat</h2>

            <a href="#/" class="pricing-button">
              Sign up
            </a>
          </div>

          <div class="pricing-plan">
            <img
              src="https://s22.postimg.cc/8mv5gn7w1/paper-plane.png"
              alt=""
              class="pricing-img"
            />
            <h2 class="pricing-header">Personal</h2>
            <ul class="pricing-features">
              <li class="pricing-features-item">Custom domains</li>
              <li class="pricing-features-item">
                Sleeps after 30 mins of inactivity
              </li>
            </ul>
            <a href="#/" class="pricing-button">
              Sign up
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
