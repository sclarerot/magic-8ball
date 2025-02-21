function rollBall(num) {
    if (num === 0) {
        document.getElementById("text-area").innerText = "Yes"
    } else if (num === 1) {
        document.getElementById("text-area").innerText = "No"
    } else if (num === 2) {
        document.getElementById("text-area").innerText = "It is decidedly so"
    } else if (num === 3) {
        document.getElementById("text-area").innerText = "I don't think so"
    } else if (num === 4) {
        document.getElementById("text-area").innerText = "Ask again later"
    } else if (num === 5) {
        document.getElementById("text-area").innerText = "Try asking again"
    }
}
r = Math.floor(Math.random() * 6)