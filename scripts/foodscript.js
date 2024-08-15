function enterfood() {
    var inputFood = document.querySelector(".typeurfood").value; // Get the value of the input field
    var checkfood = document.getElementById("checkingfood");
    checkfood.textContent = "I also like " + inputFood;
}