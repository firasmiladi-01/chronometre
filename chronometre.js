const clock = document.querySelector("#time");
var h = 0;
var min = 0;
var sec = 0;
var time = 0;
var id;

clock.textContent = h + ':' + min + ":" + sec;
const plus = document.querySelector("#plus");
const moins = document.querySelector("#moins");
const start = document.querySelector("#start");
const pause = document.querySelector(".pause");
const reset = document.querySelector(".reset");
const bell = document.querySelector(".invisible");
plus.addEventListener("click",
    () => {
        if (sec < 45) sec += 15;
        else if (min < 59) {
            min++;
            sec = 0;
        }
        else {
            h++;
            min = 0;
        }
        clock.textContent = h + ':' + min + ":" + sec;
    }
);
moins.addEventListener("click",
    () => {
        min--;
        clock.textContent = h + ':' + min + ":" + sec;
    }
);
start.addEventListener("click",
    () => {
        reset.style.display = "block";
        pause.style.display = "block";
        start.style.display = "none";
        plus.style.display = "none";
        moins.style.display = "none";
        time = h * 3600 + parseInt(min) * 60 + parseInt(sec);
        id = setInterval(
            () => {
                if (time > 0) {

                    h = parseInt(time / 3600);
                    min = parseInt(time % 3600 / 60);
                    sec = time % 60;
                    clock.textContent = h + ':' + min + ":" + sec;
                    time--;
                }
                else {
                    clock.style.fontSize = "60px"
                    clock.textContent = "time's up !";
                    bell.play();
                    pause.style.display = "none";
                    clearInterval(id);


                }
            },
            1000);

    }
)
pause.addEventListener("click",
    () => {
        clearInterval(id);
        reset.style.display = "block";
        pause.style.display = "none";
        start.style.display = "block";
    }
)
reset.addEventListener("click",
    () => {
        reset.style.display = "none";
        pause.style.display = "none";
        start.style.display = "block";
        plus.style.display = "block";
        moins.style.display = "block";
        bell.pause();
        h = 0;
        min = 0;
        sec = 0;
        time = 0;
        clock.textContent = h + ':' + min + ":" + sec;
        clearInterval(id);
    }
)
