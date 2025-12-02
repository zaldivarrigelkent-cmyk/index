alert("Welcome to my first interactive website!");

const heading = document.querySelector("h1");

heading.addEventListener("click", function() {
    heading.style.color = "red";
    alert("You clicked the heading!");
});

const colorButton = document.createElement("button");
colorButton.textContent = "Change Background Color";
document.body.appendChild(colorButton);

colorButton.addEventListener("click", function() {

    function getRandomColor() {
        const letters = '0123456789ABCDEF';
        let color = '#';
        for (let i = 0; i < 6; i++) {
            color += letters[Math.floor(Math.random() * 16)];
        }
        return color;
    }

    document.body.style.backgroundColor = getRandomColor();
});