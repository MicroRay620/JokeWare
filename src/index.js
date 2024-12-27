import $ from "jquery";
import { MoreFunny } from "./more_joke";
function JokeWare() {
    var linkElement = $("a").not(".norm-link");
    if (linkElement) {
        linkElement.each(function() {
            var originalLink = $(this).attr("href") ? $("a").attr("href") : $("button").attr("href");
            let urlArray = [
                "https://www.youtube.com/watch?v=dQw4w9WgXcQ", 
                "https://en.wikipedia.org/wiki/Sausage", 
                "https://en.wikipedia.org/wiki/Practical_joke", 
                "https://www.youtube.com/watch?v=3Lr9VuGZgmw", 
                "https://www.youtube.com/watch?v=PXqcHi2fkXI"
            ];
            var min = 0;
            var max = urlArray.length - 1;
            let randomChance = Math.floor(Math.random() * (max - min + 1) + min);
            var url = urlArray[randomChance];
            console.log("Original Link:" + originalLink + "\nRandom Chance:" + randomChance + "\nGotten URL:" + url);
            min = 1;
            max = 10;
            var clickChance = Math.floor(Math.random() * (max - min + 1) + min);
            console.log("Click Chance:"+clickChance);
            $(this).on("click", function(event) {
                event.stopPropagation();
                if (clickChance == 1) {
                    $(this).attr({
                        "href": url,
                        "target": "_blank"
                    });
                    window.open(url);
                } else {
                    $(this).attr({
                        "href": originalLink,
                        "target": "_blank"
                    });
                    alert("Funnies are dormant :(");
                }
                event.preventDefault();
            });
        });
    } else {
        alert("Funnies are undetected T^T");
        console.error("Link Not Found");
    }
}
JokeWare();