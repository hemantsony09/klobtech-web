import logoImg from "../assets/logo.png";
function logo() {
  return (
    <>
      <img
        style={{
          position: "absolute",
          height: "10rem",
          left: "10rem",
          top: 3,
        }}
        src={logoImg}
        alt=""
      />
    </>
  );
}

export default logo;
