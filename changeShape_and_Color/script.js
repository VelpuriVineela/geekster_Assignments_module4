const changeColor = document.getElementById("changeColor");
const changeShape = document.getElementById("changeShape");
const container = document.getElementById("container");
const shapeBox = document.getElementById("shapeBox");

const colors = [
  "yellow",
  "red",
  "brown",
  "aqua",
  "#191970",
  "voilet",
  "black",
  "cyan",
  "#240747",
  "#cd853f",
  "#be3144",
  "green",
  "purple",
  "#a55233",
  "blue",
  "#4b0082",
];

changeColor.addEventListener("click", (e) => {
  const indx = Math.floor(Math.random() * colors.length);
  container.style.backgroundColor = colors[indx];
});

const shapes = [
  "square",
  "ractangle",
  "rightTrangleLeft",
  "diamond",
  "rightTrangleRight",
  "trangle",
  "circle",
  "star",
  "triangleDown",
];

changeShape.addEventListener("click", (e) => {
  shapeBox.classList = "";

  const randomShape = shapes[Math.floor(Math.random() * shapes.length)];
  shapeBox.classList.add(randomShape);
});