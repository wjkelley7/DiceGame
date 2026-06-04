document.getElementById("rollButton").addEventListener("click", function () {

    console.log("Button clicked");

    const randomNumber1 = Math.floor(Math.random() * 6) + 1;
    const randomNumber2 = Math.floor(Math.random() * 6) + 1;

    document.querySelector(".img1").src =
        `./images/dice${randomNumber1}.png`;

    document.querySelector(".img2").src =
        `./images/dice${randomNumber2}.png`;




    const player1Name = document.getElementById("player1Input").value || "Player 1";
    const player2Name = document.getElementById("player2Input").value || "Player 2";

    if (randomNumber1 > randomNumber2) {
    document.querySelector(".result").textContent =
        `🚩 ${player1Name} Wins!`;
    } else if (randomNumber2 > randomNumber1) {
    document.querySelector(".result").textContent =
        `${player2Name} Wins! 🚩`;
    } else {
    document.querySelector(".result").textContent = "Draw!";
    }

});