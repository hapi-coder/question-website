function enterdrink() {
    var inputDrink = document.querySelector(".typeurdrink").value;
    var checkdrink = document.getElementById("checkingdrink");
    checkdrink.textContent = "I also like " + inputDrink + "!";
}