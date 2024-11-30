export function MoreFunny() {
    var count = 0;
    while (count >= 0) {
        if (count % 10 === 0 && count !== 0) {
            console.log("Pranked");
        }
        count++;
    }
}