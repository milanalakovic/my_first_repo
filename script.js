function readMore() {
    var dots = document.getElementById("dots");
    var moreText = document.getElementById("more");
    var btnText = document.getElementById("btn");

    if (dots.style.display === "none") {
        dots.style.display = "inline";
        btn.innerHTML = "Read more";
        moreText.style.display = "none";
    }
    else {
        dots.style.display = "none";
        btn.innerHTML = "Read less";
        moreText.style.display = "inline";
    }
}

