let heads = 0;
let tails = 0;
let coin = document.querySelector(".coin");
let flipBtn = document.getElementById("flip");
let resetBtn = document.getElementById("reset");

flipBtn.addEventListener("click", () => {
  let i = Math.floor(Math.random() * 2);

  coin.style.animation = "none";

  if (i) {
    setTimeout(function () {
      coin.style.animation = "spin-heads 3s forwards";
    }, 100);
    heads++;
  } else {
    setTimeout(function () {
      coin.style.animation = "spin-tails 3s forwards";
    }, 100);
    tails++;
  }
  setTimeout(updateGames, 3000);
  disabledBtn();
});

function updateGames() {
  document.getElementById("heads-count").textContent = `Heads: ${heads}`;
  document.getElementById("tails-count").textContent = `Tails: ${tails}`;
}

resetBtn.addEventListener("click", () => {
  coin.style.transform = "rotateX(0)";
  heads = 0;
  tails = 0;

  updateGames();
});
function disabledBtn() {
  flipBtn.disabled = true;
  setTimeout(function () {
    flipBtn.disabled = false;
  }, 3000);
}
