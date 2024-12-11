import $ from "jquery";
import { MoreFunny } from "./more_joke";
function JokeWare() {
    $(function () {
        var linkElement = $("a").not(".norm-link");
        console.log(linkElement);
        if (linkElement) {
            linkElement.each(function () {
                var originalLink = $(this).attr("href");
                console.log("Original Link is " + originalLink);
                let wikiArray = [
                    "Emu_War",
                    "Chaos_theory",
                    "Sausage", // Reasoning (ignore the ifunny url): https://ifunny.co/picture/boyfriend-is-sitting-by-his-computer-eating-sausage-with-wikipedia-JFcmVBKm7
                    // "Clitoris",
                    "Cosmic_latte"
                ]
                var min = 0;
                var max = wikiArray.length - 1;
                var wikiChance = Math.floor(Math.random() * (max - min + 1) + min);
                console.log("[wikiChance] is " + wikiChance);
                var wikiUrl = "https://en.wikipedia.org/wiki/" + wikiArray[wikiChance];
                console.log("Wikipedia Link Options: " + wikiArray[wikiChance] + "\nMaking the " + wikiUrl);
                let urlArray = [
                    "https://www.youtube.com/watch?v=dQw4w9WgXcQ", // Never Gonna You Give Up by Rick Astley
                    "https://www.youtube.com/watch?v=3Lr9VuGZgmw", // Doctor Egg Man Pisses On The Moon
                    "https://www.youtube.com/watch?v=PXqcHi2fkXI", // You've been trolled video
                    "https://www.youtube.com/watch?v=9K2Y-rfUy_4",
                    wikiUrl,
                ];
                min = 0;
                max = urlArray.length - 1;
                let randomChance = Math.floor(Math.random() * (max - min + 1) + min);
                if (randomChance == urlArray[1]) {
                    alert("HAHA\nYou got Rick Rolled, loser");
                }
                var url = urlArray[randomChance];
                console.log("Original Link:" + originalLink + "\nRandom Chance:" + randomChance + "\nGotten URL:" + url);
                min = 1;
                max = 10;
                var clickChance = Math.floor(Math.random() * (max - min + 1) + min);
                console.log("Click Chance:" + clickChance);
                $(this).on("click", function (event) {
                    event.stopPropagation();
                    if (clickChance == 1 || clickChance >= 8) {
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
                        alert("Funnies are dormant");
                    }
                    event.preventDefault();
                });
            });
        } else {
            alert("Funnies are undetected T^T");
            console.error("Link Not Found");
        }
        /*
            None of the shit below lets the web page load
            DO NOT USE THESE
        */
        var funnyOption = $("div").hasClass("funny") ? true : false;
        if (funnyOption != false) {
            MoreFunny();
        }
        while ($("div").hasClass("word")) {
            var count = 0;
            while (count == 0) {
                var wordLength = Math.floor(Math.random() * (10 - 2) + 2);
                let alphabet = [
                    'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o',
                    'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'
                ];
                var word = '';
                for (let i = 0; i < wordLength; i++) {
                    let randomIndex = Math.floor(Math.random() * alphabet.length);
                    word += alphabet[randomIndex];
                    alert("Word is " + word);
                }
                count++;
            }
            count;
        }
    });
}
JokeWare();
