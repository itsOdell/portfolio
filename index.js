/*              TYPESCRIPT EFFECT           */
function typescript() {
    let myname = document.querySelector("#name");
    let alphabet = ["A", "b", "d", "u", "l", "a", "d", "i", "l"];
    let counter = 0;

    function typeName() {
        setInterval(function () {
            if (counter >= 0 && counter < alphabet.length) {
                myname.innerHTML += alphabet[counter];
                counter++;
            } else {}
        }, 300);
    }
    typeName();
}
typescript();


/*          POSITION: FIXED AND POSITION: ABSOLUTE SIDEBAR          */
function sideBarPosition() {
    let fixedPosition = true;
    let btn = document.querySelector(".fixed");
    let navBar = document.querySelector("nav");
    btn.onclick = () => {
        if (fixedPosition == true) {
            navBar.style.position = "absolute";
            btn.innerHTML = "follow";
            fixedPosition = false;
        } else {
            navBar.style.position = "fixed";
            btn.innerHTML = "Stay";
            fixedPosition = true;
        }
    }
}
sideBarPosition();


/*              toggle side bar         */
function toggleSideBar() {
    let closeBtn = document.getElementById("close");
    let navBar = document.querySelector("nav");
    let closed = false;
    closeBtn.addEventListener("click", () => {
        if (closed === false) {
            closed = true;
            navBar.setAttribute("class", "navBarClose");
            navBar.removeAttribute("id");
        } else {
            closed = false;
            navBar.setAttribute("id", "open");
            navBar.classList.remove("navBarClose");
        }
    });
}
toggleSideBar();


/*                  PROJECTS IMAGE SLIDER           */
function projectImageSlider() {
    let info = [{
            "imageSource": "images/github/rock.png",
            "githubSource": "https://itsodell.github.io/rock-paper-scissors/"
        },
        {
            "imageSource": "images/github/Audio-player.png",
            "githubSource": "https://itsodell.github.io/surah-player/"
        },
        {
            "imageSource": "images/github/calc.png",
            "githubSource": "https://itsodell.github.io/calculator/"
        },
        {
            "imageSource": "images/github/quiz.png",
            "githubSource": "https://itsodell.github.io/quiz-game/"
        },
    ]
    let currentImage = 1;
    let left = document.querySelector("#left");
    let right = document.querySelector("#right");
    let link = document.getElementById("visitProjectLink");
    let imgContainer = document.querySelector(".container-3");
    right.addEventListener("click", () => {
        if (currentImage == info.length) {
            currentImage = 0;
        } else {
            // currentImage++;
            imgContainer.style.backgroundImage = `url(${info[currentImage].imageSource})`;
            link.href = info[currentImage].githubSource;
            currentImage++;
        }
    });
    left.addEventListener('click', () => {
        if ((currentImage > 0)) {
        currentImage--;
        imgContainer.style.backgroundImage = `url(${info[currentImage].imageSource})`;
        link.href = info[currentImage].githubSource;
        } else {
            currentImage = info.length - 1;
            imgContainer.style.backgroundImage = `url(${info[currentImage].imageSource})`;
            link.href = info[currentImage].githubSource;
        }
    });

}
projectImageSlider();

