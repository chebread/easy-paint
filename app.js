const canvas = document.querySelector("#canvas");
const ctx = canvas.getContext("2d");
let isPainting = false;
const licenseMsg = `MIT License © ${new Date().getFullYear()} Cha Haneum`;
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
ctx.strikeStyle = "black"; // Canvas 선 색상 설정
ctx.lineWidth = 3;
window.addEventListener("resize", () => {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.lineWidth = 3;
});
if (canvas.getContext) {
  const onMouseOver = (e) => {
    const xPos = e.offsetX;
    const yPos = e.offsetY;
    if (!isPainting) {
      ctx.beginPath();
      ctx.moveTo(xPos, yPos); // path를 선언해줌
    } else {
      ctx.lineTo(xPos, yPos);
      ctx.stroke();
    }
  };
  ctx.font = "17px sans-serif";
  ctx.fillText(licenseMsg, 18, window.innerHeight - 18);
  window.addEventListener("resize", () => {
    ctx.font = "17px sans-serif";
    ctx.fillText(licenseMsg, 18, window.innerHeight - 18);
  });
  canvas.addEventListener("mousemove", (e) => onMouseOver(e));
  canvas.addEventListener("mousedown", () => (isPainting = true));
  canvas.addEventListener("mouseup", () => (isPainting = false));
  canvas.addEventListener("mouseleave", () => (isPainting = false));
}
