// ======================================================
// PROJECT AURORA
// script.js
// ======================================================

// ----------------------------
// LOADER
// ----------------------------

window.addEventListener("load", () => {

    const loader = document.getElementById("loader");

    setTimeout(() => {

        loader.classList.add("loader-hide");

    }, 1600);

});

// ----------------------------
// HERO BUTTON
// ----------------------------

const celebrateButton = document.getElementById("celebrateButton");

if (celebrateButton) {

    celebrateButton.addEventListener("click", () => {

        document.getElementById("nextSection").scrollIntoView({

            behavior: "smooth"

        });

    });

}

// ----------------------------
// BIRTHDAY REPORT MODAL
// ----------------------------

const reportCard = document.getElementById("reportCard");
const reportModal = document.getElementById("reportModal");
const closeReport = document.querySelector(".close");

if (reportCard) {

    reportCard.addEventListener("click", () => {

        reportModal.classList.add("show");
completeGift(reportCard);
    });

}

if (closeReport) {

    closeReport.addEventListener("click", () => {

        reportModal.classList.remove("show");

    });

}

// ----------------------------
// JACK MODAL
// ----------------------------

const jackCard = document.getElementById("jackCard");
const jackModal = document.getElementById("jackModal");
const closeJack = document.querySelector(".close-jack");

if (jackCard) {

    jackCard.addEventListener("click", () => {

        jackModal.classList.add("show");
        completeGift(jackCard);

    });

}

if (closeJack) {

    closeJack.addEventListener("click", () => {

        jackModal.classList.remove("show");

    });

}

// ----------------------------
// CLOSE MODALS WHEN CLICKING
// OUTSIDE
// ----------------------------

window.addEventListener("click", (event) => {

    if (event.target === reportModal) {

        reportModal.classList.remove("show");

    }

    if (event.target === jackModal) {

        jackModal.classList.remove("show");

    }

});

// ----------------------------
// PREMIUM GIFT GLOW
// ----------------------------

const giftCards = document.querySelectorAll(".gift-card");

giftCards.forEach((card) => {

    card.addEventListener("mousemove", (e) => {

        const rect = card.getBoundingClientRect();

        const x = e.clientX - rect.left;

        const y = e.clientY - rect.top;

        card.style.setProperty("--x", `${x}px`);

        card.style.setProperty("--y", `${y}px`);

    });

});

// ======================================================
// END
// ======================================================
// ======================================
// 100 REASONS
// ======================================

const reasonsCard = document.getElementById("reasonsCard");
const reasonsModal = document.getElementById("reasonsModal");
const closeReasons = document.querySelector(".close-reasons");
const reasonText = document.getElementById("reasonText");
const nextReason = document.getElementById("nextReason");

const reasons = [

"Because somehow you make ordinary days feel special. ❤️",

"Because your smile is my favorite notification. 😊",

"Because you somehow make chaos look adorable. 😂",

"Because pitching me became your love language. 🤍",

"Because Jackuu Babyyy clearly picked the best human. 🐶",

"Because distance never changed how I felt. 🌍",

"Because you're stubborn... and I secretly love that. 😌",

"Because chocolates instantly make you happier. 🍫",

"Because one day we'll finally travel together. ✈️",

"Because there is simply no one else like you. ❤️"

];

let currentReason = 0;

if(reasonsCard){

    reasonsCard.addEventListener("click",()=>{

        currentReason = 0;

        reasonText.textContent = reasons[currentReason];

        reasonsModal.classList.add("show");

        completeGift(reasonsCard);

    });

}

if(nextReason){

    nextReason.addEventListener("click",()=>{

        currentReason++;

        if(currentReason >= reasons.length){

            currentReason = 0;

        }

        reasonText.style.opacity = 0;

        setTimeout(()=>{

            reasonText.textContent = reasons[currentReason];

            reasonText.style.opacity = 1;

        },200);

    });

}

if(closeReasons){

    closeReasons.addEventListener("click",()=>{

        reasonsModal.classList.remove("show");

    });

}

window.addEventListener("click",(e)=>{

    if(e.target === reasonsModal){

        reasonsModal.classList.remove("show");

    }

});
/* =====================================
   MEMORY LANE
===================================== */

const memoryCard = document.getElementById("memoryCard");
const memoryModal = document.getElementById("memoryModal");
const closeMemory = document.querySelector(".close-memory");

const memoryImage = document.getElementById("memoryImage");
const memoryCaption = document.getElementById("memoryCaption");
const nextMemory = document.getElementById("nextMemory");

const memories = [

{
    image:"images/photo1.jpeg",
    caption:"Celebrating You 🎉"
},

{
    image:"images/photo2.jpeg",
    caption:"One of my favourite photos ❤️"
},

{
    image:"images/photo3.jpeg",
    caption:"Still can't believe this picture exists 😂"
},

{
    image:"images/photo4.jpeg",
    caption:"Looking beautiful as always ✨"
},

{
    image:"images/photo6.jpeg",
    caption:"Happy birthday didi ~ Jack ❤️"
},

{
    image:"images/photo7.jpeg",
    caption:"Happy birthday Manshiii~ love Mom&Dad. ❤️"
},

{
    image:"images/photo5.jpeg",
    caption:"Happy Birthday Puchhi ❤️"
}

];   //

let currentMemory = 0;

memoryCard.onclick = () => {completeGift(memoryCard);

    currentMemory = 0;

    memoryImage.src = memories[0].image;

    memoryCaption.innerHTML = memories[0].caption;

    memoryModal.style.display = "flex";

}

closeMemory.onclick = () => {

    memoryModal.style.display = "none";

}

const dots = document.querySelectorAll(".dot");

function updateMemory(){

    memoryImage.classList.add("memory-fade");

    setTimeout(()=>{

        memoryImage.src = memories[currentMemory].image;

        memoryCaption.innerHTML = memories[currentMemory].caption;
       if(currentMemory === 4 || currentMemory === 5){

    document.querySelector(".polaroid").classList.add("landscape");

}else{

    document.querySelector(".polaroid").classList.remove("landscape");

}

        memoryImage.classList.remove("memory-fade");

    },200);

    dots.forEach(dot=>dot.classList.remove("active"));

    dots[currentMemory].classList.add("active");

}

nextMemory.onclick = ()=>{

    currentMemory++;

    if(currentMemory >= memories.length){

        currentMemory = memories.length - 1;

        memoryCaption.innerHTML =
        "❤️ Some memories never get old.<br><br>Thank you for making mine so beautiful.";

        nextMemory.innerHTML="🎁 Back To Gift Room";

        nextMemory.onclick=()=>{

            memoryModal.style.display="none";

            currentMemory=0;

            nextMemory.innerHTML="➜ Next Memory";

            nextMemory.onclick=arguments.callee;

        }

        return;

    }

    updateMemory();

}

window.addEventListener("click",(e)=>{

    if(e.target===memoryModal){

        memoryModal.style.display="none";

    }

});
/* =====================================
   BIRTHDAY JOURNEY
===================================== */

let giftsOpened = 0;

const progressFill = document.getElementById("progressFill");
const giftCount = document.getElementById("giftCount");

function completeGift(card){

    if(card.dataset.done === "yes"){

        return;

    }

    card.dataset.done = "yes";

    giftsOpened++;

    giftCount.textContent = giftsOpened;

    progressFill.style.width = (giftsOpened/6)*100 + "%";

    card.classList.add("completed");
    const giftText = card.querySelector("p");

    if(giftText){

        giftText.innerHTML="✅ Completed ❤️";

    }
}
/* =====================================
   PUCHHI STATISTICS
===================================== */

const statsCard = document.getElementById("statsCard");
const statsModal = document.getElementById("statsModal");
const closeStats = document.querySelector(".close-stats");

if(statsCard){

statsCard.onclick = () => {

statsModal.style.display = "flex";

const bars = document.querySelectorAll("#statsModal .fill");

bars.forEach(bar => {

    const target = bar.getAttribute("data-width");

    bar.style.width = "0";

    setTimeout(() => {

        bar.style.width = target;

    }, 150);

});

completeGift(statsCard);

};

}

if(closeStats){

closeStats.onclick=()=>{

statsModal.style.display="none";

};

}

window.addEventListener("click",(e)=>{

if(e.target===statsModal){

statsModal.style.display="none";

}

});
/* =====================================
   FINAL LETTER
===================================== */

const letterCard = document.getElementById("letterCard");
const letterModal = document.getElementById("letterModal");
const closeLetter = document.querySelector(".close-letter");

const envelope = document.getElementById("envelope");
const envelopeArea = document.querySelector(".envelope-area");
const letterPaper = document.getElementById("letterPaper");
const typedLetter = document.getElementById("typedLetter");
const letterStatus = document.getElementById("letterStatus");

const finalLetter = `Dear Puchhi ❤️,

Happy Birthday.

I know I couldn't be there beside you today,
but every page of this little website
was made thinking about you.

Every surprise you opened,
every tiny animation,
every little detail...

was made with one hope—

to make you smile.

Distance never changed
how I feel about you.

If anything,
it made me realize
how lucky I am
to have someone like you.

Thank you
for being you.

Thank you
for staying.

Happy Birthday,
my favorite person.

I love you.

— Alish ❤️`;

let letterStarted = false;

if(letterCard){

    letterCard.classList.add("locked");

    letterCard.onclick = () =>{

        if(giftsOpened < 5){

            alert("💌 Open every other gift first.");

            return;

        }

        letterCard.classList.remove("locked");
        letterCard.classList.add("unlocked");

        if(letterStatus){

            letterStatus.innerHTML="✨ Ready to Open";

        }

        letterModal.classList.add("show");

    };

}

if(closeLetter){

    closeLetter.onclick=()=>{

        letterModal.classList.remove("show");

    };

}

window.addEventListener("click",(e)=>{

    if(e.target===letterModal){

        letterModal.classList.remove("show");

    }

});
/* =====================================
   ENVELOPE OPEN
===================================== */

function typeLetter(text){

    typedLetter.innerHTML = "";

    let i = 0;

    const speed = 28;

    function typing(){

        if(i < text.length){

            typedLetter.innerHTML += text.charAt(i);

            i++;

            setTimeout(typing, speed);

        }else{

            // Letter finished ❤️

            setTimeout(showFinalScene, 2000);

        }

    }

    typing();

}

envelope.onclick = () =>{

    if(letterStarted) return;

    letterStarted = true;

    envelopeArea.style.display="none";

    letterPaper.style.display="block";

    typeLetter(finalLetter);

}
/* =====================================
   CINEMATIC ENDING
===================================== */

const finalScene = document.getElementById("finalScene");

function showFinalScene(){

    // Fade away the paper

    letterPaper.style.opacity = "0";

    setTimeout(()=>{

        letterModal.classList.remove("show");

        if(finalScene){

            finalScene.classList.add("show");

        }

    },1000);

}