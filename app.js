let noOfBoxes = document.querySelector(".noOfBoxes");
let colorSelector = document.querySelector(".colorSelector");
let boxShape = document.querySelector(".boxShape");
let actionBtn = document.querySelector(".actionBtn");
let reset = document.querySelector(".reset");
let content = document.querySelector(".content");

actionBtn.addEventListener ("click", () => {
    let n = noOfBoxes.value;
    let c = colorSelector.value;
    let s = boxShape.value;
    console.log(s);
    console.log(boxShape[2]);
    noOfBoxes.value = "";
    colorSelector.value = "#000000";
    boxShape.value = "Choose a shape"
    content.innerHTML = "";
    for (let i=0; i<n; i++) {
        let box = document.createElement("div");
        box.classList.add("box");
        box.style.backgroundColor = c;
        if (s == "Circle") {
            box.style.borderRadius = "50%";
        } else if (s == "Square") {
            box.style.borderRadius = "0";
        } else {
            box.style.borderRadius = "10px";
        }
        content.appendChild(box);
    }
});

reset.addEventListener ("click", () => {
    noOfBoxes.value = "";
    colorSelector.value = "#000000";
    boxShape.value = "Choose a shape"
    content.innerHTML = "";
});