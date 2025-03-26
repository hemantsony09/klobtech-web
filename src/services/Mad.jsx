import Footer from "../Footer";
import Navigation from "../Navigation";
import xImage from "./x.png";

Footer;
import "./Mad.css";
function Mad() {
  return (
    <>
      <Navigation></Navigation>
      <div className="serviceHero">
        <div
        // style={{ height: "50rem", width: "50rem", backgroundColor: "red" }}
        >
          <img src={xImage} alt="" />
        </div>
        <div
          style={{
            display: "flex",
            height: "50rem",
            width: "70rem",
            // backgroundColor: "red",
            flexDirection: "column",
            gap: "3rem",
            justifyContent: "center",
          }}
        >
          <h1 style={{ fontSize: "4rem" }}>Mobile App Development</h1>
          <p style={{ fontSize: "2.5rem" }}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea earum id
            provident, eligendi repudiandae veritatis harum qui inventore magnam
            velit blanditiis soluta asperiores repellat praesentium voluptatum
            ipsam iure natus doloremque. Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Suscipit, inventore nesciunt, vero incidunt eum
            ipsum similique autem ut dolorem magnam ad veritatis rerum ullam sed
            porro laudantium quis. Perferendis, excepturi?
          </p>
        </div>
      </div>
      <div className="serviceGridContainer">
        <div className="gridTitle">
          <p style={{ fontSize: "5rem", fontWeight: "600" }}>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
          </p>
        </div>
        <div className="gridArea">
          <div className="appService">
            <div className="appServiceTitleArea">
              <p style={{ fontSize: "3rem", fontWeight: "500" }}>
                Lorem ipsum dolor
              </p>{" "}
            </div>
            <div className="appServiceDescriptionArea">
              <p style={{ fontSize: "2rem" }}>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quia
                deserunt voluptatem esse ipsum sequi, veniam saepe asperiores
                praesentium quibusdam nobis culpa, qui minima excepturi. Dolor
                incidunt quas labore amet fugiat?
              </p>
            </div>
          </div>
          <div className="appService">
            <div className="appServiceTitleArea">
              <p style={{ fontSize: "3rem", fontWeight: "500" }}>
                Lorem ipsum dolor
              </p>{" "}
            </div>
            <div className="appServiceDescriptionArea">
              <p style={{ fontSize: "2rem" }}>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quia
                deserunt voluptatem esse ipsum sequi, veniam saepe asperiores
                praesentium quibusdam nobis culpa, qui minima excepturi. Dolor
                incidunt quas labore amet fugiat?
              </p>
            </div>
          </div>
          <div className="appService">
            <div className="appServiceTitleArea">
              <p style={{ fontSize: "3rem", fontWeight: "500" }}>
                Lorem ipsum dolor
              </p>{" "}
            </div>
            <div className="appServiceDescriptionArea">
              <p style={{ fontSize: "2rem" }}>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quia
                deserunt voluptatem esse ipsum sequi, veniam saepe asperiores
                praesentium quibusdam nobis culpa, qui minima excepturi. Dolor
                incidunt quas labore amet fugiat?
              </p>
            </div>
          </div>
          <div className="appService">
            <div className="appServiceTitleArea">
              <p style={{ fontSize: "3rem", fontWeight: "500" }}>
                Lorem ipsum dolor
              </p>{" "}
            </div>
            <div className="appServiceDescriptionArea">
              <p style={{ fontSize: "2rem" }}>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quia
                deserunt voluptatem esse ipsum sequi, veniam saepe asperiores
                praesentium quibusdam nobis culpa, qui minima excepturi. Dolor
                incidunt quas labore amet fugiat?
              </p>
            </div>
          </div>
          <div className="appService">
            <div className="appServiceTitleArea">
              <p style={{ fontSize: "3rem", fontWeight: "500" }}>
                Lorem ipsum dolor
              </p>{" "}
            </div>
            <div className="appServiceDescriptionArea">
              <p style={{ fontSize: "2rem" }}>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quia
                deserunt voluptatem esse ipsum sequi, veniam saepe asperiores
                praesentium quibusdam nobis culpa, qui minima excepturi. Dolor
                incidunt quas labore amet fugiat?
              </p>
            </div>
          </div>
          <div className="appService">
            <div className="appServiceTitleArea">
              <p style={{ fontSize: "3rem", fontWeight: "500" }}>
                Lorem ipsum dolor
              </p>{" "}
            </div>
            <div className="appServiceDescriptionArea">
              <p style={{ fontSize: "2rem" }}>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quia
                deserunt voluptatem esse ipsum sequi, veniam saepe asperiores
                praesentium quibusdam nobis culpa, qui minima excepturi. Dolor
                incidunt quas labore amet fugiat?
              </p>
            </div>
          </div>
        </div>
      </div>
      <Footer></Footer>
    </>
  );
}

export default Mad;
