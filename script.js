const body = document.querySelector("body"),
    seconds = document.querySelector(".sec"),
    minutes = document.querySelector(".min"),
    hours = document.querySelector(".hr"),
    mode = document.querySelector(".mode");

if (localStorage.getItem("Check") === "Dark Mode") {
    body.classList.add("change");
    mode.textContent = "Light Mode";
}

mode.addEventListener("click", () => {
    body.classList.toggle("change");

    const inDark = body.classList.contains("change");
    mode.textContent = inDark ? "Light Mode" : "Dark Mode";
    localStorage.setItem("Check", inDark ? "Dark Mode" : "Light Mode");
})

const time = () => {
    let date = new Date(),
        sec = date.getSeconds() / 60,
        min = (sec + date.getMinutes()) / 60,
        hour = (min + date.getHours()) / 12;

    let secondsToDeg = sec * 360,
        minutesToDeg = min * 360,
        hoursToDeg = hour * 360;

    seconds.style.transform = `rotate(${secondsToDeg}deg)`
    minutes.style.transform = `rotate(${minutesToDeg}deg)`
    hours.style.transform = `rotate(${hoursToDeg}deg)`
}
setInterval(time, 1000)

time()