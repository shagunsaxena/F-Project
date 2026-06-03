const gameContainer = document.querySelector(".container"),
userResult = document.querySelector(".user_result img"),
cpuResult = document.querySelector(".cpu_result img"),
result = document.querySelector(".result"),
optionImages = document.querySelectorAll(".option_image");


// console.log(gameContainer, userResult, cpuResult, result, optionImages)
optionImages.forEach((image, index) =>{
    image.addEventListener("click",(e) => {
        image.classList.add("active");

        userResult.src = cpuResult.src = "images/rock.png";
        result.textContent = "Wait...";

        optionImages.forEach((image2, index2) => {
            // console.log(index, index2);

            index !== index2 && image2.classList.remove("active");             
        });

        gameContainer.classList.add("start");

        let time = setTimeout(() => {
            gameContainer.classList.remove("start");
            let imageSrc = e.target.querySelector("img").src;
        userResult.src = imageSrc;
        // console.log(imageSrc);

        let randomeNumber = Math.floor(Math.random() * 3);
        // console.log(randomeNumber);

        let cpuImages = ["images/rock.png", "images/paper.png", "images/scissors.png"];
        cpuResult.src = cpuImages[randomeNumber];

        let cpuValue =  ["R", "P", "S"][randomeNumber];
        let userValue = ["R", "P", "S"][index];

        // console.log(cpuValue, userValue);

        let outcomes = {
            RR: "Draw",
            PP: "Draw",
            SS: "Draw",
            RP: "CPU Wins",
            RS: "User Wins",
            PR: "User Wins",
            PS: "CPU Wins",
            SR: "CPU Wins",
            SP: "User Wins"
        };
        let outComeValue = outcomes[userValue + cpuValue];

        result.textContent = userValue === cpuValue ? "It's a Draw!" : `${outComeValue}`;
        // console.log(outComeValue);
        }, 2500);
    })
})