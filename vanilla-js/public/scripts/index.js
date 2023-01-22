// Track global next turn
let nextTurn = "X";

/**
 * Toggle the next turn
 */
function toggleNextTurn() {
  nextTurn = nextTurn === "X" ? "O" : "X";
}

const X_CLASS = "x-mark";
const O_CLASS = "o-mark";

const hasClass = (element, className) => {
  return element.classList.contains(className);
};

/**
 * Assign click event to a tile
 * @param {*} e
 */
function tileBinding(e) {
  const tile = e.target;

  if (hasClass(tile, X_CLASS) || hasClass(tile, O_CLASS)) {
    return;
  }

  if (nextTurn === "X") {
    tile.classList.add(X_CLASS);
  } else {
    tile.classList.add(O_CLASS);
  }

  toggleNextTurn();
}

/**
 * Reset all tiles
 */
function resetAllTiles() {
  [...document.querySelectorAll(".tile")].map((tile) => {
    tile.classList.remove(X_CLASS);
    tile.classList.remove(O_CLASS);
  });
}

/**
 * Bind all tiles
 */
function bindAllTiles() {
  [...document.querySelectorAll(".tile")].map((tile) => {
    tile.addEventListener("click", tileBinding);
  });
}

function bindControls() {
  document.querySelector("#reset").addEventListener("click", resetAllTiles);
}

function setup() {
  bindAllTiles();
  bindControls();
}
