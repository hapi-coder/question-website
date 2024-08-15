function EnterFilm() {
    var inputfilm = document.querySelector(".typeurfilm").value;
    var checkfilm = document.getElementById("favfilmput");
    checkfilm.textContent = "I also love watching " + inputfilm + "!";
    var nextfavcolor = document.getElementById("nextfavcolor");
    nextfavcolor.style.display = "block";
}