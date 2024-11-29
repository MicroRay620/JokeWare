import $ from "jquery";
function JokeWare() {
    let urlArray = ["https://www.youtube.com/watch?v=dQw4w9WgXcQ", "https://en.wikipedia.org/wiki/Sausage", "https://en.wikipedia.org/wiki/Practical_joke", "https://www.youtube.com/watch?v=3Lr9VuGZgmw"];
    var min = 0;
    var max = urlArray.length - 1;
    // console.log(max);
    let randomChance = Math.floor(Math.random() * (max - min + 1) + min);
    var url = urlArray[randomChance]; 
    console.log(url);
    var linkElement = $("a").attr("href") ? true : undefined;
    if (linkElement == true) {
        alert("Jokeware is detected on this site! \nDANGER: BE AS GOOFY AS POSSIBLE");
        min = 1;
        max = 10;
        let clickChance = Math.floor(Math.random() * (max - min + 1) + min);
        $("a").on("click", function() {
            if (clickChance == 1) {
                $("a").attr("href", url);
                window.open(url, "_blank");
            } else if (clickChance == 10) {
                alert("YOU LOST THE FUNNIES FOR EVER");
            } else {
                alert("Funnies are dormant");
            }
        });
    } else {
        alert("Funnies are undetected T^T");
        console.error("Link Not Found");
    }
}
JokeWare();