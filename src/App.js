import "./App.css";
import Noodlespic from "./images/noodles.jpg";
import Souppic from "./images/soups.jpg";
function App() {
  return (
    <div class="background">
      <div class="container">
        <div class="menu">
          <h2 className="sedan-regular-italic">
            Today's
            <span className="overlay1">Special</span>
            <span className="overlay">Food Menu</span>
          </h2>
          <div class="special">
            <div class="right">
              <img src={Noodlespic} alt="Today's Special" />
            </div>
            <div class="left">
              <h3 className="sedan-regular-italic submenu">
                {" "}
                <span style={{ color: "white" }}>Main</span> Dishes
              </h3>
              <div class="item">
                <h3 class="price">
                  MARYLAND CRAB SOUP ----
                  <strong style={{ color: "#F26D20" }}>$9.00</strong>
                </h3>
                <p
                  className="mobileview"
                  style={{ width: "75%", fontSize: "12px" }}
                >
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor.
                </p>
              </div>
              <div class="item">
                <h3 class="price">
                  BROCOLLI CHED SOUP ----
                  <strong style={{ color: "#F26D20" }}>$9.00</strong>
                </h3>
                <p
                  className="mobileview"
                  style={{ width: "75%", fontSize: "12px" }}
                >
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor.
                </p>
              </div>
              <div class="item">
                <h3 class="price">
                  SPEGHETTI CARBONAR ----
                  <strong style={{ color: "#F26D20" }}>$9.00</strong>
                </h3>
                <p
                  className="mobileview"
                  style={{ width: "75%", fontSize: "12px" }}
                >
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor.
                </p>
              </div>
            </div>
          </div>
          <div class="special">
            <div class="left">
              <h3 className="sedan-regular-italic submenu">
                <span style={{ color: "white" }}>Beverages</span>
              </h3>
              <div class="item">
                <h3 class="price">
                  MARGARITA ----
                  <strong style={{ color: "#F26D20" }}>$9.00</strong>
                </h3>
                <p
                  className="mobileview"
                  style={{ width: "75%", fontSize: "12px" }}
                >
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor.
                </p>
              </div>
              <div class="item">
                <h3 class="price">
                  MINT JULIP ----
                  <strong style={{ color: "#F26D20" }}>$9.00</strong>
                </h3>
                <p
                  className="mobileview"
                  style={{ width: "75%", fontSize: "12px" }}
                >
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor.
                </p>
              </div>
              <div class="item">
                <h3 class="price">
                  LEMONADE ----
                  <strong style={{ color: "#F26D20" }}>$9.00</strong>
                </h3>
                <p
                  className="mobileview"
                  style={{ width: "75%", fontSize: "12px" }}
                >
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor.
                </p>
              </div>
            </div>
            <div class="right">
              <img src={Souppic} alt="Today's Special" />
            </div>
          </div>
          &nbsp; &nbsp;
          <span style={{ color: "white" }}>For Delivery</span>
          <p className="email">&nbsp;www.website.com</p>
        </div>
      </div>
    </div>
  );
}

export default App;
