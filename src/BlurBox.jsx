function BlurBox() {
  return (
    <div
      id="information"
      style={{
        top: "80rem",
        left: "80rem",
        position: "absolute",
        height: "20rem",
        width: "20rem",
        backdropFilter: "blur(8px)",
        scale: "1",
        background: "rgb(0, 123, 255, 0.7)",
        opacity: "0",
        display: "none",
      }}
    ></div>
  );
}

export default BlurBox;
