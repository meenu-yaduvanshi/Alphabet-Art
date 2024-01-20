//All words
let words = ["Alligator", "Bee", "Cat",
    "Dinosaur", "Elephant", "Fox",
    "Giraffe", "House", "Igloo",
    "Jellyfish", "King", "Ladybug",
    "Mountains", "Ninja", "Octopus",
    "Pirate", "Queen", "Rainbow",
    "Strawberry", "Tree", "Unicorn",
    "Volcano", "Watermelon", "Xylophone",
    "Yo-yo", "Zebra"]

//Set up text to speech
var msg = new SpeechSynthesisUtterance();
var voices = window.speechSynthesis.getVoices();
msg.voice = voices[7];

// Add Alphabet Cards
let container = document.querySelector(".container");
for (let i = 65; i <= 90; i++) {
    let alphabet = String.fromCharCode(i);

    let card = document.createElement("div");
    card.classList.add("card");
    container.appendChild(card);


    //backcard
    let backCard = document.createElement("div");
    let alphabetText = document.createElement("p");
    alphabetText.innerText = alphabet;

    backCard.classList.add("backCard");
    backCard.appendChild(alphabetText);
    card.appendChild(backCard);

    //frontcard
    let frontCard = document.createElement("div");
    frontCard.classList.add("frontCard");
    card.appendChild(frontCard);




    //alphabet image
    let imgContainer = document.createElement("div");
    let alphabetImg = document.createElement("img");
    alphabetImg.src = `assets/alphabetImages/${alphabet}.png`;
    imgContainer.appendChild(alphabetImg);
    frontCard.appendChild(imgContainer);
    //word for the alphabet
    let word = document.createElement("p");
    word.innerText = words[i - 65];
    frontCard.appendChild(word);
    //div containing icons at the bottom of each card
    let faIcons = document.createElement("div");
    faIcons.classList.add("fa-icons");
    frontCard.appendChild(faIcons);
    //Heart Icon           
    let likeIcon = document.createElement("i");
    likeIcon.classList.add("fa-regular", "fa-heart");
    faIcons.appendChild(likeIcon);
    //Flip Icon
    let flipIcon = document.createElement("i");
    flipIcon.classList.add("fa-solid", "fa-arrow-rotate-left");
    faIcons.appendChild(flipIcon);
    //Share Icon
    let shareIcon = document.createElement("i");
    shareIcon.classList.add("fa-solid", "fa-share-from-square");
    faIcons.appendChild(shareIcon);

    //overlay images
    let overlayDiv = document.createElement("div");
    overlayDiv.classList.add("overlay-div");
    container.appendChild(overlayDiv)
    let overlayImg = document.createElement("img");
    overlayImg.classList.add("overlay-img")
    overlayDiv.appendChild(overlayImg)
    imgContainer.addEventListener("click", () => {
        overlayDiv.style.display = "block";
        overlayImg.src = alphabetImg.src
    })
    // cross symbol
    let crossSymbol = document.createElement("i");
    crossSymbol.classList.add("fa-solid", "fa-xmark")
    overlayDiv.appendChild(crossSymbol);
    crossSymbol.addEventListener("click", () => {
        overlayDiv.style.display = "none";
    })




    //Show front card on click
    card.addEventListener("click", () => {
        card.classList.add("flipped");
        msg.text = words[i - 65];
        window.speechSynthesis.speak(msg);
    })

    //Flip back on click
    flipIcon.addEventListener("click", (event) => {
        card.classList.remove("flipped");
        event.stopPropagation();
    })

    //Color the heart red when user clicks like
    likeIcon.addEventListener("click", (event) => {
        likeIcon.classList.toggle("fa-solid");
        likeIcon.style.color = "red";
        event.stopPropagation();
    })

    //heart beat on hover
    likeIcon.addEventListener("mouseover", (event) => {
        likeIcon.classList.add("fa-bounce");
        event.stopPropagation();
    })
    likeIcon.addEventListener("mouseleave", (event) => {
        likeIcon.classList.remove("fa-bounce");
        event.stopPropagation();
    })

}

// Give design background to back of each alphabet card
let allBackCards = document.querySelectorAll(".backCard");
let patterns = ["pattern1", "pattern2", "pattern3",
    "pattern4", "pattern5", "pattern6"];

let j = 0;
allBackCards.forEach((backCard) => {
    if (j > 5)
        j = 0;
    backCard.classList.add(patterns[j]);
    j++;
})


// Carousel
let carouselImages = ["https://placehold.co/375x187/orange/white?text=Stickers", "https://placehold.co/375x187/green/white?text=Workshop", "https://placehold.co/375x187/purple/white?text=Contest"];
let carouselImg = document.querySelector(".carousel img");
let i = 0;

let dots = document.querySelectorAll(".dot");

setInterval(function () {
    //move images every 4 seconds
    i++;
    if (i > 2)
        i = 0;
    carouselImg.src = carouselImages[i];

    //color dots corresponding to the image
    let currentDotId = "#dot" + i;
    let currentDot = document.querySelector(currentDotId);
    dots.forEach((dot) => (dot.style.backgroundColor = "#59AFFF"));
    currentDot.style.backgroundColor = "white";
}, 4000)