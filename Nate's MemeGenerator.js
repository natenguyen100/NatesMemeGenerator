document.addEventListener('DOMContentLoaded', function() {
    let form = document.querySelector("form");
    const button = document.querySelector("button");
    form.addEventListener("submit", function(e){
        e.preventDefault();
        const meme = document.createElement("div");
        const textTop= document.createElement("div");
        const textBottom = document.createElement("div");
        const img = document.createElement("img");
        const removeButton = document.createElement("button");

        img.src = document.getElementById("imageUrl").value;
        textTop.classList.add("textTop");
        textTop.innerText = document.getElementById("topText").value;
        textBottom.classList.add("textBottom");
        textBottom.innerText = document.getElementById("bottomText").value;

        removeButton.innerText = "Remove";
        removeButton.type = "button";
        removeButton.classList.add("removebutton");
        removeButton.addEventListener('click', function() {
            meme.remove();
        });

        textBottom.classList.add("textBottom");
        textBottom.innerHTML = document.getElementById("bottomText").value;
        

        meme.classList.add("meme");
        meme.append(textTop);
        meme.append(textBottom);
        meme.append(img);
        meme.append(removeButton);
        let memeLocation = document.getElementById("location");
        memeLocation.append(meme);

    form.reset()
    });
});